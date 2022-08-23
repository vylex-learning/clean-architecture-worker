import { EnvironmentVars } from '@/infra/config/environment.var';

export class Environment {
  static instance: Environment;
  private _env: EnvironmentVars | undefined = undefined;

  private constructor() {}

  public static getInstance(): Environment {
    if (!Environment.instance) {
      Environment.instance = new Environment();
    }
    return Environment.instance;
  }

  public getEnv() {
    return this._env;
  }

  public setEnv(env: EnvironmentVars) {
    this._env = env;
  }
}
