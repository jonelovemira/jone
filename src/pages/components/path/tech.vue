<template>
    <div>
        <span v-for="(t, index) in arr" v-bind:class="t.level">
            <span v-if="index != 0">,</span>
            <span>{{t.name}}</span>
        </span>
    </div>
</template>

<script type="text/javascript">
    export default {
        data() {
            return {
                classDict: {

                },
                arr: [{
                    name: 'Javascript',
                    level: 'expert'
                }, {
                    name: 'Angular',
                    level: 'expert'
                }, {
                    name: 'vue',
                    level: 'expert'
                }, {
                    name: 'React(redux)',
                    level: 'normal'
                }, {
                    name: 'jQuery',
                    level: 'expert'
                }, {
                    name: 'Boostrap',
                    level: 'expert'
                }, {
                    name: 'html',
                    level: 'expert'
                }, {
                    name: 'css',
                    level: 'expert'
                }, {
                    name: 'Scss',
                    level: 'familiar'
                }, {
                    name: 'git',
                    level: 'expert'
                }, {
                    name: 'svn',
                    level: 'familiar'
                }, {
                    name: 'bash',
                    level: 'familiar'
                }, {
                    name: 'tmux',
                    level: 'familiar'
                }, {
                    name: 'flask',
                    level: 'familiar'
                }]
            }
        }
    }
</script>

<style lang="scss" scoped>
    .expert {
        font-size: 20px;
        font-weight: bold;
    }
</style>