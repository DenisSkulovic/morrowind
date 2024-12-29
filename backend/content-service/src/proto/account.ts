// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.4.2
//   protoc               v3.12.4
// source: account.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AccountDTO } from "./common";

export const protobufPackage = "account";

export interface UpdateAccountRequest {
  account: AccountDTO | undefined;
}

export interface UpdateAccountResponse {
  account: AccountDTO | undefined;
}

export interface DeleteAccountRequest {
  username: string;
}

/** No fields required for a 200 status response */
export interface DeleteAccountResponse {
}

export interface CreateAccountRequest {
  username: string;
  passwordHash: string;
  email: string;
  role: string;
}

export interface CreateAccountResponse {
  account: AccountDTO | undefined;
}

export interface GetAccountRequest {
  username: string;
}

export interface GetAccountResponse {
  account: AccountDTO | undefined;
}

function createBaseUpdateAccountRequest(): UpdateAccountRequest {
  return { account: undefined };
}

export const UpdateAccountRequest: MessageFns<UpdateAccountRequest> = {
  encode(message: UpdateAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.account !== undefined) {
      AccountDTO.encode(message.account, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.account = AccountDTO.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAccountRequest {
    return { account: isSet(object.account) ? AccountDTO.fromJSON(object.account) : undefined };
  },

  toJSON(message: UpdateAccountRequest): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = AccountDTO.toJSON(message.account);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAccountRequest>, I>>(base?: I): UpdateAccountRequest {
    return UpdateAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAccountRequest>, I>>(object: I): UpdateAccountRequest {
    const message = createBaseUpdateAccountRequest();
    message.account = (object.account !== undefined && object.account !== null)
      ? AccountDTO.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseUpdateAccountResponse(): UpdateAccountResponse {
  return { account: undefined };
}

export const UpdateAccountResponse: MessageFns<UpdateAccountResponse> = {
  encode(message: UpdateAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.account !== undefined) {
      AccountDTO.encode(message.account, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): UpdateAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseUpdateAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.account = AccountDTO.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): UpdateAccountResponse {
    return { account: isSet(object.account) ? AccountDTO.fromJSON(object.account) : undefined };
  },

  toJSON(message: UpdateAccountResponse): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = AccountDTO.toJSON(message.account);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<UpdateAccountResponse>, I>>(base?: I): UpdateAccountResponse {
    return UpdateAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<UpdateAccountResponse>, I>>(object: I): UpdateAccountResponse {
    const message = createBaseUpdateAccountResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? AccountDTO.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseDeleteAccountRequest(): DeleteAccountRequest {
  return { username: "" };
}

export const DeleteAccountRequest: MessageFns<DeleteAccountRequest> = {
  encode(message: DeleteAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): DeleteAccountRequest {
    return { username: isSet(object.username) ? globalThis.String(object.username) : "" };
  },

  toJSON(message: DeleteAccountRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAccountRequest>, I>>(base?: I): DeleteAccountRequest {
    return DeleteAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAccountRequest>, I>>(object: I): DeleteAccountRequest {
    const message = createBaseDeleteAccountRequest();
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseDeleteAccountResponse(): DeleteAccountResponse {
  return {};
}

export const DeleteAccountResponse: MessageFns<DeleteAccountResponse> = {
  encode(_: DeleteAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): DeleteAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeleteAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(_: any): DeleteAccountResponse {
    return {};
  },

  toJSON(_: DeleteAccountResponse): unknown {
    const obj: any = {};
    return obj;
  },

  create<I extends Exact<DeepPartial<DeleteAccountResponse>, I>>(base?: I): DeleteAccountResponse {
    return DeleteAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<DeleteAccountResponse>, I>>(_: I): DeleteAccountResponse {
    const message = createBaseDeleteAccountResponse();
    return message;
  },
};

function createBaseCreateAccountRequest(): CreateAccountRequest {
  return { username: "", passwordHash: "", email: "", role: "" };
}

export const CreateAccountRequest: MessageFns<CreateAccountRequest> = {
  encode(message: CreateAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    if (message.passwordHash !== "") {
      writer.uint32(18).string(message.passwordHash);
    }
    if (message.email !== "") {
      writer.uint32(26).string(message.email);
    }
    if (message.role !== "") {
      writer.uint32(34).string(message.role);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.passwordHash = reader.string();
          continue;
        }
        case 3: {
          if (tag !== 26) {
            break;
          }

          message.email = reader.string();
          continue;
        }
        case 4: {
          if (tag !== 34) {
            break;
          }

          message.role = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAccountRequest {
    return {
      username: isSet(object.username) ? globalThis.String(object.username) : "",
      passwordHash: isSet(object.passwordHash) ? globalThis.String(object.passwordHash) : "",
      email: isSet(object.email) ? globalThis.String(object.email) : "",
      role: isSet(object.role) ? globalThis.String(object.role) : "",
    };
  },

  toJSON(message: CreateAccountRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    if (message.passwordHash !== "") {
      obj.passwordHash = message.passwordHash;
    }
    if (message.email !== "") {
      obj.email = message.email;
    }
    if (message.role !== "") {
      obj.role = message.role;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAccountRequest>, I>>(base?: I): CreateAccountRequest {
    return CreateAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAccountRequest>, I>>(object: I): CreateAccountRequest {
    const message = createBaseCreateAccountRequest();
    message.username = object.username ?? "";
    message.passwordHash = object.passwordHash ?? "";
    message.email = object.email ?? "";
    message.role = object.role ?? "";
    return message;
  },
};

function createBaseCreateAccountResponse(): CreateAccountResponse {
  return { account: undefined };
}

export const CreateAccountResponse: MessageFns<CreateAccountResponse> = {
  encode(message: CreateAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.account !== undefined) {
      AccountDTO.encode(message.account, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): CreateAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCreateAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.account = AccountDTO.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): CreateAccountResponse {
    return { account: isSet(object.account) ? AccountDTO.fromJSON(object.account) : undefined };
  },

  toJSON(message: CreateAccountResponse): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = AccountDTO.toJSON(message.account);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAccountResponse>, I>>(base?: I): CreateAccountResponse {
    return CreateAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAccountResponse>, I>>(object: I): CreateAccountResponse {
    const message = createBaseCreateAccountResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? AccountDTO.fromPartial(object.account)
      : undefined;
    return message;
  },
};

function createBaseGetAccountRequest(): GetAccountRequest {
  return { username: "" };
}

export const GetAccountRequest: MessageFns<GetAccountRequest> = {
  encode(message: GetAccountRequest, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.username !== "") {
      writer.uint32(10).string(message.username);
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetAccountRequest {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.username = reader.string();
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccountRequest {
    return { username: isSet(object.username) ? globalThis.String(object.username) : "" };
  },

  toJSON(message: GetAccountRequest): unknown {
    const obj: any = {};
    if (message.username !== "") {
      obj.username = message.username;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAccountRequest>, I>>(base?: I): GetAccountRequest {
    return GetAccountRequest.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAccountRequest>, I>>(object: I): GetAccountRequest {
    const message = createBaseGetAccountRequest();
    message.username = object.username ?? "";
    return message;
  },
};

function createBaseGetAccountResponse(): GetAccountResponse {
  return { account: undefined };
}

export const GetAccountResponse: MessageFns<GetAccountResponse> = {
  encode(message: GetAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.account !== undefined) {
      AccountDTO.encode(message.account, writer.uint32(10).fork()).join();
    }
    return writer;
  },

  decode(input: BinaryReader | Uint8Array, length?: number): GetAccountResponse {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGetAccountResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1: {
          if (tag !== 10) {
            break;
          }

          message.account = AccountDTO.decode(reader, reader.uint32());
          continue;
        }
      }
      if ((tag & 7) === 4 || tag === 0) {
        break;
      }
      reader.skip(tag & 7);
    }
    return message;
  },

  fromJSON(object: any): GetAccountResponse {
    return { account: isSet(object.account) ? AccountDTO.fromJSON(object.account) : undefined };
  },

  toJSON(message: GetAccountResponse): unknown {
    const obj: any = {};
    if (message.account !== undefined) {
      obj.account = AccountDTO.toJSON(message.account);
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<GetAccountResponse>, I>>(base?: I): GetAccountResponse {
    return GetAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<GetAccountResponse>, I>>(object: I): GetAccountResponse {
    const message = createBaseGetAccountResponse();
    message.account = (object.account !== undefined && object.account !== null)
      ? AccountDTO.fromPartial(object.account)
      : undefined;
    return message;
  },
};

export interface AccountService {
  createAccountAndUser(request: CreateAccountRequest): Promise<CreateAccountResponse>;
  getAccount(request: GetAccountRequest): Promise<GetAccountResponse>;
  updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResponse>;
  deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse>;
}

export const AccountServiceServiceName = "account.AccountService";
export class AccountServiceClientImpl implements AccountService {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AccountServiceServiceName;
    this.rpc = rpc;
    this.createAccountAndUser = this.createAccountAndUser.bind(this);
    this.getAccount = this.getAccount.bind(this);
    this.updateAccount = this.updateAccount.bind(this);
    this.deleteAccount = this.deleteAccount.bind(this);
  }
  createAccountAndUser(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    const data = CreateAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "createAccountAndUser", data);
    return promise.then((data) => CreateAccountResponse.decode(new BinaryReader(data)));
  }

  getAccount(request: GetAccountRequest): Promise<GetAccountResponse> {
    const data = GetAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getAccount", data);
    return promise.then((data) => GetAccountResponse.decode(new BinaryReader(data)));
  }

  updateAccount(request: UpdateAccountRequest): Promise<UpdateAccountResponse> {
    const data = UpdateAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "updateAccount", data);
    return promise.then((data) => UpdateAccountResponse.decode(new BinaryReader(data)));
  }

  deleteAccount(request: DeleteAccountRequest): Promise<DeleteAccountResponse> {
    const data = DeleteAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "deleteAccount", data);
    return promise.then((data) => DeleteAccountResponse.decode(new BinaryReader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends globalThis.Array<infer U> ? globalThis.Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}

export interface MessageFns<T> {
  encode(message: T, writer?: BinaryWriter): BinaryWriter;
  decode(input: BinaryReader | Uint8Array, length?: number): T;
  fromJSON(object: any): T;
  toJSON(message: T): unknown;
  create<I extends Exact<DeepPartial<T>, I>>(base?: I): T;
  fromPartial<I extends Exact<DeepPartial<T>, I>>(object: I): T;
}
