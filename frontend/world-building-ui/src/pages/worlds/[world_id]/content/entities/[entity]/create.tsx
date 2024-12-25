import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import { ContentEntityMapService } from '../../../../../../CONTENT_ENTITY_MAP';
import { ClassConstructor } from '../../../../../../types';
import { ContentBase, ContentBaseStatic } from '../../../../../../class/ContentBase';
import { EntityEnum } from '../../../../../../enum/EntityEnum';
import { useEntityName, useWorldId } from '../../../../../../hooks/query';
import { FormFieldDefinition, getFormFields } from '../../../../../../decorator/form-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../../decorator/entity-display.decorator';
import DynamicForm from '../../../../../../components/common/DynamicForm';
import { BreadcrumbItem } from '../../../../../../components/common/PageWrapper/Breadcrumbs';
import { routes } from '../../../../../../routes';
import PageWrapper from '../../../../../../components/common/PageWrapper';
import { Account } from '../../../../../../class/entities/Account';
import { useAccount } from '../../../../../../hooks/useAccount';
import { useState } from 'react';
import { useEffect } from 'react';

const CreateEntityPage = () => {
    const router = useRouter();
    const entityName: EntityEnum | null = useEntityName(router.query);
    const worldId: string | null = useWorldId(router.query);
    const dispatch = useDispatch<AppDispatch>();

    const account: Account | null = useAccount();

    const entityClass: ContentBaseStatic<ContentBase> | null = entityName ? ContentEntityMapService.getEntityConstructor<ContentBase>(entityName) as ContentBaseStatic<ContentBase> : null;
    const displayConfig: EntityDisplayConfig | null = entityClass ? getEntityDisplayConfig(entityClass) : null;
    const formFields: FormFieldDefinition[] = entityClass ? getFormFields(entityClass.prototype) : [];

    const handleSubmit = async (data: any) => {
        throw new Error('Not implemented'); // TODO
        // router.push(routes.contentEntity(worldId, entityName));
    };

    const [customBreadcrumbs, setCustomBreadcrumbs] = useState<BreadcrumbItem[]>([])
    useEffect(() => {
        setCustomBreadcrumbs([
            BreadcrumbItem.build({ label: 'Home', path: routes.home() }),
            BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
            BreadcrumbItem.build({
                label: displayConfig?.title || 'PLACEHOLDER',
                path: routes.contentEntity(worldId || '', entityName || '')
            }),
            BreadcrumbItem.build({ label: 'Create' })
        ]);
    }, [worldId, entityName]);

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs} accountId={account?.id} worldId={worldId || ''}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create {displayConfig?.title || ''}
                    </Typography>
                    <Box sx={{ maxWidth: 600 }}>
                        <DynamicForm
                            fields={formFields}
                            onSubmit={handleSubmit}
                        />
                    </Box>
                </Box>
            </Container>
        </PageWrapper>
    );
};

export default CreateEntityPage;
