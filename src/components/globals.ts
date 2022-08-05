import type { Component, Plugin } from "vue";

const plugin: Plugin = {
  install(app) {
    const components = import.meta.glob("./base/*.vue", {
      eager: true,
    });
    Object.entries(components).forEach((mod) => {
      const path = mod[0];
      const { default: component } = mod[1] as { default: Component };
      const pathSplit = path.split("./base/");
      const fileNameChunks = pathSplit[pathSplit.length - 1]
        .split(".vue")[0]
        .split("-");

      const fileName = fileNameChunks.reduce(
        (acc: string, curValue: string) => {
          return (
            acc + curValue[0].toUpperCase() + curValue.slice(1, curValue.length)
          );
        },
        ""
      );

      app.component(fileName, component);
    });
  },
};

export default plugin;
