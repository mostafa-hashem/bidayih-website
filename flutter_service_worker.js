'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "31b2cfb1b016f9f0ced0f3260ad0168c",
".git/config": "adb567c48389895655113ac87485cd96",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e6fb897533235dfe7fafd5b87dfbe00b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20b3b06886dd5e2865405da044dbf447",
".git/logs/refs/heads/main": "17db9033dd104b1fcd4f0cef6e45dccb",
".git/logs/refs/remotes/origin/main": "5c9ee7fc7cf08ca80617ee06b577973d",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0f/00cb58b584b73acfd89495dfee1524d3460fcf": "bd7eba3da8c4f92ed6a11fcac666c2b7",
".git/objects/12/679316b87918946681ba44c0a858d0081ebbec": "61e1253d1ff31c45a68208cee5a3a05e",
".git/objects/12/f85b48ef93185192bcfcff3196e8949d88ef90": "e2aea952c3c847e42f263b63dc82d1ac",
".git/objects/17/a0eccd372790e95256a6ec99e26bbd83904e8f": "722976bfd6feb0325074e8dc2bac6ed2",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/22/885edbea2784f6eb45c8bcbf13a34faaca8b84": "aa540e20aa49f5095590cadcbcc602dc",
".git/objects/23/7b2537557c32d34fb7bed96d859718c04d54ce": "97f062c5f96e30533a54b10c65d77439",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/3a/5f9668e55dc8c9dd5a853bbcd9984f9d6d0013": "3a7f0084cb6c7807617a45338b8dfd52",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/378c716d318024c579690a3cd9daa16f07fd73": "87e0ed938a75173569c04ee1fa8ad7da",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/62/32b61d698eb43b0bf9d75a810ba7774d902cc1": "a20db3355ed0d54a771dbccf397d752b",
".git/objects/62/80ca79463c5ae151afbc4961a5fc1091e970ac": "009bb696e498b07cb07e811d619b56ed",
".git/objects/67/017f7071c4404e92d8ccccaf7071bcbe29af08": "5ed4d9f975e7100a7f7a3c5e1c9819ca",
".git/objects/69/f50faefbeda01a49a615ba74820b33fad8a7e6": "5b10e800d1517266376d7b050f0c4d77",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6b/cdcc27f22e001e46defdfd9e23f224ff65dd67": "624b5324c1f5198f7f6ede95410d5b7b",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/72/1a2ad09c59c9eeb03797170c12bc732674fc0d": "b295f365c568a3f3342a61882b21b572",
".git/objects/72/b986ab31ecd7d5e88148c51d2ba730a035e024": "2815a6b9695bcc18e3dfc402ce4626de",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/7d/e8128f1ee8f540e3c637b0469bcf1dfa566ac2": "47c3f8fca95552a1e1b1effe901d21bf",
".git/objects/7f/e69c957842fb0bb67c7bb1883c5ceaa0e38b0b": "04d37900b500759fef582e797fc9d127",
".git/objects/82/558b3229e71582907fde1d74368cdeb9c88129": "27ee3a9b9a3297dc875795b20efa5c8b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/98/0cff57934d050ea3662ad38a145c455625d182": "6e0a3f7849965a8b9c464db29635d92a",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/b8/4ebf4baa5db7a39305c57e91eb80b6ebc394a0": "63c9713cc60d2f74767439b1b8272c52",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bc/36bcc2427a84e29e61ea7b634024072c04b206": "08cd2a4fd07be093532cedca2675ee60",
".git/objects/bc/6a0da873290acc4dfbd7cda489e8ed63e495c0": "dfd2dbed958d120f52e16b78f7eb4127",
".git/objects/c3/1ef5599b4f7662c6164bd7884e4dac6a04ad18": "a6a3574da0c22c751e488eff01b60873",
".git/objects/c3/f730cf7128b496e6b62fbfad50cb89cf4f276c": "748e225d2fc720f6e2df69724df3783a",
".git/objects/c5/30bbd644eb1f1bfed75d8d7297bb17729d6ea3": "6ebd87f2f1bc82a45fd7b037e35a8c09",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c8/1d55b75d69a6787fad59f3ae6762f8858150c4": "1a771d923b0406344ee44510989a4edc",
".git/objects/ca/c622e2e966866647e0363ee6ab9dff491280e4": "2669280eac14fee86bfee16ab233bbf6",
".git/objects/ca/d2a2facc0374b2e391d3c01a413fb4de480727": "2e9faf427af44bb6513b4040ed0909e0",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/db/3e3c519429f543003e045cd9671af508c45660": "6ef8999c69a9313e6c3cae3a39e9044b",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/6a25db8ca40bd6d1d072914fb0b84887a5ac64": "89364b56e9df7f1143522da453c4186f",
".git/objects/e6/2933080427feb130a8baafbe4ef574bffd67db": "c7e9bb916fb1171e1c0320cbfc208b0f",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ec/e68e6476d67bcfa733425d264ad8fd2199422e": "cb513f90e3ccf68a6ee63b35d3db565c",
".git/objects/ed/de959e520954faa2fae7ff7151411360ebd906": "172098f0c9a7d5567393e04e2ef5a352",
".git/objects/ee/7bedf3fe223318822db833ac9de7bd1284d9e2": "310b71e7adde2876c716298013f2da4a",
".git/objects/ef/2c42dbc5d1dab73729547e66165d0d2140e308": "19828d108add4afd0a1d7dcfc03d7df3",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f5/d604d0a3be3f887b2c86a4637a724eceb1f8b3": "59466192aa0d30e2bec217b4dd7b04ea",
".git/objects/f8/fd4fc11313d6046e90773b58f40ee235a087f0": "29ed484c49e1769e46136e9bad3d5334",
".git/objects/fc/0375631871063d26285c3d71870b621ce7c2fb": "78566387698ae896c7924831d34ddcb6",
".git/refs/heads/main": "f99e132ea5aad5feb43f804721542ef3",
".git/refs/remotes/origin/main": "f99e132ea5aad5feb43f804721542ef3",
"assets/AssetManifest.bin": "d11871a16dff66cd03dfec480acf768b",
"assets/AssetManifest.bin.json": "c2af35ba9b8cabf4a1e61626ac15b700",
"assets/AssetManifest.json": "5133fc3a69b097a06bf91da1d8bee1c8",
"assets/assets/fonts/cairo/Cairo-Bold.ttf": "2bbe2088a8d666fa99b80554fdc6effd",
"assets/assets/fonts/cairo/Cairo-Light.ttf": "fa2b785b431fa365329cfbf3955f1b88",
"assets/assets/fonts/cairo/Cairo-Medium.ttf": "cbf0e8f4625a63746797ef8709167c44",
"assets/assets/fonts/cairo/Cairo-Regular.ttf": "45aaa2b5f9de1d61c2d3fe1f40107ac8",
"assets/assets/fonts/cairo/Cairo-SemiBold.ttf": "d24823f3136e983e632a2d8e11c822b4",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/images/logo.png": "7ad970ac1a5fd8d40cf8bb48081014af",
"assets/FontManifest.json": "1b204fb23bf1cd770cc641ef0f750453",
"assets/fonts/MaterialIcons-Regular.otf": "6d16cf843c11758732f807273c5561a1",
"assets/NOTICES": "11b24cfcaaa11fb83af6362d5acbdba1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.ico": "3ed559e0aecbbdefa42ef6c61f21462a",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "91406e55f6cf2d80f932098acb36b2ec",
"icons/apple-touch-icon.png": "907fa8f992a5cd953af2619bb5c2e122",
"icons/icon-192-maskable.png": "32c4b1c9a900f3b5afd35c39105e6153",
"icons/Icon-192.png": "5fc8ec7880c89c2b57a8514388a7f66d",
"icons/icon-512-maskable.png": "eda186c02b5882f5b80b8d53dfc044fe",
"icons/Icon-512.png": "61bee061c19b9948ce60c015e17526b8",
"index.html": "2313eb52a8b934e016ceb76348b769d5",
"/": "2313eb52a8b934e016ceb76348b769d5",
"main.dart.js": "ea8e42414bb38fde1e6de9297bff3f79",
"manifest.json": "899c3e1ac0ff67e0f7d62490eca06c79",
"version.json": "7b0f330cc6604712581d2864ef0dae19"};
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
