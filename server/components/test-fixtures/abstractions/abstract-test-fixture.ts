import { CacheService, CACHE_TTL } from '../../data-access/cache-service/cache-service';
import { IEntity } from '../../entities/abstractions/i-entity';
import { ITestFixture, TestFixtureInitParams } from './i-test-fixture';

abstract class AbstractTestFixture<
  OptionalTestFixtureInitParams,
  EntityBuildParams,
  EntityBuildResponse
> implements ITestFixture<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse>
{
  protected _entity!: IEntity<any, EntityBuildParams, any>;
  protected _cacheService!: CacheService;
  protected _modelName!: string;

  public createMockData = async (buildParams?: EntityBuildParams): Promise<EntityBuildResponse> => {
    const mockBuildParams = buildParams || (await this._createMockBuildParams());
    const mockEntity = await this._entity.build(mockBuildParams);
    const mockData = await this._cacheService.set({
      hashKey: this._modelName,
      key: mockEntity._id,
      value: mockEntity,
      ttl: CACHE_TTL.DAY,
    });
    return mockData as EntityBuildResponse;
  };

  protected abstract _createMockBuildParams(): Promise<EntityBuildParams>;

  public init = async (
    initParams: TestFixtureInitParams<
      OptionalTestFixtureInitParams,
      EntityBuildParams,
      EntityBuildResponse
    >
  ) => {
    const { makeEntity, makeCacheService, modelName, ...optionalInitParams } = initParams;
    this._entity = await makeEntity;
    this._cacheService = await makeCacheService;
    this._modelName = modelName;
    await this._initTemplate(optionalInitParams);
    return this;
  };

  protected _initTemplate = async (
    optionalInitParams: Omit<
      TestFixtureInitParams<OptionalTestFixtureInitParams, EntityBuildParams, EntityBuildResponse>,
      'makeEntity' | 'makeCacheService' | 'modelName'
    >
  ): Promise<void> => {
    return;
  };
}

export { AbstractTestFixture };
