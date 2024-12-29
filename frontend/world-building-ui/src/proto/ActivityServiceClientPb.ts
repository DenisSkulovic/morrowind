/**
 * @fileoverview gRPC-Web generated client stub for activity
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.12.4
// source: activity.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as activity_pb from './activity_pb'; // proto import: "activity.proto"


export class ActivityServiceClient {
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

  methodDescriptorsearch = new grpcWeb.MethodDescriptor(
    '/activity.ActivityService/search',
    grpcWeb.MethodType.UNARY,
    activity_pb.ActivitySearchRequest,
    activity_pb.ActivitySearchResponse,
    (request: activity_pb.ActivitySearchRequest) => {
      return request.serializeBinary();
    },
    activity_pb.ActivitySearchResponse.deserializeBinary
  );

  search(
    request: activity_pb.ActivitySearchRequest,
    metadata?: grpcWeb.Metadata | null): Promise<activity_pb.ActivitySearchResponse>;

  search(
    request: activity_pb.ActivitySearchRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.ActivitySearchResponse) => void): grpcWeb.ClientReadableStream<activity_pb.ActivitySearchResponse>;

  search(
    request: activity_pb.ActivitySearchRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.ActivitySearchResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.ActivityService/search',
        request,
        metadata || {},
        this.methodDescriptorsearch,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.ActivityService/search',
    request,
    metadata || {},
    this.methodDescriptorsearch);
  }

  methodDescriptorclearAll = new grpcWeb.MethodDescriptor(
    '/activity.ActivityService/clearAll',
    grpcWeb.MethodType.UNARY,
    activity_pb.ActivityClearAllRequest,
    activity_pb.ActivityClearAllResponse,
    (request: activity_pb.ActivityClearAllRequest) => {
      return request.serializeBinary();
    },
    activity_pb.ActivityClearAllResponse.deserializeBinary
  );

  clearAll(
    request: activity_pb.ActivityClearAllRequest,
    metadata?: grpcWeb.Metadata | null): Promise<activity_pb.ActivityClearAllResponse>;

  clearAll(
    request: activity_pb.ActivityClearAllRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.ActivityClearAllResponse) => void): grpcWeb.ClientReadableStream<activity_pb.ActivityClearAllResponse>;

  clearAll(
    request: activity_pb.ActivityClearAllRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.ActivityClearAllResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.ActivityService/clearAll',
        request,
        metadata || {},
        this.methodDescriptorclearAll,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.ActivityService/clearAll',
    request,
    metadata || {},
    this.methodDescriptorclearAll);
  }

  methodDescriptorcreate = new grpcWeb.MethodDescriptor(
    '/activity.ActivityService/create',
    grpcWeb.MethodType.UNARY,
    activity_pb.ActivityCreateRequest,
    activity_pb.ActivityCreateResponse,
    (request: activity_pb.ActivityCreateRequest) => {
      return request.serializeBinary();
    },
    activity_pb.ActivityCreateResponse.deserializeBinary
  );

  create(
    request: activity_pb.ActivityCreateRequest,
    metadata?: grpcWeb.Metadata | null): Promise<activity_pb.ActivityCreateResponse>;

  create(
    request: activity_pb.ActivityCreateRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.ActivityCreateResponse) => void): grpcWeb.ClientReadableStream<activity_pb.ActivityCreateResponse>;

  create(
    request: activity_pb.ActivityCreateRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.ActivityCreateResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.ActivityService/create',
        request,
        metadata || {},
        this.methodDescriptorcreate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.ActivityService/create',
    request,
    metadata || {},
    this.methodDescriptorcreate);
  }

  methodDescriptorhead = new grpcWeb.MethodDescriptor(
    '/activity.ActivityService/head',
    grpcWeb.MethodType.UNARY,
    activity_pb.ActivityHeadRequest,
    activity_pb.ActivityHeadResponse,
    (request: activity_pb.ActivityHeadRequest) => {
      return request.serializeBinary();
    },
    activity_pb.ActivityHeadResponse.deserializeBinary
  );

  head(
    request: activity_pb.ActivityHeadRequest,
    metadata?: grpcWeb.Metadata | null): Promise<activity_pb.ActivityHeadResponse>;

  head(
    request: activity_pb.ActivityHeadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: activity_pb.ActivityHeadResponse) => void): grpcWeb.ClientReadableStream<activity_pb.ActivityHeadResponse>;

  head(
    request: activity_pb.ActivityHeadRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: activity_pb.ActivityHeadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/activity.ActivityService/head',
        request,
        metadata || {},
        this.methodDescriptorhead,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/activity.ActivityService/head',
    request,
    metadata || {},
    this.methodDescriptorhead);
  }

}

