<template>
    <div>
        <div v-for="(e, index) in arr" :key="index">
            <el-row>
                <el-col class="record-name" :span="16">
                    {{e.name}}
                </el-col>
                <el-col class="interval" :span="8">
                    {{e.interval}}
                </el-col>
            </el-row>
            <p>{{e.note}}</p>
        </div>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                arr: [{
                    name: '中国电信企业化信息部广州 IT 研发中心',
                    interval: '2016/05-至今',
                    note: '负责物联网项目账务前端、物联网使能平台用户前端开发与维护。主要工 作:1. 提供健壮的前端功能。2.提供附带自动化测试框架的脚手架项目。 3.推动前端组件化，团队协作开发内部 UI 库。'
                }, {
                    name: '普联技术有限公司(Tplink)',
                    interval: '2014/07-2016/05',
                    note: '智能摄像头 PC 端门户的功能开发与维护。主要工作:1.提供兼容多种客户 端的功能体验。2.参与摄像头云服务架构设计，并实现前端技术迭代。3. 直播流技术探索与实践。4.前端性能优化。'
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

    .record-name {
        border-left: 3px solid #578CB8;
        padding-left: 10px;
        font-weight: bold;
    }
</style>