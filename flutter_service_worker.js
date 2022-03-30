'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "6769f6673b1141a52f37e766af6d31df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e476fd4020488bd5ef6cdef8f4337537",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0d6d6d39821f1a98aed6882f39f8d813",
".git/logs/refs/heads/main": "d37def5439af59bf144edc20086cd807",
".git/logs/refs/remotes/origin/main": "e5de079b50eee6163729fd22713363f6",
".git/objects/07/6b787d7ad9cfb4b9222f444997c0d6efc1c864": "2422ae7ccc89cef264cb1e264d4f54e7",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/d9292293aa89e786a34cfa4be406dfbccb8b1f": "dc86d2b781d15d13ddf5f2ac10b42e7f",
".git/objects/0e/cabe1f70a1b23b2089541343cbe1c92e84a087": "ffd0074f13970ee4c2a00852f09552bf",
".git/objects/10/bcbbd839e17c91a745a65bbfe92eb20e483105": "0b1c702a7edcff2d2efe5fa69493f7da",
".git/objects/14/08725609de0de905cf803bc90063a2d2b3f1fe": "3530ebd5b032f302740ce2b222fdbad2",
".git/objects/22/002423828440e1a89b0959aee07189c3090982": "f1d72fc4588b799ecd3062be33785653",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/131abcd20158d18afaa4f99a2bdd4dabf9f2d2": "d70453f7b85b8917601effae43ecc956",
".git/objects/2d/13585eaa90b8b84d245eb8ed7745a4df472464": "ec4ddfe66af0487f7430d9e0b9d6ce94",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/3a/5e7fefb234878dd0af6b69d17522a88e392012": "fb7148012a81e568d9fcaca0d212757a",
".git/objects/47/2a18b4b4e0cac7f3c8288fb648d44d9fbf6270": "4b6a421e2e9bb37e8ecec0ec1f285164",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/53/bf5f86c01388df342aa3b812b2e91d78578dbb": "52cdb8015a1c2823c710e12e22092978",
".git/objects/62/840634a131423cd47074846dd33816039f3f06": "cbb339cee80a8bb2309f48ebfbb40651",
".git/objects/63/b77f5233a3b314ea2d52cd4304fe865e71652c": "694b2c848b77198498c206b21aa53497",
".git/objects/73/1a0b9eb452fdc6512fcac241fdd27a53e9e6e5": "664eda6bf39ecb4c1fbce26a726ae858",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/47d9f53f0a84d3be8ffb347322fd9c45fbca3c": "32d2d1aeb65646d4fcecc95621cbf9f8",
".git/objects/81/5b369caea25f13250628438c9bcbbb381dc0b4": "8a283b1c321e08e2b0ccd87b3178fc9c",
".git/objects/86/ef71f2502acaf3100f00a5ae5581c3cc7bc641": "699a860a36d976fa772172a03d5b7050",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/86a3ef006c10f7ccfc3efe22f1654c0816eeb5": "4aec2115308541ac51373e06af9827f0",
".git/objects/9a/a1f87994a530bf35ca9c22942a350affe19fe9": "ed9cfa93a252c704030f92396997c156",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a7/1a45ebb3fb05e0d3449c2ffe0e98806263774a": "6f154235d7eee322760de9374ab2f9b6",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/1e7715d66ab5da093f7dd411018c09d84e3a74": "c58d56dd89e85d5fd16cacbe7aa67505",
".git/objects/ac/8373890f81d4eb6fd2f940a567fad5e5f22b6c": "3bf4852ab160b09627eb639b1db8c698",
".git/objects/ad/882f283345e809c2cc8b01617e57c4733b2945": "389a5fd9338b4a1b1e413eedbe617cc2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/7582c156627c064fcc3e60f11349ae3c52f507": "04d77b697b5b2ee0c0ea5cdbb744e886",
".git/objects/bb/9f5ac4c049261619c8d742fb00068c173f33c1": "119ddbdd292aa543ac91cbce3af0d827",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/cc/06801150f5644c77a5bec2dd52edc3b4740164": "638656dd9a96be157633f45d9d820327",
".git/objects/cc/3f1221394ec7d7b0829599be595d5020441fec": "dcb6d63ea640e105a46aded627deb13a",
".git/objects/d6/73897975c0f25701cdf816071af6ac64fe7a0e": "690fb43138f63ca2fd16f18c68f4b014",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/28b7cc2c2bb4ce16b341124afab02c58813fb4": "cde614fbda3b4ccb03c323a7055e1611",
".git/objects/e2/b27659fd9175af8ca80f577b30e6056ba31d99": "364c50ea23e3089e7cda713edf44bc07",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "77f8aa20182ba80c66c823036a34cff5",
".git/refs/remotes/origin/main": "77f8aa20182ba80c66c823036a34cff5",
"assets/AssetManifest.json": "e872b82bbcd7ae76cc7bd294bd362dfe",
"assets/assets/images/dp.jpg": "9d97af7c38796406a3dac051eed11c32",
"assets/font/Halenoir-Bold.otf": "0e5579dd0aead53faa0b990de5bbc186",
"assets/font/Halenoir-ThinObl.otf": "a6af465ea31ef3a9eda7f62ce6a25a34",
"assets/font/Halenoir-UltraLight.otf": "40650570927a460d2988bbe9b527e7fe",
"assets/font/HalenoirText-Regular.otf": "a59c23d862fd0c0e717548f4baacb45c",
"assets/FontManifest.json": "4751ba94499d87b82fcb8ef8d1e4f332",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "0c2a9180224aec03501cb25d2cf738df",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b2f2b242c2392951562b367b92bf9190",
"/": "b2f2b242c2392951562b367b92bf9190",
"main.dart.js": "922283160ded26bfb9f7bc099087895d",
"manifest.json": "1dc058ac2f98adb8463eba88b35e9c68",
"version.json": "d6c31f108ae28424cc5aadd400e36b44"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
