import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ContentForm from '../../../../../../components/entity/ContentForm';
import { createContent } from '../../../../../../store/slices/contentSlice';
import { ContentBase } from '../../../../../../class/ContentBase';
import { Context } from '../../../../../../class/Context';
import { User } from '../../../../../../dto/User';
import { World } from '../../../../../../dto/World';
import { CONTENT_ENTITY_MAP } from '../../../../../../CONTENT_ENTITY_MAP';
import { ClassConstructor } from '../../../../../../types';


const EntityPage = () => {
    const router = useRouter();
    const { entity_id, targetEntity } = router.query;
    const dispatch = useDispatch();
    const [entityClass, setEntityClass] = useState<ClassConstructor<ContentBase> | null>(null);
    const [initialData, setInitialData] = useState<any>({});

    // Get the entity class based on the type parameter
    useEffect(() => {
        if (targetEntity && typeof targetEntity === 'string') {
            const EntityClass: ClassConstructor<ContentBase> = CONTENT_ENTITY_MAP[targetEntity];
            if (EntityClass) {
                setEntityClass(EntityClass);
            } else {
                console.error(`Unknown entity type: ${targetEntity}`);
                router.push('/dashboard');
            }
        }
    }, [targetEntity]);

    // Fetch initial data if editing existing entity
    useEffect(() => {
        if (entity_id && entityClass) {
            // TODO: Add fetch logic when implementing edit functionality
        }
    }, [entity_id, entityClass]);

    const handleSubmit = async (data: ContentBase) => {
        try {
            if (!targetEntity) return;

            await createContent({
                entityName: targetEntity.toString(),
                contentBody: data,
                context: new Context(
                    { id: account.user } as User,
                    { id: world.id } as World,
                )
            });

            // Redirect to the entity list page
            router.push(`/content/${targetEntity}`);
        } catch (error) {
            console.error('Failed to save entity:', error);
            // TODO: Add error handling UI
        }
    };

    if (!entityClass) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{entity_id ? `Edit ${targetEntity}` : `Create ${targetEntity}`}</h1>
            <ContentForm
                entityClass={entityClass}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default EntityPage;