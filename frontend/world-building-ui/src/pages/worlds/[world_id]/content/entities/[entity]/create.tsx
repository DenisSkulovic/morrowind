import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { ContentEntityMapService } from '../../../../../../CONTENT_ENTITY_MAP';
import { ContentBase, ContentBaseStatic } from '../../../../../../class/ContentBase';
import { EntityEnum } from '../../../../../../enum/EntityEnum';
import { useEntityName, useWorldId } from '../../../../../../hooks/query';
import { DynamicFormErrors, FormFieldDefinition, getFormFields, validateForm } from '../../../../../../decorator/form-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../../decorator/entity-display.decorator';
import DynamicForm from '../../../../../../components/common/DynamicForm';
import { BreadcrumbItem } from '../../../../../../components/common/PageWrapper/Breadcrumbs';
import { routes } from '../../../../../../routes';
import PageWrapper from '../../../../../../components/common/PageWrapper';
import { Account } from '../../../../../../class/entities/Account';
import { useAccount } from '../../../../../../hooks/useAccount';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import { createContent } from '../../../../../../store/slices/contentSlice';
import { Context } from '../../../../../../class/Context';
import { World } from '../../../../../../class/entities/World';
import { User } from '../../../../../../class/entities/User';
import { useLoading } from '../../../../../../hooks/useLoading';
import { useToastStack } from '../../../../../../hooks/useToastStack';

const CreateEntityPage = () => {
    const router = useRouter();
    const dispatch = useDispatch<AppDispatch>();
    const entityName: EntityEnum | null = useEntityName(router.query);
    const worldId: string | null = useWorldId(router.query);

    const { addError, addWarning, addSuccess, addInfo } = useToastStack();

    const { addLoadingKey, removeLoadingKey } = useLoading();

    const [formData, setFormData] = useState<{ [key: string]: any }>({});

    const account: Account | null = useAccount();
    const [displayConfig, setDisplayConfig] = useState<EntityDisplayConfig | null>(null);
    const [formFields, setFormFields] = useState<FormFieldDefinition[]>([]);

    const [errors, setErrors] = useState<DynamicFormErrors>({});
    const [showErrors, setShowErrors] = useState<boolean>(false);

    const getClass = (entityName: EntityEnum) => {
        return ContentEntityMapService.getEntityConstructor<ContentBase>(entityName) as ContentBaseStatic<ContentBase>;
    }

    useEffect(() => {
        if (!entityName) return;
        const newEntityClass: ContentBaseStatic<ContentBase> = getClass(entityName);

        if (newEntityClass) {
            setDisplayConfig(getEntityDisplayConfig(newEntityClass));
            setFormFields(getFormFields(newEntityClass.prototype));
        }
    }, [entityName]);

    const resetForm = () => {
        setErrors({});
        setShowErrors(false);
        setFormData({});
    }

    const handleSubmit = async (data: any) => {
        if (!entityName) throw new Error('[createContent handleSubmit] Entity name not found');
        const userId = account?.user;
        if (!userId) throw new Error('[createContent handleSubmit] User ID not found');
        if (!worldId) throw new Error('[createContent handleSubmit] World ID not found');
        const errors: DynamicFormErrors = validateForm(formFields, data);
        console.log('[createContent handleSubmit] data', data);
        console.log('[createContent handleSubmit] errors', errors);
        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            setShowErrors(true);
            return;
        }
        setShowErrors(false);
        const newEntityClass = getClass(entityName);
        const contentBody = newEntityClass.build(data)
        const context = Context.build({
            user: { id: userId } as User,
            world: { id: worldId } as World
        });

        const key = `createContent-${worldId}-${entityName}`
        addLoadingKey(key)
        dispatch(createContent({ entityName, contentBody, context })).then((result: any) => {
            console.log('[createContent handleSubmit] result', result);
            if (result.error) {
                addError([
                    {
                        text: 'Error',
                        color: 'error',
                        sx: { fontWeight: 'bold' }
                    },
                    {
                        text: result.error.message,
                        href: routes.contentEntity(worldId, entityName),
                        color: 'error',
                    }
                ]);
                console.error('[createContent handleSubmit] error', result.error);
            } else {
                addSuccess([
                    {
                        text: 'Success',
                        color: 'success',
                        sx: { fontWeight: 'bold' }
                    }
                ], [
                    {
                        text: `${displayConfig?.title || entityName} "${data.name || data.title || ''}" created successfully`,
                        color: 'info',
                    },
                    {
                        text: 'View Content',
                        href: routes.contentDetail(worldId, entityName, result.payload.id),
                        color: 'primary',
                        sx: { ml: 1, py: 0.25, px: 1, fontSize: '0.75rem' }
                    }
                ]);
                resetForm();
            }
        }).finally(() => {
            removeLoadingKey(key)
        });
    };

    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
            BreadcrumbItem.build({ label: `${worldId}`, path: routes.worldDashboard(worldId || '') }),
            BreadcrumbItem.build({
                label: displayConfig?.title || entityName || 'PLACEHOLDER',
                path: routes.contentEntity(worldId || '', entityName || '')
            }),
            BreadcrumbItem.build({ label: 'Create' })
        ]);
    }, [worldId, entityName]);

    const handleChange = (formData: any) => {
        console.log('page handleChange', formData);
        setFormData(formData);
    };

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs} accountId={account?.id} worldId={worldId || ''}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create {displayConfig?.title || ''}
                    </Typography>
                    <Box sx={{ maxWidth: 600 }}>
                        <DynamicForm
                            formData={formData}
                            onChange={handleChange}
                            fields={formFields}
                            onSubmit={handleSubmit}
                            errors={errors}
                            showErrors={showErrors}
                        />
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default CreateEntityPage;
