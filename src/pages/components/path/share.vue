<template>
    <div>
        <div v-for="(p, index) in arr" :key="index">
            <el-row>
                <el-col class="name" :span="8">
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
                    note: '基于 elmentui, 内部项目脚手架。',
                    t: ['vue', 'webpack', 'elmentui', 'es6']
                }, {
                    name: 'Thooka',
                    note: '前端 ui 组件化库。',
                    t: ['angular','webpack', 'bootstrap', 'npm']
                }, {
                    name: 'weaGo',
                    note: '基于 angular 的内部脚手架。',
                    t: ['webpack', 'es6', 'angular', 'bootstrap']
                }, {
                    name: 'xAjax',
                    note: '多客户端环境跨域请求工具',
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
    .name {
        font-size: 18px;
        font-weight: bold
    }

    .tech {
        text-align: right;
        font-size: 16px;
        .t {
            color: #666;
            background: #ddd;
            border-radius: 4px;
        }
    }
</style>