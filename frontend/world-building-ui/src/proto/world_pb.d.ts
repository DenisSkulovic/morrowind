import * as jspb from 'google-protobuf'

import * as common_pb from './common_pb';


export class UpdateWorldRequest extends jspb.Message {
  getWorld(): common_pb.WorldDTO | undefined;
  setWorld(value?: common_pb.WorldDTO): UpdateWorldRequest;
  hasWorld(): boolean;
  clearWorld(): UpdateWorldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorldRequest): UpdateWorldRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorldRequest;
  static deserializeBinaryFromReader(message: UpdateWorldRequest, reader: jspb.BinaryReader): UpdateWorldRequest;
}

export namespace UpdateWorldRequest {
  export type AsObject = {
    world?: common_pb.WorldDTO.AsObject,
  }
}

export class UpdateWorldResponse extends jspb.Message {
  getWorld(): common_pb.WorldDTO | undefined;
  setWorld(value?: common_pb.WorldDTO): UpdateWorldResponse;
  hasWorld(): boolean;
  clearWorld(): UpdateWorldResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorldResponse): UpdateWorldResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateWorldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorldResponse;
  static deserializeBinaryFromReader(message: UpdateWorldResponse, reader: jspb.BinaryReader): UpdateWorldResponse;
}

export namespace UpdateWorldResponse {
  export type AsObject = {
    world?: common_pb.WorldDTO.AsObject,
  }
}

export class CreateWorldRequest extends jspb.Message {
  getWorld(): common_pb.WorldDTO | undefined;
  setWorld(value?: common_pb.WorldDTO): CreateWorldRequest;
  hasWorld(): boolean;
  clearWorld(): CreateWorldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorldRequest): CreateWorldRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorldRequest;
  static deserializeBinaryFromReader(message: CreateWorldRequest, reader: jspb.BinaryReader): CreateWorldRequest;
}

export namespace CreateWorldRequest {
  export type AsObject = {
    world?: common_pb.WorldDTO.AsObject,
  }
}

export class CreateWorldResponse extends jspb.Message {
  getWorld(): common_pb.WorldDTO | undefined;
  setWorld(value?: common_pb.WorldDTO): CreateWorldResponse;
  hasWorld(): boolean;
  clearWorld(): CreateWorldResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorldResponse): CreateWorldResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWorldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorldResponse;
  static deserializeBinaryFromReader(message: CreateWorldResponse, reader: jspb.BinaryReader): CreateWorldResponse;
}

export namespace CreateWorldResponse {
  export type AsObject = {
    world?: common_pb.WorldDTO.AsObject,
  }
}

export class GetWorldRequest extends jspb.Message {
  getWorldid(): string;
  setWorldid(value: string): GetWorldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorldRequest): GetWorldRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorldRequest;
  static deserializeBinaryFromReader(message: GetWorldRequest, reader: jspb.BinaryReader): GetWorldRequest;
}

export namespace GetWorldRequest {
  export type AsObject = {
    worldid: string,
  }
}

export class GetWorldResponse extends jspb.Message {
  getWorld(): common_pb.WorldDTO | undefined;
  setWorld(value?: common_pb.WorldDTO): GetWorldResponse;
  hasWorld(): boolean;
  clearWorld(): GetWorldResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorldResponse): GetWorldResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorldResponse;
  static deserializeBinaryFromReader(message: GetWorldResponse, reader: jspb.BinaryReader): GetWorldResponse;
}

export namespace GetWorldResponse {
  export type AsObject = {
    world?: common_pb.WorldDTO.AsObject,
  }
}

export class GetWorldsForUserRequest extends jspb.Message {
  getUserid(): string;
  setUserid(value: string): GetWorldsForUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorldsForUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorldsForUserRequest): GetWorldsForUserRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorldsForUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorldsForUserRequest;
  static deserializeBinaryFromReader(message: GetWorldsForUserRequest, reader: jspb.BinaryReader): GetWorldsForUserRequest;
}

export namespace GetWorldsForUserRequest {
  export type AsObject = {
    userid: string,
  }
}

export class GetWorldsForUserResponse extends jspb.Message {
  getWorldsList(): Array<common_pb.WorldDTO>;
  setWorldsList(value: Array<common_pb.WorldDTO>): GetWorldsForUserResponse;
  clearWorldsList(): GetWorldsForUserResponse;
  addWorlds(value?: common_pb.WorldDTO, index?: number): common_pb.WorldDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorldsForUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorldsForUserResponse): GetWorldsForUserResponse.AsObject;
  static serializeBinaryToWriter(message: GetWorldsForUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorldsForUserResponse;
  static deserializeBinaryFromReader(message: GetWorldsForUserResponse, reader: jspb.BinaryReader): GetWorldsForUserResponse;
}

export namespace GetWorldsForUserResponse {
  export type AsObject = {
    worldsList: Array<common_pb.WorldDTO.AsObject>,
  }
}

export class DeleteWorldRequest extends jspb.Message {
  getWorldid(): string;
  setWorldid(value: string): DeleteWorldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorldRequest): DeleteWorldRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorldRequest;
  static deserializeBinaryFromReader(message: DeleteWorldRequest, reader: jspb.BinaryReader): DeleteWorldRequest;
}

export namespace DeleteWorldRequest {
  export type AsObject = {
    worldid: string,
  }
}

export class DeleteWorldResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorldResponse): DeleteWorldResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteWorldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorldResponse;
  static deserializeBinaryFromReader(message: DeleteWorldResponse, reader: jspb.BinaryReader): DeleteWorldResponse;
}

export namespace DeleteWorldResponse {
  export type AsObject = {
  }
}

export class DropWorldContentRequest extends jspb.Message {
  getWorldid(): string;
  setWorldid(value: string): DropWorldContentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropWorldContentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DropWorldContentRequest): DropWorldContentRequest.AsObject;
  static serializeBinaryToWriter(message: DropWorldContentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropWorldContentRequest;
  static deserializeBinaryFromReader(message: DropWorldContentRequest, reader: jspb.BinaryReader): DropWorldContentRequest;
}

export namespace DropWorldContentRequest {
  export type AsObject = {
    worldid: string,
  }
}

export class DropWorldContentResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DropWorldContentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DropWorldContentResponse): DropWorldContentResponse.AsObject;
  static serializeBinaryToWriter(message: DropWorldContentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DropWorldContentResponse;
  static deserializeBinaryFromReader(message: DropWorldContentResponse, reader: jspb.BinaryReader): DropWorldContentResponse;
}

export namespace DropWorldContentResponse {
  export type AsObject = {
  }
}

export class LoadWorldPresetRequest extends jspb.Message {
  getPreset(): common_pb.PresetEnumDTO;
  setPreset(value: common_pb.PresetEnumDTO): LoadWorldPresetRequest;

  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): LoadWorldPresetRequest;
  hasContext(): boolean;
  clearContext(): LoadWorldPresetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadWorldPresetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoadWorldPresetRequest): LoadWorldPresetRequest.AsObject;
  static serializeBinaryToWriter(message: LoadWorldPresetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadWorldPresetRequest;
  static deserializeBinaryFromReader(message: LoadWorldPresetRequest, reader: jspb.BinaryReader): LoadWorldPresetRequest;
}

export namespace LoadWorldPresetRequest {
  export type AsObject = {
    preset: common_pb.PresetEnumDTO,
    context?: common_pb.ContextDTO.AsObject,
  }
}

export class LoadWorldPresetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoadWorldPresetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoadWorldPresetResponse): LoadWorldPresetResponse.AsObject;
  static serializeBinaryToWriter(message: LoadWorldPresetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoadWorldPresetResponse;
  static deserializeBinaryFromReader(message: LoadWorldPresetResponse, reader: jspb.BinaryReader): LoadWorldPresetResponse;
}

export namespace LoadWorldPresetResponse {
  export type AsObject = {
  }
}

export class SearchWorldRequest extends jspb.Message {
  getEntityname(): string;
  setEntityname(value: string): SearchWorldRequest;

  getQuery(): common_pb.SearchQueryDTO | undefined;
  setQuery(value?: common_pb.SearchQueryDTO): SearchWorldRequest;
  hasQuery(): boolean;
  clearQuery(): SearchWorldRequest;

  getContext(): common_pb.ContextDTO | undefined;
  setContext(value?: common_pb.ContextDTO): SearchWorldRequest;
  hasContext(): boolean;
  clearContext(): SearchWorldRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchWorldRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchWorldRequest): SearchWorldRequest.AsObject;
  static serializeBinaryToWriter(message: SearchWorldRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchWorldRequest;
  static deserializeBinaryFromReader(message: SearchWorldRequest, reader: jspb.BinaryReader): SearchWorldRequest;
}

export namespace SearchWorldRequest {
  export type AsObject = {
    entityname: string,
    query?: common_pb.SearchQueryDTO.AsObject,
    context?: common_pb.ContextDTO.AsObject,
  }
}

export class SearchWorldResponse extends jspb.Message {
  getWorldsList(): Array<common_pb.WorldDTO>;
  setWorldsList(value: Array<common_pb.WorldDTO>): SearchWorldResponse;
  clearWorldsList(): SearchWorldResponse;
  addWorlds(value?: common_pb.WorldDTO, index?: number): common_pb.WorldDTO;

  getTotalresults(): number;
  setTotalresults(value: number): SearchWorldResponse;

  getTotalpages(): number;
  setTotalpages(value: number): SearchWorldResponse;

  getCurrentpage(): number;
  setCurrentpage(value: number): SearchWorldResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchWorldResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchWorldResponse): SearchWorldResponse.AsObject;
  static serializeBinaryToWriter(message: SearchWorldResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchWorldResponse;
  static deserializeBinaryFromReader(message: SearchWorldResponse, reader: jspb.BinaryReader): SearchWorldResponse;
}

export namespace SearchWorldResponse {
  export type AsObject = {
    worldsList: Array<common_pb.WorldDTO.AsObject>,
    totalresults: number,
    totalpages: number,
    currentpage: number,
  }
}

