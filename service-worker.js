/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1925e682adeab92f91e48c17eb2c297e"
  },
  {
    "url": "about/index.html",
    "revision": "29100b426e92c073acd127681209545b"
  },
  {
    "url": "assets/css/0.styles.2ef5e9bb.css",
    "revision": "97a1e8298272a1178df7a71fc32674fd"
  },
  {
    "url": "assets/fonts/element-icons.6f0a7632.ttf",
    "revision": "6f0a76321d30f3c8120915e57f7bd77e"
  },
  {
    "url": "assets/img/search.683d46b0.svg",
    "revision": "683d46b01e3fc6c712c2036bea239951"
  },
  {
    "url": "assets/js/10.5cf4aa2b.js",
    "revision": "3d198fbfb6046a11fc304417564193cc"
  },
  {
    "url": "assets/js/11.314c9a13.js",
    "revision": "90f8a43fa276c241bf2407da3172dc9b"
  },
  {
    "url": "assets/js/12.241d8de1.js",
    "revision": "18db34a5970ab5a0649f3d94303ba2d0"
  },
  {
    "url": "assets/js/13.8b6ac641.js",
    "revision": "f15db899eb56be9915658c05cd03611e"
  },
  {
    "url": "assets/js/14.435cdc92.js",
    "revision": "63e845c469d5a6fda72b6cba386b6863"
  },
  {
    "url": "assets/js/15.8d1251cb.js",
    "revision": "96ce36b2c3368ea8666db23861e74408"
  },
  {
    "url": "assets/js/16.ea805bcf.js",
    "revision": "2b3ce35ff25cafa1a5ec604187cf65fe"
  },
  {
    "url": "assets/js/17.38b068b4.js",
    "revision": "d7d33ad54fbf37fe6914f955c661fe2f"
  },
  {
    "url": "assets/js/18.13cbcfb3.js",
    "revision": "2a3c6e4cd5ec87df44f86f3aca5eab6e"
  },
  {
    "url": "assets/js/19.88fa0c22.js",
    "revision": "125c241106f0c8ba2a4d417e5c7c55d8"
  },
  {
    "url": "assets/js/2.7c550c76.js",
    "revision": "f32f51f67c9604cceda6da1dc6ad8b68"
  },
  {
    "url": "assets/js/3.37426bd6.js",
    "revision": "0b9cf7a96700a213526ccfd23d0ceb48"
  },
  {
    "url": "assets/js/4.4f3401b4.js",
    "revision": "92e65aa79e1f165c31d8d739eb9f51a4"
  },
  {
    "url": "assets/js/5.577931cc.js",
    "revision": "ed00c149e6d6a0e265d152b28e6f056e"
  },
  {
    "url": "assets/js/6.10059aee.js",
    "revision": "9e26ae207962c761adf8d0545fe0e92f"
  },
  {
    "url": "assets/js/7.d194b2b5.js",
    "revision": "45742707d652b68664447dfeb0852875"
  },
  {
    "url": "assets/js/8.d887a9fb.js",
    "revision": "e465bb11350d189d99164014d7853b4e"
  },
  {
    "url": "assets/js/9.d77726f0.js",
    "revision": "6360fcc91f1a50074917a76c6b47cfc4"
  },
  {
    "url": "assets/js/app.e3f71138.js",
    "revision": "e7e0a2839230c42fcd8162c07574bb1f"
  },
  {
    "url": "img/配置jenkins.png",
    "revision": "22c8214fe4f0bede501e05ec123e7b13"
  },
  {
    "url": "img/配置jenkins10.png",
    "revision": "b330ddd85ccc2efdf854eae9af6b591a"
  },
  {
    "url": "img/配置jenkins11.png",
    "revision": "e598738ee40101b361f601d1f2425fa6"
  },
  {
    "url": "img/配置jenkins12.png",
    "revision": "b9e4545b253e42a6d613d21f689a4eba"
  },
  {
    "url": "img/配置jenkins13.png",
    "revision": "420c7b53e88830e72cca57ff4722ffe5"
  },
  {
    "url": "img/配置jenkins14.png",
    "revision": "4228261425d94b1c7ef3f7dd0319b67e"
  },
  {
    "url": "img/配置jenkins15.png",
    "revision": "1c6f185560a29c2c731d52cf31d87682"
  },
  {
    "url": "img/配置jenkins16.png",
    "revision": "6e1bc855e4d528360478a707f17f316d"
  },
  {
    "url": "img/配置jenkins2.png",
    "revision": "753959be0706dc685cee752712dad86c"
  },
  {
    "url": "img/配置jenkins3.png",
    "revision": "4d21c817b10e772dfa19029146205661"
  },
  {
    "url": "img/配置jenkins4.png",
    "revision": "183a70b0d26b3a59d836e20101bd9787"
  },
  {
    "url": "img/配置jenkins5.png",
    "revision": "b3ab870dce2e12dbddaa4b74676f8495"
  },
  {
    "url": "img/配置jenkins6.png",
    "revision": "84bbe84f64ef52652e585f7f40894f3c"
  },
  {
    "url": "img/配置jenkins7.png",
    "revision": "a255d8efd325e747f622f8807e6728f5"
  },
  {
    "url": "img/配置jenkins8.png",
    "revision": "f2af3343ec78cc9f516e1e5ce4011284"
  },
  {
    "url": "img/配置jenkins9.png",
    "revision": "7a94f13dfaa2181b3032deab8cd6c758"
  },
  {
    "url": "img/DevOPS流程.png",
    "revision": "3a21ef755a3d2da789c77056f5b1ed16"
  },
  {
    "url": "img/k8s.png",
    "revision": "9f56280dba44c5ffbce81800cf6e38e7"
  },
  {
    "url": "img/timg2222.jpg",
    "revision": "f850cc67c97a65a6469eab784429c963"
  },
  {
    "url": "index.html",
    "revision": "f0672ae7113be3a213a46d3834d7878c"
  },
  {
    "url": "life/我的第一篇博客20200518.html",
    "revision": "6c7dd179a6d78518f7b58f295a204fa8"
  },
  {
    "url": "life/index.html",
    "revision": "da99f1abf44bd71aaf295131797db580"
  },
  {
    "url": "life/sidebar/sidebar.html",
    "revision": "e81f56056c362fbd452790c652d52a91"
  },
  {
    "url": "massage/index.html",
    "revision": "c4270016dc8656e3aca5ac952641216b"
  },
  {
    "url": "ponder/index.html",
    "revision": "e191835422083b386c2b5227a5217303"
  },
  {
    "url": "tags/index.html",
    "revision": "ba78b9fa81afd61c0f8e9f55ef7f5148"
  },
  {
    "url": "technology/index.html",
    "revision": "2a7d595b893a76c7b07291922fdcf83f"
  },
  {
    "url": "timeLine/index.html",
    "revision": "ace7e2e2dfecef675329c15ab1ca8f0b"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
