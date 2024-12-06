import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { createWorld } from '../../store/slices/worldSlice';
import { useRouter } from 'next/router';

const CreateWorldPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(createWorld({ name, description }));
        router.push('/worlds');
    };

    return (
        <div>
            <h1>Create New World</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="World Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default CreateWorldPage;
