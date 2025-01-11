/**
 * @fileoverview gRPC-Web generated client stub for dialogue
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v3.12.4
// source: dialogue.proto


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as dialogue_pb from './dialogue_pb'; // proto import: "dialogue.proto"


export class DialogueServiceClient {
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

  methodDescriptorInitializeDialogue = new grpcWeb.MethodDescriptor(
    '/dialogue.DialogueService/InitializeDialogue',
    grpcWeb.MethodType.UNARY,
    dialogue_pb.InitializeDialogueRequest,
    dialogue_pb.InitializeDialogueResponse,
    (request: dialogue_pb.InitializeDialogueRequest) => {
      return request.serializeBinary();
    },
    dialogue_pb.InitializeDialogueResponse.deserializeBinary
  );

  initializeDialogue(
    request: dialogue_pb.InitializeDialogueRequest,
    metadata?: grpcWeb.Metadata | null): Promise<dialogue_pb.InitializeDialogueResponse>;

  initializeDialogue(
    request: dialogue_pb.InitializeDialogueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: dialogue_pb.InitializeDialogueResponse) => void): grpcWeb.ClientReadableStream<dialogue_pb.InitializeDialogueResponse>;

  initializeDialogue(
    request: dialogue_pb.InitializeDialogueRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: dialogue_pb.InitializeDialogueResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dialogue.DialogueService/InitializeDialogue',
        request,
        metadata || {},
        this.methodDescriptorInitializeDialogue,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dialogue.DialogueService/InitializeDialogue',
    request,
    metadata || {},
    this.methodDescriptorInitializeDialogue);
  }

  methodDescriptorFinalizeDialogue = new grpcWeb.MethodDescriptor(
    '/dialogue.DialogueService/FinalizeDialogue',
    grpcWeb.MethodType.UNARY,
    dialogue_pb.FinalizeDialogueRequest,
    dialogue_pb.FinalizeDialogueResponse,
    (request: dialogue_pb.FinalizeDialogueRequest) => {
      return request.serializeBinary();
    },
    dialogue_pb.FinalizeDialogueResponse.deserializeBinary
  );

  finalizeDialogue(
    request: dialogue_pb.FinalizeDialogueRequest,
    metadata?: grpcWeb.Metadata | null): Promise<dialogue_pb.FinalizeDialogueResponse>;

  finalizeDialogue(
    request: dialogue_pb.FinalizeDialogueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: dialogue_pb.FinalizeDialogueResponse) => void): grpcWeb.ClientReadableStream<dialogue_pb.FinalizeDialogueResponse>;

  finalizeDialogue(
    request: dialogue_pb.FinalizeDialogueRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: dialogue_pb.FinalizeDialogueResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dialogue.DialogueService/FinalizeDialogue',
        request,
        metadata || {},
        this.methodDescriptorFinalizeDialogue,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dialogue.DialogueService/FinalizeDialogue',
    request,
    metadata || {},
    this.methodDescriptorFinalizeDialogue);
  }

  methodDescriptorGeneratePlayerDialogueOptions = new grpcWeb.MethodDescriptor(
    '/dialogue.DialogueService/GeneratePlayerDialogueOptions',
    grpcWeb.MethodType.UNARY,
    dialogue_pb.GeneratePlayerDialogueOptionsRequest,
    dialogue_pb.GeneratePlayerDialogueOptionsResponse,
    (request: dialogue_pb.GeneratePlayerDialogueOptionsRequest) => {
      return request.serializeBinary();
    },
    dialogue_pb.GeneratePlayerDialogueOptionsResponse.deserializeBinary
  );

  generatePlayerDialogueOptions(
    request: dialogue_pb.GeneratePlayerDialogueOptionsRequest,
    metadata?: grpcWeb.Metadata | null): Promise<dialogue_pb.GeneratePlayerDialogueOptionsResponse>;

  generatePlayerDialogueOptions(
    request: dialogue_pb.GeneratePlayerDialogueOptionsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: dialogue_pb.GeneratePlayerDialogueOptionsResponse) => void): grpcWeb.ClientReadableStream<dialogue_pb.GeneratePlayerDialogueOptionsResponse>;

  generatePlayerDialogueOptions(
    request: dialogue_pb.GeneratePlayerDialogueOptionsRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: dialogue_pb.GeneratePlayerDialogueOptionsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dialogue.DialogueService/GeneratePlayerDialogueOptions',
        request,
        metadata || {},
        this.methodDescriptorGeneratePlayerDialogueOptions,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dialogue.DialogueService/GeneratePlayerDialogueOptions',
    request,
    metadata || {},
    this.methodDescriptorGeneratePlayerDialogueOptions);
  }

  methodDescriptorInterruptDialogue = new grpcWeb.MethodDescriptor(
    '/dialogue.DialogueService/InterruptDialogue',
    grpcWeb.MethodType.UNARY,
    dialogue_pb.InterruptDialogueRequest,
    dialogue_pb.InterruptDialogueResponse,
    (request: dialogue_pb.InterruptDialogueRequest) => {
      return request.serializeBinary();
    },
    dialogue_pb.InterruptDialogueResponse.deserializeBinary
  );

  interruptDialogue(
    request: dialogue_pb.InterruptDialogueRequest,
    metadata?: grpcWeb.Metadata | null): Promise<dialogue_pb.InterruptDialogueResponse>;

  interruptDialogue(
    request: dialogue_pb.InterruptDialogueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: dialogue_pb.InterruptDialogueResponse) => void): grpcWeb.ClientReadableStream<dialogue_pb.InterruptDialogueResponse>;

  interruptDialogue(
    request: dialogue_pb.InterruptDialogueRequest,
    metadata?: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: dialogue_pb.InterruptDialogueResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/dialogue.DialogueService/InterruptDialogue',
        request,
        metadata || {},
        this.methodDescriptorInterruptDialogue,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/dialogue.DialogueService/InterruptDialogue',
    request,
    metadata || {},
    this.methodDescriptorInterruptDialogue);
  }

}

