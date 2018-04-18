<template>
    <div>
        <el-row class="content" type="flex">
            <el-col :span="6">
                <div class="wrapper basic">
                    <div class="avatar">
                        <img src="../../../assets/bm.png" width="150">
                    </div>
                    <div class="name">
                        <h2>徐忠勇</h2>
                    </div>
                    <div class="title">
                        <p>前端工程师</p>
                    </div>
                    <div class="basic-form">
                        <img class="holder-image" src="../../../assets/holder.png">
                        <div class="form-title">基本信息</div>
                        <el-form label-width="50px">
                            <el-form-item label="出生">
                                <span>1990-08-02</span>
                            </el-form-item>
                            <el-form-item label="籍贯">
                                <span>湖南长沙</span>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="contact-form">
                        <img class="holder-image" src="../../../assets/holder.png">
                        <div class="form-title">联系方式</div>
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
                <div class="wrapper detail">
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

            .basic {
                position: fixed;
                top: 120px;
                background: #f8f8f8;
                width: 265px;
                .avatar {
                    padding-top: 50px;
                    text-align: center;
                }

                .name {
                    text-align: center;
                    h2 {
                        margin-bottom: 0px;
                    }
                }

                .title {
                    text-align: center;
                    p {
                        margin: 0;
                    }
                }

                .basic-form {
                    margin-top: 30px;
                }
            }

            .detail {
                padding-left: 30px;
            }
        }
    }

    .line {
        border-bottom: 1px solid #ddd;
    }

    .holder-image {
        position: absolute;
        z-index: 1;
        left: -25px;
        width: 324px;
    }

    .form-title {
        position: relative;
        z-index:10;
        text-align: center;
        margin: 0;
        line-height: 57px;
        font-size: 16px;
        color: #fff;
    }

    .el-form-item {
        margin: 0;
    }

    // .holder {
    //     background-image: url('../../../assets/holder.jpg')
    // }
</style>