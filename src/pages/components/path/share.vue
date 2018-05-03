<template>
    <div>
        <div v-for="(p, index) in arr" :key="index">
            <el-row>
                <el-col class="record-name" :span="8">
                    {{p.name}}
                </el-col>
                <el-col class="tech" :span="16">
                    <span class="tech" v-for="(t, i) in p.t" :key="i"><span v-if="i != 0">-</span><span class="t">{{t}}</span>
                    </span>
                </el-col>
            </el-row>
            <p>{{p.note}}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default{
        data() {
            return {
                arr: [{
                    name: 'paspLay',
                    note: '为团队制作的一个基础的布局框架。它提供以下能力：1. 支持带侧边栏和不带侧边栏两种风格；2. 提供axios的封装；3.可定制侧边栏和顶部栏菜单；4.提供左侧栏激活和面包屑算法；5.作为一个npm库可以随时拓展通用性工具。',
                    t: ['vue', 'webpack', 'elmentui', 'es6']
                }, {
                    name: 'Thooka',
                    note: '前端 ui 组件化库。将几乎所有UI组件封装成库，发布到npm私服库中，模块解耦加强团队协作，同时消费方可以按需安装组件。',
                    t: ['angular','webpack', 'bootstrap', 'npm']
                }, {
                    name: 'xAjax',
                    note: '基于jquery，开发出的多客户端环境跨域请求组件。支持到IE8',
                    t: ['jquery']
                }, {
                    name: 'Zabimoni',
                    note: '实时图表展示，告警运营',
                    t: ['flask', 'apache', 'mysql', 'boostrap']
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .tech {
        text-align: right;
        font-size: 16px;
        .t {
            color: #578CB8;
            // background: #ddd;
            border-radius: 4px;
            padding: 0px 5px;;
            border: solid #578CB8 1px;
        }
    }

    .record-name {
        border-left: 3px solid #578CB8;
        padding-left: 10px;
        font-weight: bold;
    }
</style>