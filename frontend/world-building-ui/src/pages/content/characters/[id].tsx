import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import ContentForm from '../../../components/ComponentForm/ContentForm';
import { Character } from '../../../dto/Character';

const CharacterPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const fetchOptions = async (entityName: string) => {
        const response = await axios.get(`/api/${entityName}`);
        return response.data; // Expected format: [{ id: '1', name: 'Human' }]
    };

    const handleSubmit = async (data: any) => {
        if (id) {
            await axios.put(`/api/characters/${id}`, data);
        } else {
            await axios.post('/api/characters', data);
        }
        router.push('/characters');
    };

    return (
        <div>
            <h1>{id ? 'Edit Character' : 'Create Character'}</h1>
            <ContentForm
                entityClass={Character}
                initialData={{}} // You can fetch initial data for editing here
                fetchOptions={fetchOptions}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default CharacterPage;