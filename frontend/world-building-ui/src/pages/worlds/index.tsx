import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { fetchWorlds, deleteWorld } from '../../store/slices/worldSlice';
import Link from 'next/link';

const WorldsPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { worlds, status, error } = useSelector((state: RootState) => state.worlds);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchWorlds());
        }
    }, [dispatch, status]);

    const handleDelete = (id: string) => {
        dispatch(deleteWorld(id));
    };

    if (status === 'loading') return <p>Loading...</p>;
    if (status === 'failed') return <p>Error: {error}</p>;

    return (
        <div>
            <h1>Worlds</h1>
            <Link href="/worlds/create">Create New World</Link>
            <ul>
                {worlds.map((world) => (
                    <li key={world.id}>
                        <h2>{world.name}</h2>
                        <p>{world.description}</p>
                        <Link href={`/worlds/edit/${world.id}`}>Edit</Link>
                        <button onClick={() => handleDelete(world.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default WorldsPage;
