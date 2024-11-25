import "reflect-metadata";
import * as grpc from '@grpc/grpc-js';
import { loadSync, PackageDefinition } from '@grpc/proto-loader';
import path from 'path';
import { AccountController } from './controller/AccountController';
import { WorldDataSource, CampaignDataSource } from "./data-source";
import { WorldController } from "./controller/world/WorldController";

(async () => {
    // Initialize TypeORM Data Source
    const dataSourcePromises = [WorldDataSource, CampaignDataSource].map(async (dataSource) => {
        await dataSource.initialize()
        console.log("Data Source has been initialized");
    })
    
    await Promise.all(dataSourcePromises)
    
    
    // Load the proto file
    console.log(`hello`)
    const protoOptions = {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    }
    const accountPackageDefinition: PackageDefinition = loadSync(path.join(__dirname, '../src/proto/account.proto'), protoOptions);
    const worldPackageDefinition: PackageDefinition = loadSync(path.join(__dirname, '../src/proto/world.proto'), protoOptions);
    console.log(`accountPackageDefinition: `, accountPackageDefinition)
    console.log(`worldPackageDefinition: `, worldPackageDefinition)
    
    const accountProtoDescriptor = grpc.loadPackageDefinition(accountPackageDefinition) as any;
    const worldProtoDescriptor = grpc.loadPackageDefinition(worldPackageDefinition) as any;
    console.log(`accountProtoDescriptor: `, accountProtoDescriptor)
    console.log(`worldProtoDescriptor: `, worldProtoDescriptor)
    const accountPackage = accountProtoDescriptor.account;
    const worldPackage = worldProtoDescriptor.world;
    console.log(`accountPackage: `, accountPackage)
    console.log(`worldPackage: `, worldPackage)
    
    // Initialize gRPC server
    const server = new grpc.Server();
    console.log(`server: `, server)
    
    // Add the services and bind implementation
    server.addService(accountPackage.AccountController.service, new AccountController());
    server.addService(worldPackage.WorldController.service, new WorldController());
    
    const PORT = '50051';
    server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(), (err: Error | null, port: number) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(`gRPC server is running on port ${port}`);
        server.start();
    });
})()