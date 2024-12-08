import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { fetchWorlds, updateWorld } from '../../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Account } from '../../../dto/Account';
import { World } from '../../../dto/World';

const EditWorldPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const dispatch = useDispatch<AppDispatch>();
    const { data: worlds } = useSelector((state: RootState) => state.worlds);
    const world: World | undefined = worlds.find((w) => w.id === id);
    if (!world) throw new Error('World not found');

    const account: Account | null = useSelector((state: RootState) => state.account.data);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    const [name, setName] = useState(world.name || "");
    const [description, setDescription] = useState(world.description || "");

    useEffect(() => {
        if (!id) return;

        if (worlds.length === 0) {
            dispatch(fetchWorlds(userId));
        } else {
            const world = worlds.find((w) => w.id === id);
            if (world) {
                setName(world.name);
                setDescription(world.description || "");
            }
        }
    }, [id, worlds, dispatch]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const worldClone: World = World.fromDTO(world.toDTO());
        worldClone.name = name;
        worldClone.description = description;
        await dispatch(updateWorld(worldClone));
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
