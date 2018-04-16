<template>
    <div>
        <el-row class="content" type="flex">
            <el-col :span="6">
                <div class="wrapper">
                    <div class="avatar">
                        <img src="@/assets/img/avatar.png" width="150">
                    </div>
                    <div class="name">
                        <h2>徐忠勇</h2>
                    </div>
                    <div class="title">
                        <p>前端工程师</p>
                    </div>
                    <div class="basic-form">
                        <h2>基本信息</h2>
                        <el-form label-width="100px">
                            <el-form-item label="出生日期">
                                <span>1990-08-02</span>
                            </el-form-item>
                            <el-form-item label="籍贯">
                                <span>湖南长沙</span>
                            </el-form-item>
                            <el-form-item label="名族">
                                <span>汉</span>
                            </el-form-item>
                            <el-form-item label="政治面貌">
                                <span>党员</span>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="contact-form">
                        <h2>联系方式</h2>
                        <el-form label-width="50px" >
                            <el-form-item label="手机">
                                <span>18027211701</span>
                            </el-form-item>
                            <el-form-item label="邮箱">
                                <span>zhongyongxu082@gmail.com</span>
                            </el-form-item>
                            <el-form-item label="地址">
                                <span>广州</span>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </el-col>
            <el-col :span="18">
                <div class="wrapper">
                    <div class="project">
                        <h2>项目经历</h2>
                        <div class="line"></div>
                        <project></project>
                    </div>
                    <div class="experience">
                        <h2>就职经历</h2>
                        <div class="line"></div>
                        <exper></exper>
                    </div>
                    <div class="technique">
                        <h2>擅长技术</h2>
                        <div class="line"></div>
                        <tech></tech>
                    </div>
                    <div class="reading">
                        <h2>书籍阅读</h2>
                        <div class="line"></div>
                        <reading></reading>
                    </div>
                    <div class="education">
                        <h2>教育经历</h2>
                        <div class="line"></div>
                        <education></education>
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script type="text/javascript">
    import project from './project';
    import exper from './exper';
    import tech from './tech';
    import reading from './reading';
    import education from './education';
    export default {
        components: {project, exper, tech, reading, education}
    }
</script>

<style lang="scss" scoped>
    .content {
        font-size: 14px;
        .el-col {
            padding: 10px;
            .wrapper {
                border: 1px solid #aaa;
            }
        }
    }

    .line {
        border-bottom: 1px solid #ddd;
    }
</style>