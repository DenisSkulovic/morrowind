import * as jspb from 'google-protobuf'



export class ContextDTO extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): ContextDTO;

  getWorldid(): string;
  setWorldid(value: string): ContextDTO;

  getCampaignid(): string;
  setCampaignid(value: string): ContextDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContextDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ContextDTO): ContextDTO.AsObject;
  static serializeBinaryToWriter(message: ContextDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContextDTO;
  static deserializeBinaryFromReader(message: ContextDTO, reader: jspb.BinaryReader): ContextDTO;
}

export namespace ContextDTO {
  export type AsObject = {
    userid: string,
    worldid: string,
    campaignid: string,
  }
}

export class BackgroundDTO extends jspb.Message {
  getId(): string;
  setId(value: string): BackgroundDTO;

  getName(): string;
  setName(value: string): BackgroundDTO;

  getFaction(): GenerationInstructionsDTO | undefined;
  setFaction(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasFaction(): boolean;
  clearFaction(): BackgroundDTO;

  getDisease(): GenerationInstructionsDTO | undefined;
  setDisease(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasDisease(): boolean;
  clearDisease(): BackgroundDTO;

  getAddiction(): GenerationInstructionsDTO | undefined;
  setAddiction(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasAddiction(): boolean;
  clearAddiction(): BackgroundDTO;

  getProfession(): GenerationInstructionsDTO | undefined;
  setProfession(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasProfession(): boolean;
  clearProfession(): BackgroundDTO;

  getRace(): GenerationInstructionsDTO | undefined;
  setRace(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasRace(): boolean;
  clearRace(): BackgroundDTO;

  getReligion(): GenerationInstructionsDTO | undefined;
  setReligion(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasReligion(): boolean;
  clearReligion(): BackgroundDTO;

  getPersonality(): GenerationInstructionsDTO | undefined;
  setPersonality(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasPersonality(): boolean;
  clearPersonality(): BackgroundDTO;

  getItems(): GenerationInstructionsDTO | undefined;
  setItems(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasItems(): boolean;
  clearItems(): BackgroundDTO;

  getPastexpchild(): GenerationInstructionsDTO | undefined;
  setPastexpchild(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasPastexpchild(): boolean;
  clearPastexpchild(): BackgroundDTO;

  getPastexpadult(): GenerationInstructionsDTO | undefined;
  setPastexpadult(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasPastexpadult(): boolean;
  clearPastexpadult(): BackgroundDTO;

  getMemorypools(): GenerationInstructionsDTO | undefined;
  setMemorypools(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasMemorypools(): boolean;
  clearMemorypools(): BackgroundDTO;

  getSkillsets(): GenerationInstructionsDTO | undefined;
  setSkillsets(value?: GenerationInstructionsDTO): BackgroundDTO;
  hasSkillsets(): boolean;
  clearSkillsets(): BackgroundDTO;

  getSkilladjustmentsMap(): jspb.Map<string, number>;
  clearSkilladjustmentsMap(): BackgroundDTO;

  getUser(): string;
  setUser(value: string): BackgroundDTO;

  getCampaign(): string;
  setCampaign(value: string): BackgroundDTO;

  getWorld(): string;
  setWorld(value: string): BackgroundDTO;

  getTargetentity(): string;
  setTargetentity(value: string): BackgroundDTO;

  getGender(): GenerationInstructionDTO | undefined;
  setGender(value?: GenerationInstructionDTO): BackgroundDTO;
  hasGender(): boolean;
  clearGender(): BackgroundDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackgroundDTO.AsObject;
  static toObject(includeInstance: boolean, msg: BackgroundDTO): BackgroundDTO.AsObject;
  static serializeBinaryToWriter(message: BackgroundDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackgroundDTO;
  static deserializeBinaryFromReader(message: BackgroundDTO, reader: jspb.BinaryReader): BackgroundDTO;
}

export namespace BackgroundDTO {
  export type AsObject = {
    id: string,
    name: string,
    faction?: GenerationInstructionsDTO.AsObject,
    disease?: GenerationInstructionsDTO.AsObject,
    addiction?: GenerationInstructionsDTO.AsObject,
    profession?: GenerationInstructionsDTO.AsObject,
    race?: GenerationInstructionsDTO.AsObject,
    religion?: GenerationInstructionsDTO.AsObject,
    personality?: GenerationInstructionsDTO.AsObject,
    items?: GenerationInstructionsDTO.AsObject,
    pastexpchild?: GenerationInstructionsDTO.AsObject,
    pastexpadult?: GenerationInstructionsDTO.AsObject,
    memorypools?: GenerationInstructionsDTO.AsObject,
    skillsets?: GenerationInstructionsDTO.AsObject,
    skilladjustmentsMap: Array<[string, number]>,
    user: string,
    campaign: string,
    world: string,
    targetentity: string,
    gender?: GenerationInstructionDTO.AsObject,
  }
}

export class BackgroundsDTO extends jspb.Message {
  getArrList(): Array<BackgroundDTO>;
  setArrList(value: Array<BackgroundDTO>): BackgroundsDTO;
  clearArrList(): BackgroundsDTO;
  addArr(value?: BackgroundDTO, index?: number): BackgroundDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackgroundsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: BackgroundsDTO): BackgroundsDTO.AsObject;
  static serializeBinaryToWriter(message: BackgroundsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackgroundsDTO;
  static deserializeBinaryFromReader(message: BackgroundsDTO, reader: jspb.BinaryReader): BackgroundsDTO;
}

export namespace BackgroundsDTO {
  export type AsObject = {
    arrList: Array<BackgroundDTO.AsObject>,
  }
}

export class Metadata extends jspb.Message {
  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): Metadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metadata.AsObject;
  static toObject(includeInstance: boolean, msg: Metadata): Metadata.AsObject;
  static serializeBinaryToWriter(message: Metadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metadata;
  static deserializeBinaryFromReader(message: Metadata, reader: jspb.BinaryReader): Metadata;
}

export namespace Metadata {
  export type AsObject = {
    metadataMap: Array<[string, string]>,
  }
}

export class EffectDTO extends jspb.Message {
  getId(): string;
  setId(value: string): EffectDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): EffectDTO;

  getName(): string;
  setName(value: string): EffectDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): EffectDTO;
  hasMetadata(): boolean;
  clearMetadata(): EffectDTO;

  getUser(): string;
  setUser(value: string): EffectDTO;

  getCampaign(): string;
  setCampaign(value: string): EffectDTO;

  getWorld(): string;
  setWorld(value: string): EffectDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): EffectDTO;
  clearTagsList(): EffectDTO;
  addTags(value: string, index?: number): EffectDTO;

  getType(): EffectTypeEnumDTO;
  setType(value: EffectTypeEnumDTO): EffectDTO;

  getTarget(): EffectTargetEnumDTO;
  setTarget(value: EffectTargetEnumDTO): EffectDTO;

  getMode(): EffectModeEnumDTO;
  setMode(value: EffectModeEnumDTO): EffectDTO;

  getElement(): EffectElementEnumDTO;
  setElement(value: EffectElementEnumDTO): EffectDTO;

  getTargetentity(): string;
  setTargetentity(value: string): EffectDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectDTO.AsObject;
  static toObject(includeInstance: boolean, msg: EffectDTO): EffectDTO.AsObject;
  static serializeBinaryToWriter(message: EffectDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectDTO;
  static deserializeBinaryFromReader(message: EffectDTO, reader: jspb.BinaryReader): EffectDTO;
}

export namespace EffectDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    type: EffectTypeEnumDTO,
    target: EffectTargetEnumDTO,
    mode: EffectModeEnumDTO,
    element: EffectElementEnumDTO,
    targetentity: string,
  }
}

export class EffectsDTO extends jspb.Message {
  getArrList(): Array<EffectDTO>;
  setArrList(value: Array<EffectDTO>): EffectsDTO;
  clearArrList(): EffectsDTO;
  addArr(value?: EffectDTO, index?: number): EffectDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EffectsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: EffectsDTO): EffectsDTO.AsObject;
  static serializeBinaryToWriter(message: EffectsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EffectsDTO;
  static deserializeBinaryFromReader(message: EffectsDTO, reader: jspb.BinaryReader): EffectsDTO;
}

export namespace EffectsDTO {
  export type AsObject = {
    arrList: Array<EffectDTO.AsObject>,
  }
}

export class ResistanceDTO extends jspb.Message {
  getId(): string;
  setId(value: string): ResistanceDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): ResistanceDTO;

  getName(): string;
  setName(value: string): ResistanceDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): ResistanceDTO;
  hasMetadata(): boolean;
  clearMetadata(): ResistanceDTO;

  getUser(): string;
  setUser(value: string): ResistanceDTO;

  getCampaign(): string;
  setCampaign(value: string): ResistanceDTO;

  getWorld(): string;
  setWorld(value: string): ResistanceDTO;

  getEffecttype(): EffectTypeEnumDTO;
  setEffecttype(value: EffectTypeEnumDTO): ResistanceDTO;

  getTargeteffect(): string;
  setTargeteffect(value: string): ResistanceDTO;

  getTargetentity(): string;
  setTargetentity(value: string): ResistanceDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResistanceDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ResistanceDTO): ResistanceDTO.AsObject;
  static serializeBinaryToWriter(message: ResistanceDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResistanceDTO;
  static deserializeBinaryFromReader(message: ResistanceDTO, reader: jspb.BinaryReader): ResistanceDTO;
}

export namespace ResistanceDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    effecttype: EffectTypeEnumDTO,
    targeteffect: string,
    targetentity: string,
  }
}

export class ResistancesDTO extends jspb.Message {
  getArrList(): Array<ResistanceDTO>;
  setArrList(value: Array<ResistanceDTO>): ResistancesDTO;
  clearArrList(): ResistancesDTO;
  addArr(value?: ResistanceDTO, index?: number): ResistanceDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResistancesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ResistancesDTO): ResistancesDTO.AsObject;
  static serializeBinaryToWriter(message: ResistancesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResistancesDTO;
  static deserializeBinaryFromReader(message: ResistancesDTO, reader: jspb.BinaryReader): ResistancesDTO;
}

export namespace ResistancesDTO {
  export type AsObject = {
    arrList: Array<ResistanceDTO.AsObject>,
  }
}

export class StatusDTO extends jspb.Message {
  getId(): string;
  setId(value: string): StatusDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): StatusDTO;

  getName(): string;
  setName(value: string): StatusDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): StatusDTO;
  hasMetadata(): boolean;
  clearMetadata(): StatusDTO;

  getUser(): string;
  setUser(value: string): StatusDTO;

  getCampaign(): string;
  setCampaign(value: string): StatusDTO;

  getWorld(): string;
  setWorld(value: string): StatusDTO;

  getType(): EffectTypeEnumDTO;
  setType(value: EffectTypeEnumDTO): StatusDTO;

  getEffectsList(): Array<string>;
  setEffectsList(value: Array<string>): StatusDTO;
  clearEffectsList(): StatusDTO;
  addEffects(value: string, index?: number): StatusDTO;

  getDuration(): number;
  setDuration(value: number): StatusDTO;

  getDescription(): string;
  setDescription(value: string): StatusDTO;

  getTargetentity(): string;
  setTargetentity(value: string): StatusDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StatusDTO): StatusDTO.AsObject;
  static serializeBinaryToWriter(message: StatusDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusDTO;
  static deserializeBinaryFromReader(message: StatusDTO, reader: jspb.BinaryReader): StatusDTO;
}

export namespace StatusDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    type: EffectTypeEnumDTO,
    effectsList: Array<string>,
    duration: number,
    description: string,
    targetentity: string,
  }
}

export class StatusesDTO extends jspb.Message {
  getArrList(): Array<StatusDTO>;
  setArrList(value: Array<StatusDTO>): StatusesDTO;
  clearArrList(): StatusesDTO;
  addArr(value?: StatusDTO, index?: number): StatusDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StatusesDTO): StatusesDTO.AsObject;
  static serializeBinaryToWriter(message: StatusesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusesDTO;
  static deserializeBinaryFromReader(message: StatusesDTO, reader: jspb.BinaryReader): StatusesDTO;
}

export namespace StatusesDTO {
  export type AsObject = {
    arrList: Array<StatusDTO.AsObject>,
  }
}

export class ItemSetDTO extends jspb.Message {
  getId(): string;
  setId(value: string): ItemSetDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): ItemSetDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): ItemSetDTO;
  hasMetadata(): boolean;
  clearMetadata(): ItemSetDTO;

  getUser(): string;
  setUser(value: string): ItemSetDTO;

  getCampaign(): string;
  setCampaign(value: string): ItemSetDTO;

  getWorld(): string;
  setWorld(value: string): ItemSetDTO;

  getSet(): GenerationInstructionDTO | undefined;
  setSet(value?: GenerationInstructionDTO): ItemSetDTO;
  hasSet(): boolean;
  clearSet(): ItemSetDTO;

  getTargetentity(): string;
  setTargetentity(value: string): ItemSetDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemSetDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemSetDTO): ItemSetDTO.AsObject;
  static serializeBinaryToWriter(message: ItemSetDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemSetDTO;
  static deserializeBinaryFromReader(message: ItemSetDTO, reader: jspb.BinaryReader): ItemSetDTO;
}

export namespace ItemSetDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    set?: GenerationInstructionDTO.AsObject,
    targetentity: string,
  }
}

export class ItemSetsDTO extends jspb.Message {
  getArrList(): Array<ItemSetDTO>;
  setArrList(value: Array<ItemSetDTO>): ItemSetsDTO;
  clearArrList(): ItemSetsDTO;
  addArr(value?: ItemSetDTO, index?: number): ItemSetDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemSetsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemSetsDTO): ItemSetsDTO.AsObject;
  static serializeBinaryToWriter(message: ItemSetsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemSetsDTO;
  static deserializeBinaryFromReader(message: ItemSetsDTO, reader: jspb.BinaryReader): ItemSetsDTO;
}

export namespace ItemSetsDTO {
  export type AsObject = {
    arrList: Array<ItemSetDTO.AsObject>,
  }
}

export class ItemDTO extends jspb.Message {
  getBlueprintid(): string;
  setBlueprintid(value: string): ItemDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): ItemDTO;
  hasMetadata(): boolean;
  clearMetadata(): ItemDTO;

  getTargetentity(): string;
  setTargetentity(value: string): ItemDTO;

  getId(): string;
  setId(value: string): ItemDTO;

  getName(): string;
  setName(value: string): ItemDTO;

  getDescription(): string;
  setDescription(value: string): ItemDTO;

  getSizeList(): Array<number>;
  setSizeList(value: Array<number>): ItemDTO;
  clearSizeList(): ItemDTO;
  addSize(value: number, index?: number): ItemDTO;

  getQuantity(): number;
  setQuantity(value: number): ItemDTO;

  getMaxquantity(): number;
  setMaxquantity(value: number): ItemDTO;

  getBasevalue(): number;
  setBasevalue(value: number): ItemDTO;

  getActions(): ItemActionsDTO | undefined;
  setActions(value?: ItemActionsDTO): ItemDTO;
  hasActions(): boolean;
  clearActions(): ItemDTO;

  getRequirements(): ItemRequirementsDTO | undefined;
  setRequirements(value?: ItemRequirementsDTO): ItemDTO;
  hasRequirements(): boolean;
  clearRequirements(): ItemDTO;

  getStackable(): boolean;
  setStackable(value: boolean): ItemDTO;

  getRepairable(): boolean;
  setRepairable(value: boolean): ItemDTO;

  getDrinkable(): boolean;
  setDrinkable(value: boolean): ItemDTO;

  getEdible(): boolean;
  setEdible(value: boolean): ItemDTO;

  getGridposition(): GridPositionDTO | undefined;
  setGridposition(value?: GridPositionDTO): ItemDTO;
  hasGridposition(): boolean;
  clearGridposition(): ItemDTO;

  getDurability(): number;
  setDurability(value: number): ItemDTO;

  getMaxdurability(): number;
  setMaxdurability(value: number): ItemDTO;

  getDamagepierce(): string;
  setDamagepierce(value: string): ItemDTO;

  getArmorclass(): number;
  setArmorclass(value: number): ItemDTO;

  getStealthdisadvantage(): boolean;
  setStealthdisadvantage(value: boolean): ItemDTO;

  getDamageslash(): string;
  setDamageslash(value: string): ItemDTO;

  getDamageblunt(): string;
  setDamageblunt(value: string): ItemDTO;

  getRange(): number;
  setRange(value: number): ItemDTO;

  getTwohanded(): boolean;
  setTwohanded(value: boolean): ItemDTO;

  getNutrition(): number;
  setNutrition(value: number): ItemDTO;

  getSpoilage(): number;
  setSpoilage(value: number): ItemDTO;

  getThirstquenched(): number;
  setThirstquenched(value: number): ItemDTO;

  getType(): string;
  setType(value: string): ItemDTO;

  getStorageslotList(): Array<string>;
  setStorageslotList(value: Array<string>): ItemDTO;
  clearStorageslotList(): ItemDTO;
  addStorageslot(value: string, index?: number): ItemDTO;

  getStorageslots(): StorageSlotsDTO | undefined;
  setStorageslots(value?: StorageSlotsDTO): ItemDTO;
  hasStorageslots(): boolean;
  clearStorageslots(): ItemDTO;

  getEquipmentslotList(): Array<string>;
  setEquipmentslotList(value: Array<string>): ItemDTO;
  clearEquipmentslotList(): ItemDTO;
  addEquipmentslot(value: string, index?: number): ItemDTO;

  getUser(): string;
  setUser(value: string): ItemDTO;

  getCampaign(): string;
  setCampaign(value: string): ItemDTO;

  getWorld(): string;
  setWorld(value: string): ItemDTO;

  getTrainedskill(): string;
  setTrainedskill(value: string): ItemDTO;

  getStorageslotdefinition(): StorageSlotDefinitionsDTO | undefined;
  setStorageslotdefinition(value?: StorageSlotDefinitionsDTO): ItemDTO;
  hasStorageslotdefinition(): boolean;
  clearStorageslotdefinition(): ItemDTO;

  getWeight(): number;
  setWeight(value: number): ItemDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemDTO): ItemDTO.AsObject;
  static serializeBinaryToWriter(message: ItemDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemDTO;
  static deserializeBinaryFromReader(message: ItemDTO, reader: jspb.BinaryReader): ItemDTO;
}

export namespace ItemDTO {
  export type AsObject = {
    blueprintid: string,
    metadata?: Metadata.AsObject,
    targetentity: string,
    id: string,
    name: string,
    description: string,
    sizeList: Array<number>,
    quantity: number,
    maxquantity: number,
    basevalue: number,
    actions?: ItemActionsDTO.AsObject,
    requirements?: ItemRequirementsDTO.AsObject,
    stackable: boolean,
    repairable: boolean,
    drinkable: boolean,
    edible: boolean,
    gridposition?: GridPositionDTO.AsObject,
    durability: number,
    maxdurability: number,
    damagepierce: string,
    armorclass: number,
    stealthdisadvantage: boolean,
    damageslash: string,
    damageblunt: string,
    range: number,
    twohanded: boolean,
    nutrition: number,
    spoilage: number,
    thirstquenched: number,
    type: string,
    storageslotList: Array<string>,
    storageslots?: StorageSlotsDTO.AsObject,
    equipmentslotList: Array<string>,
    user: string,
    campaign: string,
    world: string,
    trainedskill: string,
    storageslotdefinition?: StorageSlotDefinitionsDTO.AsObject,
    weight: number,
  }
}

export class ItemsDTO extends jspb.Message {
  getArrList(): Array<ItemDTO>;
  setArrList(value: Array<ItemDTO>): ItemsDTO;
  clearArrList(): ItemsDTO;
  addArr(value?: ItemDTO, index?: number): ItemDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemsDTO): ItemsDTO.AsObject;
  static serializeBinaryToWriter(message: ItemsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemsDTO;
  static deserializeBinaryFromReader(message: ItemsDTO, reader: jspb.BinaryReader): ItemsDTO;
}

export namespace ItemsDTO {
  export type AsObject = {
    arrList: Array<ItemDTO.AsObject>,
  }
}

export class ItemActionsDTO extends jspb.Message {
  getActionsList(): Array<ItemActionEnumDTO>;
  setActionsList(value: Array<ItemActionEnumDTO>): ItemActionsDTO;
  clearActionsList(): ItemActionsDTO;
  addActions(value: ItemActionEnumDTO, index?: number): ItemActionsDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemActionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemActionsDTO): ItemActionsDTO.AsObject;
  static serializeBinaryToWriter(message: ItemActionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemActionsDTO;
  static deserializeBinaryFromReader(message: ItemActionsDTO, reader: jspb.BinaryReader): ItemActionsDTO;
}

export namespace ItemActionsDTO {
  export type AsObject = {
    actionsList: Array<ItemActionEnumDTO>,
  }
}

export class StorageSlotDTO extends jspb.Message {
  getId(): string;
  setId(value: string): StorageSlotDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): StorageSlotDTO;

  getName(): string;
  setName(value: string): StorageSlotDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): StorageSlotDTO;
  hasMetadata(): boolean;
  clearMetadata(): StorageSlotDTO;

  getUser(): string;
  setUser(value: string): StorageSlotDTO;

  getCampaign(): string;
  setCampaign(value: string): StorageSlotDTO;

  getWorld(): string;
  setWorld(value: string): StorageSlotDTO;

  getGridList(): Array<number>;
  setGridList(value: Array<number>): StorageSlotDTO;
  clearGridList(): StorageSlotDTO;
  addGrid(value: number, index?: number): StorageSlotDTO;

  getGridstate(): StorageGridDTO | undefined;
  setGridstate(value?: StorageGridDTO): StorageSlotDTO;
  hasGridstate(): boolean;
  clearGridstate(): StorageSlotDTO;

  getMaxweight(): number;
  setMaxweight(value: number): StorageSlotDTO;

  getParentitem(): string;
  setParentitem(value: string): StorageSlotDTO;

  getStoreditems(): ItemsDTO | undefined;
  setStoreditems(value?: ItemsDTO): StorageSlotDTO;
  hasStoreditems(): boolean;
  clearStoreditems(): StorageSlotDTO;

  getTargetentity(): string;
  setTargetentity(value: string): StorageSlotDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSlotDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSlotDTO): StorageSlotDTO.AsObject;
  static serializeBinaryToWriter(message: StorageSlotDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSlotDTO;
  static deserializeBinaryFromReader(message: StorageSlotDTO, reader: jspb.BinaryReader): StorageSlotDTO;
}

export namespace StorageSlotDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    gridList: Array<number>,
    gridstate?: StorageGridDTO.AsObject,
    maxweight: number,
    parentitem: string,
    storeditems?: ItemsDTO.AsObject,
    targetentity: string,
  }
}

export class StorageSlotsDTO extends jspb.Message {
  getArrList(): Array<StorageSlotDTO>;
  setArrList(value: Array<StorageSlotDTO>): StorageSlotsDTO;
  clearArrList(): StorageSlotsDTO;
  addArr(value?: StorageSlotDTO, index?: number): StorageSlotDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSlotsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSlotsDTO): StorageSlotsDTO.AsObject;
  static serializeBinaryToWriter(message: StorageSlotsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSlotsDTO;
  static deserializeBinaryFromReader(message: StorageSlotsDTO, reader: jspb.BinaryReader): StorageSlotsDTO;
}

export namespace StorageSlotsDTO {
  export type AsObject = {
    arrList: Array<StorageSlotDTO.AsObject>,
  }
}

export class StorageGridDTO extends jspb.Message {
  getCellsList(): Array<StorageGridCellDTO>;
  setCellsList(value: Array<StorageGridCellDTO>): StorageGridDTO;
  clearCellsList(): StorageGridDTO;
  addCells(value?: StorageGridCellDTO, index?: number): StorageGridCellDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageGridDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StorageGridDTO): StorageGridDTO.AsObject;
  static serializeBinaryToWriter(message: StorageGridDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageGridDTO;
  static deserializeBinaryFromReader(message: StorageGridDTO, reader: jspb.BinaryReader): StorageGridDTO;
}

export namespace StorageGridDTO {
  export type AsObject = {
    cellsList: Array<StorageGridCellDTO.AsObject>,
  }
}

export class StorageGridCellDTO extends jspb.Message {
  getRow(): number;
  setRow(value: number): StorageGridCellDTO;

  getColumn(): number;
  setColumn(value: number): StorageGridCellDTO;

  getValue(): string;
  setValue(value: string): StorageGridCellDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageGridCellDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StorageGridCellDTO): StorageGridCellDTO.AsObject;
  static serializeBinaryToWriter(message: StorageGridCellDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageGridCellDTO;
  static deserializeBinaryFromReader(message: StorageGridCellDTO, reader: jspb.BinaryReader): StorageGridCellDTO;
}

export namespace StorageGridCellDTO {
  export type AsObject = {
    row: number,
    column: number,
    value: string,
  }
}

export class ItemRequirementDTO extends jspb.Message {
  getType(): string;
  setType(value: string): ItemRequirementDTO;

  getName(): string;
  setName(value: string): ItemRequirementDTO;

  getNumber(): number;
  setNumber(value: number): ItemRequirementDTO;

  getFlag(): boolean;
  setFlag(value: boolean): ItemRequirementDTO;

  getClazz(): string;
  setClazz(value: string): ItemRequirementDTO;

  getValueCase(): ItemRequirementDTO.ValueCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemRequirementDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemRequirementDTO): ItemRequirementDTO.AsObject;
  static serializeBinaryToWriter(message: ItemRequirementDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemRequirementDTO;
  static deserializeBinaryFromReader(message: ItemRequirementDTO, reader: jspb.BinaryReader): ItemRequirementDTO;
}

export namespace ItemRequirementDTO {
  export type AsObject = {
    type: string,
    name: string,
    number: number,
    flag: boolean,
    clazz: string,
  }

  export enum ValueCase { 
    VALUE_NOT_SET = 0,
    NUMBER = 3,
    FLAG = 4,
  }
}

export class ItemRequirementsDTO extends jspb.Message {
  getArrList(): Array<ItemRequirementDTO>;
  setArrList(value: Array<ItemRequirementDTO>): ItemRequirementsDTO;
  clearArrList(): ItemRequirementsDTO;
  addArr(value?: ItemRequirementDTO, index?: number): ItemRequirementDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemRequirementsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemRequirementsDTO): ItemRequirementsDTO.AsObject;
  static serializeBinaryToWriter(message: ItemRequirementsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemRequirementsDTO;
  static deserializeBinaryFromReader(message: ItemRequirementsDTO, reader: jspb.BinaryReader): ItemRequirementsDTO;
}

export namespace ItemRequirementsDTO {
  export type AsObject = {
    arrList: Array<ItemRequirementDTO.AsObject>,
  }
}

export class CharacterDTO extends jspb.Message {
  getId(): string;
  setId(value: string): CharacterDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): CharacterDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): CharacterDTO;
  hasMetadata(): boolean;
  clearMetadata(): CharacterDTO;

  getUser(): string;
  setUser(value: string): CharacterDTO;

  getCampaign(): string;
  setCampaign(value: string): CharacterDTO;

  getWorld(): string;
  setWorld(value: string): CharacterDTO;

  getFirstname(): string;
  setFirstname(value: string): CharacterDTO;

  getLastname(): string;
  setLastname(value: string): CharacterDTO;

  getRace(): string;
  setRace(value: string): CharacterDTO;

  getGender(): GenderEnumDTO;
  setGender(value: GenderEnumDTO): CharacterDTO;

  getBirthsign(): string;
  setBirthsign(value: string): CharacterDTO;

  getBirthyear(): number;
  setBirthyear(value: number): CharacterDTO;

  getBirthmonth(): string;
  setBirthmonth(value: string): CharacterDTO;

  getBirthday(): number;
  setBirthday(value: number): CharacterDTO;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): CharacterDTO;

  getEquipmentslots(): EquipmentSlotsDTO | undefined;
  setEquipmentslots(value?: EquipmentSlotsDTO): CharacterDTO;
  hasEquipmentslots(): boolean;
  clearEquipmentslots(): CharacterDTO;

  getProfessionsList(): Array<string>;
  setProfessionsList(value: Array<string>): CharacterDTO;
  clearProfessionsList(): CharacterDTO;
  addProfessions(value: string, index?: number): CharacterDTO;

  getMemorypoolsList(): Array<string>;
  setMemorypoolsList(value: Array<string>): CharacterDTO;
  clearMemorypoolsList(): CharacterDTO;
  addMemorypools(value: string, index?: number): CharacterDTO;

  getCharactermemoriesList(): Array<string>;
  setCharactermemoriesList(value: Array<string>): CharacterDTO;
  clearCharactermemoriesList(): CharacterDTO;
  addCharactermemories(value: string, index?: number): CharacterDTO;

  getEnneagramtype(): string;
  setEnneagramtype(value: string): CharacterDTO;

  getTraitsList(): Array<string>;
  setTraitsList(value: Array<string>): CharacterDTO;
  clearTraitsList(): CharacterDTO;
  addTraits(value: string, index?: number): CharacterDTO;

  getDiseasesList(): Array<string>;
  setDiseasesList(value: Array<string>): CharacterDTO;
  clearDiseasesList(): CharacterDTO;
  addDiseases(value: string, index?: number): CharacterDTO;

  getAddictionsList(): Array<string>;
  setAddictionsList(value: Array<string>): CharacterDTO;
  clearAddictionsList(): CharacterDTO;
  addAddictions(value: string, index?: number): CharacterDTO;

  getFactionsList(): Array<string>;
  setFactionsList(value: Array<string>): CharacterDTO;
  clearFactionsList(): CharacterDTO;
  addFactions(value: string, index?: number): CharacterDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CharacterDTO;
  clearTagsList(): CharacterDTO;
  addTags(value: string, index?: number): CharacterDTO;

  getTargetentity(): string;
  setTargetentity(value: string): CharacterDTO;

  getBirthera(): string;
  setBirthera(value: string): CharacterDTO;

  getPastexperiencesList(): Array<string>;
  setPastexperiencesList(value: Array<string>): CharacterDTO;
  clearPastexperiencesList(): CharacterDTO;
  addPastexperiences(value: string, index?: number): CharacterDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterDTO): CharacterDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterDTO;
  static deserializeBinaryFromReader(message: CharacterDTO, reader: jspb.BinaryReader): CharacterDTO;
}

export namespace CharacterDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    firstname: string,
    lastname: string,
    race: string,
    gender: GenderEnumDTO,
    birthsign: string,
    birthyear: number,
    birthmonth: string,
    birthday: number,
    skillsMap: Array<[string, number]>,
    equipmentslots?: EquipmentSlotsDTO.AsObject,
    professionsList: Array<string>,
    memorypoolsList: Array<string>,
    charactermemoriesList: Array<string>,
    enneagramtype: string,
    traitsList: Array<string>,
    diseasesList: Array<string>,
    addictionsList: Array<string>,
    factionsList: Array<string>,
    tagsList: Array<string>,
    targetentity: string,
    birthera: string,
    pastexperiencesList: Array<string>,
  }
}

export class CharactersDTO extends jspb.Message {
  getArrList(): Array<CharacterDTO>;
  setArrList(value: Array<CharacterDTO>): CharactersDTO;
  clearArrList(): CharactersDTO;
  addArr(value?: CharacterDTO, index?: number): CharacterDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharactersDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharactersDTO): CharactersDTO.AsObject;
  static serializeBinaryToWriter(message: CharactersDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharactersDTO;
  static deserializeBinaryFromReader(message: CharactersDTO, reader: jspb.BinaryReader): CharactersDTO;
}

export namespace CharactersDTO {
  export type AsObject = {
    arrList: Array<CharacterDTO.AsObject>,
  }
}

export class AddictionDTO extends jspb.Message {
  getId(): string;
  setId(value: string): AddictionDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): AddictionDTO;

  getName(): string;
  setName(value: string): AddictionDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): AddictionDTO;
  hasMetadata(): boolean;
  clearMetadata(): AddictionDTO;

  getUser(): string;
  setUser(value: string): AddictionDTO;

  getCampaign(): string;
  setCampaign(value: string): AddictionDTO;

  getWorld(): string;
  setWorld(value: string): AddictionDTO;

  getCharactersList(): Array<string>;
  setCharactersList(value: Array<string>): AddictionDTO;
  clearCharactersList(): AddictionDTO;
  addCharacters(value: string, index?: number): AddictionDTO;

  getTargetentity(): string;
  setTargetentity(value: string): AddictionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddictionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: AddictionDTO): AddictionDTO.AsObject;
  static serializeBinaryToWriter(message: AddictionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddictionDTO;
  static deserializeBinaryFromReader(message: AddictionDTO, reader: jspb.BinaryReader): AddictionDTO;
}

export namespace AddictionDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    charactersList: Array<string>,
    targetentity: string,
  }
}

export class AddictionsDTO extends jspb.Message {
  getArrList(): Array<AddictionDTO>;
  setArrList(value: Array<AddictionDTO>): AddictionsDTO;
  clearArrList(): AddictionsDTO;
  addArr(value?: AddictionDTO, index?: number): AddictionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddictionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: AddictionsDTO): AddictionsDTO.AsObject;
  static serializeBinaryToWriter(message: AddictionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddictionsDTO;
  static deserializeBinaryFromReader(message: AddictionsDTO, reader: jspb.BinaryReader): AddictionsDTO;
}

export namespace AddictionsDTO {
  export type AsObject = {
    arrList: Array<AddictionDTO.AsObject>,
  }
}

export class CharacterMemoryDTO extends jspb.Message {
  getId(): string;
  setId(value: string): CharacterMemoryDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): CharacterMemoryDTO;

  getName(): string;
  setName(value: string): CharacterMemoryDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): CharacterMemoryDTO;
  hasMetadata(): boolean;
  clearMetadata(): CharacterMemoryDTO;

  getUser(): string;
  setUser(value: string): CharacterMemoryDTO;

  getCampaign(): string;
  setCampaign(value: string): CharacterMemoryDTO;

  getWorld(): string;
  setWorld(value: string): CharacterMemoryDTO;

  getCharacter(): string;
  setCharacter(value: string): CharacterMemoryDTO;

  getFactstatusList(): Array<FactStatusDTO>;
  setFactstatusList(value: Array<FactStatusDTO>): CharacterMemoryDTO;
  clearFactstatusList(): CharacterMemoryDTO;
  addFactstatus(value?: FactStatusDTO, index?: number): FactStatusDTO;

  getImportance(): number;
  setImportance(value: number): CharacterMemoryDTO;

  getResistance(): number;
  setResistance(value: number): CharacterMemoryDTO;

  getAccumulator(): number;
  setAccumulator(value: number): CharacterMemoryDTO;

  getAcquiredat(): number;
  setAcquiredat(value: number): CharacterMemoryDTO;

  getLastupdatedat(): number;
  setLastupdatedat(value: number): CharacterMemoryDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CharacterMemoryDTO;
  clearTagsList(): CharacterMemoryDTO;
  addTags(value: string, index?: number): CharacterMemoryDTO;

  getMemory(): string;
  setMemory(value: string): CharacterMemoryDTO;

  getTargetentity(): string;
  setTargetentity(value: string): CharacterMemoryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterMemoryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterMemoryDTO): CharacterMemoryDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterMemoryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterMemoryDTO;
  static deserializeBinaryFromReader(message: CharacterMemoryDTO, reader: jspb.BinaryReader): CharacterMemoryDTO;
}

export namespace CharacterMemoryDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    character: string,
    factstatusList: Array<FactStatusDTO.AsObject>,
    importance: number,
    resistance: number,
    accumulator: number,
    acquiredat: number,
    lastupdatedat: number,
    tagsList: Array<string>,
    memory: string,
    targetentity: string,
  }
}

export class CharacterMemoriesDTO extends jspb.Message {
  getArrList(): Array<CharacterMemoryDTO>;
  setArrList(value: Array<CharacterMemoryDTO>): CharacterMemoriesDTO;
  clearArrList(): CharacterMemoriesDTO;
  addArr(value?: CharacterMemoryDTO, index?: number): CharacterMemoryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterMemoriesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterMemoriesDTO): CharacterMemoriesDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterMemoriesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterMemoriesDTO;
  static deserializeBinaryFromReader(message: CharacterMemoriesDTO, reader: jspb.BinaryReader): CharacterMemoriesDTO;
}

export namespace CharacterMemoriesDTO {
  export type AsObject = {
    arrList: Array<CharacterMemoryDTO.AsObject>,
  }
}

export class FactStatusDTO extends jspb.Message {
  getFactid(): string;
  setFactid(value: string): FactStatusDTO;

  getStatus(): FactStatusEnumDTO;
  setStatus(value: FactStatusEnumDTO): FactStatusDTO;

  getClazz(): string;
  setClazz(value: string): FactStatusDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactStatusDTO.AsObject;
  static toObject(includeInstance: boolean, msg: FactStatusDTO): FactStatusDTO.AsObject;
  static serializeBinaryToWriter(message: FactStatusDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactStatusDTO;
  static deserializeBinaryFromReader(message: FactStatusDTO, reader: jspb.BinaryReader): FactStatusDTO;
}

export namespace FactStatusDTO {
  export type AsObject = {
    factid: string,
    status: FactStatusEnumDTO,
    clazz: string,
  }
}

export class FactStatusesDTO extends jspb.Message {
  getArrList(): Array<FactStatusDTO>;
  setArrList(value: Array<FactStatusDTO>): FactStatusesDTO;
  clearArrList(): FactStatusesDTO;
  addArr(value?: FactStatusDTO, index?: number): FactStatusDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactStatusesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: FactStatusesDTO): FactStatusesDTO.AsObject;
  static serializeBinaryToWriter(message: FactStatusesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactStatusesDTO;
  static deserializeBinaryFromReader(message: FactStatusesDTO, reader: jspb.BinaryReader): FactStatusesDTO;
}

export namespace FactStatusesDTO {
  export type AsObject = {
    arrList: Array<FactStatusDTO.AsObject>,
  }
}

export class TagDTO extends jspb.Message {
  getId(): string;
  setId(value: string): TagDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): TagDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): TagDTO;
  hasMetadata(): boolean;
  clearMetadata(): TagDTO;

  getLabel(): string;
  setLabel(value: string): TagDTO;

  getSubtype(): TagSubtypeEnumDTO;
  setSubtype(value: TagSubtypeEnumDTO): TagDTO;

  getUser(): string;
  setUser(value: string): TagDTO;

  getCampaign(): string;
  setCampaign(value: string): TagDTO;

  getWorld(): string;
  setWorld(value: string): TagDTO;

  getTargetentity(): string;
  setTargetentity(value: string): TagDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagDTO.AsObject;
  static toObject(includeInstance: boolean, msg: TagDTO): TagDTO.AsObject;
  static serializeBinaryToWriter(message: TagDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagDTO;
  static deserializeBinaryFromReader(message: TagDTO, reader: jspb.BinaryReader): TagDTO;
}

export namespace TagDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    metadata?: Metadata.AsObject,
    label: string,
    subtype: TagSubtypeEnumDTO,
    user: string,
    campaign: string,
    world: string,
    targetentity: string,
  }
}

export class TagsDTO extends jspb.Message {
  getArrList(): Array<TagDTO>;
  setArrList(value: Array<TagDTO>): TagsDTO;
  clearArrList(): TagsDTO;
  addArr(value?: TagDTO, index?: number): TagDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TagsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: TagsDTO): TagsDTO.AsObject;
  static serializeBinaryToWriter(message: TagsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TagsDTO;
  static deserializeBinaryFromReader(message: TagsDTO, reader: jspb.BinaryReader): TagsDTO;
}

export namespace TagsDTO {
  export type AsObject = {
    arrList: Array<TagDTO.AsObject>,
  }
}

export class SkillDTO extends jspb.Message {
  getId(): string;
  setId(value: string): SkillDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): SkillDTO;

  getName(): string;
  setName(value: string): SkillDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): SkillDTO;
  hasMetadata(): boolean;
  clearMetadata(): SkillDTO;

  getUser(): string;
  setUser(value: string): SkillDTO;

  getCampaign(): string;
  setCampaign(value: string): SkillDTO;

  getWorld(): string;
  setWorld(value: string): SkillDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): SkillDTO;
  clearTagsList(): SkillDTO;
  addTags(value: string, index?: number): SkillDTO;

  getDescription(): string;
  setDescription(value: string): SkillDTO;

  getCategory(): SkillCategoryEnumDTO;
  setCategory(value: SkillCategoryEnumDTO): SkillDTO;

  getTargetentity(): string;
  setTargetentity(value: string): SkillDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SkillDTO): SkillDTO.AsObject;
  static serializeBinaryToWriter(message: SkillDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillDTO;
  static deserializeBinaryFromReader(message: SkillDTO, reader: jspb.BinaryReader): SkillDTO;
}

export namespace SkillDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    description: string,
    category: SkillCategoryEnumDTO,
    targetentity: string,
  }
}

export class SkillsDTO extends jspb.Message {
  getArrList(): Array<SkillDTO>;
  setArrList(value: Array<SkillDTO>): SkillsDTO;
  clearArrList(): SkillsDTO;
  addArr(value?: SkillDTO, index?: number): SkillDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SkillsDTO): SkillsDTO.AsObject;
  static serializeBinaryToWriter(message: SkillsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillsDTO;
  static deserializeBinaryFromReader(message: SkillsDTO, reader: jspb.BinaryReader): SkillsDTO;
}

export namespace SkillsDTO {
  export type AsObject = {
    arrList: Array<SkillDTO.AsObject>,
  }
}

export class TraitDTO extends jspb.Message {
  getId(): string;
  setId(value: string): TraitDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): TraitDTO;

  getName(): string;
  setName(value: string): TraitDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): TraitDTO;
  hasMetadata(): boolean;
  clearMetadata(): TraitDTO;

  getUser(): string;
  setUser(value: string): TraitDTO;

  getCampaign(): string;
  setCampaign(value: string): TraitDTO;

  getWorld(): string;
  setWorld(value: string): TraitDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): TraitDTO;
  clearTagsList(): TraitDTO;
  addTags(value: string, index?: number): TraitDTO;

  getTargetentity(): string;
  setTargetentity(value: string): TraitDTO;

  getType(): TraitTypeEnumDTO;
  setType(value: TraitTypeEnumDTO): TraitDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitDTO.AsObject;
  static toObject(includeInstance: boolean, msg: TraitDTO): TraitDTO.AsObject;
  static serializeBinaryToWriter(message: TraitDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitDTO;
  static deserializeBinaryFromReader(message: TraitDTO, reader: jspb.BinaryReader): TraitDTO;
}

export namespace TraitDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    targetentity: string,
    type: TraitTypeEnumDTO,
  }
}

export class TraitsDTO extends jspb.Message {
  getArrList(): Array<TraitDTO>;
  setArrList(value: Array<TraitDTO>): TraitsDTO;
  clearArrList(): TraitsDTO;
  addArr(value?: TraitDTO, index?: number): TraitDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TraitsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: TraitsDTO): TraitsDTO.AsObject;
  static serializeBinaryToWriter(message: TraitsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TraitsDTO;
  static deserializeBinaryFromReader(message: TraitsDTO, reader: jspb.BinaryReader): TraitsDTO;
}

export namespace TraitsDTO {
  export type AsObject = {
    arrList: Array<TraitDTO.AsObject>,
  }
}

export class DiseaseDTO extends jspb.Message {
  getId(): string;
  setId(value: string): DiseaseDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): DiseaseDTO;

  getName(): string;
  setName(value: string): DiseaseDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): DiseaseDTO;
  hasMetadata(): boolean;
  clearMetadata(): DiseaseDTO;

  getUser(): string;
  setUser(value: string): DiseaseDTO;

  getCampaign(): string;
  setCampaign(value: string): DiseaseDTO;

  getWorld(): string;
  setWorld(value: string): DiseaseDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): DiseaseDTO;
  clearTagsList(): DiseaseDTO;
  addTags(value: string, index?: number): DiseaseDTO;

  getDescription(): string;
  setDescription(value: string): DiseaseDTO;

  getSeverity(): DiseaseSeverityEnumDTO;
  setSeverity(value: DiseaseSeverityEnumDTO): DiseaseDTO;

  getCharactersList(): Array<string>;
  setCharactersList(value: Array<string>): DiseaseDTO;
  clearCharactersList(): DiseaseDTO;
  addCharacters(value: string, index?: number): DiseaseDTO;

  getTargetentity(): string;
  setTargetentity(value: string): DiseaseDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiseaseDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DiseaseDTO): DiseaseDTO.AsObject;
  static serializeBinaryToWriter(message: DiseaseDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiseaseDTO;
  static deserializeBinaryFromReader(message: DiseaseDTO, reader: jspb.BinaryReader): DiseaseDTO;
}

export namespace DiseaseDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    description: string,
    severity: DiseaseSeverityEnumDTO,
    charactersList: Array<string>,
    targetentity: string,
  }
}

export class DiseasesDTO extends jspb.Message {
  getArrList(): Array<DiseaseDTO>;
  setArrList(value: Array<DiseaseDTO>): DiseasesDTO;
  clearArrList(): DiseasesDTO;
  addArr(value?: DiseaseDTO, index?: number): DiseaseDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiseasesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DiseasesDTO): DiseasesDTO.AsObject;
  static serializeBinaryToWriter(message: DiseasesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiseasesDTO;
  static deserializeBinaryFromReader(message: DiseasesDTO, reader: jspb.BinaryReader): DiseasesDTO;
}

export namespace DiseasesDTO {
  export type AsObject = {
    arrList: Array<DiseaseDTO.AsObject>,
  }
}

export class FactDTO extends jspb.Message {
  getId(): string;
  setId(value: string): FactDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): FactDTO;

  getName(): string;
  setName(value: string): FactDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): FactDTO;
  hasMetadata(): boolean;
  clearMetadata(): FactDTO;

  getUser(): string;
  setUser(value: string): FactDTO;

  getCampaign(): string;
  setCampaign(value: string): FactDTO;

  getWorld(): string;
  setWorld(value: string): FactDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): FactDTO;
  clearTagsList(): FactDTO;
  addTags(value: string, index?: number): FactDTO;

  getDescription(): string;
  setDescription(value: string): FactDTO;

  getWeight(): number;
  setWeight(value: number): FactDTO;

  getTargetentity(): string;
  setTargetentity(value: string): FactDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactDTO.AsObject;
  static toObject(includeInstance: boolean, msg: FactDTO): FactDTO.AsObject;
  static serializeBinaryToWriter(message: FactDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactDTO;
  static deserializeBinaryFromReader(message: FactDTO, reader: jspb.BinaryReader): FactDTO;
}

export namespace FactDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    description: string,
    weight: number,
    targetentity: string,
  }
}

export class FactsDTO extends jspb.Message {
  getArrList(): Array<FactDTO>;
  setArrList(value: Array<FactDTO>): FactsDTO;
  clearArrList(): FactsDTO;
  addArr(value?: FactDTO, index?: number): FactDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: FactsDTO): FactsDTO.AsObject;
  static serializeBinaryToWriter(message: FactsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactsDTO;
  static deserializeBinaryFromReader(message: FactsDTO, reader: jspb.BinaryReader): FactsDTO;
}

export namespace FactsDTO {
  export type AsObject = {
    arrList: Array<FactDTO.AsObject>,
  }
}

export class FactionDTO extends jspb.Message {
  getId(): string;
  setId(value: string): FactionDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): FactionDTO;

  getName(): string;
  setName(value: string): FactionDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): FactionDTO;
  hasMetadata(): boolean;
  clearMetadata(): FactionDTO;

  getUser(): string;
  setUser(value: string): FactionDTO;

  getCampaign(): string;
  setCampaign(value: string): FactionDTO;

  getWorld(): string;
  setWorld(value: string): FactionDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): FactionDTO;
  clearTagsList(): FactionDTO;
  addTags(value: string, index?: number): FactionDTO;

  getTargetentity(): string;
  setTargetentity(value: string): FactionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: FactionDTO): FactionDTO.AsObject;
  static serializeBinaryToWriter(message: FactionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactionDTO;
  static deserializeBinaryFromReader(message: FactionDTO, reader: jspb.BinaryReader): FactionDTO;
}

export namespace FactionDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    targetentity: string,
  }
}

export class FactionsDTO extends jspb.Message {
  getArrList(): Array<FactionDTO>;
  setArrList(value: Array<FactionDTO>): FactionsDTO;
  clearArrList(): FactionsDTO;
  addArr(value?: FactionDTO, index?: number): FactionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: FactionsDTO): FactionsDTO.AsObject;
  static serializeBinaryToWriter(message: FactionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactionsDTO;
  static deserializeBinaryFromReader(message: FactionsDTO, reader: jspb.BinaryReader): FactionsDTO;
}

export namespace FactionsDTO {
  export type AsObject = {
    arrList: Array<FactionDTO.AsObject>,
  }
}

export class MemoryPoolDTO extends jspb.Message {
  getId(): string;
  setId(value: string): MemoryPoolDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): MemoryPoolDTO;

  getName(): string;
  setName(value: string): MemoryPoolDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): MemoryPoolDTO;
  hasMetadata(): boolean;
  clearMetadata(): MemoryPoolDTO;

  getUser(): string;
  setUser(value: string): MemoryPoolDTO;

  getCampaign(): string;
  setCampaign(value: string): MemoryPoolDTO;

  getWorld(): string;
  setWorld(value: string): MemoryPoolDTO;

  getDescription(): string;
  setDescription(value: string): MemoryPoolDTO;

  getMemorypoolentriesList(): Array<string>;
  setMemorypoolentriesList(value: Array<string>): MemoryPoolDTO;
  clearMemorypoolentriesList(): MemoryPoolDTO;
  addMemorypoolentries(value: string, index?: number): MemoryPoolDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): MemoryPoolDTO;
  clearTagsList(): MemoryPoolDTO;
  addTags(value: string, index?: number): MemoryPoolDTO;

  getTargetentity(): string;
  setTargetentity(value: string): MemoryPoolDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemoryPoolDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MemoryPoolDTO): MemoryPoolDTO.AsObject;
  static serializeBinaryToWriter(message: MemoryPoolDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemoryPoolDTO;
  static deserializeBinaryFromReader(message: MemoryPoolDTO, reader: jspb.BinaryReader): MemoryPoolDTO;
}

export namespace MemoryPoolDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    description: string,
    memorypoolentriesList: Array<string>,
    tagsList: Array<string>,
    targetentity: string,
  }
}

export class MemoryPoolsDTO extends jspb.Message {
  getArrList(): Array<MemoryPoolDTO>;
  setArrList(value: Array<MemoryPoolDTO>): MemoryPoolsDTO;
  clearArrList(): MemoryPoolsDTO;
  addArr(value?: MemoryPoolDTO, index?: number): MemoryPoolDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemoryPoolsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MemoryPoolsDTO): MemoryPoolsDTO.AsObject;
  static serializeBinaryToWriter(message: MemoryPoolsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemoryPoolsDTO;
  static deserializeBinaryFromReader(message: MemoryPoolsDTO, reader: jspb.BinaryReader): MemoryPoolsDTO;
}

export namespace MemoryPoolsDTO {
  export type AsObject = {
    arrList: Array<MemoryPoolDTO.AsObject>,
  }
}

export class MemoryPoolEntryDTO extends jspb.Message {
  getId(): string;
  setId(value: string): MemoryPoolEntryDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): MemoryPoolEntryDTO;

  getName(): string;
  setName(value: string): MemoryPoolEntryDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): MemoryPoolEntryDTO;
  hasMetadata(): boolean;
  clearMetadata(): MemoryPoolEntryDTO;

  getUser(): string;
  setUser(value: string): MemoryPoolEntryDTO;

  getCampaign(): string;
  setCampaign(value: string): MemoryPoolEntryDTO;

  getWorld(): string;
  setWorld(value: string): MemoryPoolEntryDTO;

  getMemorypool(): string;
  setMemorypool(value: string): MemoryPoolEntryDTO;

  getMemory(): string;
  setMemory(value: string): MemoryPoolEntryDTO;

  getProbability(): number;
  setProbability(value: number): MemoryPoolEntryDTO;

  getDefaultclarity(): number;
  setDefaultclarity(value: number): MemoryPoolEntryDTO;

  getDefaultimportance(): number;
  setDefaultimportance(value: number): MemoryPoolEntryDTO;

  getTargetentity(): string;
  setTargetentity(value: string): MemoryPoolEntryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemoryPoolEntryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MemoryPoolEntryDTO): MemoryPoolEntryDTO.AsObject;
  static serializeBinaryToWriter(message: MemoryPoolEntryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemoryPoolEntryDTO;
  static deserializeBinaryFromReader(message: MemoryPoolEntryDTO, reader: jspb.BinaryReader): MemoryPoolEntryDTO;
}

export namespace MemoryPoolEntryDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    memorypool: string,
    memory: string,
    probability: number,
    defaultclarity: number,
    defaultimportance: number,
    targetentity: string,
  }
}

export class MemoryPoolEntriesDTO extends jspb.Message {
  getArrList(): Array<MemoryPoolEntryDTO>;
  setArrList(value: Array<MemoryPoolEntryDTO>): MemoryPoolEntriesDTO;
  clearArrList(): MemoryPoolEntriesDTO;
  addArr(value?: MemoryPoolEntryDTO, index?: number): MemoryPoolEntryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemoryPoolEntriesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MemoryPoolEntriesDTO): MemoryPoolEntriesDTO.AsObject;
  static serializeBinaryToWriter(message: MemoryPoolEntriesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemoryPoolEntriesDTO;
  static deserializeBinaryFromReader(message: MemoryPoolEntriesDTO, reader: jspb.BinaryReader): MemoryPoolEntriesDTO;
}

export namespace MemoryPoolEntriesDTO {
  export type AsObject = {
    arrList: Array<MemoryPoolEntryDTO.AsObject>,
  }
}

export class CharacterProfessionDTO extends jspb.Message {
  getId(): string;
  setId(value: string): CharacterProfessionDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): CharacterProfessionDTO;

  getName(): string;
  setName(value: string): CharacterProfessionDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): CharacterProfessionDTO;
  hasMetadata(): boolean;
  clearMetadata(): CharacterProfessionDTO;

  getUser(): string;
  setUser(value: string): CharacterProfessionDTO;

  getCampaign(): string;
  setCampaign(value: string): CharacterProfessionDTO;

  getWorld(): string;
  setWorld(value: string): CharacterProfessionDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CharacterProfessionDTO;
  clearTagsList(): CharacterProfessionDTO;
  addTags(value: string, index?: number): CharacterProfessionDTO;

  getMemorypoolsList(): Array<string>;
  setMemorypoolsList(value: Array<string>): CharacterProfessionDTO;
  clearMemorypoolsList(): CharacterProfessionDTO;
  addMemorypools(value: string, index?: number): CharacterProfessionDTO;

  getTargetentity(): string;
  setTargetentity(value: string): CharacterProfessionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterProfessionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterProfessionDTO): CharacterProfessionDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterProfessionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterProfessionDTO;
  static deserializeBinaryFromReader(message: CharacterProfessionDTO, reader: jspb.BinaryReader): CharacterProfessionDTO;
}

export namespace CharacterProfessionDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    memorypoolsList: Array<string>,
    targetentity: string,
  }
}

export class CharacterProfessionsDTO extends jspb.Message {
  getArrList(): Array<CharacterProfessionDTO>;
  setArrList(value: Array<CharacterProfessionDTO>): CharacterProfessionsDTO;
  clearArrList(): CharacterProfessionsDTO;
  addArr(value?: CharacterProfessionDTO, index?: number): CharacterProfessionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterProfessionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterProfessionsDTO): CharacterProfessionsDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterProfessionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterProfessionsDTO;
  static deserializeBinaryFromReader(message: CharacterProfessionsDTO, reader: jspb.BinaryReader): CharacterProfessionsDTO;
}

export namespace CharacterProfessionsDTO {
  export type AsObject = {
    arrList: Array<CharacterProfessionDTO.AsObject>,
  }
}

export class EquipmentSlotDTO extends jspb.Message {
  getId(): string;
  setId(value: string): EquipmentSlotDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): EquipmentSlotDTO;

  getName(): string;
  setName(value: string): EquipmentSlotDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): EquipmentSlotDTO;
  hasMetadata(): boolean;
  clearMetadata(): EquipmentSlotDTO;

  getUser(): string;
  setUser(value: string): EquipmentSlotDTO;

  getCampaign(): string;
  setCampaign(value: string): EquipmentSlotDTO;

  getWorld(): string;
  setWorld(value: string): EquipmentSlotDTO;

  getAllowedentitiesList(): Array<string>;
  setAllowedentitiesList(value: Array<string>): EquipmentSlotDTO;
  clearAllowedentitiesList(): EquipmentSlotDTO;
  addAllowedentities(value: string, index?: number): EquipmentSlotDTO;

  getEquippeditem(): ItemDTO | undefined;
  setEquippeditem(value?: ItemDTO): EquipmentSlotDTO;
  hasEquippeditem(): boolean;
  clearEquippeditem(): EquipmentSlotDTO;

  getCharacter(): string;
  setCharacter(value: string): EquipmentSlotDTO;

  getTargetentity(): string;
  setTargetentity(value: string): EquipmentSlotDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EquipmentSlotDTO.AsObject;
  static toObject(includeInstance: boolean, msg: EquipmentSlotDTO): EquipmentSlotDTO.AsObject;
  static serializeBinaryToWriter(message: EquipmentSlotDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EquipmentSlotDTO;
  static deserializeBinaryFromReader(message: EquipmentSlotDTO, reader: jspb.BinaryReader): EquipmentSlotDTO;
}

export namespace EquipmentSlotDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    allowedentitiesList: Array<string>,
    equippeditem?: ItemDTO.AsObject,
    character: string,
    targetentity: string,
  }
}

export class EquipmentSlotsDTO extends jspb.Message {
  getArrList(): Array<EquipmentSlotDTO>;
  setArrList(value: Array<EquipmentSlotDTO>): EquipmentSlotsDTO;
  clearArrList(): EquipmentSlotsDTO;
  addArr(value?: EquipmentSlotDTO, index?: number): EquipmentSlotDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EquipmentSlotsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: EquipmentSlotsDTO): EquipmentSlotsDTO.AsObject;
  static serializeBinaryToWriter(message: EquipmentSlotsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EquipmentSlotsDTO;
  static deserializeBinaryFromReader(message: EquipmentSlotsDTO, reader: jspb.BinaryReader): EquipmentSlotsDTO;
}

export namespace EquipmentSlotsDTO {
  export type AsObject = {
    arrList: Array<EquipmentSlotDTO.AsObject>,
  }
}

export class BirthsignDTO extends jspb.Message {
  getId(): string;
  setId(value: string): BirthsignDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): BirthsignDTO;

  getName(): string;
  setName(value: string): BirthsignDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): BirthsignDTO;
  hasMetadata(): boolean;
  clearMetadata(): BirthsignDTO;

  getUser(): string;
  setUser(value: string): BirthsignDTO;

  getCampaign(): string;
  setCampaign(value: string): BirthsignDTO;

  getWorld(): string;
  setWorld(value: string): BirthsignDTO;

  getTargetentity(): string;
  setTargetentity(value: string): BirthsignDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BirthsignDTO.AsObject;
  static toObject(includeInstance: boolean, msg: BirthsignDTO): BirthsignDTO.AsObject;
  static serializeBinaryToWriter(message: BirthsignDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BirthsignDTO;
  static deserializeBinaryFromReader(message: BirthsignDTO, reader: jspb.BinaryReader): BirthsignDTO;
}

export namespace BirthsignDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    targetentity: string,
  }
}

export class BirthsignsDTO extends jspb.Message {
  getArrList(): Array<BirthsignDTO>;
  setArrList(value: Array<BirthsignDTO>): BirthsignsDTO;
  clearArrList(): BirthsignsDTO;
  addArr(value?: BirthsignDTO, index?: number): BirthsignDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BirthsignsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: BirthsignsDTO): BirthsignsDTO.AsObject;
  static serializeBinaryToWriter(message: BirthsignsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BirthsignsDTO;
  static deserializeBinaryFromReader(message: BirthsignsDTO, reader: jspb.BinaryReader): BirthsignsDTO;
}

export namespace BirthsignsDTO {
  export type AsObject = {
    arrList: Array<BirthsignDTO.AsObject>,
  }
}

export class RaceDTO extends jspb.Message {
  getId(): string;
  setId(value: string): RaceDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): RaceDTO;

  getName(): string;
  setName(value: string): RaceDTO;

  getEquipmentslotdefinitions(): EquipmentSlotDefinitionsDTO | undefined;
  setEquipmentslotdefinitions(value?: EquipmentSlotDefinitionsDTO): RaceDTO;
  hasEquipmentslotdefinitions(): boolean;
  clearEquipmentslotdefinitions(): RaceDTO;

  getUser(): string;
  setUser(value: string): RaceDTO;

  getCampaign(): string;
  setCampaign(value: string): RaceDTO;

  getWorld(): string;
  setWorld(value: string): RaceDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): RaceDTO;
  hasMetadata(): boolean;
  clearMetadata(): RaceDTO;

  getTargetentity(): string;
  setTargetentity(value: string): RaceDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RaceDTO.AsObject;
  static toObject(includeInstance: boolean, msg: RaceDTO): RaceDTO.AsObject;
  static serializeBinaryToWriter(message: RaceDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RaceDTO;
  static deserializeBinaryFromReader(message: RaceDTO, reader: jspb.BinaryReader): RaceDTO;
}

export namespace RaceDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    equipmentslotdefinitions?: EquipmentSlotDefinitionsDTO.AsObject,
    user: string,
    campaign: string,
    world: string,
    metadata?: Metadata.AsObject,
    targetentity: string,
  }
}

export class RacesDTO extends jspb.Message {
  getArrList(): Array<RaceDTO>;
  setArrList(value: Array<RaceDTO>): RacesDTO;
  clearArrList(): RacesDTO;
  addArr(value?: RaceDTO, index?: number): RaceDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RacesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: RacesDTO): RacesDTO.AsObject;
  static serializeBinaryToWriter(message: RacesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RacesDTO;
  static deserializeBinaryFromReader(message: RacesDTO, reader: jspb.BinaryReader): RacesDTO;
}

export namespace RacesDTO {
  export type AsObject = {
    arrList: Array<RaceDTO.AsObject>,
  }
}

export class EquipmentSlotDefinitionDTO extends jspb.Message {
  getName(): string;
  setName(value: string): EquipmentSlotDefinitionDTO;

  getAllowedentitiesList(): Array<string>;
  setAllowedentitiesList(value: Array<string>): EquipmentSlotDefinitionDTO;
  clearAllowedentitiesList(): EquipmentSlotDefinitionDTO;
  addAllowedentities(value: string, index?: number): EquipmentSlotDefinitionDTO;

  getClazz(): string;
  setClazz(value: string): EquipmentSlotDefinitionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EquipmentSlotDefinitionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: EquipmentSlotDefinitionDTO): EquipmentSlotDefinitionDTO.AsObject;
  static serializeBinaryToWriter(message: EquipmentSlotDefinitionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EquipmentSlotDefinitionDTO;
  static deserializeBinaryFromReader(message: EquipmentSlotDefinitionDTO, reader: jspb.BinaryReader): EquipmentSlotDefinitionDTO;
}

export namespace EquipmentSlotDefinitionDTO {
  export type AsObject = {
    name: string,
    allowedentitiesList: Array<string>,
    clazz: string,
  }
}

export class EquipmentSlotDefinitionsDTO extends jspb.Message {
  getArrList(): Array<EquipmentSlotDefinitionDTO>;
  setArrList(value: Array<EquipmentSlotDefinitionDTO>): EquipmentSlotDefinitionsDTO;
  clearArrList(): EquipmentSlotDefinitionsDTO;
  addArr(value?: EquipmentSlotDefinitionDTO, index?: number): EquipmentSlotDefinitionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EquipmentSlotDefinitionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: EquipmentSlotDefinitionsDTO): EquipmentSlotDefinitionsDTO.AsObject;
  static serializeBinaryToWriter(message: EquipmentSlotDefinitionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EquipmentSlotDefinitionsDTO;
  static deserializeBinaryFromReader(message: EquipmentSlotDefinitionsDTO, reader: jspb.BinaryReader): EquipmentSlotDefinitionsDTO;
}

export namespace EquipmentSlotDefinitionsDTO {
  export type AsObject = {
    arrList: Array<EquipmentSlotDefinitionDTO.AsObject>,
  }
}

export class StorageSlotDefinitionDTO extends jspb.Message {
  getGridList(): Array<number>;
  setGridList(value: Array<number>): StorageSlotDefinitionDTO;
  clearGridList(): StorageSlotDefinitionDTO;
  addGrid(value: number, index?: number): StorageSlotDefinitionDTO;

  getName(): string;
  setName(value: string): StorageSlotDefinitionDTO;

  getMaxweight(): number;
  setMaxweight(value: number): StorageSlotDefinitionDTO;

  getClazz(): string;
  setClazz(value: string): StorageSlotDefinitionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSlotDefinitionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSlotDefinitionDTO): StorageSlotDefinitionDTO.AsObject;
  static serializeBinaryToWriter(message: StorageSlotDefinitionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSlotDefinitionDTO;
  static deserializeBinaryFromReader(message: StorageSlotDefinitionDTO, reader: jspb.BinaryReader): StorageSlotDefinitionDTO;
}

export namespace StorageSlotDefinitionDTO {
  export type AsObject = {
    gridList: Array<number>,
    name: string,
    maxweight: number,
    clazz: string,
  }
}

export class StorageSlotDefinitionsDTO extends jspb.Message {
  getArrList(): Array<StorageSlotDefinitionDTO>;
  setArrList(value: Array<StorageSlotDefinitionDTO>): StorageSlotDefinitionsDTO;
  clearArrList(): StorageSlotDefinitionsDTO;
  addArr(value?: StorageSlotDefinitionDTO, index?: number): StorageSlotDefinitionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageSlotDefinitionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StorageSlotDefinitionsDTO): StorageSlotDefinitionsDTO.AsObject;
  static serializeBinaryToWriter(message: StorageSlotDefinitionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageSlotDefinitionsDTO;
  static deserializeBinaryFromReader(message: StorageSlotDefinitionsDTO, reader: jspb.BinaryReader): StorageSlotDefinitionsDTO;
}

export namespace StorageSlotDefinitionsDTO {
  export type AsObject = {
    arrList: Array<StorageSlotDefinitionDTO.AsObject>,
  }
}

export class MoodDTO extends jspb.Message {
  getId(): string;
  setId(value: string): MoodDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): MoodDTO;

  getName(): string;
  setName(value: string): MoodDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): MoodDTO;
  hasMetadata(): boolean;
  clearMetadata(): MoodDTO;

  getUser(): string;
  setUser(value: string): MoodDTO;

  getCampaign(): string;
  setCampaign(value: string): MoodDTO;

  getWorld(): string;
  setWorld(value: string): MoodDTO;

  getDescription(): string;
  setDescription(value: string): MoodDTO;

  getTargetentity(): string;
  setTargetentity(value: string): MoodDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoodDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MoodDTO): MoodDTO.AsObject;
  static serializeBinaryToWriter(message: MoodDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoodDTO;
  static deserializeBinaryFromReader(message: MoodDTO, reader: jspb.BinaryReader): MoodDTO;
}

export namespace MoodDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    description: string,
    targetentity: string,
  }
}

export class MoodsDTO extends jspb.Message {
  getArrList(): Array<MoodDTO>;
  setArrList(value: Array<MoodDTO>): MoodsDTO;
  clearArrList(): MoodsDTO;
  addArr(value?: MoodDTO, index?: number): MoodDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoodsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MoodsDTO): MoodsDTO.AsObject;
  static serializeBinaryToWriter(message: MoodsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoodsDTO;
  static deserializeBinaryFromReader(message: MoodsDTO, reader: jspb.BinaryReader): MoodsDTO;
}

export namespace MoodsDTO {
  export type AsObject = {
    arrList: Array<MoodDTO.AsObject>,
  }
}

export class ReligionDTO extends jspb.Message {
  getId(): string;
  setId(value: string): ReligionDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): ReligionDTO;

  getName(): string;
  setName(value: string): ReligionDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): ReligionDTO;
  hasMetadata(): boolean;
  clearMetadata(): ReligionDTO;

  getUser(): string;
  setUser(value: string): ReligionDTO;

  getCampaign(): string;
  setCampaign(value: string): ReligionDTO;

  getWorld(): string;
  setWorld(value: string): ReligionDTO;

  getDescription(): string;
  setDescription(value: string): ReligionDTO;

  getRituals(): ReligionRitualsDTO | undefined;
  setRituals(value?: ReligionRitualsDTO): ReligionDTO;
  hasRituals(): boolean;
  clearRituals(): ReligionDTO;

  getTenets(): ReligionTenetsDTO | undefined;
  setTenets(value?: ReligionTenetsDTO): ReligionDTO;
  hasTenets(): boolean;
  clearTenets(): ReligionDTO;

  getTargetentity(): string;
  setTargetentity(value: string): ReligionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReligionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ReligionDTO): ReligionDTO.AsObject;
  static serializeBinaryToWriter(message: ReligionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReligionDTO;
  static deserializeBinaryFromReader(message: ReligionDTO, reader: jspb.BinaryReader): ReligionDTO;
}

export namespace ReligionDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    description: string,
    rituals?: ReligionRitualsDTO.AsObject,
    tenets?: ReligionTenetsDTO.AsObject,
    targetentity: string,
  }
}

export class ReligionsDTO extends jspb.Message {
  getArrList(): Array<ReligionDTO>;
  setArrList(value: Array<ReligionDTO>): ReligionsDTO;
  clearArrList(): ReligionsDTO;
  addArr(value?: ReligionDTO, index?: number): ReligionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReligionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ReligionsDTO): ReligionsDTO.AsObject;
  static serializeBinaryToWriter(message: ReligionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReligionsDTO;
  static deserializeBinaryFromReader(message: ReligionsDTO, reader: jspb.BinaryReader): ReligionsDTO;
}

export namespace ReligionsDTO {
  export type AsObject = {
    arrList: Array<ReligionDTO.AsObject>,
  }
}

export class ReligionRitualDTO extends jspb.Message {
  getName(): string;
  setName(value: string): ReligionRitualDTO;

  getDescription(): string;
  setDescription(value: string): ReligionRitualDTO;

  getClazz(): string;
  setClazz(value: string): ReligionRitualDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReligionRitualDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ReligionRitualDTO): ReligionRitualDTO.AsObject;
  static serializeBinaryToWriter(message: ReligionRitualDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReligionRitualDTO;
  static deserializeBinaryFromReader(message: ReligionRitualDTO, reader: jspb.BinaryReader): ReligionRitualDTO;
}

export namespace ReligionRitualDTO {
  export type AsObject = {
    name: string,
    description: string,
    clazz: string,
  }
}

export class ReligionRitualsDTO extends jspb.Message {
  getArrList(): Array<ReligionRitualDTO>;
  setArrList(value: Array<ReligionRitualDTO>): ReligionRitualsDTO;
  clearArrList(): ReligionRitualsDTO;
  addArr(value?: ReligionRitualDTO, index?: number): ReligionRitualDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReligionRitualsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ReligionRitualsDTO): ReligionRitualsDTO.AsObject;
  static serializeBinaryToWriter(message: ReligionRitualsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReligionRitualsDTO;
  static deserializeBinaryFromReader(message: ReligionRitualsDTO, reader: jspb.BinaryReader): ReligionRitualsDTO;
}

export namespace ReligionRitualsDTO {
  export type AsObject = {
    arrList: Array<ReligionRitualDTO.AsObject>,
  }
}

export class ReligionTenetDTO extends jspb.Message {
  getName(): string;
  setName(value: string): ReligionTenetDTO;

  getDescription(): string;
  setDescription(value: string): ReligionTenetDTO;

  getClazz(): string;
  setClazz(value: string): ReligionTenetDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReligionTenetDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ReligionTenetDTO): ReligionTenetDTO.AsObject;
  static serializeBinaryToWriter(message: ReligionTenetDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReligionTenetDTO;
  static deserializeBinaryFromReader(message: ReligionTenetDTO, reader: jspb.BinaryReader): ReligionTenetDTO;
}

export namespace ReligionTenetDTO {
  export type AsObject = {
    name: string,
    description: string,
    clazz: string,
  }
}

export class ReligionTenetsDTO extends jspb.Message {
  getArrList(): Array<ReligionTenetDTO>;
  setArrList(value: Array<ReligionTenetDTO>): ReligionTenetsDTO;
  clearArrList(): ReligionTenetsDTO;
  addArr(value?: ReligionTenetDTO, index?: number): ReligionTenetDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReligionTenetsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ReligionTenetsDTO): ReligionTenetsDTO.AsObject;
  static serializeBinaryToWriter(message: ReligionTenetsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReligionTenetsDTO;
  static deserializeBinaryFromReader(message: ReligionTenetsDTO, reader: jspb.BinaryReader): ReligionTenetsDTO;
}

export namespace ReligionTenetsDTO {
  export type AsObject = {
    arrList: Array<ReligionTenetDTO.AsObject>,
  }
}

export class GridPositionDTO extends jspb.Message {
  getX(): number;
  setX(value: number): GridPositionDTO;

  getY(): number;
  setY(value: number): GridPositionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GridPositionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: GridPositionDTO): GridPositionDTO.AsObject;
  static serializeBinaryToWriter(message: GridPositionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GridPositionDTO;
  static deserializeBinaryFromReader(message: GridPositionDTO, reader: jspb.BinaryReader): GridPositionDTO;
}

export namespace GridPositionDTO {
  export type AsObject = {
    x: number,
    y: number,
  }
}

export class GenerationInstructionDTO extends jspb.Message {
  getBlueprintid(): string;
  setBlueprintid(value: string): GenerationInstructionDTO;

  getIdandquant(): IdAndQuantDTO | undefined;
  setIdandquant(value?: IdAndQuantDTO): GenerationInstructionDTO;
  hasIdandquant(): boolean;
  clearIdandquant(): GenerationInstructionDTO;

  getSimpleprob(): SimpleProbDTO | undefined;
  setSimpleprob(value?: SimpleProbDTO): GenerationInstructionDTO;
  hasSimpleprob(): boolean;
  clearSimpleprob(): GenerationInstructionDTO;

  getGaussianprob(): GaussianProbDTO | undefined;
  setGaussianprob(value?: GaussianProbDTO): GenerationInstructionDTO;
  hasGaussianprob(): boolean;
  clearGaussianprob(): GenerationInstructionDTO;

  getCombinator(): CombinatorDTO | undefined;
  setCombinator(value?: CombinatorDTO): GenerationInstructionDTO;
  hasCombinator(): boolean;
  clearCombinator(): GenerationInstructionDTO;

  getInstructionCase(): GenerationInstructionDTO.InstructionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerationInstructionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: GenerationInstructionDTO): GenerationInstructionDTO.AsObject;
  static serializeBinaryToWriter(message: GenerationInstructionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerationInstructionDTO;
  static deserializeBinaryFromReader(message: GenerationInstructionDTO, reader: jspb.BinaryReader): GenerationInstructionDTO;
}

export namespace GenerationInstructionDTO {
  export type AsObject = {
    blueprintid: string,
    idandquant?: IdAndQuantDTO.AsObject,
    simpleprob?: SimpleProbDTO.AsObject,
    gaussianprob?: GaussianProbDTO.AsObject,
    combinator?: CombinatorDTO.AsObject,
  }

  export enum InstructionCase { 
    INSTRUCTION_NOT_SET = 0,
    BLUEPRINTID = 1,
    IDANDQUANT = 2,
    SIMPLEPROB = 3,
    GAUSSIANPROB = 4,
    COMBINATOR = 5,
  }
}

export class GenerationInstructionsDTO extends jspb.Message {
  getArrList(): Array<GenerationInstructionDTO>;
  setArrList(value: Array<GenerationInstructionDTO>): GenerationInstructionsDTO;
  clearArrList(): GenerationInstructionsDTO;
  addArr(value?: GenerationInstructionDTO, index?: number): GenerationInstructionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerationInstructionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: GenerationInstructionsDTO): GenerationInstructionsDTO.AsObject;
  static serializeBinaryToWriter(message: GenerationInstructionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerationInstructionsDTO;
  static deserializeBinaryFromReader(message: GenerationInstructionsDTO, reader: jspb.BinaryReader): GenerationInstructionsDTO;
}

export namespace GenerationInstructionsDTO {
  export type AsObject = {
    arrList: Array<GenerationInstructionDTO.AsObject>,
  }
}

export class IdAndQuantDTO extends jspb.Message {
  getBlueprintid(): string;
  setBlueprintid(value: string): IdAndQuantDTO;

  getQuantity(): number;
  setQuantity(value: number): IdAndQuantDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdAndQuantDTO.AsObject;
  static toObject(includeInstance: boolean, msg: IdAndQuantDTO): IdAndQuantDTO.AsObject;
  static serializeBinaryToWriter(message: IdAndQuantDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdAndQuantDTO;
  static deserializeBinaryFromReader(message: IdAndQuantDTO, reader: jspb.BinaryReader): IdAndQuantDTO;
}

export namespace IdAndQuantDTO {
  export type AsObject = {
    blueprintid: string,
    quantity: number,
  }
}

export class IdsAndQuantsDTO extends jspb.Message {
  getArrList(): Array<IdAndQuantDTO>;
  setArrList(value: Array<IdAndQuantDTO>): IdsAndQuantsDTO;
  clearArrList(): IdsAndQuantsDTO;
  addArr(value?: IdAndQuantDTO, index?: number): IdAndQuantDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdsAndQuantsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: IdsAndQuantsDTO): IdsAndQuantsDTO.AsObject;
  static serializeBinaryToWriter(message: IdsAndQuantsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdsAndQuantsDTO;
  static deserializeBinaryFromReader(message: IdsAndQuantsDTO, reader: jspb.BinaryReader): IdsAndQuantsDTO;
}

export namespace IdsAndQuantsDTO {
  export type AsObject = {
    arrList: Array<IdAndQuantDTO.AsObject>,
  }
}

export class CharacterGenInstructionDTO extends jspb.Message {
  getBlueprintid(): string;
  setBlueprintid(value: string): CharacterGenInstructionDTO;

  getBackgroundblueprintid(): string;
  setBackgroundblueprintid(value: string): CharacterGenInstructionDTO;

  getTargetentity(): string;
  setTargetentity(value: string): CharacterGenInstructionDTO;

  getFirstname(): string;
  setFirstname(value: string): CharacterGenInstructionDTO;

  getLastname(): string;
  setLastname(value: string): CharacterGenInstructionDTO;

  getGender(): GenderEnumDTO;
  setGender(value: GenderEnumDTO): CharacterGenInstructionDTO;

  getBirthera(): string;
  setBirthera(value: string): CharacterGenInstructionDTO;

  getBirthyear(): number;
  setBirthyear(value: number): CharacterGenInstructionDTO;

  getBirthmonth(): string;
  setBirthmonth(value: string): CharacterGenInstructionDTO;

  getBirthday(): number;
  setBirthday(value: number): CharacterGenInstructionDTO;

  getBackgroundcustomization(): BackgroundCustomizationDTO | undefined;
  setBackgroundcustomization(value?: BackgroundCustomizationDTO): CharacterGenInstructionDTO;
  hasBackgroundcustomization(): boolean;
  clearBackgroundcustomization(): CharacterGenInstructionDTO;

  getBirthsign(): string;
  setBirthsign(value: string): CharacterGenInstructionDTO;

  getId(): string;
  setId(value: string): CharacterGenInstructionDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): CharacterGenInstructionDTO;
  hasMetadata(): boolean;
  clearMetadata(): CharacterGenInstructionDTO;

  getUser(): string;
  setUser(value: string): CharacterGenInstructionDTO;

  getCampaign(): string;
  setCampaign(value: string): CharacterGenInstructionDTO;

  getWorld(): string;
  setWorld(value: string): CharacterGenInstructionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterGenInstructionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterGenInstructionDTO): CharacterGenInstructionDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterGenInstructionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterGenInstructionDTO;
  static deserializeBinaryFromReader(message: CharacterGenInstructionDTO, reader: jspb.BinaryReader): CharacterGenInstructionDTO;
}

export namespace CharacterGenInstructionDTO {
  export type AsObject = {
    blueprintid: string,
    backgroundblueprintid: string,
    targetentity: string,
    firstname: string,
    lastname: string,
    gender: GenderEnumDTO,
    birthera: string,
    birthyear: number,
    birthmonth: string,
    birthday: number,
    backgroundcustomization?: BackgroundCustomizationDTO.AsObject,
    birthsign: string,
    id: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
  }
}

export class CharacterGenInstructions extends jspb.Message {
  getArrList(): Array<CharacterGenInstructionDTO>;
  setArrList(value: Array<CharacterGenInstructionDTO>): CharacterGenInstructions;
  clearArrList(): CharacterGenInstructions;
  addArr(value?: CharacterGenInstructionDTO, index?: number): CharacterGenInstructionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterGenInstructions.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterGenInstructions): CharacterGenInstructions.AsObject;
  static serializeBinaryToWriter(message: CharacterGenInstructions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterGenInstructions;
  static deserializeBinaryFromReader(message: CharacterGenInstructions, reader: jspb.BinaryReader): CharacterGenInstructions;
}

export namespace CharacterGenInstructions {
  export type AsObject = {
    arrList: Array<CharacterGenInstructionDTO.AsObject>,
  }
}

export class CharacterGroupGenInstructionDTO extends jspb.Message {
  getId(): string;
  setId(value: string): CharacterGroupGenInstructionDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): CharacterGroupGenInstructionDTO;

  getName(): string;
  setName(value: string): CharacterGroupGenInstructionDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): CharacterGroupGenInstructionDTO;
  hasMetadata(): boolean;
  clearMetadata(): CharacterGroupGenInstructionDTO;

  getUser(): string;
  setUser(value: string): CharacterGroupGenInstructionDTO;

  getCampaign(): string;
  setCampaign(value: string): CharacterGroupGenInstructionDTO;

  getWorld(): string;
  setWorld(value: string): CharacterGroupGenInstructionDTO;

  getSet(): CombinatorDTO | undefined;
  setSet(value?: CombinatorDTO): CharacterGroupGenInstructionDTO;
  hasSet(): boolean;
  clearSet(): CharacterGroupGenInstructionDTO;

  getTargetentity(): string;
  setTargetentity(value: string): CharacterGroupGenInstructionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterGroupGenInstructionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterGroupGenInstructionDTO): CharacterGroupGenInstructionDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterGroupGenInstructionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterGroupGenInstructionDTO;
  static deserializeBinaryFromReader(message: CharacterGroupGenInstructionDTO, reader: jspb.BinaryReader): CharacterGroupGenInstructionDTO;
}

export namespace CharacterGroupGenInstructionDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    set?: CombinatorDTO.AsObject,
    targetentity: string,
  }
}

export class CharacterGroupGenInstructionsDTO extends jspb.Message {
  getArrList(): Array<CharacterGroupGenInstructionDTO>;
  setArrList(value: Array<CharacterGroupGenInstructionDTO>): CharacterGroupGenInstructionsDTO;
  clearArrList(): CharacterGroupGenInstructionsDTO;
  addArr(value?: CharacterGroupGenInstructionDTO, index?: number): CharacterGroupGenInstructionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterGroupGenInstructionsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterGroupGenInstructionsDTO): CharacterGroupGenInstructionsDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterGroupGenInstructionsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterGroupGenInstructionsDTO;
  static deserializeBinaryFromReader(message: CharacterGroupGenInstructionsDTO, reader: jspb.BinaryReader): CharacterGroupGenInstructionsDTO;
}

export namespace CharacterGroupGenInstructionsDTO {
  export type AsObject = {
    arrList: Array<CharacterGroupGenInstructionDTO.AsObject>,
  }
}

export class BackgroundCustomizationDTO extends jspb.Message {
  getRace(): GenerationInstructionsDTO | undefined;
  setRace(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasRace(): boolean;
  clearRace(): BackgroundCustomizationDTO;

  getFaction(): GenerationInstructionsDTO | undefined;
  setFaction(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasFaction(): boolean;
  clearFaction(): BackgroundCustomizationDTO;

  getDisease(): GenerationInstructionsDTO | undefined;
  setDisease(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasDisease(): boolean;
  clearDisease(): BackgroundCustomizationDTO;

  getAddiction(): GenerationInstructionsDTO | undefined;
  setAddiction(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasAddiction(): boolean;
  clearAddiction(): BackgroundCustomizationDTO;

  getProfession(): GenerationInstructionsDTO | undefined;
  setProfession(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasProfession(): boolean;
  clearProfession(): BackgroundCustomizationDTO;

  getReligion(): GenerationInstructionsDTO | undefined;
  setReligion(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasReligion(): boolean;
  clearReligion(): BackgroundCustomizationDTO;

  getItemsets(): GenerationInstructionsDTO | undefined;
  setItemsets(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasItemsets(): boolean;
  clearItemsets(): BackgroundCustomizationDTO;

  getItems(): GenerationInstructionsDTO | undefined;
  setItems(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasItems(): boolean;
  clearItems(): BackgroundCustomizationDTO;

  getPastexpchild(): GenerationInstructionsDTO | undefined;
  setPastexpchild(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasPastexpchild(): boolean;
  clearPastexpchild(): BackgroundCustomizationDTO;

  getPastexpadult(): GenerationInstructionsDTO | undefined;
  setPastexpadult(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasPastexpadult(): boolean;
  clearPastexpadult(): BackgroundCustomizationDTO;

  getSkillsets(): GenerationInstructionsDTO | undefined;
  setSkillsets(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasSkillsets(): boolean;
  clearSkillsets(): BackgroundCustomizationDTO;

  getSkilladjustments(): SkillAdjustmentsDTO | undefined;
  setSkilladjustments(value?: SkillAdjustmentsDTO): BackgroundCustomizationDTO;
  hasSkilladjustments(): boolean;
  clearSkilladjustments(): BackgroundCustomizationDTO;

  getPersonality(): GenerationInstructionsDTO | undefined;
  setPersonality(value?: GenerationInstructionsDTO): BackgroundCustomizationDTO;
  hasPersonality(): boolean;
  clearPersonality(): BackgroundCustomizationDTO;

  getGender(): GenerationInstructionDTO | undefined;
  setGender(value?: GenerationInstructionDTO): BackgroundCustomizationDTO;
  hasGender(): boolean;
  clearGender(): BackgroundCustomizationDTO;

  getClazz(): string;
  setClazz(value: string): BackgroundCustomizationDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BackgroundCustomizationDTO.AsObject;
  static toObject(includeInstance: boolean, msg: BackgroundCustomizationDTO): BackgroundCustomizationDTO.AsObject;
  static serializeBinaryToWriter(message: BackgroundCustomizationDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BackgroundCustomizationDTO;
  static deserializeBinaryFromReader(message: BackgroundCustomizationDTO, reader: jspb.BinaryReader): BackgroundCustomizationDTO;
}

export namespace BackgroundCustomizationDTO {
  export type AsObject = {
    race?: GenerationInstructionsDTO.AsObject,
    faction?: GenerationInstructionsDTO.AsObject,
    disease?: GenerationInstructionsDTO.AsObject,
    addiction?: GenerationInstructionsDTO.AsObject,
    profession?: GenerationInstructionsDTO.AsObject,
    religion?: GenerationInstructionsDTO.AsObject,
    itemsets?: GenerationInstructionsDTO.AsObject,
    items?: GenerationInstructionsDTO.AsObject,
    pastexpchild?: GenerationInstructionsDTO.AsObject,
    pastexpadult?: GenerationInstructionsDTO.AsObject,
    skillsets?: GenerationInstructionsDTO.AsObject,
    skilladjustments?: SkillAdjustmentsDTO.AsObject,
    personality?: GenerationInstructionsDTO.AsObject,
    gender?: GenerationInstructionDTO.AsObject,
    clazz: string,
  }
}

export class SkillAdjustmentsDTO extends jspb.Message {
  getSkilladjustmentsMap(): jspb.Map<string, number>;
  clearSkilladjustmentsMap(): SkillAdjustmentsDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillAdjustmentsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SkillAdjustmentsDTO): SkillAdjustmentsDTO.AsObject;
  static serializeBinaryToWriter(message: SkillAdjustmentsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillAdjustmentsDTO;
  static deserializeBinaryFromReader(message: SkillAdjustmentsDTO, reader: jspb.BinaryReader): SkillAdjustmentsDTO;
}

export namespace SkillAdjustmentsDTO {
  export type AsObject = {
    skilladjustmentsMap: Array<[string, number]>,
  }
}

export class SimpleProbDTO extends jspb.Message {
  getCond(): ConditionEnumDTO;
  setCond(value: ConditionEnumDTO): SimpleProbDTO;

  getProbMap(): jspb.Map<string, number>;
  clearProbMap(): SimpleProbDTO;

  getClazz(): string;
  setClazz(value: string): SimpleProbDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleProbDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleProbDTO): SimpleProbDTO.AsObject;
  static serializeBinaryToWriter(message: SimpleProbDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleProbDTO;
  static deserializeBinaryFromReader(message: SimpleProbDTO, reader: jspb.BinaryReader): SimpleProbDTO;
}

export namespace SimpleProbDTO {
  export type AsObject = {
    cond: ConditionEnumDTO,
    probMap: Array<[string, number]>,
    clazz: string,
  }
}

export class GaussianProbDTO extends jspb.Message {
  getBlueprintid(): string;
  setBlueprintid(value: string): GaussianProbDTO;

  getProb(): number;
  setProb(value: number): GaussianProbDTO;

  getAvgquan(): number;
  setAvgquan(value: number): GaussianProbDTO;

  getStdev(): number;
  setStdev(value: number): GaussianProbDTO;

  getSkew(): number;
  setSkew(value: number): GaussianProbDTO;

  getClazz(): string;
  setClazz(value: string): GaussianProbDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GaussianProbDTO.AsObject;
  static toObject(includeInstance: boolean, msg: GaussianProbDTO): GaussianProbDTO.AsObject;
  static serializeBinaryToWriter(message: GaussianProbDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GaussianProbDTO;
  static deserializeBinaryFromReader(message: GaussianProbDTO, reader: jspb.BinaryReader): GaussianProbDTO;
}

export namespace GaussianProbDTO {
  export type AsObject = {
    blueprintid: string,
    prob: number,
    avgquan: number,
    stdev: number,
    skew: number,
    clazz: string,
  }
}

export class CombinatorDTO extends jspb.Message {
  getName(): string;
  setName(value: string): CombinatorDTO;

  getCond(): ConditionEnumDTO;
  setCond(value: ConditionEnumDTO): CombinatorDTO;

  getProb(): number;
  setProb(value: number): CombinatorDTO;

  getInstructionsList(): Array<GenerationInstructionDTO>;
  setInstructionsList(value: Array<GenerationInstructionDTO>): CombinatorDTO;
  clearInstructionsList(): CombinatorDTO;
  addInstructions(value?: GenerationInstructionDTO, index?: number): GenerationInstructionDTO;

  getClazz(): string;
  setClazz(value: string): CombinatorDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CombinatorDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CombinatorDTO): CombinatorDTO.AsObject;
  static serializeBinaryToWriter(message: CombinatorDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CombinatorDTO;
  static deserializeBinaryFromReader(message: CombinatorDTO, reader: jspb.BinaryReader): CombinatorDTO;
}

export namespace CombinatorDTO {
  export type AsObject = {
    name: string,
    cond: ConditionEnumDTO,
    prob: number,
    instructionsList: Array<GenerationInstructionDTO.AsObject>,
    clazz: string,
  }
}

export class PastExperienceDTO extends jspb.Message {
  getId(): string;
  setId(value: string): PastExperienceDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): PastExperienceDTO;

  getName(): string;
  setName(value: string): PastExperienceDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): PastExperienceDTO;
  hasMetadata(): boolean;
  clearMetadata(): PastExperienceDTO;

  getUser(): string;
  setUser(value: string): PastExperienceDTO;

  getCampaign(): string;
  setCampaign(value: string): PastExperienceDTO;

  getWorld(): string;
  setWorld(value: string): PastExperienceDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): PastExperienceDTO;
  clearTagsList(): PastExperienceDTO;
  addTags(value: string, index?: number): PastExperienceDTO;

  getType(): PastExperienceTypeEnumDTO;
  setType(value: PastExperienceTypeEnumDTO): PastExperienceDTO;

  getTargetentity(): string;
  setTargetentity(value: string): PastExperienceDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PastExperienceDTO.AsObject;
  static toObject(includeInstance: boolean, msg: PastExperienceDTO): PastExperienceDTO.AsObject;
  static serializeBinaryToWriter(message: PastExperienceDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PastExperienceDTO;
  static deserializeBinaryFromReader(message: PastExperienceDTO, reader: jspb.BinaryReader): PastExperienceDTO;
}

export namespace PastExperienceDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    type: PastExperienceTypeEnumDTO,
    targetentity: string,
  }
}

export class PastExperiencesDTO extends jspb.Message {
  getArrList(): Array<PastExperienceDTO>;
  setArrList(value: Array<PastExperienceDTO>): PastExperiencesDTO;
  clearArrList(): PastExperiencesDTO;
  addArr(value?: PastExperienceDTO, index?: number): PastExperienceDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PastExperiencesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: PastExperiencesDTO): PastExperiencesDTO.AsObject;
  static serializeBinaryToWriter(message: PastExperiencesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PastExperiencesDTO;
  static deserializeBinaryFromReader(message: PastExperiencesDTO, reader: jspb.BinaryReader): PastExperiencesDTO;
}

export namespace PastExperiencesDTO {
  export type AsObject = {
    arrList: Array<PastExperienceDTO.AsObject>,
  }
}

export class MemoryDTO extends jspb.Message {
  getId(): string;
  setId(value: string): MemoryDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): MemoryDTO;

  getName(): string;
  setName(value: string): MemoryDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): MemoryDTO;
  hasMetadata(): boolean;
  clearMetadata(): MemoryDTO;

  getUser(): string;
  setUser(value: string): MemoryDTO;

  getCampaign(): string;
  setCampaign(value: string): MemoryDTO;

  getWorld(): string;
  setWorld(value: string): MemoryDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): MemoryDTO;
  clearTagsList(): MemoryDTO;
  addTags(value: string, index?: number): MemoryDTO;

  getFacts(): FactsDTO | undefined;
  setFacts(value?: FactsDTO): MemoryDTO;
  hasFacts(): boolean;
  clearFacts(): MemoryDTO;

  getType(): MemoryTypeEnumDTO;
  setType(value: MemoryTypeEnumDTO): MemoryDTO;

  getDescription(): string;
  setDescription(value: string): MemoryDTO;

  getTargetentity(): string;
  setTargetentity(value: string): MemoryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemoryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MemoryDTO): MemoryDTO.AsObject;
  static serializeBinaryToWriter(message: MemoryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemoryDTO;
  static deserializeBinaryFromReader(message: MemoryDTO, reader: jspb.BinaryReader): MemoryDTO;
}

export namespace MemoryDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    facts?: FactsDTO.AsObject,
    type: MemoryTypeEnumDTO,
    description: string,
    targetentity: string,
  }
}

export class MemoriesDTO extends jspb.Message {
  getArrList(): Array<MemoryDTO>;
  setArrList(value: Array<MemoryDTO>): MemoriesDTO;
  clearArrList(): MemoriesDTO;
  addArr(value?: MemoryDTO, index?: number): MemoryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemoriesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: MemoriesDTO): MemoriesDTO.AsObject;
  static serializeBinaryToWriter(message: MemoriesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemoriesDTO;
  static deserializeBinaryFromReader(message: MemoriesDTO, reader: jspb.BinaryReader): MemoriesDTO;
}

export namespace MemoriesDTO {
  export type AsObject = {
    arrList: Array<MemoryDTO.AsObject>,
  }
}

export class SkillSetDTO extends jspb.Message {
  getId(): string;
  setId(value: string): SkillSetDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): SkillSetDTO;

  getName(): string;
  setName(value: string): SkillSetDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): SkillSetDTO;
  hasMetadata(): boolean;
  clearMetadata(): SkillSetDTO;

  getUser(): string;
  setUser(value: string): SkillSetDTO;

  getCampaign(): string;
  setCampaign(value: string): SkillSetDTO;

  getWorld(): string;
  setWorld(value: string): SkillSetDTO;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): SkillSetDTO;
  clearTagsList(): SkillSetDTO;
  addTags(value: string, index?: number): SkillSetDTO;

  getSkillimprovement(): SkillImprovementDTO | undefined;
  setSkillimprovement(value?: SkillImprovementDTO): SkillSetDTO;
  hasSkillimprovement(): boolean;
  clearSkillimprovement(): SkillSetDTO;

  getTargetentity(): string;
  setTargetentity(value: string): SkillSetDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillSetDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SkillSetDTO): SkillSetDTO.AsObject;
  static serializeBinaryToWriter(message: SkillSetDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillSetDTO;
  static deserializeBinaryFromReader(message: SkillSetDTO, reader: jspb.BinaryReader): SkillSetDTO;
}

export namespace SkillSetDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    tagsList: Array<string>,
    skillimprovement?: SkillImprovementDTO.AsObject,
    targetentity: string,
  }
}

export class SkillSetsDTO extends jspb.Message {
  getArrList(): Array<SkillSetDTO>;
  setArrList(value: Array<SkillSetDTO>): SkillSetsDTO;
  clearArrList(): SkillSetsDTO;
  addArr(value?: SkillSetDTO, index?: number): SkillSetDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillSetsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SkillSetsDTO): SkillSetsDTO.AsObject;
  static serializeBinaryToWriter(message: SkillSetsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillSetsDTO;
  static deserializeBinaryFromReader(message: SkillSetsDTO, reader: jspb.BinaryReader): SkillSetsDTO;
}

export namespace SkillSetsDTO {
  export type AsObject = {
    arrList: Array<SkillSetDTO.AsObject>,
  }
}

export class SkillImprovementDTO extends jspb.Message {
  getSkillimprovementMap(): jspb.Map<string, number>;
  clearSkillimprovementMap(): SkillImprovementDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SkillImprovementDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SkillImprovementDTO): SkillImprovementDTO.AsObject;
  static serializeBinaryToWriter(message: SkillImprovementDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SkillImprovementDTO;
  static deserializeBinaryFromReader(message: SkillImprovementDTO, reader: jspb.BinaryReader): SkillImprovementDTO;
}

export namespace SkillImprovementDTO {
  export type AsObject = {
    skillimprovementMap: Array<[string, number]>,
  }
}

export class PersonalityProfileDTO extends jspb.Message {
  getId(): string;
  setId(value: string): PersonalityProfileDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): PersonalityProfileDTO;

  getName(): string;
  setName(value: string): PersonalityProfileDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): PersonalityProfileDTO;
  hasMetadata(): boolean;
  clearMetadata(): PersonalityProfileDTO;

  getUser(): string;
  setUser(value: string): PersonalityProfileDTO;

  getCampaign(): string;
  setCampaign(value: string): PersonalityProfileDTO;

  getWorld(): string;
  setWorld(value: string): PersonalityProfileDTO;

  getEnneagramtype(): string;
  setEnneagramtype(value: string): PersonalityProfileDTO;

  getTraitsList(): Array<GenerationInstructionDTO>;
  setTraitsList(value: Array<GenerationInstructionDTO>): PersonalityProfileDTO;
  clearTraitsList(): PersonalityProfileDTO;
  addTraits(value?: GenerationInstructionDTO, index?: number): GenerationInstructionDTO;

  getTargetentity(): string;
  setTargetentity(value: string): PersonalityProfileDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonalityProfileDTO.AsObject;
  static toObject(includeInstance: boolean, msg: PersonalityProfileDTO): PersonalityProfileDTO.AsObject;
  static serializeBinaryToWriter(message: PersonalityProfileDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonalityProfileDTO;
  static deserializeBinaryFromReader(message: PersonalityProfileDTO, reader: jspb.BinaryReader): PersonalityProfileDTO;
}

export namespace PersonalityProfileDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    enneagramtype: string,
    traitsList: Array<GenerationInstructionDTO.AsObject>,
    targetentity: string,
  }
}

export class PersonalityProfilesDTO extends jspb.Message {
  getArrList(): Array<PersonalityProfileDTO>;
  setArrList(value: Array<PersonalityProfileDTO>): PersonalityProfilesDTO;
  clearArrList(): PersonalityProfilesDTO;
  addArr(value?: PersonalityProfileDTO, index?: number): PersonalityProfileDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PersonalityProfilesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: PersonalityProfilesDTO): PersonalityProfilesDTO.AsObject;
  static serializeBinaryToWriter(message: PersonalityProfilesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PersonalityProfilesDTO;
  static deserializeBinaryFromReader(message: PersonalityProfilesDTO, reader: jspb.BinaryReader): PersonalityProfilesDTO;
}

export namespace PersonalityProfilesDTO {
  export type AsObject = {
    arrList: Array<PersonalityProfileDTO.AsObject>,
  }
}

export class NeedDTO extends jspb.Message {
  getId(): string;
  setId(value: string): NeedDTO;

  getBlueprintid(): string;
  setBlueprintid(value: string): NeedDTO;

  getName(): string;
  setName(value: string): NeedDTO;

  getMetadata(): Metadata | undefined;
  setMetadata(value?: Metadata): NeedDTO;
  hasMetadata(): boolean;
  clearMetadata(): NeedDTO;

  getUser(): string;
  setUser(value: string): NeedDTO;

  getCampaign(): string;
  setCampaign(value: string): NeedDTO;

  getWorld(): string;
  setWorld(value: string): NeedDTO;

  getDescription(): string;
  setDescription(value: string): NeedDTO;

  getType(): NeedTypeEnumDTO;
  setType(value: NeedTypeEnumDTO): NeedDTO;

  getLayer(): NeedLayerEnumDTO;
  setLayer(value: NeedLayerEnumDTO): NeedDTO;

  getTargetentity(): string;
  setTargetentity(value: string): NeedDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedDTO.AsObject;
  static toObject(includeInstance: boolean, msg: NeedDTO): NeedDTO.AsObject;
  static serializeBinaryToWriter(message: NeedDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedDTO;
  static deserializeBinaryFromReader(message: NeedDTO, reader: jspb.BinaryReader): NeedDTO;
}

export namespace NeedDTO {
  export type AsObject = {
    id: string,
    blueprintid: string,
    name: string,
    metadata?: Metadata.AsObject,
    user: string,
    campaign: string,
    world: string,
    description: string,
    type: NeedTypeEnumDTO,
    layer: NeedLayerEnumDTO,
    targetentity: string,
  }
}

export class NeedsDTO extends jspb.Message {
  getArrList(): Array<NeedDTO>;
  setArrList(value: Array<NeedDTO>): NeedsDTO;
  clearArrList(): NeedsDTO;
  addArr(value?: NeedDTO, index?: number): NeedDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NeedsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: NeedsDTO): NeedsDTO.AsObject;
  static serializeBinaryToWriter(message: NeedsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NeedsDTO;
  static deserializeBinaryFromReader(message: NeedsDTO, reader: jspb.BinaryReader): NeedsDTO;
}

export namespace NeedsDTO {
  export type AsObject = {
    arrList: Array<NeedDTO.AsObject>,
  }
}

export class UserDTO extends jspb.Message {
  getId(): string;
  setId(value: string): UserDTO;

  getBackgrounds(): BackgroundsDTO | undefined;
  setBackgrounds(value?: BackgroundsDTO): UserDTO;
  hasBackgrounds(): boolean;
  clearBackgrounds(): UserDTO;

  getWorlds(): WorldsDTO | undefined;
  setWorlds(value?: WorldsDTO): UserDTO;
  hasWorlds(): boolean;
  clearWorlds(): UserDTO;

  getCampaigns(): CampaignsDTO | undefined;
  setCampaigns(value?: CampaignsDTO): UserDTO;
  hasCampaigns(): boolean;
  clearCampaigns(): UserDTO;

  getAccount(): AccountDTO | undefined;
  setAccount(value?: AccountDTO): UserDTO;
  hasAccount(): boolean;
  clearAccount(): UserDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserDTO.AsObject;
  static toObject(includeInstance: boolean, msg: UserDTO): UserDTO.AsObject;
  static serializeBinaryToWriter(message: UserDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserDTO;
  static deserializeBinaryFromReader(message: UserDTO, reader: jspb.BinaryReader): UserDTO;
}

export namespace UserDTO {
  export type AsObject = {
    id: string,
    backgrounds?: BackgroundsDTO.AsObject,
    worlds?: WorldsDTO.AsObject,
    campaigns?: CampaignsDTO.AsObject,
    account?: AccountDTO.AsObject,
  }
}

export class UsersDTO extends jspb.Message {
  getArrList(): Array<UserDTO>;
  setArrList(value: Array<UserDTO>): UsersDTO;
  clearArrList(): UsersDTO;
  addArr(value?: UserDTO, index?: number): UserDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UsersDTO.AsObject;
  static toObject(includeInstance: boolean, msg: UsersDTO): UsersDTO.AsObject;
  static serializeBinaryToWriter(message: UsersDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UsersDTO;
  static deserializeBinaryFromReader(message: UsersDTO, reader: jspb.BinaryReader): UsersDTO;
}

export namespace UsersDTO {
  export type AsObject = {
    arrList: Array<UserDTO.AsObject>,
  }
}

export class AccountDTO extends jspb.Message {
  getId(): string;
  setId(value: string): AccountDTO;

  getUsername(): string;
  setUsername(value: string): AccountDTO;

  getEmail(): string;
  setEmail(value: string): AccountDTO;

  getRole(): string;
  setRole(value: string): AccountDTO;

  getUser(): string;
  setUser(value: string): AccountDTO;

  getPreferences(): PreferencesDTO | undefined;
  setPreferences(value?: PreferencesDTO): AccountDTO;
  hasPreferences(): boolean;
  clearPreferences(): AccountDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountDTO.AsObject;
  static toObject(includeInstance: boolean, msg: AccountDTO): AccountDTO.AsObject;
  static serializeBinaryToWriter(message: AccountDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountDTO;
  static deserializeBinaryFromReader(message: AccountDTO, reader: jspb.BinaryReader): AccountDTO;
}

export namespace AccountDTO {
  export type AsObject = {
    id: string,
    username: string,
    email: string,
    role: string,
    user: string,
    preferences?: PreferencesDTO.AsObject,
  }
}

export class PreferencesDTO extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreferencesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: PreferencesDTO): PreferencesDTO.AsObject;
  static serializeBinaryToWriter(message: PreferencesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreferencesDTO;
  static deserializeBinaryFromReader(message: PreferencesDTO, reader: jspb.BinaryReader): PreferencesDTO;
}

export namespace PreferencesDTO {
  export type AsObject = {
  }
}

export class WorldSettings extends jspb.Message {
  getSettingsMap(): jspb.Map<string, string>;
  clearSettingsMap(): WorldSettings;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldSettings.AsObject;
  static toObject(includeInstance: boolean, msg: WorldSettings): WorldSettings.AsObject;
  static serializeBinaryToWriter(message: WorldSettings, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldSettings;
  static deserializeBinaryFromReader(message: WorldSettings, reader: jspb.BinaryReader): WorldSettings;
}

export namespace WorldSettings {
  export type AsObject = {
    settingsMap: Array<[string, string]>,
  }
}

export class WorldDTO extends jspb.Message {
  getId(): string;
  setId(value: string): WorldDTO;

  getName(): string;
  setName(value: string): WorldDTO;

  getDescription(): string;
  setDescription(value: string): WorldDTO;

  getSettings(): WorldSettings | undefined;
  setSettings(value?: WorldSettings): WorldDTO;
  hasSettings(): boolean;
  clearSettings(): WorldDTO;

  getFrozen(): boolean;
  setFrozen(value: boolean): WorldDTO;

  getUser(): string;
  setUser(value: string): WorldDTO;

  getCampaigns(): CampaignsDTO | undefined;
  setCampaigns(value?: CampaignsDTO): WorldDTO;
  hasCampaigns(): boolean;
  clearCampaigns(): WorldDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldDTO.AsObject;
  static toObject(includeInstance: boolean, msg: WorldDTO): WorldDTO.AsObject;
  static serializeBinaryToWriter(message: WorldDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldDTO;
  static deserializeBinaryFromReader(message: WorldDTO, reader: jspb.BinaryReader): WorldDTO;
}

export namespace WorldDTO {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    settings?: WorldSettings.AsObject,
    frozen: boolean,
    user: string,
    campaigns?: CampaignsDTO.AsObject,
  }
}

export class WorldsDTO extends jspb.Message {
  getArrList(): Array<WorldDTO>;
  setArrList(value: Array<WorldDTO>): WorldsDTO;
  clearArrList(): WorldsDTO;
  addArr(value?: WorldDTO, index?: number): WorldDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: WorldsDTO): WorldsDTO.AsObject;
  static serializeBinaryToWriter(message: WorldsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldsDTO;
  static deserializeBinaryFromReader(message: WorldsDTO, reader: jspb.BinaryReader): WorldsDTO;
}

export namespace WorldsDTO {
  export type AsObject = {
    arrList: Array<WorldDTO.AsObject>,
  }
}

export class CampaignDTO extends jspb.Message {
  getId(): string;
  setId(value: string): CampaignDTO;

  getName(): string;
  setName(value: string): CampaignDTO;

  getDescription(): string;
  setDescription(value: string): CampaignDTO;

  getDynamicstateMap(): jspb.Map<string, string>;
  clearDynamicstateMap(): CampaignDTO;

  getCreatedat(): string;
  setCreatedat(value: string): CampaignDTO;

  getWorld(): string;
  setWorld(value: string): CampaignDTO;

  getUser(): string;
  setUser(value: string): CampaignDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignDTO): CampaignDTO.AsObject;
  static serializeBinaryToWriter(message: CampaignDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignDTO;
  static deserializeBinaryFromReader(message: CampaignDTO, reader: jspb.BinaryReader): CampaignDTO;
}

export namespace CampaignDTO {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    dynamicstateMap: Array<[string, string]>,
    createdat: string,
    world: string,
    user: string,
  }
}

export class CampaignsDTO extends jspb.Message {
  getArrList(): Array<CampaignDTO>;
  setArrList(value: Array<CampaignDTO>): CampaignsDTO;
  clearArrList(): CampaignsDTO;
  addArr(value?: CampaignDTO, index?: number): CampaignDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CampaignsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CampaignsDTO): CampaignsDTO.AsObject;
  static serializeBinaryToWriter(message: CampaignsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CampaignsDTO;
  static deserializeBinaryFromReader(message: CampaignsDTO, reader: jspb.BinaryReader): CampaignsDTO;
}

export namespace CampaignsDTO {
  export type AsObject = {
    arrList: Array<CampaignDTO.AsObject>,
  }
}

export class SearchQueryDTO extends jspb.Message {
  getFiltersList(): Array<QueryFilterDTO>;
  setFiltersList(value: Array<QueryFilterDTO>): SearchQueryDTO;
  clearFiltersList(): SearchQueryDTO;
  addFilters(value?: QueryFilterDTO, index?: number): QueryFilterDTO;

  getSortby(): SortByDTO | undefined;
  setSortby(value?: SortByDTO): SearchQueryDTO;
  hasSortby(): boolean;
  clearSortby(): SearchQueryDTO;

  getPage(): number;
  setPage(value: number): SearchQueryDTO;

  getPagesize(): number;
  setPagesize(value: number): SearchQueryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchQueryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SearchQueryDTO): SearchQueryDTO.AsObject;
  static serializeBinaryToWriter(message: SearchQueryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchQueryDTO;
  static deserializeBinaryFromReader(message: SearchQueryDTO, reader: jspb.BinaryReader): SearchQueryDTO;
}

export namespace SearchQueryDTO {
  export type AsObject = {
    filtersList: Array<QueryFilterDTO.AsObject>,
    sortby?: SortByDTO.AsObject,
    page: number,
    pagesize: number,
  }
}

export class QueryFilterDTO extends jspb.Message {
  getField(): string;
  setField(value: string): QueryFilterDTO;

  getOperator(): string;
  setOperator(value: string): QueryFilterDTO;

  getValue(): QueryFilterValueDTO | undefined;
  setValue(value?: QueryFilterValueDTO): QueryFilterDTO;
  hasValue(): boolean;
  clearValue(): QueryFilterDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFilterDTO.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFilterDTO): QueryFilterDTO.AsObject;
  static serializeBinaryToWriter(message: QueryFilterDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFilterDTO;
  static deserializeBinaryFromReader(message: QueryFilterDTO, reader: jspb.BinaryReader): QueryFilterDTO;
}

export namespace QueryFilterDTO {
  export type AsObject = {
    field: string,
    operator: string,
    value?: QueryFilterValueDTO.AsObject,
  }
}

export class QueryFilterValueDTO extends jspb.Message {
  getStringvalue(): string;
  setStringvalue(value: string): QueryFilterValueDTO;

  getNumbervalue(): number;
  setNumbervalue(value: number): QueryFilterValueDTO;

  getBoolvalue(): boolean;
  setBoolvalue(value: boolean): QueryFilterValueDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryFilterValueDTO.AsObject;
  static toObject(includeInstance: boolean, msg: QueryFilterValueDTO): QueryFilterValueDTO.AsObject;
  static serializeBinaryToWriter(message: QueryFilterValueDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryFilterValueDTO;
  static deserializeBinaryFromReader(message: QueryFilterValueDTO, reader: jspb.BinaryReader): QueryFilterValueDTO;
}

export namespace QueryFilterValueDTO {
  export type AsObject = {
    stringvalue: string,
    numbervalue: number,
    boolvalue: boolean,
  }
}

export class SortByDTO extends jspb.Message {
  getField(): string;
  setField(value: string): SortByDTO;

  getDirection(): string;
  setDirection(value: string): SortByDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SortByDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SortByDTO): SortByDTO.AsObject;
  static serializeBinaryToWriter(message: SortByDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SortByDTO;
  static deserializeBinaryFromReader(message: SortByDTO, reader: jspb.BinaryReader): SortByDTO;
}

export namespace SortByDTO {
  export type AsObject = {
    field: string,
    direction: string,
  }
}

export enum EffectTypeEnumDTO { 
  EFFECT_TYPE_DAMAGE = 0,
  EFFECT_TYPE_HEALING = 1,
  EFFECT_TYPE_BUFF = 2,
  EFFECT_TYPE_DEBUFF = 3,
  EFFECT_TYPE_RESISTANCE = 4,
  EFFECT_TYPE_STEALING = 5,
  EFFECT_TYPE_NEUTRAL = 6,
}
export enum EffectTargetEnumDTO { 
  EFFECT_TARGET_HEALTH = 0,
  EFFECT_TARGET_STAMINA = 1,
  EFFECT_TARGET_MANA = 2,
}
export enum EffectModeEnumDTO { 
  EFFECT_MODE_INSTANT = 0,
  EFFECT_MODE_GRADUAL = 1,
  EFFECT_MODE_PERSISTENT = 2,
}
export enum EffectElementEnumDTO { 
  EFFECT_ELEMENT_FIRE = 0,
  EFFECT_ELEMENT_FROST = 1,
  EFFECT_ELEMENT_POISON = 2,
  EFFECT_ELEMENT_SHOCK = 3,
}
export enum NeedTypeEnumDTO { 
  NEED_TYPE_DYNAMIC = 0,
  NEED_TYPE_THRESHOLD = 1,
  NEED_TYPE_EXTERNAL = 2,
}
export enum NeedLayerEnumDTO { 
  NEED_LAYER_PHYSIOLOGICAL = 0,
  NEED_LAYER_SAFETY = 1,
  NEED_LAYER_BELONGING_AND_LOVE = 2,
  NEED_LAYER_ESTEEM = 3,
  NEED_LAYER_COGNITIVE = 4,
  NEED_LAYER_AESTHETIC = 5,
  NEED_LAYER_SELF_ACTUALIZATION = 6,
  NEED_LAYER_TRANSCENDENCE = 7,
}
export enum MemoryTypeEnumDTO { 
  MEMORY_TYPE_GLOBAL = 0,
  MEMORY_TYPE_REGIONAL = 1,
  MEMORY_TYPE_EVENT_RELATED = 2,
  MEMORY_TYPE_HISTORIC = 3,
  MEMORY_TYPE_PERSONAL = 4,
}
export enum ConditionEnumDTO { 
  CONDITION_OR = 0,
  CONDITION_ANY = 1,
  CONDITION_AND = 2,
}
export enum PresetEnumDTO { 
  PRESET_DEFAULT = 0,
  PRESET_MORROWIND = 1,
}
export enum TagSubtypeEnumDTO { 
  TAG_SUBTYPE_MATERIAL = 0,
  TAG_SUBTYPE_CULTURE = 1,
  TAG_SUBTYPE_RELATION = 2,
  TAG_SUBTYPE_FACTION = 3,
  TAG_SUBTYPE_RELIGION = 4,
  TAG_SUBTYPE_WEAPON_QUALITY = 5,
  TAG_SUBTYPE_ARMOR_QUALITY = 6,
  TAG_SUBTYPE_WEAPON_TYPE = 7,
  TAG_SUBTYPE_STATUS = 8,
  TAG_SUBTYPE_QUEST = 9,
}
export enum FactStatusEnumDTO { 
  FACT_STATUS_ACCESSIBLE = 0,
  FACT_STATUS_INACCESSIBLE = 1,
}
export enum SkillCategoryEnumDTO { 
  SKILL_CATEGORY_CRAFTING = 0,
  SKILL_CATEGORY_MAGIC = 1,
  SKILL_CATEGORY_COMBAT = 2,
  SKILL_CATEGORY_STEALTH = 3,
  SKILL_CATEGORY_SOCIAL = 4,
}
export enum DataSourceEnumDTO { 
  DATA_SOURCE_WORLD = 0,
  DATA_SOURCE_CAMPAIGN = 1,
}
export enum GenderEnumDTO { 
  GENDER_MALE = 0,
  GENDER_FEMALE = 1,
}
export enum ItemActionEnumDTO { 
  ITEM_ACTION_ATTACK = 0,
  ITEM_ACTION_BLOCK = 1,
  ITEM_ACTION_USE = 2,
}
export enum TraitTypeEnumDTO { 
  TRAIT_CONGENITAL = 0,
  TRAIT_COPING = 1,
  TRAIT_EDUCATION = 2,
  TRAIT_FAITH = 3,
  TRAIT_HEALTH = 4,
  TRAIT_INFAMY = 5,
  TRAIT_LEVELED = 6,
  TRAIT_LIFESTYLE = 7,
  TRAIT_PERSONALITY = 8,
  TRAIT_PHYSICAL = 9,
}
export enum PastExperienceTypeEnumDTO { 
  PAST_EXPERIENCE_CHILD = 0,
  PAST_EXPERIENCE_ADULT = 1,
}
export enum DiseaseSeverityEnumDTO { 
  DISEASE_SEVERITY_MILD = 0,
  DISEASE_SEVERITY_MODERATE = 1,
  DISEASE_SEVERITY_SEVERE = 2,
}
