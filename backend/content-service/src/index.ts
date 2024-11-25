import "reflect-metadata";
import * as grpc from '@grpc/grpc-js';
import { loadSync, PackageDefinition } from '@grpc/proto-loader';
import path from 'path';
import { AccountController } from './controller/AccountController';
import { WorldDataSource, CampaignDataSource } from "./data-source";

(async () => {
    // Initialize TypeORM Data Source
    const dataSourcePromises = [WorldDataSource, CampaignDataSource].map(async (dataSource) => {
        await dataSource.initialize()
        console.log("Data Source has been initialized");
    })
    
    await Promise.all(dataSourcePromises)
    
    
    // Load the proto file
    console.log(`hello`)
    const packageDefinition: PackageDefinition = loadSync(path.join(__dirname, '../src/proto/account.proto'), {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true,
    });
    console.log(`packageDefinition: `, packageDefinition)
    
    const protoDescriptor = grpc.loadPackageDefinition(packageDefinition) as any;
    console.log(`protoDescriptor: `, protoDescriptor)
    const accountPackage = protoDescriptor.account;
    console.log(`accountPackage: `, accountPackage)
    
    // Initialize gRPC server
    const server = new grpc.Server();
    console.log(`server: `, server)
    
    // Add the service and bind implementation
    server.addService(accountPackage.AccountController.service, new AccountController());
    
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