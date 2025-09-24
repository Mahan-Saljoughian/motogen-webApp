'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"manifest.json": "18e5395cd4614068079bbaab19b308f0",
"icons/motogen192.png": "fd4c77fa01e77bc8b1ac83695a56613e",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/motogen512.png": "e3cf89a0a92e4fa310f6c5dee8ee70b4",
"main.dart.js": "ac2e7f55c57db2e36e6643d79d7e1925",
"version.json": "6eee4b6c8520fa9c26a282aa55b24e06",
"assets/NOTICES": "a652b13700285c7258e27f350bb9d655",
"assets/fonts/MaterialIcons-Regular.otf": "de321dd8657f7ba10fd5664c102876bf",
"assets/AssetManifest.json": "24e1a207694f5d240f658b768515f91f",
"assets/assets/fonts/IRANSansXFaNum-Thin.ttf": "2eef988f6412c129be8f28cce4684f98",
"assets/assets/fonts/IRANSansXFaNum-Light.ttf": "d223b4a19cdedd81c764c90f449c85ad",
"assets/assets/fonts/IRANSansXFaNum-Black.ttf": "71b39fcd5a99576f4ed5aa0452153d8f",
"assets/assets/fonts/IRANSansXFaNum-Bold.ttf": "4b67ac4a1cf16c1e0bd59bb2099e5ae7",
"assets/assets/fonts/IRANSansXFaNum-UltraLight.ttf": "05b48fa25a38b20ad4658502ad33b3e1",
"assets/assets/fonts/IRANSansXFaNum-Regular.ttf": "27fad752d4c101730c76d75d98cf2183",
"assets/assets/fonts/IRANSansXFaNum-ExtraBold.ttf": "4b419c9a2f93c8e99825a6125268eb18",
"assets/assets/fonts/Alexandria-SemiBold.ttf": "1aeb3b243223fc58dee5fae86d7ec3d9",
"assets/assets/fonts/IRANSansXFaNum-Medium.ttf": "3c08154f4d5e905b9b9724aeab3fbf39",
"assets/assets/fonts/IRANSansXFaNum-DemiBold.ttf": "9777f9e7551258ada77c590ce39679bc",
"assets/assets/fonts/IRANSansX-Bold.ttf": "be579363ac3f31a4be19e034bf627450",
"assets/assets/icons/services/purchases.svg": "76f0ba9a55c4f25ef4cfdab6b7c9388e",
"assets/assets/icons/services/oil.svg": "6bd735c1a8680720faedc1704c7089cd",
"assets/assets/icons/services/repair.svg": "932f75c6c74408f33e461cfd08d5377d",
"assets/assets/icons/services/fuel.svg": "581c953d176e4d43d77cbd4ab48b9e5a",
"assets/assets/icons/tick_circle_empty.svg": "81aa8cec3ad698836e8da43bba1f8c54",
"assets/assets/icons/add_circle_reminder.svg": "3d53a7ceccf07d39ad1a1ef67cba5ec6",
"assets/assets/icons/rotate_left.svg": "3be726499dd864d6357bfcb920b17152",
"assets/assets/icons/edit.svg": "84891b4416c569cb6ccc187c2e1bf477",
"assets/assets/icons/more.svg": "9410d63e2e12532cb6bdf4a849b06f30",
"assets/assets/icons/search_status.svg": "d79bab0c4c72b9a1ce827ff37926bacd",
"assets/assets/icons/fade_loading.svg": "954373a1e048c22e0eb6ffe9ce365e8f",
"assets/assets/icons/loading_dot_top.svg": "78ef007c641cd6bf3bf8fe97b5c63558",
"assets/assets/icons/profile_circle.svg": "1d3c69b7893ee9ebe3a89b81538ec0ac",
"assets/assets/icons/sort.svg": "5999f203e626c889badeaaecd4dfdbee",
"assets/assets/icons/arrow_left.svg": "104ca9edfdb24ddd9370b41a07d63052",
"assets/assets/icons/toggle_on.svg": "fd380cb9ff3bb3295a3b8bc979c1f01f",
"assets/assets/icons/white_tail_right.svg": "86adf4491da9eb18a8b2a0fa451ec542",
"assets/assets/icons/loading_dot_bottom.svg": "1baf0bd9134ae0a5246eb1dc86a1d261",
"assets/assets/icons/website.svg": "147ca21975732af1df21d1371ede6a7a",
"assets/assets/icons/blue_tail_left.svg": "dc0758533897b4379df44ba2793f57fc",
"assets/assets/icons/add_circle.svg": "d2a5b6c3020d3d02a7295b2357d3ca2b",
"assets/assets/icons/arrow_down.svg": "5c22538e2590166ea54000736b409ab8",
"assets/assets/icons/trash.svg": "0c7f2b8d75c11db6ba667e0d30042f2b",
"assets/assets/icons/toggle_off.svg": "875a81dd19d71626e82935754884c676",
"assets/assets/icons/car.svg": "9e8dfd74c8d77c29e0cea1eb368f201f",
"assets/assets/icons/refresh.svg": "591372f25d198b2b6b626a985c7a7c86",
"assets/assets/icons/logout.svg": "75789f815fc2e4808f9d34ffc6e04fd2",
"assets/assets/icons/error_circle_filled.svg": "a22ed22153407221507262269f65b1d9",
"assets/assets/icons/nav_bar/timer_selected.svg": "074145bd206b46693f13dd2d1cd1f153",
"assets/assets/icons/nav_bar/profile_selected.svg": "1349aceedda576846b1b3fcba1a8e547",
"assets/assets/icons/nav_bar/messages_selected.svg": "4d59af8e22d1af6e3bb1dfff1b473131",
"assets/assets/icons/nav_bar/profile.svg": "2483ada37d9e254fbf7209a7c20d1f9e",
"assets/assets/icons/nav_bar/home_selected.svg": "8d420aa604a35382e2fa7753798a8848",
"assets/assets/icons/nav_bar/timer.svg": "f01d5094463dbbd5d6a9572e1e940a9c",
"assets/assets/icons/nav_bar/messages.svg": "aa32090df65841aeed45784a5579f108",
"assets/assets/icons/nav_bar/home.svg": "2aaed4efc5f0636e345d14b264fa4174",
"assets/assets/icons/error_circle.svg": "14180688c952a21cdf12e23c55bfb7d6",
"assets/assets/icons/add.svg": "d4f07c1c98c0031c2a9ac00f20651952",
"assets/assets/icons/setting.svg": "62cb3b1d2fd1134cd00d6a309953f1e7",
"assets/assets/icons/crown.svg": "165afc9179122f837c39c122578a0b30",
"assets/assets/icons/logo_blue.svg": "56bef6f379079abb8a0d8e5475799d97",
"assets/assets/icons/arrow_right.svg": "a8978ad46c3cc99b0c345c60c249ba61",
"assets/assets/icons/send.svg": "12b61e5351b70e82a288e52979307c80",
"assets/assets/icons/tick_circle_filled.svg": "cd401d863f7f36617a59f7d3779bd8df",
"assets/assets/images/Man%2520logging%2520into%2520his%2520account%2520on%2520phone.png": "c430bf3aa20f87341c671512ad1143c0",
"assets/assets/images/car_card_dark.png": "4105917d018e06321b16a1a052946bf6",
"assets/assets/images/fuel.png": "c72fe41fbdf3c2977e13bca6b8639772",
"assets/assets/images/app_icon.png": "d26f843e4b98f68d6d78e59737c00636",
"assets/assets/images/Need%2520technical%2520inspection.png": "744d3e18169d96a12e10115f3909a809",
"assets/assets/images/notify_update.png": "d4659bd54f397f837bf84b6c01ae57e2",
"assets/assets/images/logo.png": "f22269552b32ae2d07ea7a035be72cdb",
"assets/assets/images/Choosing%2520a%2520car.png": "b6a4bbe9152f8ed2c7af008d66af785d",
"assets/assets/images/purchases.png": "ba8a1d9fe1dc05b5a36ae97ce0fcca59",
"assets/assets/images/update.png": "af557a2cf2c6bd905757c2740a0070ee",
"assets/assets/images/error.png": "4581bbdc3410227e87e1fe233520000d",
"assets/assets/images/car.png": "361c073795d30ad28c338aabc279ffdb",
"assets/assets/images/car_card_white.png": "8b5815c21ca020bd4ef9abfac8503dd8",
"assets/assets/images/E-mail%2520marketing%2520campaign.png": "9c941093531d59f4a9391e6075c52b05",
"assets/assets/animations/loading.json": "fee3623d6c76b5a2b228b5e33221628f",
"assets/FontManifest.json": "30da48f09c21991090aa1d77fd0fe0e9",
"assets/AssetManifest.bin.json": "30f8823b857a8c21508fd2aa675e5e3b",
"assets/AssetManifest.bin": "76e903f26a7e778e578101364c1c252a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"flutter_bootstrap.js": "8e930f5af367f53470ada2288c961c6c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "5ebe2b66ee956c84e011609fcf0c3032",
"/": "5ebe2b66ee956c84e011609fcf0c3032"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
