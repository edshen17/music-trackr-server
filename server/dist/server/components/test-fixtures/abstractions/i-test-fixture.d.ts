import { CacheService } from '../../data-access/cache-service/cache-service';
import { IEntity } from '../../entities/abstractions/i-entity';
declare type TestFixtureInitParams<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse> = RequiredTestFixtureInitParams<EntityBuildParams, EntityBuildResponse> & OptionalTestFixtureInitParams;
declare type RequiredTestFixtureInitParams<EntityBuildParams, EntityBuildResponse> = {
    makeEntity: Promise<IEntity<any, EntityBuildParams, EntityBuildResponse>> | IEntity<any, EntityBuildParams, EntityBuildResponse>;
    makeCacheService: Promise<CacheService>;
    modelName: string;
};
interface ITestFixture<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse> {
    init: (initParams: TestFixtureInitParams<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse>) => Promise<this> | this;
    createMockData: (buildParams?: EntityBuildParams) => Promise<EntityBuildResponse>;
}
export { ITestFixture, TestFixtureInitParams };
