import { appConfig } from "./global";
import { brandConfig } from "./global";
import { moduleConfig } from "./global";
import { authorizationConfig } from "./modules";
import { todosConfig } from "./modules";
export * from "./global";
export * from "./modules";

export const masterConfig = {
  global: {
    appConfig: appConfig,
    brandConfig: brandConfig,
    moduleConfig: moduleConfig,
  },
  modules: {
    authorizationConfig: authorizationConfig,
    todosConfig: todosConfig,
  },
};
