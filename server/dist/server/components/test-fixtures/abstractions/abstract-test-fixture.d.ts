import { CacheService } from '../../data-access/cache-service/cache-service';
import { IEntity } from '../../entities/abstractions/i-entity';
import { ITestFixture, TestFixtureInitParams } from './i-test-fixture';
declare abstract class AbstractTestFixture<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse> implements ITestFixture<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse> {
    protected _entity: IEntity<any, EntityBuildParams, any>;
    protected _cacheService: CacheService;
    protected _modelName: string;
    createMockData: (buildParams?: EntityBuildParams | undefined) => Promise<EntityBuildResponse>;
    protected abstract _createMockBuildParams(): Promise<EntityBuildParams>;
    init: (initParams: TestFixtureInitParams<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse>) => Promise<this>;
    protected _initTemplate: (optionalInitParams: Omit<TestFixtureInitParams<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse>, 'makeEntity' | 'makeCacheService' | 'modelName'>) => Promise<void>;
}
export { AbstractTestFixture };
