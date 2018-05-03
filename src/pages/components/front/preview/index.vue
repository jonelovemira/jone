<template>
    <div>
        <el-tabs type="border-card">
            <el-tab-pane label="初始值">
                <div>{{content}}</div>
            </el-tab-pane>
            <el-tab-pane label="预览">
                <div v-html="markedContent"></div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script type="text/javascript">
    import marked from 'marked';
    export default {
        data() {
            return {
                content: '',
                markedContent: ''
            }
        },
        watch: {
            content(val) {
                this.markedContent = marked(val);
            }
        },
        mounted() {
            this.content = '# Marked in the browser\n\nRendered by **marked**.';
        }
    }
</script>