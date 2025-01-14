/**
 * @fileoverview gRPC-Web generated client stub for generator
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.12.4
// source: generator.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as generator_pb from './generator_pb'; // proto import: "generator.proto"


export class GeneratorServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname.replace(/\/+$/, '');
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorgenerateItems = new grpcWeb.MethodDescriptor(
    '/generator.GeneratorService/generateItems',
    grpcWeb.MethodType.UNARY,
    generator_pb.GenerateItemsRequest,
    generator_pb.GenerateItemsResponse,
    (request: generator_pb.GenerateItemsRequest) => {
      return request.serializeBinary();
    },
    generator_pb.GenerateItemsResponse.deserializeBinary
  );

  generateItems(
    request: generator_pb.GenerateItemsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<generator_pb.GenerateItemsResponse>;

  generateItems(
    request: generator_pb.GenerateItemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateItemsResponse) => void): grpcWeb.ClientReadableStream<generator_pb.GenerateItemsResponse>;

  generateItems(
    request: generator_pb.GenerateItemsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateItemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generator.GeneratorService/generateItems',
        request,
        metadata || {},
        this.methodDescriptorgenerateItems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generator.GeneratorService/generateItems',
    request,
    metadata || {},
    this.methodDescriptorgenerateItems);
  }

  methodDescriptorgenerateCharactersCustom = new grpcWeb.MethodDescriptor(
    '/generator.GeneratorService/generateCharactersCustom',
    grpcWeb.MethodType.UNARY,
    generator_pb.GenerateCharactersRequestCustom,
    generator_pb.GenerateCharactersResponse,
    (request: generator_pb.GenerateCharactersRequestCustom) => {
      return request.serializeBinary();
    },
    generator_pb.GenerateCharactersResponse.deserializeBinary
  );

  generateCharactersCustom(
    request: generator_pb.GenerateCharactersRequestCustom,
    metadata?: grpcWeb.Metadata | null): Promise<generator_pb.GenerateCharactersResponse>;

  generateCharactersCustom(
    request: generator_pb.GenerateCharactersRequestCustom,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateCharactersResponse) => void): grpcWeb.ClientReadableStream<generator_pb.GenerateCharactersResponse>;

  generateCharactersCustom(
    request: generator_pb.GenerateCharactersRequestCustom,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateCharactersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generator.GeneratorService/generateCharactersCustom',
        request,
        metadata || {},
        this.methodDescriptorgenerateCharactersCustom,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generator.GeneratorService/generateCharactersCustom',
    request,
    metadata || {},
    this.methodDescriptorgenerateCharactersCustom);
  }

  methodDescriptorgenerateCharactersDB = new grpcWeb.MethodDescriptor(
    '/generator.GeneratorService/generateCharactersDB',
    grpcWeb.MethodType.UNARY,
    generator_pb.GenerateCharactersRequestDB,
    generator_pb.GenerateCharactersResponse,
    (request: generator_pb.GenerateCharactersRequestDB) => {
      return request.serializeBinary();
    },
    generator_pb.GenerateCharactersResponse.deserializeBinary
  );

  generateCharactersDB(
    request: generator_pb.GenerateCharactersRequestDB,
    metadata?: grpcWeb.Metadata | null): Promise<generator_pb.GenerateCharactersResponse>;

  generateCharactersDB(
    request: generator_pb.GenerateCharactersRequestDB,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateCharactersResponse) => void): grpcWeb.ClientReadableStream<generator_pb.GenerateCharactersResponse>;

  generateCharactersDB(
    request: generator_pb.GenerateCharactersRequestDB,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateCharactersResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generator.GeneratorService/generateCharactersDB',
        request,
        metadata || {},
        this.methodDescriptorgenerateCharactersDB,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generator.GeneratorService/generateCharactersDB',
    request,
    metadata || {},
    this.methodDescriptorgenerateCharactersDB);
  }

  methodDescriptorgenerateCharacterGroups = new grpcWeb.MethodDescriptor(
    '/generator.GeneratorService/generateCharacterGroups',
    grpcWeb.MethodType.UNARY,
    generator_pb.GenerateCharacterGroupsRequest,
    generator_pb.GenerateCharacterGroupsResponse,
    (request: generator_pb.GenerateCharacterGroupsRequest) => {
      return request.serializeBinary();
    },
    generator_pb.GenerateCharacterGroupsResponse.deserializeBinary
  );

  generateCharacterGroups(
    request: generator_pb.GenerateCharacterGroupsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<generator_pb.GenerateCharacterGroupsResponse>;

  generateCharacterGroups(
    request: generator_pb.GenerateCharacterGroupsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateCharacterGroupsResponse) => void): grpcWeb.ClientReadableStream<generator_pb.GenerateCharacterGroupsResponse>;

  generateCharacterGroups(
    request: generator_pb.GenerateCharacterGroupsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: generator_pb.GenerateCharacterGroupsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/generator.GeneratorService/generateCharacterGroups',
        request,
        metadata || {},
        this.methodDescriptorgenerateCharacterGroups,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/generator.GeneratorService/generateCharacterGroups',
    request,
    metadata || {},
    this.methodDescriptorgenerateCharacterGroups);
  }

}

