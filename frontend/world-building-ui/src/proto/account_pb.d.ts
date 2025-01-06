import * as jspb from 'google-protobuf'

import * as entities_pb from './entities_pb'; // proto import: "entities.proto"


export class UpdateAccountRequest extends jspb.Message {
  getAccount(): entities_pb.AccountDTO | undefined;
  setAccount(value?: entities_pb.AccountDTO): UpdateAccountRequest;
  hasAccount(): boolean;
  clearAccount(): UpdateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
  static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
  export type AsObject = {
    account?: entities_pb.AccountDTO.AsObject,
  }
}

export class UpdateAccountResponse extends jspb.Message {
  getAccount(): entities_pb.AccountDTO | undefined;
  setAccount(value?: entities_pb.AccountDTO): UpdateAccountResponse;
  hasAccount(): boolean;
  clearAccount(): UpdateAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountResponse): UpdateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountResponse;
  static deserializeBinaryFromReader(message: UpdateAccountResponse, reader: jspb.BinaryReader): UpdateAccountResponse;
}

export namespace UpdateAccountResponse {
  export type AsObject = {
    account?: entities_pb.AccountDTO.AsObject,
  }
}

export class DeleteAccountRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): DeleteAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
  static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
  export type AsObject = {
    username: string,
  }
}

export class DeleteAccountResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountResponse): DeleteAccountResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountResponse;
  static deserializeBinaryFromReader(message: DeleteAccountResponse, reader: jspb.BinaryReader): DeleteAccountResponse;
}

export namespace DeleteAccountResponse {
  export type AsObject = {
  }
}

export class CreateAccountRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): CreateAccountRequest;

  getPasswordhash(): string;
  setPasswordhash(value: string): CreateAccountRequest;

  getEmail(): string;
  setEmail(value: string): CreateAccountRequest;

  getRole(): string;
  setRole(value: string): CreateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    username: string,
    passwordhash: string,
    email: string,
    role: string,
  }
}

export class CreateAccountResponse extends jspb.Message {
  getAccount(): entities_pb.AccountDTO | undefined;
  setAccount(value?: entities_pb.AccountDTO): CreateAccountResponse;
  hasAccount(): boolean;
  clearAccount(): CreateAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountResponse): CreateAccountResponse.AsObject;
  static serializeBinaryToWriter(message: CreateAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountResponse;
  static deserializeBinaryFromReader(message: CreateAccountResponse, reader: jspb.BinaryReader): CreateAccountResponse;
}

export namespace CreateAccountResponse {
  export type AsObject = {
    account?: entities_pb.AccountDTO.AsObject,
  }
}

export class GetAccountRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): GetAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    username: string,
  }
}

export class GetAccountResponse extends jspb.Message {
  getAccount(): entities_pb.AccountDTO | undefined;
  setAccount(value?: entities_pb.AccountDTO): GetAccountResponse;
  hasAccount(): boolean;
  clearAccount(): GetAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountResponse): GetAccountResponse.AsObject;
  static serializeBinaryToWriter(message: GetAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountResponse;
  static deserializeBinaryFromReader(message: GetAccountResponse, reader: jspb.BinaryReader): GetAccountResponse;
}

export namespace GetAccountResponse {
  export type AsObject = {
    account?: entities_pb.AccountDTO.AsObject,
  }
}

