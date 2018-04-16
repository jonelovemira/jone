import Vue from 'vue';
import Common from '@/layout/main';
import navs from './pages/config/topbar.js';


Vue.config.productionTip = false;

Vue.use(Common, {
    router: require.context('./pages/components', true, /router.js$/)
});


new Vue({
  el: '#app',
  router: Common.router,
  render: h => {
     const vNodes = [];
     vNodes.push(
         h(Common.App, {
           props: {
             navs
           }
         })
     );    
     return h('div', {}, vNodes)
  }
})

