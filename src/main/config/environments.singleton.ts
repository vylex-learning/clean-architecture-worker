import { EnvironmentVars } from '@/infra/config/environment.var';

export class EnvironmentSingleton {
  static instance: EnvironmentSingleton;
  private _env: EnvironmentVars | undefined = undefined;

  private constructor() {}

  public static getInstance(): EnvironmentSingleton {
    if (!EnvironmentSingleton.instance) {
      EnvironmentSingleton.instance = new EnvironmentSingleton();
    }
    return EnvironmentSingleton.instance;
  }

  public getEnv() {
    return this._env;
  }

  public setEnv(env: EnvironmentVars) {
    this._env = env;
  }
}
