
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/rouge_minuit/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/rouge_minuit"
  },
  {
    "renderMode": 2,
    "route": "/rouge_minuit/game"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2304, hash: '2fc93c5e48285d11e04251a41ffad52f506f057300e440e98aa819bf525a61c6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2593, hash: '12f709088216046f48bf595452956da252f1d6c67e6213794232095731b40b38', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8028, hash: '7cc67f02005088d502b1cde72a57adb9732e53dce28f89d839db16ea2b080994', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'game/index.html': {size: 3297, hash: 'e88e40fd52d95557830e0c06a2b2517060ae94d299bdc2d8be9e670dbfe22adc', text: () => import('./assets-chunks/game_index_html.mjs').then(m => m.default)},
    'styles-UGMSPTDZ.css': {size: 116, hash: 'ne9inT00zf4', text: () => import('./assets-chunks/styles-UGMSPTDZ_css.mjs').then(m => m.default)}
  },
};
