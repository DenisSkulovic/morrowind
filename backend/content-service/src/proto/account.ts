// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v2.4.2
//   protoc               v3.20.3
// source: account.proto

/* eslint-disable */
import { BinaryReader, BinaryWriter } from "@bufbuild/protobuf/wire";
import { AccountDTO } from "./common";

export const protobufPackage = "account";

export interface CreateAccountRequest {
  username: string;
  passwordHash: string;
  email: string;
  role: string;
}

export interface CreateAccountResponse {
  userId: string;
  accountId: string;
}

export interface GetAccountRequest {
  username: string;
}

export interface GetAccountResponse {
  account: AccountDTO | undefined;
}

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
  return { userId: "", accountId: "" };
}

export const CreateAccountResponse: MessageFns<CreateAccountResponse> = {
  encode(message: CreateAccountResponse, writer: BinaryWriter = new BinaryWriter()): BinaryWriter {
    if (message.userId !== "") {
      writer.uint32(10).string(message.userId);
    }
    if (message.accountId !== "") {
      writer.uint32(18).string(message.accountId);
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

          message.userId = reader.string();
          continue;
        }
        case 2: {
          if (tag !== 18) {
            break;
          }

          message.accountId = reader.string();
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
    return {
      userId: isSet(object.userId) ? globalThis.String(object.userId) : "",
      accountId: isSet(object.accountId) ? globalThis.String(object.accountId) : "",
    };
  },

  toJSON(message: CreateAccountResponse): unknown {
    const obj: any = {};
    if (message.userId !== "") {
      obj.userId = message.userId;
    }
    if (message.accountId !== "") {
      obj.accountId = message.accountId;
    }
    return obj;
  },

  create<I extends Exact<DeepPartial<CreateAccountResponse>, I>>(base?: I): CreateAccountResponse {
    return CreateAccountResponse.fromPartial(base ?? ({} as any));
  },
  fromPartial<I extends Exact<DeepPartial<CreateAccountResponse>, I>>(object: I): CreateAccountResponse {
    const message = createBaseCreateAccountResponse();
    message.userId = object.userId ?? "";
    message.accountId = object.accountId ?? "";
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

export interface AccountController {
  createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse>;
  getAccount(request: GetAccountRequest): Promise<GetAccountResponse>;
}

export const AccountControllerServiceName = "account.AccountController";
export class AccountControllerClientImpl implements AccountController {
  private readonly rpc: Rpc;
  private readonly service: string;
  constructor(rpc: Rpc, opts?: { service?: string }) {
    this.service = opts?.service || AccountControllerServiceName;
    this.rpc = rpc;
    this.createAccount = this.createAccount.bind(this);
    this.getAccount = this.getAccount.bind(this);
  }
  createAccount(request: CreateAccountRequest): Promise<CreateAccountResponse> {
    const data = CreateAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "createAccount", data);
    return promise.then((data) => CreateAccountResponse.decode(new BinaryReader(data)));
  }

  getAccount(request: GetAccountRequest): Promise<GetAccountResponse> {
    const data = GetAccountRequest.encode(request).finish();
    const promise = this.rpc.request(this.service, "getAccount", data);
    return promise.then((data) => GetAccountResponse.decode(new BinaryReader(data)));
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
