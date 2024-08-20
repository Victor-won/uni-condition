import { App } from 'vue';
import Condition from './src/Condition.vue';
import UniCondition from './src/UniCondition.vue';

Condition.install = function (app: App) {
  app.component(Condition.name as string, Condition);
};

UniCondition.install = function (app: App) {
  app.component(UniCondition.name as string, UniCondition);
};

export {
  Condition,
  UniCondition,
};
