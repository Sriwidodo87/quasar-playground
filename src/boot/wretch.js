import { defineBoot } from "#q-app/wrappers";
import wretch from "wretch";

const api = wretch("https://jsonplaceholder.typicode.com/");
// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli-vite/boot-files
export default defineBoot(({ app }) => {
  // something to do
  app.config.globalProperties.$wretch = wretch;
  app.config.globalProperties.$api = api;
});

export { api };
