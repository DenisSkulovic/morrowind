import { EntityEnum } from "../../enum/EntityEnum";
import {
    Inventory2Outlined,
    Person,
    Church,
    Groups,
    Gavel,
} from '@mui/icons-material';
import { setIsPresetDialogOpen } from "../../store/slices/uiSlice";
import { AppDispatch } from "../../store/store";
import { routes } from "../../routes";
import { NextRouter } from 'next/router';

export type QuickActionConfig = {
    id: string;
    title: string;
    icon: React.ComponentType;
    callback: () => void;
}

export class QuickActionsConfig {
    public getQuickActions(dispatch: AppDispatch, router: NextRouter): QuickActionConfig[] {
        return getQuickActions(dispatch, router);
    }

    public getQuickActionsMap(dispatch: AppDispatch, router: NextRouter): Record<string, QuickActionConfig> {
        const config = getQuickActions(dispatch, router);
        const quickActionsMap = config.reduce((acc, config) => {
            if (acc[config.id]) throw new Error(`Duplicate quick action ID found: ${config.id}; were you careful enough to edit the config?`);
            acc[config.id] = config;
            return acc;
        }, {} as Record<string, QuickActionConfig>);
        return quickActionsMap;
    }
}

const getQuickActions = (dispatch: AppDispatch, router: NextRouter) => {
    return [
        {
            id: 'load-preset',
            title: 'Load Preset',
            icon: Gavel,
            callback: () => {
                dispatch(setIsPresetDialogOpen(true));
            }
        },
        {
            id: 'new-character',
            title: 'New Character',
            icon: Person,
            callback: () => {
                const params = router.query;
                const worldId = params.world_id as string;
                if (!worldId) throw new Error('World ID not found');
                router.push(routes.contentCreate(worldId, EntityEnum.Character));
            }
        },
        {
            id: 'new-item',
            title: 'New Item',
            icon: Inventory2Outlined,
            callback: () => {
                const params = router.query;
                const worldId = params.world_id as string;
                if (!worldId) throw new Error('World ID not found');
                router.push(routes.contentCreate(worldId, EntityEnum.ItemWeapon));
            }
        },
        {
            id: 'new-faction',
            title: 'New Faction',
            icon: Groups,
            callback: () => {
                const params = router.query;
                const worldId = params.world_id as string;
                if (!worldId) throw new Error('World ID not found');
                router.push(routes.contentCreate(worldId, EntityEnum.Faction));
            }
        },
        {
            id: 'new-religion',
            title: 'New Religion',
            icon: Church,
            callback: () => {
                const params = router.query;
                const worldId = params.world_id as string;
                if (!worldId) throw new Error('World ID not found');
                router.push(routes.contentCreate(worldId, EntityEnum.Religion));
            }
        }
    ];
}