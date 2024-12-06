import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchWorlds, updateWorld } from '../../../store/slices/worldSlice';
import { useRouter } from 'next/router';

const EditWorldPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch<AppDispatch>();
    const { worlds } = useSelector((state: RootState) => state.worlds);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (!id) return;

        if (worlds.length === 0) {
            dispatch(fetchWorlds());
        } else {
            const world = worlds.find((w) => w.id === id);
            if (world) {
                setName(world.name);
                setDescription(world.description);
            }
        }
    }, [id, worlds, dispatch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(updateWorld({ id: id as string, name, description }));
        router.push('/worlds');
    };

    return (
        <div>
            <h1>Edit World</h1>
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
                <button type="submit">Save Changes</button>
            </form>
        </div>
    );
};

export default EditWorldPage;
