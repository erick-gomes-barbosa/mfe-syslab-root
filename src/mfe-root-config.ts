import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mfe/root-config",
  app: () => System.import<LifeCycles>("@mfe/root-config"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
