import { Box, Container, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../../../store/store';
import { CONTENT_ENTITY_MAP } from '../../../../../../CONTENT_ENTITY_MAP';
import { ClassConstructor } from '../../../../../../types';
import { ContentBase } from '../../../../../../class/ContentBase';
import { EntityEnum } from '../../../../../../enum/EntityEnum';
import { sanitizeEntityName, sanitizeWorldId } from '../../../../../../utils/sanitize';
import { FormFieldDefinition, getFormFields } from '../../../../../../decorator/form-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../../decorator/entity-display.decorator';
import DynamicForm from '../../../../../../components/common/DynamicForm';
import { BreadcrumbItem } from '../../../../../../components/common/PageWrapper/Breadcrumbs';
import { routes } from '../../../../../../routes';
import PageWrapper from '../../../../../../components/common/PageWrapper';

const CreateEntityPage = () => {
    const router = useRouter();
    const entityName: EntityEnum = sanitizeEntityName(router.query.entity);
    const worldId: string = sanitizeWorldId(router.query.world_id);
    const dispatch = useDispatch<AppDispatch>();

    const entityClass: ClassConstructor<ContentBase> = CONTENT_ENTITY_MAP[entityName].entity;
    const displayConfig: EntityDisplayConfig = getEntityDisplayConfig(entityClass);
    const formFields: FormFieldDefinition[] = getFormFields(entityClass.prototype);

    const handleSubmit = async (data: any) => {
        throw new Error('Not implemented'); // TODO
        // router.push(routes.contentEntity(worldId, entityName));
    };

    const customBreadcrumbs: BreadcrumbItem[] = [
        BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
        BreadcrumbItem.build({
            label: displayConfig.title,
            path: routes.contentEntity(worldId, entityName)
        }),
        BreadcrumbItem.build({ label: 'Create' })
    ];
    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Create {displayConfig.title}
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
