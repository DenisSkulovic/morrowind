import {
    Home as HomeIcon,
    Dashboard as DashboardIcon,
    Person as CharacterIcon,
    Inventory as ItemIcon,
    Groups as FactionIcon,
    Church as ReligionIcon,
    People as RaceIcon,
    Public as WorldIcon,
    AccountCircle as AccountIcon,
    Gavel as WeaponIcon,
    Checkroom as WearableIcon,
    LocalDrink as ConsumableIcon,
    Category as MiscIcon,
    ViewModule as SetIcon,
    AutoFixHigh as GeneratorIcon,
    PersonAdd as CharacterGenIcon,
    GroupAdd as GroupGenIcon,
    PersonSearch as CharacterListIcon,
    Psychology as PersonalityIcon,
} from '@mui/icons-material';
import { NavItem } from '../components/common/PageWrapper/Sidebar';
import { routes } from '../routes';



export function getNavItems(accountId?: string, worldId?: string) {
    const items: NavItem[] = []
    items.push(getHomeItem())
    if (accountId) {
        items.push(getAccountNavItem(accountId))
        items.push(getWorldsNavItem())
        if (worldId) {
            items.push(getWorldDashboardNavItem(worldId))
            items.push(getCharactersNavItem(worldId))
            items.push(getItemsNavItem(worldId))
        }
    }
    return items
}



function getHomeItem() {
    return NavItem.build({
        label: 'Home',
        path: routes.home(),
        icon: HomeIcon
    });
}
function getAccountNavItem(accountId: string) {
    return NavItem.build({
        label: 'Account',
        path: routes.userProfile(accountId),
        icon: AccountIcon
    })
}
function getWorldsNavItem() {
    return NavItem.build({
        label: 'Worlds',
        path: routes.worlds(),
        icon: WorldIcon
    })
}
function getWorldDashboardNavItem(worldId: string) {
    return NavItem.build({
        label: 'Dashboard',
        path: routes.worldDashboard(worldId),
        icon: DashboardIcon
    })
}
function getCharactersNavItem(worldId: string) {
    return NavItem.build({
        label: 'Character',
        icon: CharacterIcon,
        children: [
            NavItem.build({
                label: 'Character List',
                path: routes.contentEntity(worldId, 'Character'),
                icon: CharacterListIcon
            }),
            NavItem.build({
                label: 'Personality Profiles',
                path: routes.contentEntity(worldId, 'PersonalityProfile'),
                icon: PersonalityIcon
            }),
            NavItem.build({
                label: 'Traits',
                path: routes.contentEntity(worldId, 'Trait'),
                icon: PersonalityIcon
            }),
            NavItem.build({
                label: 'Religions',
                path: routes.contentEntity(worldId, 'Religion'),
                icon: ReligionIcon
            }),
            NavItem.build({
                label: 'Races',
                path: routes.contentEntity(worldId, 'Race'),
                icon: RaceIcon
            }),
            NavItem.build({
                label: 'Factions',
                path: routes.contentEntity(worldId, 'Faction'),
                icon: FactionIcon
            }),
            NavItem.build({
                label: 'Character Generation Instructions',
                path: routes.contentEntity(worldId, 'CharacterGenInstruction'),
                icon: CharacterGenIcon
            }),
            NavItem.build({
                label: 'Character Group Generation Instructions',
                path: routes.contentEntity(worldId, 'CharacterGroupGenInstruction'),
                icon: GroupGenIcon
            }),
            NavItem.build({
                label: 'Character Generator',
                path: routes.generatorCharacter(worldId),
                icon: GeneratorIcon
            }),
            NavItem.build({
                label: 'Character Group Generator',
                path: routes.generatorGroup(worldId),
                icon: GeneratorIcon
            }),
        ]
    })
}
function getItemsNavItem(worldId: string) {
    return NavItem.build({
        label: 'Item',
        icon: ItemIcon,
        children: [
            NavItem.build({
                label: 'Weapons',
                path: routes.contentEntity(worldId, 'ItemWeapon'),
                icon: WeaponIcon
            }),
            NavItem.build({
                label: 'Wearables',
                path: routes.contentEntity(worldId, 'ItemWearable'),
                icon: WearableIcon
            }),
            NavItem.build({
                label: 'Consumables',
                icon: ConsumableIcon,
                children: [
                    NavItem.build({
                        label: 'Drinkables',
                        path: routes.contentEntity(worldId, 'ItemDrinkable'),
                        icon: ConsumableIcon
                    }),
                    NavItem.build({
                        label: 'Edibles',
                        path: routes.contentEntity(worldId, 'ItemEdible'),
                        icon: ConsumableIcon
                    }),
                    NavItem.build({
                        label: 'Arrows',
                        path: routes.contentEntity(worldId, 'ItemArrow'),
                        icon: ConsumableIcon
                    })
                ]
            }),
            NavItem.build({
                label: 'Miscellaneous',
                path: routes.contentEntity(worldId, 'ItemMisc'),
                icon: MiscIcon
            }),
            NavItem.build({
                label: 'Item Sets',
                path: routes.contentEntity(worldId, 'ItemSet'),
                icon: SetIcon
            }),
            NavItem.build({
                label: 'Item Generator',
                path: routes.generatorItem(worldId),
                icon: GeneratorIcon
            })
        ]
    })
}
