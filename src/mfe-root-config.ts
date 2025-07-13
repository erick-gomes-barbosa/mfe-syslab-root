import { registerApplication, start, LifeCycles } from "single-spa";

function shouldBeActive(location) {
  return !location.pathname.startsWith("/users");
}

registerApplication({
  name: "@mfe/users-route",
  app: () => System.import<LifeCycles>("@mfe/users-route"),
  activeWhen: ["/users"],
});

registerApplication({
  name: "@mfe/navbar-route",
  app: () => System.import<LifeCycles>("@mfe/navbar-route"),
  activeWhen: shouldBeActive,
});
registerApplication({
  name: "@mfe/home-route",
  app: () => System.import<LifeCycles>("@mfe/home-route"),
  activeWhen: ["/home"],
});

registerApplication({
  name: "@mfe/profile-route",
  app: () => System.import<LifeCycles>("@mfe/profile-route"),
  activeWhen: ["/profile"],
});

start({
  urlRerouteOnly: true,
});
