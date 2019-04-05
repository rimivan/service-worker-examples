# Service Worker sample using WORKBOX BY GOOGLE
## Caching strategies

* <u>Stale While Revalidate</u>
This strategy will use a cached response for a request if it is available and update the cache in the background with a response form the network. (If it’s not cached it will wait for the network response and use that). This is a fairly safe strategy as it means users are regularly updating their cache. The downside of this strategy is that it’s always requesting an asset from the network, using up the user’s bandwidth.
[ ++ Use cache each request but update resource in background each time ]
* <u>Network First</u>  
This will try and get a request from the network first. If it receives a response, it’ll pass that to the browser and also save it to a cache. If the network request fails, the last cached response will be used.
[ Use network each time. Use cached resource only in network fails ]
* <u>Cache First</u>
This strategy will check the cache for a response first and use that if one is available. If the request isn’t in the cache, the network will be used and any valid response will be added to the cache before being passed to the browser.
* <u>Network Only</u>
Force the response to come from the network.
* <u>Cache Only</u>
Force the response to come from the cache.

## REFERENCE: https://developers.google.com/web/tools/workbox/

#NB: Run in http server
