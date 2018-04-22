<template>
    <div>
        <sidebar-container :sidebars="pSidebars">
            <div slot="container-header">
                <div class="my-breadcrumb">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item 
                            v-for="(item, index) in breadcrumbItemArray" 
                            :key="index" 
                            :to="{path: item.path, name: item.name}">{{item.title}}
                        </el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>
        </sidebar-container>
    </div>
</template>

<script type="text/javascript">

    export default {
        props: {
            sidebar: {
                required: true,
                type: Array
            },
            indexInBread: {
                type: Object
            },
            privilegeArrFix: {
                type: Function
            },
            useCache: {
                type: Function
            }
        },
        data() {
            return {
                breadcrumbItemArray: [],
                // deep copy
                pSidebars: JSON.parse(JSON.stringify(this.sidebar)),
            }
        },
        methods: {
            updateBreadscrum(to) {
                let breadcrumbItemArray = [];

                let findTitleInRouter = function (current) {
                    if (current.meta && current.meta.title) {
                        if (typeof current.meta.title === 'string') {
                            return current.meta.title;
                        } else {
                            if (typeof current.meta.title === 'function') {
                                return current.meta.title(to);
                            } else {
                                console.info('unknow type of meta.title in router obj');
                            }
                        }
                    }
                    return '';
                }

                // 递归寻找父亲节点
                let findParentWithPush = function (current, preset = {}) {

                    let currentTitle = findTitleInRouter.call(this, current);

                    breadcrumbItemArray.unshift({
                        name: current.name,
                        params: preset.params || current.params,
                        title: currentTitle
                    });

                    let parentBreadscrum = current.meta.parentBreadscrum;
                    
                    if (parentBreadscrum) {
                        let presetFromCurrent = {
                            params: parentBreadscrum.params || to.params
                        }, parentRouter = this.$router.resolve({name: parentBreadscrum.name, params: to.params});

                        findParentWithPush.call(this, parentRouter.route, presetFromCurrent);
                    }
                };

                //递归开始
                findParentWithPush.call(this, to);

                //检查是否有首页没有就加上
                if (this.indexInBread) {
                    let hasIndex = breadcrumbItemArray[0].name == this.indexInBread.name;
                    if (!hasIndex) {
                        breadcrumbItemArray.unshift(this.indexInBread)
                    }
                }
                this.breadcrumbItemArray = breadcrumbItemArray;
            }
        },
        watch: {
            $route(val) {
                this.updateBreadscrum(val);
            }
        },
        mounted() {
            this.updateBreadscrum(this.$route);
        }
    }
</script>
<style lang="scss" scoped>
    .my-breadcrumb {
        padding: 10px 0;
    }
    
    .el-breadcrumb{
        padding: 3px 0 3px 24px;
        border-left: 2px solid #2DC6F6;
        &__inner {
            font-weight: normal;
            font-size: 14px;
        }
    }
</style>