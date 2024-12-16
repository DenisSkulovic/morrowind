import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { searchWorlds, updateWorld } from '../../../store/slices/worldSlice';
import { useRouter } from 'next/router';
import { Account } from '../../../class/entities/Account';
import { World } from '../../../class/entities/World';
import { useSelectorAndBuilder } from '../../../hooks/useSelectorAndBuilder';
import { LooseObject } from '../../../types';
import { cloneDeep } from 'lodash';
import { routes } from '../../../routes';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { User } from '../../../class/entities/User';
import { Context } from '../../../class/Context';
import { SearchQuery } from '../../../class/search/SearchQuery';
import { QueryFilter } from '../../../class/search/QueryFilter';

const EditWorldPage = () => {
    const router = useRouter();
    const { world_id } = router.query;

    const dispatch = useDispatch<AppDispatch>();

    const worlds: World[] | null = useSelectorAndBuilder((state: RootState) => state.worlds.data, worlds => worlds ? worlds.map((world: LooseObject) => World.build(world)) : null);
    const world: World | undefined = worlds?.find((w) => w.id === world_id);

    const account: Account | null = useSelectorAndBuilder((state: RootState) => state.account.data, account => account ? Account.build(account) : null);
    if (!account) throw new Error('Account not found');
    const userId: string = account.user;

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        if (!world_id) return;
        const user: User = User.build({ id: userId });
        const context: Context = Context.build({ user });
        const userFilter: QueryFilter = QueryFilter.build({ field: "user", operator: "eq", value: userId });
        const worldFilter: QueryFilter = QueryFilter.build({ field: "id", operator: "eq", value: world_id });
        const query = SearchQuery.build({ page: 1, pageSize: 100, filters: [userFilter, worldFilter] });
        dispatch(searchWorlds({ query, context }));
    }, [world_id, dispatch, userId]);

    useEffect(() => {
        if (!world) return;
        if (!name && !description) {
            setName(world.name || "");
            setDescription(world.description || "");
        }
    }, [world]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!world) throw new Error('World not found');
        const worldClone: World = cloneDeep(world);
        worldClone.name = name;
        worldClone.description = description;
        await dispatch(updateWorld(worldClone));
        router.push(routes.worlds());
    };

    return (
        <Container maxWidth="lg">
            <Box py={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Edit World
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <TextField
                        fullWidth
                        label="World Name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        label="Description"
                        variant="outlined"
                        multiline
                        rows={4}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Save Changes
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default EditWorldPage;
