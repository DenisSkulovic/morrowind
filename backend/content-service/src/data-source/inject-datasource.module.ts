import { Module, DynamicModule } from '@nestjs/common';
import { DataSource, DataSourceOptions } from 'typeorm';
import { DataSourceEnum } from '../common/enum/DataSourceEnum';
import { getDataSourceOptions } from './datasource-config';

@Module({})
export class InjectDataSourceModule {
    static register(dataSources: DataSourceEnum[]): DynamicModule {
        const providers = dataSources.map((source) => ({
            provide: source,
            useFactory: async (): Promise<DataSource> => {
                const options: DataSourceOptions = getDataSourceOptions(source);
                const dataSource = new DataSource(options);
                await dataSource.initialize();
                return dataSource;
            },
        }));

        return {
            module: InjectDataSourceModule,
            providers: providers,
            exports: providers,
        };
    }
}