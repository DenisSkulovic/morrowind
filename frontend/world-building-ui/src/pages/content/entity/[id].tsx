import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import ContentForm from '../../../components/ContentForm';
import { createContent } from '../../../store/slices/contentSlice';
import { Character } from '../../../dto/content/Character';
import { ItemSet } from '../../../dto/content/ItemSet';
import { Religion } from '../../../dto/content/Religion';
import { ContentBase } from '../../../class/ContentBase';

// Map of entity types to their classes
const entityClasses: { [key: string]: typeof ContentBase } = {
    character: Character,
    itemSet: ItemSet,
    religion: Religion,
    // Add other entity types here
};

const EntityPage = () => {
    const router = useRouter();
    const { id, type } = router.query;
    const dispatch = useDispatch();
    const [entityClass, setEntityClass] = useState<typeof ContentBase | null>(null);
    const [initialData, setInitialData] = useState<any>({});

    // Get the entity class based on the type parameter
    useEffect(() => {
        if (type && typeof type === 'string') {
            const EntityClass = entityClasses[type.toLowerCase()];
            if (EntityClass) {
                setEntityClass(EntityClass);
            } else {
                console.error(`Unknown entity type: ${type}`);
                router.push('/dashboard');
            }
        }
    }, [type]);

    // Fetch initial data if editing existing entity
    useEffect(() => {
        if (id && entityClass) {
            // TODO: Add fetch logic when implementing edit functionality
        }
    }, [id, entityClass]);

    const handleSubmit = async (data: any) => {
        try {
            if (!type) return;

            await dispatch(createContent({
                entityName: type.toString(),
                contentBody: data,
                context: { /* Add context if needed */ }
            }));

            // Redirect to the entity list page
            router.push(`/content/${type}`);
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
            <h1>{id ? `Edit ${type}` : `Create ${type}`}</h1>
            <ContentForm
                entityClass={entityClass}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default EntityPage;