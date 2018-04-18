<template>
    <div>
        <div v-for="(e, index) in arr" :key="index">
            <el-row>
                <el-col :span="16">
                    {{e.name}}
                </el-col>
                <el-col class="interval" :span="8">
                    {{e.interval}}
                </el-col>
            </el-row>
            <!-- <p>{{e.note}}</p> -->
            <p v-html="e.note"></p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                arr: [{
                    name: '天翼云云市场项目',
                    interval: '2018/03/15-至今',
                    memberNum: 23,
                    chargeNum: 7,
                    position: '前端开发负责人',
                    note: '主要有toB, toC, to管理员, to游客四个模块。带领前端小组参与项目的快速实现与迭代。主要职责是参与业务讨论，分析可行性，分解需求，布置任务，进度管控等。在项目实施过程中，独自开发出了一套高可拓展性的<strong>动态表单工具</strong>。因为多数场景是配置(form)+状态机的业务，所以需要动态的展示用户需要填写的配置，同时根据不同的状态，控制表单是只读或者是否显示。有效的提高了开发效率。'
                }, {
                    name: '物联网使能平台账户模块',
                    interval: '2017/12-2018/03',
                    memberNum: 48,
                    chargeNum: 2,
                    position: '运营中心前端负责人',
                    note: '开发针对管理员以及内部员工的进行运营的平台。主要职责是参与讨论决策业务，进度管控，承担大部分开发任务。提供包括用户中心，控制台在内的三个项目的<strong>基础排版布局</strong>，对接不同部门的协同合作，运营公司内部的npm私库等。'
                }, {
                    name: '飞客咨询(Fabriqate)',
                    interval: '2013/12-2014/04(实习)',
                    note: '福特车展体验项目。基于 Kinect+leap motion。通过新型科技产品在车 展为福特导流。'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .interval {
        text-align: right;
    }
</style>