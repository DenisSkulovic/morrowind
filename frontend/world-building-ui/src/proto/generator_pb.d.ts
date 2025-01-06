import * as jspb from 'google-protobuf'

import * as entities_pb from './entities_pb'; // proto import: "entities.proto"


export class GenerateItemsRequest extends jspb.Message {
  getSource(): entities_pb.DataSourceEnumDTO;
  setSource(value: entities_pb.DataSourceEnumDTO): GenerateItemsRequest;

  getArrList(): Array<entities_pb.GenerationInstructionDTO>;
  setArrList(value: Array<entities_pb.GenerationInstructionDTO>): GenerateItemsRequest;
  clearArrList(): GenerateItemsRequest;
  addArr(value?: entities_pb.GenerationInstructionDTO, index?: number): entities_pb.GenerationInstructionDTO;

  getContext(): entities_pb.ContextDTO | undefined;
  setContext(value?: entities_pb.ContextDTO): GenerateItemsRequest;
  hasContext(): boolean;
  clearContext(): GenerateItemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateItemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateItemsRequest): GenerateItemsRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateItemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateItemsRequest;
  static deserializeBinaryFromReader(message: GenerateItemsRequest, reader: jspb.BinaryReader): GenerateItemsRequest;
}

export namespace GenerateItemsRequest {
  export type AsObject = {
    source: entities_pb.DataSourceEnumDTO,
    arrList: Array<entities_pb.GenerationInstructionDTO.AsObject>,
    context?: entities_pb.ContextDTO.AsObject,
  }
}

export class GenerateItemsResponse extends jspb.Message {
  getArrList(): Array<entities_pb.ItemDTO>;
  setArrList(value: Array<entities_pb.ItemDTO>): GenerateItemsResponse;
  clearArrList(): GenerateItemsResponse;
  addArr(value?: entities_pb.ItemDTO, index?: number): entities_pb.ItemDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateItemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateItemsResponse): GenerateItemsResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateItemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateItemsResponse;
  static deserializeBinaryFromReader(message: GenerateItemsResponse, reader: jspb.BinaryReader): GenerateItemsResponse;
}

export namespace GenerateItemsResponse {
  export type AsObject = {
    arrList: Array<entities_pb.ItemDTO.AsObject>,
  }
}

export class GenerateCharactersRequestCustom extends jspb.Message {
  getSource(): entities_pb.DataSourceEnumDTO;
  setSource(value: entities_pb.DataSourceEnumDTO): GenerateCharactersRequestCustom;

  getArrList(): Array<entities_pb.CharacterGenInstructionDTO>;
  setArrList(value: Array<entities_pb.CharacterGenInstructionDTO>): GenerateCharactersRequestCustom;
  clearArrList(): GenerateCharactersRequestCustom;
  addArr(value?: entities_pb.CharacterGenInstructionDTO, index?: number): entities_pb.CharacterGenInstructionDTO;

  getContext(): entities_pb.ContextDTO | undefined;
  setContext(value?: entities_pb.ContextDTO): GenerateCharactersRequestCustom;
  hasContext(): boolean;
  clearContext(): GenerateCharactersRequestCustom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateCharactersRequestCustom.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCharactersRequestCustom): GenerateCharactersRequestCustom.AsObject;
  static serializeBinaryToWriter(message: GenerateCharactersRequestCustom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCharactersRequestCustom;
  static deserializeBinaryFromReader(message: GenerateCharactersRequestCustom, reader: jspb.BinaryReader): GenerateCharactersRequestCustom;
}

export namespace GenerateCharactersRequestCustom {
  export type AsObject = {
    source: entities_pb.DataSourceEnumDTO,
    arrList: Array<entities_pb.CharacterGenInstructionDTO.AsObject>,
    context?: entities_pb.ContextDTO.AsObject,
  }
}

export class GenerateCharactersRequestDB extends jspb.Message {
  getSource(): entities_pb.DataSourceEnumDTO;
  setSource(value: entities_pb.DataSourceEnumDTO): GenerateCharactersRequestDB;

  getChargeninstructionidsList(): Array<string>;
  setChargeninstructionidsList(value: Array<string>): GenerateCharactersRequestDB;
  clearChargeninstructionidsList(): GenerateCharactersRequestDB;
  addChargeninstructionids(value: string, index?: number): GenerateCharactersRequestDB;

  getContext(): entities_pb.ContextDTO | undefined;
  setContext(value?: entities_pb.ContextDTO): GenerateCharactersRequestDB;
  hasContext(): boolean;
  clearContext(): GenerateCharactersRequestDB;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateCharactersRequestDB.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCharactersRequestDB): GenerateCharactersRequestDB.AsObject;
  static serializeBinaryToWriter(message: GenerateCharactersRequestDB, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCharactersRequestDB;
  static deserializeBinaryFromReader(message: GenerateCharactersRequestDB, reader: jspb.BinaryReader): GenerateCharactersRequestDB;
}

export namespace GenerateCharactersRequestDB {
  export type AsObject = {
    source: entities_pb.DataSourceEnumDTO,
    chargeninstructionidsList: Array<string>,
    context?: entities_pb.ContextDTO.AsObject,
  }
}

export class GenerateCharactersResponse extends jspb.Message {
  getArrList(): Array<entities_pb.CharacterDTO>;
  setArrList(value: Array<entities_pb.CharacterDTO>): GenerateCharactersResponse;
  clearArrList(): GenerateCharactersResponse;
  addArr(value?: entities_pb.CharacterDTO, index?: number): entities_pb.CharacterDTO;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateCharactersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCharactersResponse): GenerateCharactersResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateCharactersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCharactersResponse;
  static deserializeBinaryFromReader(message: GenerateCharactersResponse, reader: jspb.BinaryReader): GenerateCharactersResponse;
}

export namespace GenerateCharactersResponse {
  export type AsObject = {
    arrList: Array<entities_pb.CharacterDTO.AsObject>,
  }
}

export class GenerateCharacterGroupsRequest extends jspb.Message {
  getSource(): entities_pb.DataSourceEnumDTO;
  setSource(value: entities_pb.DataSourceEnumDTO): GenerateCharacterGroupsRequest;

  getArrList(): Array<entities_pb.CharacterGroupGenInstructionDTO>;
  setArrList(value: Array<entities_pb.CharacterGroupGenInstructionDTO>): GenerateCharacterGroupsRequest;
  clearArrList(): GenerateCharacterGroupsRequest;
  addArr(value?: entities_pb.CharacterGroupGenInstructionDTO, index?: number): entities_pb.CharacterGroupGenInstructionDTO;

  getContext(): entities_pb.ContextDTO | undefined;
  setContext(value?: entities_pb.ContextDTO): GenerateCharacterGroupsRequest;
  hasContext(): boolean;
  clearContext(): GenerateCharacterGroupsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateCharacterGroupsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCharacterGroupsRequest): GenerateCharacterGroupsRequest.AsObject;
  static serializeBinaryToWriter(message: GenerateCharacterGroupsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCharacterGroupsRequest;
  static deserializeBinaryFromReader(message: GenerateCharacterGroupsRequest, reader: jspb.BinaryReader): GenerateCharacterGroupsRequest;
}

export namespace GenerateCharacterGroupsRequest {
  export type AsObject = {
    source: entities_pb.DataSourceEnumDTO,
    arrList: Array<entities_pb.CharacterGroupGenInstructionDTO.AsObject>,
    context?: entities_pb.ContextDTO.AsObject,
  }
}

export class GenerateCharacterGroupsResponse extends jspb.Message {
  getArrList(): Array<GenerateCharactersResponse>;
  setArrList(value: Array<GenerateCharactersResponse>): GenerateCharacterGroupsResponse;
  clearArrList(): GenerateCharacterGroupsResponse;
  addArr(value?: GenerateCharactersResponse, index?: number): GenerateCharactersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenerateCharacterGroupsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GenerateCharacterGroupsResponse): GenerateCharacterGroupsResponse.AsObject;
  static serializeBinaryToWriter(message: GenerateCharacterGroupsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenerateCharacterGroupsResponse;
  static deserializeBinaryFromReader(message: GenerateCharacterGroupsResponse, reader: jspb.BinaryReader): GenerateCharacterGroupsResponse;
}

export namespace GenerateCharacterGroupsResponse {
  export type AsObject = {
    arrList: Array<GenerateCharactersResponse.AsObject>,
  }
}

