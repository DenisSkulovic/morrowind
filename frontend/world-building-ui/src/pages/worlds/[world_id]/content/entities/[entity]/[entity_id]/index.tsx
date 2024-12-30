import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Box, Container, Typography, Button } from '@mui/material';
import { AppDispatch } from '../../../../../../../store/store';
import DynamicForm from '../../../../../../../components/common/DynamicForm';
import { updateContent } from '../../../../../../../store/slices/contentSlice';
import { ContentBase, ContentBaseStatic } from '../../../../../../../class/ContentBase';
import { Context } from '../../../../../../../class/Context';
import { User } from '../../../../../../../class/entities/User';
import { World } from '../../../../../../../class/entities/World';
import { ContentEntityMapService } from '../../../../../../../CONTENT_ENTITY_MAP';
import { EntityEnum } from '../../../../../../../enum/EntityEnum';
import { useEntityName, useEntityId, useWorldId } from '../../../../../../../hooks/query';
import { FormFieldDefinition, getFormFields } from '../../../../../../../decorator/form-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../../../decorator/entity-display.decorator';
import { BreadcrumbItem } from '../../../../../../../components/common/PageWrapper/Breadcrumbs';
import { PAGE_MODE_PARAM, PageModeEnum, routes } from '../../../../../../../routes';
import PageWrapper from '../../../../../../../components/common/PageWrapper';
import { useEntityDetail } from '../../../../../../../hooks/useEntityDetail';
import { useAccount } from '../../../../../../../hooks/useAccount';
import { Account } from '../../../../../../../class/entities/Account';
import { cloneDeep } from 'lodash';
import { useLoading } from '../../../../../../../hooks/useLoading';
import { useToastStack } from '../../../../../../../hooks/useToastStack';
import { useWorld } from '../../../../../../../hooks/useWorld';



const EntityPage = () => {
    const router = useRouter();
    const { addLoadingKey, removeLoadingKey } = useLoading();
    const { addError, addSuccess } = useToastStack();
    const worldId: string | null = useWorldId(router.query);
    const entityName: EntityEnum | null = useEntityName(router.query);
    const entityId: string | null = useEntityId(router.query);
    const searchParams = useSearchParams();
    const initialMode: PageModeEnum = searchParams.get(PAGE_MODE_PARAM) as PageModeEnum;
    const dispatch = useDispatch<AppDispatch>();
    const [isReadOnly, setIsReadOnly] = useState(initialMode === PageModeEnum.EDIT ? false : true);
    const [formData, setFormData] = useState<{ [key: string]: any }>({});
    const [editFormData, setEditFormData] = useState<{ [key: string]: any }>({});

    const account: Account | null = useAccount();
    const world: World | null = useWorld(worldId, account?.user || null);

    const entityConstructor: ContentBaseStatic<ContentBase> | null = entityName ? ContentEntityMapService.getEntityConstructor<ContentBase>(entityName) as ContentBaseStatic<ContentBase> : null;
    const displayConfig: EntityDisplayConfig | null = entityConstructor ? getEntityDisplayConfig(entityConstructor) : null;
    const formFields: FormFieldDefinition[] = entityConstructor ? getFormFields(entityConstructor.prototype) : [];
    const { contentData, status, error } = useEntityDetail(entityName, entityId, worldId);

    useEffect(() => {
        console.log('[EntityPage] useEffect recompute');
        if (contentData) {
            setFormData(cloneDeep(contentData.toPlainObj()));
            resetEditFormData()
        };
    }, [contentData]);

    const resetEditFormData = () => {
        setEditFormData(cloneDeep(formData));
    }

    const handleChange = (data: { [key: string]: any }) => {
        setEditFormData(data);
    }

    const handleSubmit = async (data: { [key: string]: any }) => {
        if (!entityName) throw new Error(`Entity name not found`);
        const userId = account?.user;
        if (!userId) throw new Error(`User not found`);
        if (!worldId) throw new Error(`World ID not found`);
        if (!entityConstructor) throw new Error(`Entity constructor not found`);
        const contentBody = entityConstructor.build(data);
        const context: Context = Context.build({
            world: { id: worldId } as World,
            user: { id: userId } as User
        });
        const key = `updateContent-${worldId}-${entityName}-${entityId}`
        addLoadingKey(key)
        dispatch(updateContent({
            entityName,
            contentBody,
            context
        })).then((result: any) => {
            console.log('[updateContent handleSubmit] result', result);
            if (result.error) {
                addError([
                    {
                        text: 'Error',
                        color: 'error',
                        sx: { fontWeight: 'bold' }
                    },
                    {
                        text: result.error.message,
                        href: routes.contentEntity(worldId || '', entityName || ''),
                        color: 'error',
                    }
                ]);
            } else {
                addSuccess([
                    {
                        text: `${displayConfig?.title || entityName} "${data.name || data.title || ''}" updated successfully`,
                    }
                ]);
            }
        }).finally(() => {
            removeLoadingKey(key)
        });
        router.push(routes.contentEntity(worldId || '', entityName || ''));
    };

    const handleToggleEdit = () => {
        setIsReadOnly(!isReadOnly);
    };

    const getTitle = () => {
        if (entityId) return displayConfig?.title || '';
        return `Create ${displayConfig?.title || ''}`;
    }

    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
            BreadcrumbItem.build({ label: world?.name || 'PLACEHOLDER', path: routes.worldDashboard(worldId || '') }),
            BreadcrumbItem.build({
                label: displayConfig?.title || entityName || 'PLACEHOLDER',
                path: routes.contentEntity(worldId || '', entityName || '')
            }),
            BreadcrumbItem.build({
                label: entityId || 'PLACEHOLDER',
                path: routes.contentDetail(worldId || '', entityName || '', formData.name || '')
            })
        ]);
    }, [worldId, entityName, entityId]);

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs} accountId={account?.id} worldId={worldId || ''}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h4" component="h1">
                            {getTitle()}
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={handleToggleEdit}
                            color={isReadOnly ? 'primary' : 'error'}
                        >
                            {isReadOnly ? 'Edit' : 'Cancel Edit'}
                        </Button>
                    </Box>
                    <Box sx={{ maxWidth: 600 }}>
                        <DynamicForm
                            formData={isReadOnly ? formData : editFormData}
                            fields={formFields}
                            onSubmit={handleSubmit}
                            onChange={handleChange}
                            readOnly={isReadOnly}
                        />
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default EntityPage;