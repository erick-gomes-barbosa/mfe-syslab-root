import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mfe/users-route",
  app: () => System.import<LifeCycles>("@mfe/users-route"),
  activeWhen: ["/users"],
});

start({
  urlRerouteOnly: true,
});
