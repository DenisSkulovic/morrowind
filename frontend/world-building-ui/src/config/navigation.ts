import {
    Dashboard as DashboardIcon,
    Person as CharacterIcon,
    Inventory as ItemIcon,
    Groups as FactionIcon,
    Psychology as TraitIcon,
    Church as ReligionIcon,
    People as RaceIcon,
    Construction as BlueprintIcon,
} from '@mui/icons-material';
import { NavItem } from '../components/navigation/Sidebar';


export const sidebarConfig: NavItem[] = [
    {
        label: 'Dashboard',
        path: '/',
        icon: DashboardIcon
    },
    {
        label: 'Characters',
        path: '/characters',
        icon: CharacterIcon,
        children: [
            { label: 'Character List', path: '/characters', icon: CharacterIcon },
            { label: 'Personality Profiles', path: '/personality-profiles', icon: TraitIcon }
        ]
    },
    {
        label: 'Items',
        path: '/items',
        icon: ItemIcon,
        children: [
            { label: 'Item List', path: '/items', icon: ItemIcon },
            { label: 'Item Sets', path: '/item-sets', icon: ItemIcon }
        ]
    },
    {
        label: 'Factions',
        path: '/factions',
        icon: FactionIcon
    },
    {
        label: 'Traits',
        path: '/traits',
        icon: TraitIcon
    },
    {
        label: 'Religions',
        path: '/religions',
        icon: ReligionIcon
    },
    {
        label: 'Races',
        path: '/races',
        icon: RaceIcon
    },
    {
        label: 'Generation',
        path: '/generation',
        icon: BlueprintIcon,
        children: [
            { label: 'Character Generation', path: '/generation/characters', icon: CharacterIcon },
            { label: 'Group Generation', path: '/generation/groups', icon: FactionIcon }
        ]
    }
];