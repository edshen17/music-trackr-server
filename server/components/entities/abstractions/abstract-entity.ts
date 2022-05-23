import { AbstractEntityValidator } from '../../validators/abstractions/abstract-entity-validator';
import { EntityInitParams, IEntity } from './i-entity';

abstract class AbstractEntity<OptionalEntityInitParams, EntityBuildParams, EntityBuildResponse>
  implements IEntity<OptionalEntityInitParams, EntityBuildParams, EntityBuildResponse>
{
  protected _entityValidator!: AbstractEntityValidator;

  public build = (
    buildParams: EntityBuildParams
  ): Promise<EntityBuildResponse> | EntityBuildResponse => {
    this._validate(buildParams);
    const builtEntity = this._buildTemplate(buildParams);
    return builtEntity;
  };

  protected _validate = (buildParams: EntityBuildParams) => {
    this._entityValidator.validate({
      buildParams,
    });
  };

  protected abstract _buildTemplate(
    buildParams: EntityBuildParams
  ): Promise<EntityBuildResponse> | EntityBuildResponse;

  public init = async (initParams: EntityInitParams<OptionalEntityInitParams>) => {
    const { makeEntityValidator, ...optionalInitParams } = initParams;
    this._entityValidator = makeEntityValidator;
    await this._initTemplate(optionalInitParams);
    return this;
  };

  protected _initTemplate = (
    optionalInitParams: Omit<
      {
        makeEntityValidator: AbstractEntityValidator;
      } & OptionalEntityInitParams,
      'makeEntityValidator'
    >
  ): Promise<void> | void => {
    return;
  };
}

export { AbstractEntity };
