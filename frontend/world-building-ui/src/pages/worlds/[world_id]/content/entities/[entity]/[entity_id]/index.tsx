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
import { CONTENT_ENTITY_MAP } from '../../../../../../../CONTENT_ENTITY_MAP';
import { EntityEnum } from '../../../../../../../enum/EntityEnum';
import { sanitizeEntityName } from '../../../../../../../utils/sanitize';
import { FormFieldDefinition, getFormFields } from '../../../../../../../decorator/form-field.decorator';
import { EntityDisplayConfig, getEntityDisplayConfig } from '../../../../../../../decorator/entity-display.decorator';
import { BreadcrumbItem } from '../../../../../../../components/common/PageWrapper/Breadcrumbs';
import { routes } from '../../../../../../../routes';
import PageWrapper from '../../../../../../../components/common/PageWrapper';
import { useEntityDetail } from '../../../../../../../hooks/useEntityDetail';
import { useAccount } from '../../../../../../../hooks/useAccount';
import { Account } from '../../../../../../../class/entities/Account';
import { cloneDeep } from 'lodash';

const MODE_PARAM = 'mode';
enum ModeEnum {
    VIEW = 'view',
    EDIT = 'edit'
}

const EntityPage = () => {
    const router = useRouter();
    const { world_id, entity, entity_id } = router.query;
    const searchParams = useSearchParams();
    const initialMode: ModeEnum = searchParams.get(MODE_PARAM) as ModeEnum;
    const entityName: EntityEnum = sanitizeEntityName(entity);
    const dispatch = useDispatch<AppDispatch>();
    const [isReadOnly, setIsReadOnly] = useState(initialMode === ModeEnum.EDIT ? false : true);
    const [editData, setEditData] = useState<any>(null);

    const account: Account | null = useAccount();
    if (!account) throw new Error('Account not found');

    const entityConstructor: ContentBaseStatic<ContentBase> = CONTENT_ENTITY_MAP[entityName].entity as ContentBaseStatic<ContentBase>;
    const displayConfig: EntityDisplayConfig = getEntityDisplayConfig(entityConstructor);
    const formFields: FormFieldDefinition[] = getFormFields(entityConstructor.prototype);
    const { contentData, status, error } = useEntityDetail(entityName, entity_id as string, world_id as string);

    useEffect(() => {
        if (contentData) {
            setEditData(cloneDeep(contentData.toPlainObj()));
        }
    }, [contentData]);

    const context: Context = Context.build({
        world: { id: world_id as string } as World,
        user: { id: account.user } as User
    });

    const handleSubmit = async (data: { [key: string]: any }) => {
        dispatch(updateContent({
            entityName,
            contentBody: entityConstructor.build(data),
            context
        }));
        router.push(routes.contentEntity(world_id as string, entityName));
    };

    const handleToggleEdit = () => {
        if (isReadOnly) {
            // Switching to edit mode - create fresh clone of original data
            setEditData(cloneDeep(contentData?.toPlainObj()));
        }
        setIsReadOnly(!isReadOnly);
    };

    const customBreadcrumbs: BreadcrumbItem[] = [
        BreadcrumbItem.build({ label: 'Worlds', path: routes.worlds() }),
        BreadcrumbItem.build({
            label: displayConfig.title,
            path: routes.contentEntity(world_id as string, entityName)
        }),
        BreadcrumbItem.build({
            label: entity_id as string,
            path: routes.contentDetail(world_id as string, entityName, entity_id as string)
        })
    ];

    return (
        <PageWrapper customBreadcrumbs={customBreadcrumbs}>
            <Container maxWidth="lg">
                <Box py={4}>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
                        <Typography variant="h4" component="h1">
                            {entity_id ? displayConfig.title : `Create ${displayConfig.title}`}
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