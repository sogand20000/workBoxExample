import { precacheAndRoute } from "workbox-precaching";
import { clientsClaim } from "workbox-core";
import { registerRoute } from "workbox-routing";
import { CacheFirst } from "workbox-strategies";
precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();
clientsClaim();

registerRoute(
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith(".svg"),
  new CacheFirst({ cacheName: "cacheSvg22" })
);
// Example api cache
registerRoute(
  new RegExp(`https://jsonplaceholder\.typicode\.com`),
  new CacheFirst({ cacheName: "api-cache222" })
);
