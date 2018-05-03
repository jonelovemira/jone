import menuComp from './menu_comp';

var childrenRouters = [];

function importAll (r) {
    r.keys().forEach(key => childrenRouters.push(r(key).default));
}

importAll(require.context('./', true, /childRouter.js$/));

export default {
    name: 'front',
    path: '/front',
    redirect: {name: 'front.preview'},
    component: menuComp,
    children: [...childrenRouters]
}