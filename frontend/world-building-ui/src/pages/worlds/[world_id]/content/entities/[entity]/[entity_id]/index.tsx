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



const EntityPage = () => {
    const router = useRouter();
    const worldId: string | null = useWorldId(router.query);
    const entityName: EntityEnum | null = useEntityName(router.query);
    const entityId: string | null = useEntityId(router.query);
    const searchParams = useSearchParams();
    const initialMode: PageModeEnum = searchParams.get(PAGE_MODE_PARAM) as PageModeEnum;
    const dispatch = useDispatch<AppDispatch>();
    const [isReadOnly, setIsReadOnly] = useState(initialMode === PageModeEnum.EDIT ? false : true);
    const [editData, setEditData] = useState<any>(null);

    const account: Account | null = useAccount();

    const entityConstructor: ContentBaseStatic<ContentBase> | null = entityName ? ContentEntityMapService.getEntityConstructor<ContentBase>(entityName) as ContentBaseStatic<ContentBase> : null;
    const displayConfig: EntityDisplayConfig | null = entityConstructor ? getEntityDisplayConfig(entityConstructor) : null;
    const formFields: FormFieldDefinition[] = entityConstructor ? getFormFields(entityConstructor.prototype) : [];
    const { contentData, status, error } = useEntityDetail(entityName, entityId, worldId);

    useEffect(() => {
        if (contentData) {
            setEditData(cloneDeep(contentData.toPlainObj()));
        }
    }, [contentData]);

    const context: Context = Context.build({
        world: { id: worldId } as World,
        user: { id: account?.user || '' } as User
    });

    const handleSubmit = async (data: { [key: string]: any }) => {
        if (!entityName) throw new Error(`Entity name not found`);
        if (!entityConstructor) throw new Error(`Entity constructor not found`);
        dispatch(updateContent({
            entityName,
            contentBody: entityConstructor.build(data),
            context
        }));
        router.push(routes.contentEntity(worldId || '', entityName || ''));
    };

    const handleToggleEdit = () => {
        if (isReadOnly) {
            // Switching to edit mode - create fresh clone of original data
            setEditData(cloneDeep(contentData?.toPlainObj()));
        }
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
            BreadcrumbItem.build({
                label: displayConfig?.title || 'PLACEHOLDER',
                path: routes.contentEntity(worldId || '', entityName || '')
            }),
            BreadcrumbItem.build({
                label: entityId || 'PLACEHOLDER',
                path: routes.contentDetail(worldId || '', entityName || '', entityId || '')
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
                        >
                            {isReadOnly ? 'Edit' : 'View'}
                        </Button>
                    </Box>
                    <Box sx={{ maxWidth: 600 }}>
                        <DynamicForm
                            initialValues={isReadOnly ? contentData?.toPlainObj() : editData}
                            fields={formFields}
                            onSubmit={handleSubmit}
                            readOnly={isReadOnly}
                        />
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default EntityPage;