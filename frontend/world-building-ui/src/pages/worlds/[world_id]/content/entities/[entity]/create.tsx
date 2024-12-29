import { useState, useEffect } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import { ContentEntityMapService } from '../../../../../../CONTENT_ENTITY_MAP';
import { ContentBase, ContentBaseStatic } from '../../../../../../class/ContentBase';
import { EntityEnum } from '../../../../../../enum/EntityEnum';
import { useEntityName, useWorldId } from '../../../../../../hooks/query';
import { FormFieldDefinition, getFormFields } from '../../../../../../decorator/form-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../../decorator/entity-display.decorator';
import DynamicForm, { DynamicFormErrors } from '../../../../../../components/common/DynamicForm';
import { BreadcrumbItem } from '../../../../../../components/common/PageWrapper/Breadcrumbs';
import { routes } from '../../../../../../routes';
import PageWrapper from '../../../../../../components/common/PageWrapper';
import { Account } from '../../../../../../class/entities/Account';
import { useAccount } from '../../../../../../hooks/useAccount';

const CreateEntityPage = () => {
    const router = useRouter();
    const entityName: EntityEnum | null = useEntityName(router.query);
    const worldId: string | null = useWorldId(router.query);

    const account: Account | null = useAccount();
    const [displayConfig, setDisplayConfig] = useState<EntityDisplayConfig | null>(null);
    const [formFields, setFormFields] = useState<FormFieldDefinition[]>([]);

    const [errors, setErrors] = useState<DynamicFormErrors>({});
    const [showErrors, setShowErrors] = useState<boolean>(false);

    useEffect(() => {
        if (!entityName) return;
        const newEntityClass: ContentBaseStatic<ContentBase> = ContentEntityMapService.getEntityConstructor<ContentBase>(entityName) as ContentBaseStatic<ContentBase>;

        if (newEntityClass) {
            setDisplayConfig(getEntityDisplayConfig(newEntityClass));
            setFormFields(getFormFields(newEntityClass.prototype));
        }
    }, [entityName]);

    const handleSubmit = async (data: any) => {
        throw new Error('Not implemented'); // TODO
        // router.push(routes.contentEntity(worldId, entityName));
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
