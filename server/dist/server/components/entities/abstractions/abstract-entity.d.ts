import { AbstractEntityValidator } from '../../validators/abstractions/abstract-entity-validator';
import { EntityInitParams, IEntity } from './i-entity';
declare abstract class AbstractEntity<OptionalEntityInitParams, EntityBuildParams, EntityBuildResponse> implements IEntity<OptionalEntityInitParams, EntityBuildParams, EntityBuildResponse> {
    protected _entityValidator: AbstractEntityValidator;
    build: (buildParams: EntityBuildParams) => Promise<EntityBuildResponse> | EntityBuildResponse;
    protected _validate: (buildParams: EntityBuildParams) => void;
    protected abstract _buildTemplate(buildParams: EntityBuildParams): Promise<EntityBuildResponse> | EntityBuildResponse;
    init: (initParams: EntityInitParams<OptionalEntityInitParams>) => Promise<this>;
    protected _initTemplate: (optionalInitParams: Omit<{
        makeEntityValidator: AbstractEntityValidator;
    } & OptionalEntityInitParams, 'makeEntityValidator'>) => Promise<void> | void;
}
export { AbstractEntity };
