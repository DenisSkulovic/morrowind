import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../../../store/store';
import DynamicForm from '../../../../../../../components/common/DynamicForm';
import { createContent, updateContent } from '../../../../../../../store/slices/contentSlice';
import { ContentBase, ContentBaseStatic } from '../../../../../../../class/ContentBase';
import { Context } from '../../../../../../../class/Context';
import { User } from '../../../../../../../class/entities/User';
import { World } from '../../../../../../../class/entities/World';
import { Account } from '../../../../../../../class/entities/Account';
import { CONTENT_ENTITY_MAP } from '../../../../../../../CONTENT_ENTITY_MAP';
import { ClassConstructor, LooseObject } from '../../../../../../../types';
import { useSelectorAndBuilder } from '../../../../../../../hooks/useSelectorAndBuilder';
import { FormFieldDefinition, getFormFields } from '../../../../../../../decorator/form-field.decorator';
import { Button } from '@mui/material';
import { routes } from '../../../../../../../routes';

const EntityPage = () => {
    const router = useRouter();
    const { entity_id, entity: targetEntity, world_id } = router.query;
    const dispatch = useDispatch<AppDispatch>();
    const [isEditMode, setIsEditMode] = useState(false);

    if (!world_id) throw new Error('World not found');
    if (typeof world_id !== 'string') throw new Error('World ID is not a string');

    const worlds: World[] | null = useSelectorAndBuilder<World[] | null>((state: RootState) => state.worlds.data, worlds => worlds.map((w: LooseObject) => World.build(w)));
    const world = worlds?.find(w => w.id === world_id);
    if (!world) throw new Error('World not found');

    const account: Account | null = useSelectorAndBuilder<Account | null>((state: RootState) => state.account.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');

    const [entityClass, setEntityClass] = useState<typeof ContentBase | null>(null);
    const [formFields, setFormFields] = useState<FormFieldDefinition[]>([]);

    // Get the entity class based on the type parameter
    useEffect(() => {
        if (targetEntity && typeof targetEntity === 'string') {
            const EntityClass: typeof ContentBase = CONTENT_ENTITY_MAP[targetEntity];
            if (EntityClass) {
                setEntityClass(EntityClass);
                setFormFields(getFormFields(EntityClass.prototype));
            } else {
                console.error(`Unknown entity type: ${targetEntity}`);
                router.push(routes.contentDashboard(world_id));
            }
        }
    }, [targetEntity]);

    // Fetch initial data if editing existing entity
    useEffect(() => {
        if (entity_id && entityClass) {
            // TODO: Add fetch logic when implementing edit functionality
        }
    }, [entity_id, entityClass]);

    const handleSubmit = async (data: { [key: string]: any }) => {
        try {
            if (!targetEntity || typeof targetEntity !== 'string') return;
            if (!entityClass) throw new Error('Entity class not found');

            const user = { id: account.user } as User;
            const context = Context.build({ user, world });

            const contentBody = (entityClass as ContentBaseStatic<ContentBase>).build(data);

            await dispatch(updateContent({
                entityName: targetEntity,
                contentBody,
                context
            }));

            // redirect to entity list page
            router.push(routes.contentEntity(world_id, targetEntity));
        } catch (error) {
            console.error('Failed to save entity:', error);
            // TODO: Add error handling UI
        }
    };

    if (!entityClass || !formFields.length) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h1>{entity_id ? `Edit ${targetEntity}` : `Create ${targetEntity}`}</h1>
                {entity_id && (
                    <Button
                        variant="contained"
                        onClick={() => setIsEditMode(!isEditMode)}
                    >
                        {isEditMode ? 'Cancel Edit' : 'Edit'}
                    </Button>
                )}
            </div>
            <DynamicForm
                fields={formFields}
                initialValues={{}}
                onSubmit={handleSubmit}
                readOnly={entity_id ? !isEditMode : false}
            />
        </div>
    );
};

export default EntityPage;