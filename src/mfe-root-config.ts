import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@mfe/users-route",
  app: () => System.import<LifeCycles>("@mfe/users-route"),
  activeWhen: ["/users"],
});

registerApplication({
  name: "@mfe/home-route",
  app: () => System.import<LifeCycles>("@mfe/home-route"),
  activeWhen: ["/home"],
});

start({
  urlRerouteOnly: true,
});
