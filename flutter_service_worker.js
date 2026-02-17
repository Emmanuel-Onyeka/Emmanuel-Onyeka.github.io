'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "81ea2aab7ef81958d65727b88c2bc623",
"assets/AssetManifest.bin.json": "aa9d6f4257c1548226cc1f9be9de3791",
"assets/assets/docs/onyeka_26.pdf": "1c240aadc083c2e69dd5765b38ac7e11",
"assets/assets/docs/README.md": "f6dcbd19a9a5ce0d7619b34244c597ba",
"assets/assets/fonts/Heebo-Black.ttf": "14f61306f32c8384b07e440aa5c41541",
"assets/assets/fonts/Heebo-Bold.ttf": "8adf344f1fb76bc734ad04fd8b2319ad",
"assets/assets/fonts/Heebo-Medium.ttf": "172ac844cd718bc0a7177d95278d393b",
"assets/assets/fonts/Heebo-Regular.ttf": "14e1826669fc483e0a2e71f592302040",
"assets/assets/icons/appstore.png": "8d8f08e1de9007e8af37f7aa0ad49446",
"assets/assets/icons/github.png": "398f07e7ccd52ca1045cb05995442e1c",
"assets/assets/icons/gmail.png": "ad10d8d1e8d2cc46f8207ab869ccb2cb",
"assets/assets/icons/linkedin.png": "26e81c8131c23b9fdabe31fbba7cc20b",
"assets/assets/icons/playstore.png": "4efeb2d46517cec8bcd3eddcf393e7d2",
"assets/assets/icons/x.png": "56ca4c7b958fc0670b03d40e3ee6b5ca",
"assets/assets/images/fodcon1.jpg": "1dbe47adc99d0fefead36225a47eadff",
"assets/assets/images/fodcon10.jpg": "bebb2919c454152494d71a9191b69804",
"assets/assets/images/fodcon11.jpg": "884ccf36dba39bf98e667260ad05a3b9",
"assets/assets/images/fodcon12.jpg": "826199901fe1bf73f061665231cd2377",
"assets/assets/images/fodcon13.jpg": "7d5b399f91be1dd2db1dd053961b2d45",
"assets/assets/images/fodcon2.jpg": "2510535ab4c7caa3fcd137a977341a9a",
"assets/assets/images/fodcon3.jpg": "d3a1695fd0a11461129badb614f16853",
"assets/assets/images/fodcon5.jpg": "d9175500548368abc6b20714962c82cf",
"assets/assets/images/fodcon6.jpg": "85eae7f1cb89029f663ba79464d55c60",
"assets/assets/images/fodcon7.jpg": "99f5f4567849ef98de7d0341ab37f9dd",
"assets/assets/images/fodcon8.jpg": "01b3949d3f160e1ea189302e9658fe46",
"assets/assets/images/fodcon9.jpg": "3f067f8931561f02d51dfc3afd83c8b0",
"assets/assets/images/fodcon_banner.png": "cd8abc464e0f0e980609e8a6f6bbd38f",
"assets/assets/images/gym1.jpg": "a2bbbd9e0629a40404dae8d021413507",
"assets/assets/images/gym2.jpg": "2b41d6fe0f14aa6c05f0e096e65aad38",
"assets/assets/images/gym3.jpg": "5a950cb52bd41a4c9c91e9ce2d3daac2",
"assets/assets/images/gym4.jpg": "b47e8850c1293e8f54d20804e55369ef",
"assets/assets/images/gym5.jpg": "f6461f983dc3cdd66c61689db5295124",
"assets/assets/images/gym6.jpg": "a0c5328d981bdcc3db97a57400e710ec",
"assets/assets/images/gym7.jpg": "8729363e2286c7ee21a64ed473c4d5eb",
"assets/assets/images/gym8.jpg": "5b3ce37aca755dfaec9e4312f45ffd46",
"assets/assets/images/gym_banner.jpeg": "ded167aa44f275a1f79dcd8909f9de4c",
"assets/assets/images/me.jpg": "30481524a11b74c6316bacd7203e761f",
"assets/assets/images/pedivo1.png": "0f838646eb769c536861a95d0cbf762e",
"assets/assets/images/pedivo2.png": "fe0248ef0cc73222b11f569820bf5589",
"assets/assets/images/pedivo3.png": "da8d24e5633b23866ed581ad120e42c1",
"assets/assets/images/pedivo4.png": "60f01c9eb0a1b6be032b9eb0f71364de",
"assets/assets/images/pedivo5.png": "eb7676534b80076856c8cf0867ae48d6",
"assets/assets/images/pedivo6.png": "ccabd44b09828ce629eeff4e0d35086b",
"assets/assets/images/pedivo7.png": "3438f0fe7c1c2d26ad45c1ac9da31e46",
"assets/assets/images/pedivo_banner.png": "d5a5c2cbaed26df2fa05b35b039263e1",
"assets/FontManifest.json": "c923bd4fc982d7563bd4dcaad4685c05",
"assets/fonts/MaterialIcons-Regular.otf": "2a1d4c34b65d52044cbee2ee579c7ebd",
"assets/NOTICES": "df8a56d512db0ea0f5fb9aa170a76265",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e3ad8f13493a1cfaf6537160152d6a23",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "6ebc7bc5b74956596611c6774d8beb5b",
"assets/packages/iconsax_plus/fonts/IconsaxPlusBold.ttf": "805a1bab0f9865af92fcec87325e104c",
"assets/packages/iconsax_plus/fonts/IconsaxPlusBroken.ttf": "71d12baa6ddbb770fb8f6d92021403e4",
"assets/packages/iconsax_plus/fonts/IconsaxPlusLinear.ttf": "08f8e5eef32e66caa70d237eea7e3edb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/fonts/RobotoMono-Regular.ttf": "5b04fdfec4c8c36e8ca574e40b7148bb",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/highlight.png": "2aecc31aaa39ad43c978f209962a985c",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/squiggly.png": "68960bf4e16479abb83841e54e1ae6f4",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/strikethrough.png": "72e2d23b4cdd8a9e5e9cadadf0f05a3f",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/dark/underline.png": "59886133294dd6587b0beeac054b2ca3",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/highlight.png": "2fbda47037f7c99871891ca5e57e030b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/squiggly.png": "9894ce549037670d25d2c786036b810b",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/strikethrough.png": "26f6729eee851adb4b598e3470e73983",
"assets/packages/syncfusion_flutter_pdfviewer/assets/icons/light/underline.png": "a98ff6a28215341f764f96d627a5d0f5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "63a0145a3c5f9237e87f4c6656873489",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c3534ca73159dc388adf0e7efbcf2f96",
"/": "c3534ca73159dc388adf0e7efbcf2f96",
"main.dart.js": "b04b044bc9e84e9cb786e43222273117",
"manifest.json": "7b7f85a2941a9b2b49cb303f4b60243c",
"version.json": "f1acf70d04cdc807600ac4c29d13aee5"};
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
