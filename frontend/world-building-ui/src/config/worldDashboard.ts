import { EntityEnum } from "../enum/EntityEnum";
import {
    Inventory2Outlined,
    Person,
    Church,
    Memory,
    Psychology,
    History,
    Work,
    Groups,
    CoronavirusOutlined
} from '@mui/icons-material';

export const entityNamesToDisplayInStats = [
    EntityEnum.Item,
    EntityEnum.Character,
    EntityEnum.Religion,
    EntityEnum.Memory,
    EntityEnum.Trait,
    EntityEnum.Background,
    EntityEnum.CharacterProfession,
    EntityEnum.Faction,
    EntityEnum.Disease,
];

export const entityToIcon: Record<string, React.ComponentType> = {
    [EntityEnum.Item]: Inventory2Outlined,
    [EntityEnum.Character]: Person,
    [EntityEnum.Religion]: Church,
    [EntityEnum.Memory]: Memory,
    [EntityEnum.Trait]: Psychology,
    [EntityEnum.Background]: History,
    [EntityEnum.CharacterProfession]: Work,
    [EntityEnum.Faction]: Groups,
    [EntityEnum.Disease]: CoronavirusOutlined,
};

export const activityRecordsHeadLimit = 10