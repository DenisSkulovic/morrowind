import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb'; // proto import: "common.proto"


export class UpdateContentRequest extends jspb.Message {
  getContentbody(): ContentBodyDTO | undefined;
  setContentbody(value?: ContentBodyDTO): UpdateContentRequest;
  hasContentbody(): boolean;
  clearContentbody(): UpdateContentRequest;

  getEntityname(): string;
  setEntityname(value: string): UpdateContentRequest;

  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): UpdateContentRequest;
  hasContext(): boolean;
  clearContext(): UpdateContentRequest;

  getSource(): common_pb.DataSourceEnumDTO;
  setSource(value: common_pb.DataSourceEnumDTO): UpdateContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContentRequest): UpdateContentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContentRequest;
  static deserializeBinaryFromReader(message: UpdateContentRequest, reader: jspb.BinaryReader): UpdateContentRequest;
}

export namespace UpdateContentRequest {
  export type AsObject = {
    contentbody?: ContentBodyDTO.AsObject,
    entityname: string,
    context?: common_pb.ContextDTO.AsObject,
    source: common_pb.DataSourceEnumDTO,
  }
}

export class UpdateContentResponse extends jspb.Message {
  getContentbody(): ContentBodyDTO | undefined;
  setContentbody(value?: ContentBodyDTO): UpdateContentResponse;
  hasContentbody(): boolean;
  clearContentbody(): UpdateContentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateContentResponse): UpdateContentResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateContentResponse;
  static deserializeBinaryFromReader(message: UpdateContentResponse, reader: jspb.BinaryReader): UpdateContentResponse;
}

export namespace UpdateContentResponse {
  export type AsObject = {
    contentbody?: ContentBodyDTO.AsObject,
  }
}

export class DeleteContentRequest extends jspb.Message {
  getEntityname(): string;
  setEntityname(value: string): DeleteContentRequest;

  getId(): string;
  setId(value: string): DeleteContentRequest;

  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): DeleteContentRequest;
  hasContext(): boolean;
  clearContext(): DeleteContentRequest;

  getSource(): common_pb.DataSourceEnumDTO;
  setSource(value: common_pb.DataSourceEnumDTO): DeleteContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteContentRequest): DeleteContentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteContentRequest;
  static deserializeBinaryFromReader(message: DeleteContentRequest, reader: jspb.BinaryReader): DeleteContentRequest;
}

export namespace DeleteContentRequest {
  export type AsObject = {
    entityname: string,
    id: string,
    context?: common_pb.ContextDTO.AsObject,
    source: common_pb.DataSourceEnumDTO,
  }
}

export class DeleteContentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteContentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteContentResponse): DeleteContentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteContentResponse;
  static deserializeBinaryFromReader(message: DeleteContentResponse, reader: jspb.BinaryReader): DeleteContentResponse;
}

export namespace DeleteContentResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class SearchContentRequest extends jspb.Message {
  getEntityname(): string;
  setEntityname(value: string): SearchContentRequest;

  getQuery(): common_pb.SearchQueryDTO | undefined;
  setQuery(value?: common_pb.SearchQueryDTO): SearchContentRequest;
  hasQuery(): boolean;
  clearQuery(): SearchContentRequest;

  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): SearchContentRequest;
  hasContext(): boolean;
  clearContext(): SearchContentRequest;

  getSource(): common_pb.DataSourceEnumDTO;
  setSource(value: common_pb.DataSourceEnumDTO): SearchContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchContentRequest): SearchContentRequest.AsObject;
  static serializeBinaryToWriter(message: SearchContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchContentRequest;
  static deserializeBinaryFromReader(message: SearchContentRequest, reader: jspb.BinaryReader): SearchContentRequest;
}

export namespace SearchContentRequest {
  export type AsObject = {
    entityname: string,
    query?: common_pb.SearchQueryDTO.AsObject,
    context?: common_pb.ContextDTO.AsObject,
    source: common_pb.DataSourceEnumDTO,
  }
}

export class SearchContentResponse extends jspb.Message {
  getResultsList(): Array<ContentBodyDTO>;
  setResultsList(value: Array<ContentBodyDTO>): SearchContentResponse;
  clearResultsList(): SearchContentResponse;
  addResults(value?: ContentBodyDTO, index?: number): ContentBodyDTO;

  getTotalresults(): number;
  setTotalresults(value: number): SearchContentResponse;

  getTotalpages(): number;
  setTotalpages(value: number): SearchContentResponse;

  getCurrentpage(): number;
  setCurrentpage(value: number): SearchContentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchContentResponse): SearchContentResponse.AsObject;
  static serializeBinaryToWriter(message: SearchContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchContentResponse;
  static deserializeBinaryFromReader(message: SearchContentResponse, reader: jspb.BinaryReader): SearchContentResponse;
}

export namespace SearchContentResponse {
  export type AsObject = {
    resultsList: Array<ContentBodyDTO.AsObject>,
    totalresults: number,
    totalpages: number,
    currentpage: number,
  }
}

export class GetContentStatsRequest extends jspb.Message {
  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): GetContentStatsRequest;
  hasContext(): boolean;
  clearContext(): GetContentStatsRequest;

  getEntitynamesList(): Array<string>;
  setEntitynamesList(value: Array<string>): GetContentStatsRequest;
  clearEntitynamesList(): GetContentStatsRequest;
  addEntitynames(value: string, index?: number): GetContentStatsRequest;

  getSource(): common_pb.DataSourceEnumDTO;
  setSource(value: common_pb.DataSourceEnumDTO): GetContentStatsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContentStatsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetContentStatsRequest): GetContentStatsRequest.AsObject;
  static serializeBinaryToWriter(message: GetContentStatsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContentStatsRequest;
  static deserializeBinaryFromReader(message: GetContentStatsRequest, reader: jspb.BinaryReader): GetContentStatsRequest;
}

export namespace GetContentStatsRequest {
  export type AsObject = {
    context?: common_pb.ContextDTO.AsObject,
    entitynamesList: Array<string>,
    source: common_pb.DataSourceEnumDTO,
  }
}

export class GetContentStatsResponse extends jspb.Message {
  getStatsList(): Array<ContentStatDTO>;
  setStatsList(value: Array<ContentStatDTO>): GetContentStatsResponse;
  clearStatsList(): GetContentStatsResponse;
  addStats(value?: ContentStatDTO, index?: number): ContentStatDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetContentStatsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetContentStatsResponse): GetContentStatsResponse.AsObject;
  static serializeBinaryToWriter(message: GetContentStatsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetContentStatsResponse;
  static deserializeBinaryFromReader(message: GetContentStatsResponse, reader: jspb.BinaryReader): GetContentStatsResponse;
}

export namespace GetContentStatsResponse {
  export type AsObject = {
    statsList: Array<ContentStatDTO.AsObject>,
  }
}

export class ContentStatDTO extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): ContentStatDTO;

  getType(): string;
  setType(value: string): ContentStatDTO;

  getCount(): number;
  setCount(value: number): ContentStatDTO;

  getIcon(): string;
  setIcon(value: string): ContentStatDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentStatDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ContentStatDTO): ContentStatDTO.AsObject;
  static serializeBinaryToWriter(message: ContentStatDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentStatDTO;
  static deserializeBinaryFromReader(message: ContentStatDTO, reader: jspb.BinaryReader): ContentStatDTO;
}

export namespace ContentStatDTO {
  export type AsObject = {
    title: string,
    type: string,
    count: number,
    icon: string,
  }
}

export class CreateBulkContentRequest extends jspb.Message {
  getRequestsList(): Array<CreateContentRequest>;
  setRequestsList(value: Array<CreateContentRequest>): CreateBulkContentRequest;
  clearRequestsList(): CreateBulkContentRequest;
  addRequests(value?: CreateContentRequest, index?: number): CreateContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBulkContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBulkContentRequest): CreateBulkContentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBulkContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBulkContentRequest;
  static deserializeBinaryFromReader(message: CreateBulkContentRequest, reader: jspb.BinaryReader): CreateBulkContentRequest;
}

export namespace CreateBulkContentRequest {
  export type AsObject = {
    requestsList: Array<CreateContentRequest.AsObject>,
  }
}

export class CreateBulkContentResponse extends jspb.Message {
  getResponsesList(): Array<CreateContentResponse>;
  setResponsesList(value: Array<CreateContentResponse>): CreateBulkContentResponse;
  clearResponsesList(): CreateBulkContentResponse;
  addResponses(value?: CreateContentResponse, index?: number): CreateContentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBulkContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBulkContentResponse): CreateBulkContentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBulkContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBulkContentResponse;
  static deserializeBinaryFromReader(message: CreateBulkContentResponse, reader: jspb.BinaryReader): CreateBulkContentResponse;
}

export namespace CreateBulkContentResponse {
  export type AsObject = {
    responsesList: Array<CreateContentResponse.AsObject>,
  }
}

export class UpdateBulkContentRequest extends jspb.Message {
  getRequestsList(): Array<UpdateContentRequest>;
  setRequestsList(value: Array<UpdateContentRequest>): UpdateBulkContentRequest;
  clearRequestsList(): UpdateBulkContentRequest;
  addRequests(value?: UpdateContentRequest, index?: number): UpdateContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBulkContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBulkContentRequest): UpdateBulkContentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBulkContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBulkContentRequest;
  static deserializeBinaryFromReader(message: UpdateBulkContentRequest, reader: jspb.BinaryReader): UpdateBulkContentRequest;
}

export namespace UpdateBulkContentRequest {
  export type AsObject = {
    requestsList: Array<UpdateContentRequest.AsObject>,
  }
}

export class UpdateBulkContentResponse extends jspb.Message {
  getResponsesList(): Array<UpdateContentResponse>;
  setResponsesList(value: Array<UpdateContentResponse>): UpdateBulkContentResponse;
  clearResponsesList(): UpdateBulkContentResponse;
  addResponses(value?: UpdateContentResponse, index?: number): UpdateContentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBulkContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBulkContentResponse): UpdateBulkContentResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBulkContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBulkContentResponse;
  static deserializeBinaryFromReader(message: UpdateBulkContentResponse, reader: jspb.BinaryReader): UpdateBulkContentResponse;
}

export namespace UpdateBulkContentResponse {
  export type AsObject = {
    responsesList: Array<UpdateContentResponse.AsObject>,
  }
}

export class DeleteBulkContentRequest extends jspb.Message {
  getRequestsList(): Array<DeleteContentRequest>;
  setRequestsList(value: Array<DeleteContentRequest>): DeleteBulkContentRequest;
  clearRequestsList(): DeleteBulkContentRequest;
  addRequests(value?: DeleteContentRequest, index?: number): DeleteContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBulkContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBulkContentRequest): DeleteBulkContentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBulkContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBulkContentRequest;
  static deserializeBinaryFromReader(message: DeleteBulkContentRequest, reader: jspb.BinaryReader): DeleteBulkContentRequest;
}

export namespace DeleteBulkContentRequest {
  export type AsObject = {
    requestsList: Array<DeleteContentRequest.AsObject>,
  }
}

export class DeleteBulkContentResponse extends jspb.Message {
  getResponsesList(): Array<DeleteContentResponse>;
  setResponsesList(value: Array<DeleteContentResponse>): DeleteBulkContentResponse;
  clearResponsesList(): DeleteBulkContentResponse;
  addResponses(value?: DeleteContentResponse, index?: number): DeleteContentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBulkContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBulkContentResponse): DeleteBulkContentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteBulkContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBulkContentResponse;
  static deserializeBinaryFromReader(message: DeleteBulkContentResponse, reader: jspb.BinaryReader): DeleteBulkContentResponse;
}

export namespace DeleteBulkContentResponse {
  export type AsObject = {
    responsesList: Array<DeleteContentResponse.AsObject>,
  }
}

export class CreateContentRequest extends jspb.Message {
  getSource(): common_pb.DataSourceEnumDTO;
  setSource(value: common_pb.DataSourceEnumDTO): CreateContentRequest;

  getContentbody(): ContentBodyDTO | undefined;
  setContentbody(value?: ContentBodyDTO): CreateContentRequest;
  hasContentbody(): boolean;
  clearContentbody(): CreateContentRequest;

  getEntityname(): string;
  setEntityname(value: string): CreateContentRequest;

  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): CreateContentRequest;
  hasContext(): boolean;
  clearContext(): CreateContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContentRequest): CreateContentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContentRequest;
  static deserializeBinaryFromReader(message: CreateContentRequest, reader: jspb.BinaryReader): CreateContentRequest;
}

export namespace CreateContentRequest {
  export type AsObject = {
    source: common_pb.DataSourceEnumDTO,
    contentbody?: ContentBodyDTO.AsObject,
    entityname: string,
    context?: common_pb.ContextDTO.AsObject,
  }
}

export class CreateContentResponse extends jspb.Message {
  getContentbody(): ContentBodyDTO | undefined;
  setContentbody(value?: ContentBodyDTO): CreateContentResponse;
  hasContentbody(): boolean;
  clearContentbody(): CreateContentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateContentResponse): CreateContentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateContentResponse;
  static deserializeBinaryFromReader(message: CreateContentResponse, reader: jspb.BinaryReader): CreateContentResponse;
}

export namespace CreateContentResponse {
  export type AsObject = {
    contentbody?: ContentBodyDTO.AsObject,
  }
}

export class ContentBodyDTO extends jspb.Message {
  getItem(): common_pb.ItemDTO | undefined;
  setItem(value?: common_pb.ItemDTO): ContentBodyDTO;
  hasItem(): boolean;
  clearItem(): ContentBodyDTO;

  getPastexperience(): common_pb.PastExperienceDTO | undefined;
  setPastexperience(value?: common_pb.PastExperienceDTO): ContentBodyDTO;
  hasPastexperience(): boolean;
  clearPastexperience(): ContentBodyDTO;

  getCharactermemory(): common_pb.CharacterMemoryDTO | undefined;
  setCharactermemory(value?: common_pb.CharacterMemoryDTO): ContentBodyDTO;
  hasCharactermemory(): boolean;
  clearCharactermemory(): ContentBodyDTO;

  getMemory(): common_pb.MemoryDTO | undefined;
  setMemory(value?: common_pb.MemoryDTO): ContentBodyDTO;
  hasMemory(): boolean;
  clearMemory(): ContentBodyDTO;

  getMemorypool(): common_pb.MemoryPoolDTO | undefined;
  setMemorypool(value?: common_pb.MemoryPoolDTO): ContentBodyDTO;
  hasMemorypool(): boolean;
  clearMemorypool(): ContentBodyDTO;

  getMemorypoolentry(): common_pb.MemoryPoolEntryDTO | undefined;
  setMemorypoolentry(value?: common_pb.MemoryPoolEntryDTO): ContentBodyDTO;
  hasMemorypoolentry(): boolean;
  clearMemorypoolentry(): ContentBodyDTO;

  getSkill(): common_pb.SkillDTO | undefined;
  setSkill(value?: common_pb.SkillDTO): ContentBodyDTO;
  hasSkill(): boolean;
  clearSkill(): ContentBodyDTO;

  getSkillset(): common_pb.SkillSetDTO | undefined;
  setSkillset(value?: common_pb.SkillSetDTO): ContentBodyDTO;
  hasSkillset(): boolean;
  clearSkillset(): ContentBodyDTO;

  getEquipmentslot(): common_pb.EquipmentSlotDTO | undefined;
  setEquipmentslot(value?: common_pb.EquipmentSlotDTO): ContentBodyDTO;
  hasEquipmentslot(): boolean;
  clearEquipmentslot(): ContentBodyDTO;

  getStorageslot(): common_pb.StorageSlotDTO | undefined;
  setStorageslot(value?: common_pb.StorageSlotDTO): ContentBodyDTO;
  hasStorageslot(): boolean;
  clearStorageslot(): ContentBodyDTO;

  getTrait(): common_pb.TraitDTO | undefined;
  setTrait(value?: common_pb.TraitDTO): ContentBodyDTO;
  hasTrait(): boolean;
  clearTrait(): ContentBodyDTO;

  getAddiction(): common_pb.AddictionDTO | undefined;
  setAddiction(value?: common_pb.AddictionDTO): ContentBodyDTO;
  hasAddiction(): boolean;
  clearAddiction(): ContentBodyDTO;

  getBackground(): common_pb.BackgroundDTO | undefined;
  setBackground(value?: common_pb.BackgroundDTO): ContentBodyDTO;
  hasBackground(): boolean;
  clearBackground(): ContentBodyDTO;

  getBirthsign(): common_pb.BirthsignDTO | undefined;
  setBirthsign(value?: common_pb.BirthsignDTO): ContentBodyDTO;
  hasBirthsign(): boolean;
  clearBirthsign(): ContentBodyDTO;

  getCharacter(): common_pb.CharacterDTO | undefined;
  setCharacter(value?: common_pb.CharacterDTO): ContentBodyDTO;
  hasCharacter(): boolean;
  clearCharacter(): ContentBodyDTO;

  getCharactergeninstruction(): common_pb.CharacterGenInstructionDTO | undefined;
  setCharactergeninstruction(value?: common_pb.CharacterGenInstructionDTO): ContentBodyDTO;
  hasCharactergeninstruction(): boolean;
  clearCharactergeninstruction(): ContentBodyDTO;

  getCharactergroupgeninstruction(): common_pb.CharacterGroupGenInstructionDTO | undefined;
  setCharactergroupgeninstruction(value?: common_pb.CharacterGroupGenInstructionDTO): ContentBodyDTO;
  hasCharactergroupgeninstruction(): boolean;
  clearCharactergroupgeninstruction(): ContentBodyDTO;

  getCharacterprofession(): common_pb.CharacterProfessionDTO | undefined;
  setCharacterprofession(value?: common_pb.CharacterProfessionDTO): ContentBodyDTO;
  hasCharacterprofession(): boolean;
  clearCharacterprofession(): ContentBodyDTO;

  getDisease(): common_pb.DiseaseDTO | undefined;
  setDisease(value?: common_pb.DiseaseDTO): ContentBodyDTO;
  hasDisease(): boolean;
  clearDisease(): ContentBodyDTO;

  getEffect(): common_pb.EffectDTO | undefined;
  setEffect(value?: common_pb.EffectDTO): ContentBodyDTO;
  hasEffect(): boolean;
  clearEffect(): ContentBodyDTO;

  getFact(): common_pb.FactDTO | undefined;
  setFact(value?: common_pb.FactDTO): ContentBodyDTO;
  hasFact(): boolean;
  clearFact(): ContentBodyDTO;

  getFaction(): common_pb.FactionDTO | undefined;
  setFaction(value?: common_pb.FactionDTO): ContentBodyDTO;
  hasFaction(): boolean;
  clearFaction(): ContentBodyDTO;

  getItemset(): common_pb.ItemSetDTO | undefined;
  setItemset(value?: common_pb.ItemSetDTO): ContentBodyDTO;
  hasItemset(): boolean;
  clearItemset(): ContentBodyDTO;

  getMood(): common_pb.MoodDTO | undefined;
  setMood(value?: common_pb.MoodDTO): ContentBodyDTO;
  hasMood(): boolean;
  clearMood(): ContentBodyDTO;

  getNeed(): common_pb.NeedDTO | undefined;
  setNeed(value?: common_pb.NeedDTO): ContentBodyDTO;
  hasNeed(): boolean;
  clearNeed(): ContentBodyDTO;

  getPersonalityprofile(): common_pb.PersonalityProfileDTO | undefined;
  setPersonalityprofile(value?: common_pb.PersonalityProfileDTO): ContentBodyDTO;
  hasPersonalityprofile(): boolean;
  clearPersonalityprofile(): ContentBodyDTO;

  getRace(): common_pb.RaceDTO | undefined;
  setRace(value?: common_pb.RaceDTO): ContentBodyDTO;
  hasRace(): boolean;
  clearRace(): ContentBodyDTO;

  getReligion(): common_pb.ReligionDTO | undefined;
  setReligion(value?: common_pb.ReligionDTO): ContentBodyDTO;
  hasReligion(): boolean;
  clearReligion(): ContentBodyDTO;

  getResistance(): common_pb.ResistanceDTO | undefined;
  setResistance(value?: common_pb.ResistanceDTO): ContentBodyDTO;
  hasResistance(): boolean;
  clearResistance(): ContentBodyDTO;

  getStatus(): common_pb.StatusDTO | undefined;
  setStatus(value?: common_pb.StatusDTO): ContentBodyDTO;
  hasStatus(): boolean;
  clearStatus(): ContentBodyDTO;

  getTag(): common_pb.TagDTO | undefined;
  setTag(value?: common_pb.TagDTO): ContentBodyDTO;
  hasTag(): boolean;
  clearTag(): ContentBodyDTO;

  getDataCase(): ContentBodyDTO.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ContentBodyDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ContentBodyDTO): ContentBodyDTO.AsObject;
  static serializeBinaryToWriter(message: ContentBodyDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ContentBodyDTO;
  static deserializeBinaryFromReader(message: ContentBodyDTO, reader: jspb.BinaryReader): ContentBodyDTO;
}

export namespace ContentBodyDTO {
  export type AsObject = {
    item?: common_pb.ItemDTO.AsObject,
    pastexperience?: common_pb.PastExperienceDTO.AsObject,
    charactermemory?: common_pb.CharacterMemoryDTO.AsObject,
    memory?: common_pb.MemoryDTO.AsObject,
    memorypool?: common_pb.MemoryPoolDTO.AsObject,
    memorypoolentry?: common_pb.MemoryPoolEntryDTO.AsObject,
    skill?: common_pb.SkillDTO.AsObject,
    skillset?: common_pb.SkillSetDTO.AsObject,
    equipmentslot?: common_pb.EquipmentSlotDTO.AsObject,
    storageslot?: common_pb.StorageSlotDTO.AsObject,
    trait?: common_pb.TraitDTO.AsObject,
    addiction?: common_pb.AddictionDTO.AsObject,
    background?: common_pb.BackgroundDTO.AsObject,
    birthsign?: common_pb.BirthsignDTO.AsObject,
    character?: common_pb.CharacterDTO.AsObject,
    charactergeninstruction?: common_pb.CharacterGenInstructionDTO.AsObject,
    charactergroupgeninstruction?: common_pb.CharacterGroupGenInstructionDTO.AsObject,
    characterprofession?: common_pb.CharacterProfessionDTO.AsObject,
    disease?: common_pb.DiseaseDTO.AsObject,
    effect?: common_pb.EffectDTO.AsObject,
    fact?: common_pb.FactDTO.AsObject,
    faction?: common_pb.FactionDTO.AsObject,
    itemset?: common_pb.ItemSetDTO.AsObject,
    mood?: common_pb.MoodDTO.AsObject,
    need?: common_pb.NeedDTO.AsObject,
    personalityprofile?: common_pb.PersonalityProfileDTO.AsObject,
    race?: common_pb.RaceDTO.AsObject,
    religion?: common_pb.ReligionDTO.AsObject,
    resistance?: common_pb.ResistanceDTO.AsObject,
    status?: common_pb.StatusDTO.AsObject,
    tag?: common_pb.TagDTO.AsObject,
  }

  export enum DataCase { 
    DATA_NOT_SET = 0,
    ITEM = 1,
    PASTEXPERIENCE = 2,
    CHARACTERMEMORY = 3,
    MEMORY = 4,
    MEMORYPOOL = 5,
    MEMORYPOOLENTRY = 6,
    SKILL = 7,
    SKILLSET = 8,
    EQUIPMENTSLOT = 9,
    STORAGESLOT = 10,
    TRAIT = 11,
    ADDICTION = 12,
    BACKGROUND = 13,
    BIRTHSIGN = 14,
    CHARACTER = 15,
    CHARACTERGENINSTRUCTION = 16,
    CHARACTERGROUPGENINSTRUCTION = 17,
    CHARACTERPROFESSION = 18,
    DISEASE = 19,
    EFFECT = 20,
    FACT = 21,
    FACTION = 22,
    ITEMSET = 23,
    MOOD = 24,
    NEED = 25,
    PERSONALITYPROFILE = 26,
    RACE = 27,
    RELIGION = 28,
    RESISTANCE = 29,
    STATUS = 30,
    TAG = 31,
  }
}

