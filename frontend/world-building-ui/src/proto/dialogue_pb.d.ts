import * as jspb from 'google-protobuf'

import * as entities_pb from './entities_pb'; // proto import: "entities.proto"


export class InitializeDialogueRequest extends jspb.Message {
  getInitiatingparticipantid(): string;
  setInitiatingparticipantid(value: string): InitializeDialogueRequest;

  getPlayercharacterid(): string;
  setPlayercharacterid(value: string): InitializeDialogueRequest;

  getAiprovider(): string;
  setAiprovider(value: string): InitializeDialogueRequest;

  getDialogueparticipants(): CharacterProfilesDTO | undefined;
  setDialogueparticipants(value?: CharacterProfilesDTO): InitializeDialogueRequest;
  hasDialogueparticipants(): boolean;
  clearDialogueparticipants(): InitializeDialogueRequest;

  getWorldcontext(): WorldContextDTO | undefined;
  setWorldcontext(value?: WorldContextDTO): InitializeDialogueRequest;
  hasWorldcontext(): boolean;
  clearWorldcontext(): InitializeDialogueRequest;

  getDialoguehistory(): DialogueHistoryDTO | undefined;
  setDialoguehistory(value?: DialogueHistoryDTO): InitializeDialogueRequest;
  hasDialoguehistory(): boolean;
  clearDialoguehistory(): InitializeDialogueRequest;

  getKnowledgebase(): KnowledgeBaseDTO | undefined;
  setKnowledgebase(value?: KnowledgeBaseDTO): InitializeDialogueRequest;
  hasKnowledgebase(): boolean;
  clearKnowledgebase(): InitializeDialogueRequest;

  getContext(): entities_pb.ContextDTO | undefined;
  setContext(value?: entities_pb.ContextDTO): InitializeDialogueRequest;
  hasContext(): boolean;
  clearContext(): InitializeDialogueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeDialogueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeDialogueRequest): InitializeDialogueRequest.AsObject;
  static serializeBinaryToWriter(message: InitializeDialogueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeDialogueRequest;
  static deserializeBinaryFromReader(message: InitializeDialogueRequest, reader: jspb.BinaryReader): InitializeDialogueRequest;
}

export namespace InitializeDialogueRequest {
  export type AsObject = {
    initiatingparticipantid: string,
    playercharacterid: string,
    aiprovider: string,
    dialogueparticipants?: CharacterProfilesDTO.AsObject,
    worldcontext?: WorldContextDTO.AsObject,
    dialoguehistory?: DialogueHistoryDTO.AsObject,
    knowledgebase?: KnowledgeBaseDTO.AsObject,
    context?: entities_pb.ContextDTO.AsObject,
  }
}

export class InitializeDialogueResponse extends jspb.Message {
  getDialogueid(): string;
  setDialogueid(value: string): InitializeDialogueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitializeDialogueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitializeDialogueResponse): InitializeDialogueResponse.AsObject;
  static serializeBinaryToWriter(message: InitializeDialogueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitializeDialogueResponse;
  static deserializeBinaryFromReader(message: InitializeDialogueResponse, reader: jspb.BinaryReader): InitializeDialogueResponse;
}

export namespace InitializeDialogueResponse {
  export type AsObject = {
    dialogueid: string,
  }
}

export class CharacterProfileDTO extends jspb.Message {
  getId(): string;
  setId(value: string): CharacterProfileDTO;

  getName(): string;
  setName(value: string): CharacterProfileDTO;

  getRace(): string;
  setRace(value: string): CharacterProfileDTO;

  getClass(): string;
  setClass(value: string): CharacterProfileDTO;

  getTraits(): string;
  setTraits(value: string): CharacterProfileDTO;

  getEnneagram(): string;
  setEnneagram(value: string): CharacterProfileDTO;

  getMood(): string;
  setMood(value: string): CharacterProfileDTO;

  getNeeds(): string;
  setNeeds(value: string): CharacterProfileDTO;

  getGoals(): CharacterGoalsDTO | undefined;
  setGoals(value?: CharacterGoalsDTO): CharacterProfileDTO;
  hasGoals(): boolean;
  clearGoals(): CharacterProfileDTO;

  getSkillsMap(): jspb.Map<string, number>;
  clearSkillsMap(): CharacterProfileDTO;

  getStatsMap(): jspb.Map<string, string>;
  clearStatsMap(): CharacterProfileDTO;

  getInventory(): CharacterInventoryDTO | undefined;
  setInventory(value?: CharacterInventoryDTO): CharacterProfileDTO;
  hasInventory(): boolean;
  clearInventory(): CharacterProfileDTO;

  getKnowledge(): CharacterKnowledgeDTO | undefined;
  setKnowledge(value?: CharacterKnowledgeDTO): CharacterProfileDTO;
  hasKnowledge(): boolean;
  clearKnowledge(): CharacterProfileDTO;

  getDialogueattitude(): string;
  setDialogueattitude(value: string): CharacterProfileDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterProfileDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterProfileDTO): CharacterProfileDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterProfileDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterProfileDTO;
  static deserializeBinaryFromReader(message: CharacterProfileDTO, reader: jspb.BinaryReader): CharacterProfileDTO;
}

export namespace CharacterProfileDTO {
  export type AsObject = {
    id: string,
    name: string,
    race: string,
    pb_class: string,
    traits: string,
    enneagram: string,
    mood: string,
    needs: string,
    goals?: CharacterGoalsDTO.AsObject,
    skillsMap: Array<[string, number]>,
    statsMap: Array<[string, string]>,
    inventory?: CharacterInventoryDTO.AsObject,
    knowledge?: CharacterKnowledgeDTO.AsObject,
    dialogueattitude: string,
  }
}

export class CharacterGoalsDTO extends jspb.Message {
  getSatisfiedList(): Array<string>;
  setSatisfiedList(value: Array<string>): CharacterGoalsDTO;
  clearSatisfiedList(): CharacterGoalsDTO;
  addSatisfied(value: string, index?: number): CharacterGoalsDTO;

  getUnsatisfiedList(): Array<string>;
  setUnsatisfiedList(value: Array<string>): CharacterGoalsDTO;
  clearUnsatisfiedList(): CharacterGoalsDTO;
  addUnsatisfied(value: string, index?: number): CharacterGoalsDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterGoalsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterGoalsDTO): CharacterGoalsDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterGoalsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterGoalsDTO;
  static deserializeBinaryFromReader(message: CharacterGoalsDTO, reader: jspb.BinaryReader): CharacterGoalsDTO;
}

export namespace CharacterGoalsDTO {
  export type AsObject = {
    satisfiedList: Array<string>,
    unsatisfiedList: Array<string>,
  }
}

export class CharacterInventoryDTO extends jspb.Message {
  getEquippedList(): Array<string>;
  setEquippedList(value: Array<string>): CharacterInventoryDTO;
  clearEquippedList(): CharacterInventoryDTO;
  addEquipped(value: string, index?: number): CharacterInventoryDTO;

  getStoredList(): Array<string>;
  setStoredList(value: Array<string>): CharacterInventoryDTO;
  clearStoredList(): CharacterInventoryDTO;
  addStored(value: string, index?: number): CharacterInventoryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterInventoryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterInventoryDTO): CharacterInventoryDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterInventoryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterInventoryDTO;
  static deserializeBinaryFromReader(message: CharacterInventoryDTO, reader: jspb.BinaryReader): CharacterInventoryDTO;
}

export namespace CharacterInventoryDTO {
  export type AsObject = {
    equippedList: Array<string>,
    storedList: Array<string>,
  }
}

export class CharacterKnowledgeDTO extends jspb.Message {
  getLocationsList(): Array<string>;
  setLocationsList(value: Array<string>): CharacterKnowledgeDTO;
  clearLocationsList(): CharacterKnowledgeDTO;
  addLocations(value: string, index?: number): CharacterKnowledgeDTO;

  getFactionsList(): Array<string>;
  setFactionsList(value: Array<string>): CharacterKnowledgeDTO;
  clearFactionsList(): CharacterKnowledgeDTO;
  addFactions(value: string, index?: number): CharacterKnowledgeDTO;

  getFamiliarCharactersList(): Array<string>;
  setFamiliarCharactersList(value: Array<string>): CharacterKnowledgeDTO;
  clearFamiliarCharactersList(): CharacterKnowledgeDTO;
  addFamiliarCharacters(value: string, index?: number): CharacterKnowledgeDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterKnowledgeDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterKnowledgeDTO): CharacterKnowledgeDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterKnowledgeDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterKnowledgeDTO;
  static deserializeBinaryFromReader(message: CharacterKnowledgeDTO, reader: jspb.BinaryReader): CharacterKnowledgeDTO;
}

export namespace CharacterKnowledgeDTO {
  export type AsObject = {
    locationsList: Array<string>,
    factionsList: Array<string>,
    familiarCharactersList: Array<string>,
  }
}

export class CharacterProfilesDTO extends jspb.Message {
  getArrList(): Array<CharacterProfileDTO>;
  setArrList(value: Array<CharacterProfileDTO>): CharacterProfilesDTO;
  clearArrList(): CharacterProfilesDTO;
  addArr(value?: CharacterProfileDTO, index?: number): CharacterProfileDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterProfilesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterProfilesDTO): CharacterProfilesDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterProfilesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterProfilesDTO;
  static deserializeBinaryFromReader(message: CharacterProfilesDTO, reader: jspb.BinaryReader): CharacterProfilesDTO;
}

export namespace CharacterProfilesDTO {
  export type AsObject = {
    arrList: Array<CharacterProfileDTO.AsObject>,
  }
}

export class WorldContextDTO extends jspb.Message {
  getLocation(): LocationContextDTO | undefined;
  setLocation(value?: LocationContextDTO): WorldContextDTO;
  hasLocation(): boolean;
  clearLocation(): WorldContextDTO;

  getTime(): TimeContextDTO | undefined;
  setTime(value?: TimeContextDTO): WorldContextDTO;
  hasTime(): boolean;
  clearTime(): WorldContextDTO;

  getWeather(): WeatherContextDTO | undefined;
  setWeather(value?: WeatherContextDTO): WorldContextDTO;
  hasWeather(): boolean;
  clearWeather(): WorldContextDTO;

  getScene(): SceneContextDTO | undefined;
  setScene(value?: SceneContextDTO): WorldContextDTO;
  hasScene(): boolean;
  clearScene(): WorldContextDTO;

  getClazz(): string;
  setClazz(value: string): WorldContextDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorldContextDTO.AsObject;
  static toObject(includeInstance: boolean, msg: WorldContextDTO): WorldContextDTO.AsObject;
  static serializeBinaryToWriter(message: WorldContextDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorldContextDTO;
  static deserializeBinaryFromReader(message: WorldContextDTO, reader: jspb.BinaryReader): WorldContextDTO;
}

export namespace WorldContextDTO {
  export type AsObject = {
    location?: LocationContextDTO.AsObject,
    time?: TimeContextDTO.AsObject,
    weather?: WeatherContextDTO.AsObject,
    scene?: SceneContextDTO.AsObject,
    clazz: string,
  }
}

export class LocationContextDTO extends jspb.Message {
  getId(): string;
  setId(value: string): LocationContextDTO;

  getName(): string;
  setName(value: string): LocationContextDTO;

  getDescription(): string;
  setDescription(value: string): LocationContextDTO;

  getBiome(): string;
  setBiome(value: string): LocationContextDTO;

  getClazz(): string;
  setClazz(value: string): LocationContextDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationContextDTO.AsObject;
  static toObject(includeInstance: boolean, msg: LocationContextDTO): LocationContextDTO.AsObject;
  static serializeBinaryToWriter(message: LocationContextDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationContextDTO;
  static deserializeBinaryFromReader(message: LocationContextDTO, reader: jspb.BinaryReader): LocationContextDTO;
}

export namespace LocationContextDTO {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    biome: string,
    clazz: string,
  }
}

export class TimeContextDTO extends jspb.Message {
  getTimeofday(): string;
  setTimeofday(value: string): TimeContextDTO;

  getDay(): number;
  setDay(value: number): TimeContextDTO;

  getMonth(): string;
  setMonth(value: string): TimeContextDTO;

  getYear(): number;
  setYear(value: number): TimeContextDTO;

  getSeason(): string;
  setSeason(value: string): TimeContextDTO;

  getClazz(): string;
  setClazz(value: string): TimeContextDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeContextDTO.AsObject;
  static toObject(includeInstance: boolean, msg: TimeContextDTO): TimeContextDTO.AsObject;
  static serializeBinaryToWriter(message: TimeContextDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeContextDTO;
  static deserializeBinaryFromReader(message: TimeContextDTO, reader: jspb.BinaryReader): TimeContextDTO;
}

export namespace TimeContextDTO {
  export type AsObject = {
    timeofday: string,
    day: number,
    month: string,
    year: number,
    season: string,
    clazz: string,
  }
}

export class WeatherContextDTO extends jspb.Message {
  getWeather(): string;
  setWeather(value: string): WeatherContextDTO;

  getTemperature(): string;
  setTemperature(value: string): WeatherContextDTO;

  getWind(): string;
  setWind(value: string): WeatherContextDTO;

  getPrecipitation(): string;
  setPrecipitation(value: string): WeatherContextDTO;

  getVisibility(): string;
  setVisibility(value: string): WeatherContextDTO;

  getClazz(): string;
  setClazz(value: string): WeatherContextDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherContextDTO.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherContextDTO): WeatherContextDTO.AsObject;
  static serializeBinaryToWriter(message: WeatherContextDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherContextDTO;
  static deserializeBinaryFromReader(message: WeatherContextDTO, reader: jspb.BinaryReader): WeatherContextDTO;
}

export namespace WeatherContextDTO {
  export type AsObject = {
    weather: string,
    temperature: string,
    wind: string,
    precipitation: string,
    visibility: string,
    clazz: string,
  }
}

export class SceneContextDTO extends jspb.Message {
  getNorth(): DirectionSceneEntryDTO | undefined;
  setNorth(value?: DirectionSceneEntryDTO): SceneContextDTO;
  hasNorth(): boolean;
  clearNorth(): SceneContextDTO;

  getNortheast(): DirectionSceneEntryDTO | undefined;
  setNortheast(value?: DirectionSceneEntryDTO): SceneContextDTO;
  hasNortheast(): boolean;
  clearNortheast(): SceneContextDTO;

  getEast(): DirectionSceneEntryDTO | undefined;
  setEast(value?: DirectionSceneEntryDTO): SceneContextDTO;
  hasEast(): boolean;
  clearEast(): SceneContextDTO;

  getSoutheast(): DirectionSceneEntryDTO | undefined;
  setSoutheast(value?: DirectionSceneEntryDTO): SceneContextDTO;
  hasSoutheast(): boolean;
  clearSoutheast(): SceneContextDTO;

  getSouth(): DirectionSceneEntryDTO | undefined;
  setSouth(value?: DirectionSceneEntryDTO): SceneContextDTO;
  hasSouth(): boolean;
  clearSouth(): SceneContextDTO;

  getClazz(): string;
  setClazz(value: string): SceneContextDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneContextDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SceneContextDTO): SceneContextDTO.AsObject;
  static serializeBinaryToWriter(message: SceneContextDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneContextDTO;
  static deserializeBinaryFromReader(message: SceneContextDTO, reader: jspb.BinaryReader): SceneContextDTO;
}

export namespace SceneContextDTO {
  export type AsObject = {
    north?: DirectionSceneEntryDTO.AsObject,
    northeast?: DirectionSceneEntryDTO.AsObject,
    east?: DirectionSceneEntryDTO.AsObject,
    southeast?: DirectionSceneEntryDTO.AsObject,
    south?: DirectionSceneEntryDTO.AsObject,
    clazz: string,
  }
}

export class DirectionSceneEntryDTO extends jspb.Message {
  getNear(): SceneEntryDTO | undefined;
  setNear(value?: SceneEntryDTO): DirectionSceneEntryDTO;
  hasNear(): boolean;
  clearNear(): DirectionSceneEntryDTO;

  getMid(): SceneEntryDTO | undefined;
  setMid(value?: SceneEntryDTO): DirectionSceneEntryDTO;
  hasMid(): boolean;
  clearMid(): DirectionSceneEntryDTO;

  getFar(): SceneEntryDTO | undefined;
  setFar(value?: SceneEntryDTO): DirectionSceneEntryDTO;
  hasFar(): boolean;
  clearFar(): DirectionSceneEntryDTO;

  getClazz(): string;
  setClazz(value: string): DirectionSceneEntryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DirectionSceneEntryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DirectionSceneEntryDTO): DirectionSceneEntryDTO.AsObject;
  static serializeBinaryToWriter(message: DirectionSceneEntryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DirectionSceneEntryDTO;
  static deserializeBinaryFromReader(message: DirectionSceneEntryDTO, reader: jspb.BinaryReader): DirectionSceneEntryDTO;
}

export namespace DirectionSceneEntryDTO {
  export type AsObject = {
    near?: SceneEntryDTO.AsObject,
    mid?: SceneEntryDTO.AsObject,
    far?: SceneEntryDTO.AsObject,
    clazz: string,
  }
}

export class SceneEntryDTO extends jspb.Message {
  getBiome(): string;
  setBiome(value: string): SceneEntryDTO;

  getNpcs(): SceneNPCsDTO | undefined;
  setNpcs(value?: SceneNPCsDTO): SceneEntryDTO;
  hasNpcs(): boolean;
  clearNpcs(): SceneEntryDTO;

  getItems(): SceneItemsDTO | undefined;
  setItems(value?: SceneItemsDTO): SceneEntryDTO;
  hasItems(): boolean;
  clearItems(): SceneEntryDTO;

  getClazz(): string;
  setClazz(value: string): SceneEntryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneEntryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SceneEntryDTO): SceneEntryDTO.AsObject;
  static serializeBinaryToWriter(message: SceneEntryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneEntryDTO;
  static deserializeBinaryFromReader(message: SceneEntryDTO, reader: jspb.BinaryReader): SceneEntryDTO;
}

export namespace SceneEntryDTO {
  export type AsObject = {
    biome: string,
    npcs?: SceneNPCsDTO.AsObject,
    items?: SceneItemsDTO.AsObject,
    clazz: string,
  }
}

export class SceneNPCDTO extends jspb.Message {
  getId(): string;
  setId(value: string): SceneNPCDTO;

  getActivity(): string;
  setActivity(value: string): SceneNPCDTO;

  getClazz(): string;
  setClazz(value: string): SceneNPCDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneNPCDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SceneNPCDTO): SceneNPCDTO.AsObject;
  static serializeBinaryToWriter(message: SceneNPCDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneNPCDTO;
  static deserializeBinaryFromReader(message: SceneNPCDTO, reader: jspb.BinaryReader): SceneNPCDTO;
}

export namespace SceneNPCDTO {
  export type AsObject = {
    id: string,
    activity: string,
    clazz: string,
  }
}

export class SceneNPCsDTO extends jspb.Message {
  getArrList(): Array<SceneNPCDTO>;
  setArrList(value: Array<SceneNPCDTO>): SceneNPCsDTO;
  clearArrList(): SceneNPCsDTO;
  addArr(value?: SceneNPCDTO, index?: number): SceneNPCDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneNPCsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SceneNPCsDTO): SceneNPCsDTO.AsObject;
  static serializeBinaryToWriter(message: SceneNPCsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneNPCsDTO;
  static deserializeBinaryFromReader(message: SceneNPCsDTO, reader: jspb.BinaryReader): SceneNPCsDTO;
}

export namespace SceneNPCsDTO {
  export type AsObject = {
    arrList: Array<SceneNPCDTO.AsObject>,
  }
}

export class SceneItemDTO extends jspb.Message {
  getId(): string;
  setId(value: string): SceneItemDTO;

  getClazz(): string;
  setClazz(value: string): SceneItemDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneItemDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SceneItemDTO): SceneItemDTO.AsObject;
  static serializeBinaryToWriter(message: SceneItemDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneItemDTO;
  static deserializeBinaryFromReader(message: SceneItemDTO, reader: jspb.BinaryReader): SceneItemDTO;
}

export namespace SceneItemDTO {
  export type AsObject = {
    id: string,
    clazz: string,
  }
}

export class SceneItemsDTO extends jspb.Message {
  getArrList(): Array<SceneItemDTO>;
  setArrList(value: Array<SceneItemDTO>): SceneItemsDTO;
  clearArrList(): SceneItemsDTO;
  addArr(value?: SceneItemDTO, index?: number): SceneItemDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneItemsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: SceneItemsDTO): SceneItemsDTO.AsObject;
  static serializeBinaryToWriter(message: SceneItemsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneItemsDTO;
  static deserializeBinaryFromReader(message: SceneItemsDTO, reader: jspb.BinaryReader): SceneItemsDTO;
}

export namespace SceneItemsDTO {
  export type AsObject = {
    arrList: Array<SceneItemDTO.AsObject>,
  }
}

export class DialogueHistoryDTO extends jspb.Message {
  getTopicsnewesttooldest(): DialogueHistoryTopicsDTO | undefined;
  setTopicsnewesttooldest(value?: DialogueHistoryTopicsDTO): DialogueHistoryDTO;
  hasTopicsnewesttooldest(): boolean;
  clearTopicsnewesttooldest(): DialogueHistoryDTO;

  getClazz(): string;
  setClazz(value: string): DialogueHistoryDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogueHistoryDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DialogueHistoryDTO): DialogueHistoryDTO.AsObject;
  static serializeBinaryToWriter(message: DialogueHistoryDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogueHistoryDTO;
  static deserializeBinaryFromReader(message: DialogueHistoryDTO, reader: jspb.BinaryReader): DialogueHistoryDTO;
}

export namespace DialogueHistoryDTO {
  export type AsObject = {
    topicsnewesttooldest?: DialogueHistoryTopicsDTO.AsObject,
    clazz: string,
  }
}

export class DialogueHistoryTopicDTO extends jspb.Message {
  getTopicname(): string;
  setTopicname(value: string): DialogueHistoryTopicDTO;

  getStepsnewesttooldest(): DialogueStepsDTO | undefined;
  setStepsnewesttooldest(value?: DialogueStepsDTO): DialogueHistoryTopicDTO;
  hasStepsnewesttooldest(): boolean;
  clearStepsnewesttooldest(): DialogueHistoryTopicDTO;

  getClazz(): string;
  setClazz(value: string): DialogueHistoryTopicDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogueHistoryTopicDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DialogueHistoryTopicDTO): DialogueHistoryTopicDTO.AsObject;
  static serializeBinaryToWriter(message: DialogueHistoryTopicDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogueHistoryTopicDTO;
  static deserializeBinaryFromReader(message: DialogueHistoryTopicDTO, reader: jspb.BinaryReader): DialogueHistoryTopicDTO;
}

export namespace DialogueHistoryTopicDTO {
  export type AsObject = {
    topicname: string,
    stepsnewesttooldest?: DialogueStepsDTO.AsObject,
    clazz: string,
  }
}

export class DialogueHistoryTopicsDTO extends jspb.Message {
  getArrList(): Array<DialogueHistoryTopicDTO>;
  setArrList(value: Array<DialogueHistoryTopicDTO>): DialogueHistoryTopicsDTO;
  clearArrList(): DialogueHistoryTopicsDTO;
  addArr(value?: DialogueHistoryTopicDTO, index?: number): DialogueHistoryTopicDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogueHistoryTopicsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DialogueHistoryTopicsDTO): DialogueHistoryTopicsDTO.AsObject;
  static serializeBinaryToWriter(message: DialogueHistoryTopicsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogueHistoryTopicsDTO;
  static deserializeBinaryFromReader(message: DialogueHistoryTopicsDTO, reader: jspb.BinaryReader): DialogueHistoryTopicsDTO;
}

export namespace DialogueHistoryTopicsDTO {
  export type AsObject = {
    arrList: Array<DialogueHistoryTopicDTO.AsObject>,
  }
}

export class DialogueStepDTO extends jspb.Message {
  getPlayerstep(): PlayerCharacterStepDTO | undefined;
  setPlayerstep(value?: PlayerCharacterStepDTO): DialogueStepDTO;
  hasPlayerstep(): boolean;
  clearPlayerstep(): DialogueStepDTO;

  getAistep(): AiCharacterStepDTO | undefined;
  setAistep(value?: AiCharacterStepDTO): DialogueStepDTO;
  hasAistep(): boolean;
  clearAistep(): DialogueStepDTO;

  getNarration(): string;
  setNarration(value: string): DialogueStepDTO;

  getOutcome(): StepOutcomeDTO | undefined;
  setOutcome(value?: StepOutcomeDTO): DialogueStepDTO;
  hasOutcome(): boolean;
  clearOutcome(): DialogueStepDTO;

  getClazz(): string;
  setClazz(value: string): DialogueStepDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogueStepDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DialogueStepDTO): DialogueStepDTO.AsObject;
  static serializeBinaryToWriter(message: DialogueStepDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogueStepDTO;
  static deserializeBinaryFromReader(message: DialogueStepDTO, reader: jspb.BinaryReader): DialogueStepDTO;
}

export namespace DialogueStepDTO {
  export type AsObject = {
    playerstep?: PlayerCharacterStepDTO.AsObject,
    aistep?: AiCharacterStepDTO.AsObject,
    narration: string,
    outcome?: StepOutcomeDTO.AsObject,
    clazz: string,
  }
}

export class DialogueStepsDTO extends jspb.Message {
  getArrList(): Array<DialogueStepDTO>;
  setArrList(value: Array<DialogueStepDTO>): DialogueStepsDTO;
  clearArrList(): DialogueStepsDTO;
  addArr(value?: DialogueStepDTO, index?: number): DialogueStepDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogueStepsDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DialogueStepsDTO): DialogueStepsDTO.AsObject;
  static serializeBinaryToWriter(message: DialogueStepsDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogueStepsDTO;
  static deserializeBinaryFromReader(message: DialogueStepsDTO, reader: jspb.BinaryReader): DialogueStepsDTO;
}

export namespace DialogueStepsDTO {
  export type AsObject = {
    arrList: Array<DialogueStepDTO.AsObject>,
  }
}

export class DiceRollResultDTO extends jspb.Message {
  getRoll(): number;
  setRoll(value: number): DiceRollResultDTO;

  getOutcome(): string;
  setOutcome(value: string): DiceRollResultDTO;

  getScaletype(): string;
  setScaletype(value: string): DiceRollResultDTO;

  getUsedscaleconfig(): string;
  setUsedscaleconfig(value: string): DiceRollResultDTO;

  getClazz(): string;
  setClazz(value: string): DiceRollResultDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DiceRollResultDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DiceRollResultDTO): DiceRollResultDTO.AsObject;
  static serializeBinaryToWriter(message: DiceRollResultDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DiceRollResultDTO;
  static deserializeBinaryFromReader(message: DiceRollResultDTO, reader: jspb.BinaryReader): DiceRollResultDTO;
}

export namespace DiceRollResultDTO {
  export type AsObject = {
    roll: number,
    outcome: string,
    scaletype: string,
    usedscaleconfig: string,
    clazz: string,
  }
}

export class PlayerCharacterStepDTO extends jspb.Message {
  getCharacterid(): string;
  setCharacterid(value: string): PlayerCharacterStepDTO;

  getSelecteddialogueoption(): string;
  setSelecteddialogueoption(value: string): PlayerCharacterStepDTO;

  getDicerollresult(): DiceRollResultDTO | undefined;
  setDicerollresult(value?: DiceRollResultDTO): PlayerCharacterStepDTO;
  hasDicerollresult(): boolean;
  clearDicerollresult(): PlayerCharacterStepDTO;

  getClazz(): string;
  setClazz(value: string): PlayerCharacterStepDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlayerCharacterStepDTO.AsObject;
  static toObject(includeInstance: boolean, msg: PlayerCharacterStepDTO): PlayerCharacterStepDTO.AsObject;
  static serializeBinaryToWriter(message: PlayerCharacterStepDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlayerCharacterStepDTO;
  static deserializeBinaryFromReader(message: PlayerCharacterStepDTO, reader: jspb.BinaryReader): PlayerCharacterStepDTO;
}

export namespace PlayerCharacterStepDTO {
  export type AsObject = {
    characterid: string,
    selecteddialogueoption: string,
    dicerollresult?: DiceRollResultDTO.AsObject,
    clazz: string,
  }
}

export class AiCharacterStepDTO extends jspb.Message {
  getCharacterid(): string;
  setCharacterid(value: string): AiCharacterStepDTO;

  getSelecteddialogueoption(): string;
  setSelecteddialogueoption(value: string): AiCharacterStepDTO;

  getDicerollresult(): DiceRollResultDTO | undefined;
  setDicerollresult(value?: DiceRollResultDTO): AiCharacterStepDTO;
  hasDicerollresult(): boolean;
  clearDicerollresult(): AiCharacterStepDTO;

  getClazz(): string;
  setClazz(value: string): AiCharacterStepDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AiCharacterStepDTO.AsObject;
  static toObject(includeInstance: boolean, msg: AiCharacterStepDTO): AiCharacterStepDTO.AsObject;
  static serializeBinaryToWriter(message: AiCharacterStepDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AiCharacterStepDTO;
  static deserializeBinaryFromReader(message: AiCharacterStepDTO, reader: jspb.BinaryReader): AiCharacterStepDTO;
}

export namespace AiCharacterStepDTO {
  export type AsObject = {
    characterid: string,
    selecteddialogueoption: string,
    dicerollresult?: DiceRollResultDTO.AsObject,
    clazz: string,
  }
}

export class StepOutcomeDTO extends jspb.Message {
  getCharacterchangesMap(): jspb.Map<string, CharacterChangesDTO>;
  clearCharacterchangesMap(): StepOutcomeDTO;

  getNewtopicname(): string;
  setNewtopicname(value: string): StepOutcomeDTO;

  getStepoutcome(): string;
  setStepoutcome(value: string): StepOutcomeDTO;

  getClazz(): string;
  setClazz(value: string): StepOutcomeDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StepOutcomeDTO.AsObject;
  static toObject(includeInstance: boolean, msg: StepOutcomeDTO): StepOutcomeDTO.AsObject;
  static serializeBinaryToWriter(message: StepOutcomeDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StepOutcomeDTO;
  static deserializeBinaryFromReader(message: StepOutcomeDTO, reader: jspb.BinaryReader): StepOutcomeDTO;
}

export namespace StepOutcomeDTO {
  export type AsObject = {
    characterchangesMap: Array<[string, CharacterChangesDTO.AsObject]>,
    newtopicname: string,
    stepoutcome: string,
    clazz: string,
  }
}

export class CharacterChangeDTO extends jspb.Message {
  getMarkunfulfilledgoalsasfulfilledList(): Array<string>;
  setMarkunfulfilledgoalsasfulfilledList(value: Array<string>): CharacterChangeDTO;
  clearMarkunfulfilledgoalsasfulfilledList(): CharacterChangeDTO;
  addMarkunfulfilledgoalsasfulfilled(value: string, index?: number): CharacterChangeDTO;

  getAddunfulfilledgoalsList(): Array<string>;
  setAddunfulfilledgoalsList(value: Array<string>): CharacterChangeDTO;
  clearAddunfulfilledgoalsList(): CharacterChangeDTO;
  addAddunfulfilledgoals(value: string, index?: number): CharacterChangeDTO;

  getRemoveunfulfilledgoalsList(): Array<string>;
  setRemoveunfulfilledgoalsList(value: Array<string>): CharacterChangeDTO;
  clearRemoveunfulfilledgoalsList(): CharacterChangeDTO;
  addRemoveunfulfilledgoals(value: string, index?: number): CharacterChangeDTO;

  getChangedialogueattitudeto(): string;
  setChangedialogueattitudeto(value: string): CharacterChangeDTO;

  getAddorremoveormodifyitemininventory(): InventoryChangesDTO | undefined;
  setAddorremoveormodifyitemininventory(value?: InventoryChangesDTO): CharacterChangeDTO;
  hasAddorremoveormodifyitemininventory(): boolean;
  clearAddorremoveormodifyitemininventory(): CharacterChangeDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterChangeDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterChangeDTO): CharacterChangeDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterChangeDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterChangeDTO;
  static deserializeBinaryFromReader(message: CharacterChangeDTO, reader: jspb.BinaryReader): CharacterChangeDTO;
}

export namespace CharacterChangeDTO {
  export type AsObject = {
    markunfulfilledgoalsasfulfilledList: Array<string>,
    addunfulfilledgoalsList: Array<string>,
    removeunfulfilledgoalsList: Array<string>,
    changedialogueattitudeto: string,
    addorremoveormodifyitemininventory?: InventoryChangesDTO.AsObject,
  }
}

export class CharacterChangesDTO extends jspb.Message {
  getArrList(): Array<CharacterChangeDTO>;
  setArrList(value: Array<CharacterChangeDTO>): CharacterChangesDTO;
  clearArrList(): CharacterChangesDTO;
  addArr(value?: CharacterChangeDTO, index?: number): CharacterChangeDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterChangesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterChangesDTO): CharacterChangesDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterChangesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterChangesDTO;
  static deserializeBinaryFromReader(message: CharacterChangesDTO, reader: jspb.BinaryReader): CharacterChangesDTO;
}

export namespace CharacterChangesDTO {
  export type AsObject = {
    arrList: Array<CharacterChangeDTO.AsObject>,
  }
}

export class InventoryChangeDTO extends jspb.Message {
  getItemid(): string;
  setItemid(value: string): InventoryChangeDTO;

  getQuantitydeltachange(): number;
  setQuantitydeltachange(value: number): InventoryChangeDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InventoryChangeDTO.AsObject;
  static toObject(includeInstance: boolean, msg: InventoryChangeDTO): InventoryChangeDTO.AsObject;
  static serializeBinaryToWriter(message: InventoryChangeDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InventoryChangeDTO;
  static deserializeBinaryFromReader(message: InventoryChangeDTO, reader: jspb.BinaryReader): InventoryChangeDTO;
}

export namespace InventoryChangeDTO {
  export type AsObject = {
    itemid: string,
    quantitydeltachange: number,
  }
}

export class InventoryChangesDTO extends jspb.Message {
  getArrList(): Array<InventoryChangeDTO>;
  setArrList(value: Array<InventoryChangeDTO>): InventoryChangesDTO;
  clearArrList(): InventoryChangesDTO;
  addArr(value?: InventoryChangeDTO, index?: number): InventoryChangeDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InventoryChangesDTO.AsObject;
  static toObject(includeInstance: boolean, msg: InventoryChangesDTO): InventoryChangesDTO.AsObject;
  static serializeBinaryToWriter(message: InventoryChangesDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InventoryChangesDTO;
  static deserializeBinaryFromReader(message: InventoryChangesDTO, reader: jspb.BinaryReader): InventoryChangesDTO;
}

export namespace InventoryChangesDTO {
  export type AsObject = {
    arrList: Array<InventoryChangeDTO.AsObject>,
  }
}

export class KnowledgeBaseDTO extends jspb.Message {
  getCharactersList(): Array<CharacterKnowledgeBaseDTO>;
  setCharactersList(value: Array<CharacterKnowledgeBaseDTO>): KnowledgeBaseDTO;
  clearCharactersList(): KnowledgeBaseDTO;
  addCharacters(value?: CharacterKnowledgeBaseDTO, index?: number): CharacterKnowledgeBaseDTO;

  getFactionsList(): Array<FactionKnowledgeBaseDTO>;
  setFactionsList(value: Array<FactionKnowledgeBaseDTO>): KnowledgeBaseDTO;
  clearFactionsList(): KnowledgeBaseDTO;
  addFactions(value?: FactionKnowledgeBaseDTO, index?: number): FactionKnowledgeBaseDTO;

  getLocationsList(): Array<LocationKnowledgeBaseDTO>;
  setLocationsList(value: Array<LocationKnowledgeBaseDTO>): KnowledgeBaseDTO;
  clearLocationsList(): KnowledgeBaseDTO;
  addLocations(value?: LocationKnowledgeBaseDTO, index?: number): LocationKnowledgeBaseDTO;

  getItemsList(): Array<ItemKnowledgeBaseDTO>;
  setItemsList(value: Array<ItemKnowledgeBaseDTO>): KnowledgeBaseDTO;
  clearItemsList(): KnowledgeBaseDTO;
  addItems(value?: ItemKnowledgeBaseDTO, index?: number): ItemKnowledgeBaseDTO;

  getClazz(): string;
  setClazz(value: string): KnowledgeBaseDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnowledgeBaseDTO.AsObject;
  static toObject(includeInstance: boolean, msg: KnowledgeBaseDTO): KnowledgeBaseDTO.AsObject;
  static serializeBinaryToWriter(message: KnowledgeBaseDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnowledgeBaseDTO;
  static deserializeBinaryFromReader(message: KnowledgeBaseDTO, reader: jspb.BinaryReader): KnowledgeBaseDTO;
}

export namespace KnowledgeBaseDTO {
  export type AsObject = {
    charactersList: Array<CharacterKnowledgeBaseDTO.AsObject>,
    factionsList: Array<FactionKnowledgeBaseDTO.AsObject>,
    locationsList: Array<LocationKnowledgeBaseDTO.AsObject>,
    itemsList: Array<ItemKnowledgeBaseDTO.AsObject>,
    clazz: string,
  }
}

export class CharacterKnowledgeBaseDTO extends jspb.Message {
  getId(): string;
  setId(value: string): CharacterKnowledgeBaseDTO;

  getName(): string;
  setName(value: string): CharacterKnowledgeBaseDTO;

  getDescription(): string;
  setDescription(value: string): CharacterKnowledgeBaseDTO;

  getLocationid(): string;
  setLocationid(value: string): CharacterKnowledgeBaseDTO;

  getFactionid(): string;
  setFactionid(value: string): CharacterKnowledgeBaseDTO;

  getClazz(): string;
  setClazz(value: string): CharacterKnowledgeBaseDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CharacterKnowledgeBaseDTO.AsObject;
  static toObject(includeInstance: boolean, msg: CharacterKnowledgeBaseDTO): CharacterKnowledgeBaseDTO.AsObject;
  static serializeBinaryToWriter(message: CharacterKnowledgeBaseDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CharacterKnowledgeBaseDTO;
  static deserializeBinaryFromReader(message: CharacterKnowledgeBaseDTO, reader: jspb.BinaryReader): CharacterKnowledgeBaseDTO;
}

export namespace CharacterKnowledgeBaseDTO {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    locationid: string,
    factionid: string,
    clazz: string,
  }
}

export class FactionKnowledgeBaseDTO extends jspb.Message {
  getId(): string;
  setId(value: string): FactionKnowledgeBaseDTO;

  getName(): string;
  setName(value: string): FactionKnowledgeBaseDTO;

  getDescription(): string;
  setDescription(value: string): FactionKnowledgeBaseDTO;

  getClazz(): string;
  setClazz(value: string): FactionKnowledgeBaseDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FactionKnowledgeBaseDTO.AsObject;
  static toObject(includeInstance: boolean, msg: FactionKnowledgeBaseDTO): FactionKnowledgeBaseDTO.AsObject;
  static serializeBinaryToWriter(message: FactionKnowledgeBaseDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FactionKnowledgeBaseDTO;
  static deserializeBinaryFromReader(message: FactionKnowledgeBaseDTO, reader: jspb.BinaryReader): FactionKnowledgeBaseDTO;
}

export namespace FactionKnowledgeBaseDTO {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    clazz: string,
  }
}

export class LocationKnowledgeBaseDTO extends jspb.Message {
  getId(): string;
  setId(value: string): LocationKnowledgeBaseDTO;

  getName(): string;
  setName(value: string): LocationKnowledgeBaseDTO;

  getDescription(): string;
  setDescription(value: string): LocationKnowledgeBaseDTO;

  getParentlocationchain(): string;
  setParentlocationchain(value: string): LocationKnowledgeBaseDTO;

  getClazz(): string;
  setClazz(value: string): LocationKnowledgeBaseDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LocationKnowledgeBaseDTO.AsObject;
  static toObject(includeInstance: boolean, msg: LocationKnowledgeBaseDTO): LocationKnowledgeBaseDTO.AsObject;
  static serializeBinaryToWriter(message: LocationKnowledgeBaseDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LocationKnowledgeBaseDTO;
  static deserializeBinaryFromReader(message: LocationKnowledgeBaseDTO, reader: jspb.BinaryReader): LocationKnowledgeBaseDTO;
}

export namespace LocationKnowledgeBaseDTO {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    parentlocationchain: string,
    clazz: string,
  }
}

export class ItemKnowledgeBaseDTO extends jspb.Message {
  getId(): string;
  setId(value: string): ItemKnowledgeBaseDTO;

  getName(): string;
  setName(value: string): ItemKnowledgeBaseDTO;

  getDescription(): string;
  setDescription(value: string): ItemKnowledgeBaseDTO;

  getClazz(): string;
  setClazz(value: string): ItemKnowledgeBaseDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ItemKnowledgeBaseDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ItemKnowledgeBaseDTO): ItemKnowledgeBaseDTO.AsObject;
  static serializeBinaryToWriter(message: ItemKnowledgeBaseDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ItemKnowledgeBaseDTO;
  static deserializeBinaryFromReader(message: ItemKnowledgeBaseDTO, reader: jspb.BinaryReader): ItemKnowledgeBaseDTO;
}

export namespace ItemKnowledgeBaseDTO {
  export type AsObject = {
    id: string,
    name: string,
    description: string,
    clazz: string,
  }
}

export class GeneratePlayerDialogueOptionsRequest extends jspb.Message {
  getDialogueid(): string;
  setDialogueid(value: string): GeneratePlayerDialogueOptionsRequest;

  getDirectionsquantity(): number;
  setDirectionsquantity(value: number): GeneratePlayerDialogueOptionsRequest;

  getVariations(): number;
  setVariations(value: number): GeneratePlayerDialogueOptionsRequest;

  getScaletype(): string;
  setScaletype(value: string): GeneratePlayerDialogueOptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePlayerDialogueOptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePlayerDialogueOptionsRequest): GeneratePlayerDialogueOptionsRequest.AsObject;
  static serializeBinaryToWriter(message: GeneratePlayerDialogueOptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePlayerDialogueOptionsRequest;
  static deserializeBinaryFromReader(message: GeneratePlayerDialogueOptionsRequest, reader: jspb.BinaryReader): GeneratePlayerDialogueOptionsRequest;
}

export namespace GeneratePlayerDialogueOptionsRequest {
  export type AsObject = {
    dialogueid: string,
    directionsquantity: number,
    variations: number,
    scaletype: string,
  }
}

export class GeneratePlayerDialogueOptionsResponse extends jspb.Message {
  getDialogueoptionsList(): Array<DialogueOptionDTO>;
  setDialogueoptionsList(value: Array<DialogueOptionDTO>): GeneratePlayerDialogueOptionsResponse;
  clearDialogueoptionsList(): GeneratePlayerDialogueOptionsResponse;
  addDialogueoptions(value?: DialogueOptionDTO, index?: number): DialogueOptionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GeneratePlayerDialogueOptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GeneratePlayerDialogueOptionsResponse): GeneratePlayerDialogueOptionsResponse.AsObject;
  static serializeBinaryToWriter(message: GeneratePlayerDialogueOptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GeneratePlayerDialogueOptionsResponse;
  static deserializeBinaryFromReader(message: GeneratePlayerDialogueOptionsResponse, reader: jspb.BinaryReader): GeneratePlayerDialogueOptionsResponse;
}

export namespace GeneratePlayerDialogueOptionsResponse {
  export type AsObject = {
    dialogueoptionsList: Array<DialogueOptionDTO.AsObject>,
  }
}

export class DialogueOptionDTO extends jspb.Message {
  getExplanation(): string;
  setExplanation(value: string): DialogueOptionDTO;

  getDialoguedirection(): string;
  setDialoguedirection(value: string): DialogueOptionDTO;

  getRiskimpact(): string;
  setRiskimpact(value: string): DialogueOptionDTO;

  getClazz(): string;
  setClazz(value: string): DialogueOptionDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DialogueOptionDTO.AsObject;
  static toObject(includeInstance: boolean, msg: DialogueOptionDTO): DialogueOptionDTO.AsObject;
  static serializeBinaryToWriter(message: DialogueOptionDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DialogueOptionDTO;
  static deserializeBinaryFromReader(message: DialogueOptionDTO, reader: jspb.BinaryReader): DialogueOptionDTO;
}

export namespace DialogueOptionDTO {
  export type AsObject = {
    explanation: string,
    dialoguedirection: string,
    riskimpact: string,
    clazz: string,
  }
}

export class InterruptDialogueRequest extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): InterruptDialogueRequest;

  getAiprovider(): string;
  setAiprovider(value: string): InterruptDialogueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterruptDialogueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InterruptDialogueRequest): InterruptDialogueRequest.AsObject;
  static serializeBinaryToWriter(message: InterruptDialogueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterruptDialogueRequest;
  static deserializeBinaryFromReader(message: InterruptDialogueRequest, reader: jspb.BinaryReader): InterruptDialogueRequest;
}

export namespace InterruptDialogueRequest {
  export type AsObject = {
    requestid: string,
    aiprovider: string,
  }
}

export class InterruptDialogueResponse extends jspb.Message {
  getRequestid(): string;
  setRequestid(value: string): InterruptDialogueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InterruptDialogueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InterruptDialogueResponse): InterruptDialogueResponse.AsObject;
  static serializeBinaryToWriter(message: InterruptDialogueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InterruptDialogueResponse;
  static deserializeBinaryFromReader(message: InterruptDialogueResponse, reader: jspb.BinaryReader): InterruptDialogueResponse;
}

export namespace InterruptDialogueResponse {
  export type AsObject = {
    requestid: string,
  }
}

export class FinalizeDialogueRequest extends jspb.Message {
  getDialogueid(): string;
  setDialogueid(value: string): FinalizeDialogueRequest;

  getContext(): entities_pb.ContextDTO | undefined;
  setContext(value?: entities_pb.ContextDTO): FinalizeDialogueRequest;
  hasContext(): boolean;
  clearContext(): FinalizeDialogueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeDialogueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeDialogueRequest): FinalizeDialogueRequest.AsObject;
  static serializeBinaryToWriter(message: FinalizeDialogueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeDialogueRequest;
  static deserializeBinaryFromReader(message: FinalizeDialogueRequest, reader: jspb.BinaryReader): FinalizeDialogueRequest;
}

export namespace FinalizeDialogueRequest {
  export type AsObject = {
    dialogueid: string,
    context?: entities_pb.ContextDTO.AsObject,
  }
}

export class FinalizeDialogueResponse extends jspb.Message {
  getDialogueid(): string;
  setDialogueid(value: string): FinalizeDialogueResponse;

  getSummary(): string;
  setSummary(value: string): FinalizeDialogueResponse;

  getDialogueparticipantsList(): Array<CharacterProfileDTO>;
  setDialogueparticipantsList(value: Array<CharacterProfileDTO>): FinalizeDialogueResponse;
  clearDialogueparticipantsList(): FinalizeDialogueResponse;
  addDialogueparticipants(value?: CharacterProfileDTO, index?: number): CharacterProfileDTO;

  getWorldcontext(): WorldContextDTO | undefined;
  setWorldcontext(value?: WorldContextDTO): FinalizeDialogueResponse;
  hasWorldcontext(): boolean;
  clearWorldcontext(): FinalizeDialogueResponse;

  getDialoguehistory(): DialogueHistoryDTO | undefined;
  setDialoguehistory(value?: DialogueHistoryDTO): FinalizeDialogueResponse;
  hasDialoguehistory(): boolean;
  clearDialoguehistory(): FinalizeDialogueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinalizeDialogueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinalizeDialogueResponse): FinalizeDialogueResponse.AsObject;
  static serializeBinaryToWriter(message: FinalizeDialogueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinalizeDialogueResponse;
  static deserializeBinaryFromReader(message: FinalizeDialogueResponse, reader: jspb.BinaryReader): FinalizeDialogueResponse;
}

export namespace FinalizeDialogueResponse {
  export type AsObject = {
    dialogueid: string,
    summary: string,
    dialogueparticipantsList: Array<CharacterProfileDTO.AsObject>,
    worldcontext?: WorldContextDTO.AsObject,
    dialoguehistory?: DialogueHistoryDTO.AsObject,
  }
}

