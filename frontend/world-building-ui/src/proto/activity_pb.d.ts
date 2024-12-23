import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb'; // proto import: "common.proto"


export class ActivitySearchRequest extends jspb.Message {
  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): ActivitySearchRequest;
  hasContext(): boolean;
  clearContext(): ActivitySearchRequest;

  getSearch(): common_pb.SearchQueryDTO | undefined;
  setSearch(value?: common_pb.SearchQueryDTO): ActivitySearchRequest;
  hasSearch(): boolean;
  clearSearch(): ActivitySearchRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivitySearchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivitySearchRequest): ActivitySearchRequest.AsObject;
  static serializeBinaryToWriter(message: ActivitySearchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivitySearchRequest;
  static deserializeBinaryFromReader(message: ActivitySearchRequest, reader: jspb.BinaryReader): ActivitySearchRequest;
}

export namespace ActivitySearchRequest {
  export type AsObject = {
    context?: common_pb.ContextDTO.AsObject,
    search?: common_pb.SearchQueryDTO.AsObject,
  }
}

export class ActivitySearchResponse extends jspb.Message {
  getActivitiesList(): Array<ActivityDTO>;
  setActivitiesList(value: Array<ActivityDTO>): ActivitySearchResponse;
  clearActivitiesList(): ActivitySearchResponse;
  addActivities(value?: ActivityDTO, index?: number): ActivityDTO;

  getTotalresults(): number;
  setTotalresults(value: number): ActivitySearchResponse;

  getTotalpages(): number;
  setTotalpages(value: number): ActivitySearchResponse;

  getCurrentpage(): number;
  setCurrentpage(value: number): ActivitySearchResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivitySearchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivitySearchResponse): ActivitySearchResponse.AsObject;
  static serializeBinaryToWriter(message: ActivitySearchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivitySearchResponse;
  static deserializeBinaryFromReader(message: ActivitySearchResponse, reader: jspb.BinaryReader): ActivitySearchResponse;
}

export namespace ActivitySearchResponse {
  export type AsObject = {
    activitiesList: Array<ActivityDTO.AsObject>,
    totalresults: number,
    totalpages: number,
    currentpage: number,
  }
}

export class ActivityClearAllRequest extends jspb.Message {
  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): ActivityClearAllRequest;
  hasContext(): boolean;
  clearContext(): ActivityClearAllRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityClearAllRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityClearAllRequest): ActivityClearAllRequest.AsObject;
  static serializeBinaryToWriter(message: ActivityClearAllRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityClearAllRequest;
  static deserializeBinaryFromReader(message: ActivityClearAllRequest, reader: jspb.BinaryReader): ActivityClearAllRequest;
}

export namespace ActivityClearAllRequest {
  export type AsObject = {
    context?: common_pb.ContextDTO.AsObject,
  }
}

export class ActivityClearAllResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ActivityClearAllResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityClearAllResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityClearAllResponse): ActivityClearAllResponse.AsObject;
  static serializeBinaryToWriter(message: ActivityClearAllResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityClearAllResponse;
  static deserializeBinaryFromReader(message: ActivityClearAllResponse, reader: jspb.BinaryReader): ActivityClearAllResponse;
}

export namespace ActivityClearAllResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class ActivityCreateRequest extends jspb.Message {
  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): ActivityCreateRequest;
  hasContext(): boolean;
  clearContext(): ActivityCreateRequest;

  getData(): ActivityDTO | undefined;
  setData(value?: ActivityDTO): ActivityCreateRequest;
  hasData(): boolean;
  clearData(): ActivityCreateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityCreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityCreateRequest): ActivityCreateRequest.AsObject;
  static serializeBinaryToWriter(message: ActivityCreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityCreateRequest;
  static deserializeBinaryFromReader(message: ActivityCreateRequest, reader: jspb.BinaryReader): ActivityCreateRequest;
}

export namespace ActivityCreateRequest {
  export type AsObject = {
    context?: common_pb.ContextDTO.AsObject,
    data?: ActivityDTO.AsObject,
  }
}

export class ActivityCreateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ActivityCreateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityCreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityCreateResponse): ActivityCreateResponse.AsObject;
  static serializeBinaryToWriter(message: ActivityCreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityCreateResponse;
  static deserializeBinaryFromReader(message: ActivityCreateResponse, reader: jspb.BinaryReader): ActivityCreateResponse;
}

export namespace ActivityCreateResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class ActivityHeadRequest extends jspb.Message {
  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): ActivityHeadRequest;
  hasContext(): boolean;
  clearContext(): ActivityHeadRequest;

  getLimit(): number;
  setLimit(value: number): ActivityHeadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityHeadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityHeadRequest): ActivityHeadRequest.AsObject;
  static serializeBinaryToWriter(message: ActivityHeadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityHeadRequest;
  static deserializeBinaryFromReader(message: ActivityHeadRequest, reader: jspb.BinaryReader): ActivityHeadRequest;
}

export namespace ActivityHeadRequest {
  export type AsObject = {
    context?: common_pb.ContextDTO.AsObject,
    limit: number,
  }
}

export class ActivityHeadResponse extends jspb.Message {
  getActivitiesList(): Array<ActivityDTO>;
  setActivitiesList(value: Array<ActivityDTO>): ActivityHeadResponse;
  clearActivitiesList(): ActivityHeadResponse;
  addActivities(value?: ActivityDTO, index?: number): ActivityDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityHeadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityHeadResponse): ActivityHeadResponse.AsObject;
  static serializeBinaryToWriter(message: ActivityHeadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityHeadResponse;
  static deserializeBinaryFromReader(message: ActivityHeadResponse, reader: jspb.BinaryReader): ActivityHeadResponse;
}

export namespace ActivityHeadResponse {
  export type AsObject = {
    activitiesList: Array<ActivityDTO.AsObject>,
  }
}

export class ActivityDTO extends jspb.Message {
  getId(): string;
  setId(value: string): ActivityDTO;

  getLabel(): string;
  setLabel(value: string): ActivityDTO;

  getEventname(): ActivityEventNameEnumDTO;
  setEventname(value: ActivityEventNameEnumDTO): ActivityDTO;

  getRelatedtargetentity(): string;
  setRelatedtargetentity(value: string): ActivityDTO;

  getRelatedtargetid(): string;
  setRelatedtargetid(value: string): ActivityDTO;

  getRelatedentityname(): string;
  setRelatedentityname(value: string): ActivityDTO;

  getCreatedat(): number;
  setCreatedat(value: number): ActivityDTO;

  getUser(): string;
  setUser(value: string): ActivityDTO;

  getWorld(): string;
  setWorld(value: string): ActivityDTO;

  getCampaign(): string;
  setCampaign(value: string): ActivityDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActivityDTO.AsObject;
  static toObject(includeInstance: boolean, msg: ActivityDTO): ActivityDTO.AsObject;
  static serializeBinaryToWriter(message: ActivityDTO, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActivityDTO;
  static deserializeBinaryFromReader(message: ActivityDTO, reader: jspb.BinaryReader): ActivityDTO;
}

export namespace ActivityDTO {
  export type AsObject = {
    id: string,
    label: string,
    eventname: ActivityEventNameEnumDTO,
    relatedtargetentity: string,
    relatedtargetid: string,
    relatedentityname: string,
    createdat: number,
    user: string,
    world: string,
    campaign: string,
  }
}

export enum ActivityEventNameEnumDTO { 
  CONTENT_CREATED = 0,
  CONTENT_UPDATED = 1,
  CONTENT_DELETED = 2,
  CONTENT_CREATED_BULK = 3,
  CONTENT_UPDATED_BULK = 4,
  CONTENT_DELETED_BULK = 5,
  WORLD_PRESET_LOADED = 6,
}
