<template>
    <div>
        <el-row v-for="(e, i) in arr" :key="i">
            <el-col :span="16">{{e.school}} {{e.profession}}</el-col>
            <el-col :span="8" class="interval">{{e.interval}}</el-col>
        </el-row>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                arr: [{
                    school: '中山大学',
                    profession: '软件工程',
                    interval: '2012/09-2014/06'
                }, {
                    school: '中山大学',
                    profession: '软件工程',
                    interval: '2008/09-2012/06'
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