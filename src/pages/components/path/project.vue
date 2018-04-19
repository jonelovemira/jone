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
                    memberNum: 50,
                    chargeNum: 2,
                    position: '运营中心前端负责人',
                    note: '开发针对管理员以及内部员工的进行运营的平台。主要职责是参与讨论决策业务，进度管控，承担大部分开发任务。提供包括用户中心，控制台在内的三个项目的<strong>基础排版布局</strong>，建立并运营公司内部的npm私库，实现不同部门的协同合作，提高效率等。'
                }, {
                    name: '物联网账务模块',
                    interval: '2017/15-2017/11',
                    memberNum: 40,
                    chargeNum: 0,
                    position: '参与开发',
                    note: '与现网的物联网项目进行割接，参与负责账务模块前端开发。除基础的8个业务之外，还为组内专门写了一个<strong>路由拦截器</strong>，在不同场景下实现不同的逻辑，同时对其他人的代码无侵入性。除此之外。在这个项目的积累下，生产了自己小组内部的组件库。为组内知识共享做贡献。'
                }, {
                    name: '普联云摄像头门户网站',
                    interval: '2015/07-2016/05',
                    memberNum: 100,
                    chargeNum: 0,
                    position: '参与开发',
                    note: '属于架构升级+技术迭代的项目。主要工作内容是1.前后端PHP分离，2.使用flash替代NPAPI插件进行直播，3.前端性能优化，4.多客户端兼容。在项目中克服了包括跨域，flash直播调试等多个困难。在上线之后，<strong>访问速度快了5倍</strong>，用户体验显著提升。同时在组内留下了很多知识积累，包括fis3, requirejs模块化等。'
                }, {
                    name: '福特车展体验项目',
                    interval: '2013/10-2014/04',
                    memberNum: 5,
                    chargeNum: 1,
                    position: '识别算法工程师',
                    note: '根据专业知识，指导开发工程师完成车内交互项目。围绕kinnect+leap motion的SDK，在复杂的环境中开发出较为稳定且高识别率的算法(<strong>准确率80%以上</strong>)，提供给开发工程师。最终项目在北京2014年春季车展展示，为福特车展活动导入了大量的客流，提高了车展趣味性。'
                }, {
                    name: '虚拟乐团体验',
                    interval: '2013/02-2013/06',
                    memberNum: 2,
                    chargeNum: 0,
                    position: '技术负责人',
                    note: '与广美同学合作，完成他的毕业作品并展示。通过arduino+传感器，识别乐手的手势动作，完成之后播放出乐器相应的声音，为不知道使用专业乐器(贝斯和吉他)的人带来参与到乐队的独特体验。最终该作品<strong>被广美艺术学院收藏</strong>。'
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