<template>
    <el-menu
        v-if="hasMenu"
        :default-active="activeIndex"
        :unique-opened="true"
        @select="handleSelect"
        class="my-menu">
        <el-menu-item
            v-for="(n, index) in sidebars"
            v-if="!n.sub"
            :index="n.menuKey"
            :key="index"
            :route="{path: n.path, name: n.route_name, params: n.params}">
            {{n.name}}
        </el-menu-item>
        <el-submenu
            v-else
            :index="n.menuKey"
        >
            <template slot="title">
                {{n.name}}
            </template>
            <el-menu-item
                v-for="(sub, sub_index) in n.sub"
                v-if="!sub.sub && !sub.group"
                :route="{path: sub.path,name: sub.route_name, params: sub.params}"
                :index="sub.menuKey"
                :key="`${index}-${sub_index}`">
                {{sub.name}}
            </el-menu-item>
            <el-menu-item-group 
                v-for="(sub, sub_index) in n.sub"
                v-if="sub.group"
                :key="`${index}-${sub_index}`">
                <template slot="title">{{sub.name}}</template>
                <el-menu-item
                    v-for="(subsub, subsub_index) in sub.group"
                    :index="subsub.menuKey"
                    :route="{path: subsub.path,name: subsub.route_name, params: subsub.params}"
                    :key="`${index}-${sub_index}-${subsub_index}`"
                >{{subsub.name}}</el-menu-item>
            </el-menu-item-group>
            <el-submenu
                v-for="(sub, sub_index) in n.sub"
                v-if="sub.sub"
                :index="sub.menuKey"
                :key="`${index}-${sub_index}`"
            >
                <template slot="title">
                    {{sub.name}}
                </template>
                <el-menu-item
                    v-for="(subsub, subsub_index) in sub.sub"
                    :index="subsub.menuKey"
                    :route="{path: subsub.path,name: subsub.route_name, params: subsub.params}"
                    :key="`${index}-${sub_index}-${subsub_index}`"
                >{{subsub.name}}</el-menu-item>
            </el-submenu>
        </el-submenu>
    </el-menu>
</template>

<script>
    /* 第一层只有sub，然后第二级只有item，group，sub三种，第二级的group和sub里面只能是item 
        active先判断当前路由，如果没有找到则使用配置项中的active=true项。
    */
    export default {
        name: 'CtySidebar',
        props: ['sidebars'],
        computed: {
            activeIndex() {
                let menuKey = this.$route.meta.menuKey;
                let result = this.getMenukey(menuKey);
                return result;
            },
            hasMenu(){
                return this.sidebars.length > 0;
            }
        },
        methods: {
            getMenukey(menuKey) {
                let result = '';
                if (typeof menuKey === 'string') {
                    result = menuKey;
                } else {
                    if (typeof menuKey === 'function') {
                        result = menuKey(this.$route);
                    } else {
                        console.info('unknow type of meta.menuKey in router obj');
                    }
                };
                return result;
            },
            handleSelect(index, indexPath) {
                let targetRoute = {}, arr = this.sidebars;
                indexPath.forEach(key => {
                    arr = this.findRouteByMenuKey(arr, key); 
                });
                if (arr.length > 0) {
                    targetRoute = {
                        path: arr[0].path,
                        name: arr[0].route_name,
                        params: arr[0].params
                    }
                };
                if (targetRoute) {
                    let resolved = this.$router.resolve(targetRoute);
                    if (resolved) {
                        if (this.isCurrentPage(resolved.route, this.$route)) {
                            this.$emit('reload');
                        } else {
                            this.$router.push(targetRoute);
                        }
                    }
                }
            },
            isCurrentPage(to, from) {
                let result = false;

                if (to.name == from.name) {
                    let toParams = to.params, fromParams = from.params, 
                        toQuery = to.query, fromQuery = from.query;

                    if (this.isLogicEqual(toParams, fromParams) && 
                        this.isLogicEqual(toQuery, fromQuery)) {
                        result = true;
                    }
                    
                }

                return result;
            },
            isLogicEqual(obj1, obj2) {
                let result = false, arr1 = Object.keys(obj1), 
                    arr2 = Object.keys(obj2);

                if (arr1.length == arr2.length) {
                    result = true;
                    arr1.forEach(key => {
                        if (obj1[key] != obj2[key]) {
                            result = false;
                        }
                    });
                };

                return result;
            },
            findRouteByMenuKey(arr, key) {
                let result = [];
                arr.forEach(item => {
                    let menuKey = this.getMenukey(item.menuKey);
                    if (menuKey == key) {
                        if (item.sub) {
                            result = item.sub;
                        } else {
                            result = [item];
                        }
                    }
                });
                return result;
            }
        }
    }
</script>
