<template>
    <div>
        <el-row>
            <el-col :span="8">&nbsp;</el-col>
            <el-col :span="16" class="hidden-md-and-down">
                <p>给我们留言</p>
                <el-form :inline="true" :model="form" ref="form" label-width="80px">
                    <el-form-item>
                        <el-input v-model="form.name" placeholder="姓名"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.email" placeholder="EMAIL"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.address" placeholder="地址"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="textarea" v-model="form.content" placeholder="请输入内容" :rows="5" style="width: 400px;"></el-input>
                     </el-form-item>
                    <el-form-item>
                        <el-button type="danger" @click="onSubmit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;提 交 留 言&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
        <el-dialog
            title="提示信息"
            :visible.sync="dialogVisible"
            width="30%"
            >
            <span>您的留言已经成功提交了！<br>我们会尽快给您答复，向您发送回复邮件，请关注您的邮箱！</span>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
export default {
    name: 'MyFooter',
    data () {
        return {
            dialogVisible: false,
            form: {
                name: '',
                email: '',
                address: '',
                content: ''
            }
        }
    },
    methods: {
        onSubmit: function () {
            this.dialogVisible = true
        }
    }
}
</script>

<style scoped>
    .el-row {
        position: absolute;
        bottom: 8%;
        right: 0.5%;
    }
    .el-form {
        width: 100%;
    }
    .el-textarea__inner {
        background-color: rgb(0, 0, 0) !important;
    }
    p {
        font-size: 16px;
        font-weight: bold;
        color: rgb(200, 200, 200);
        margin-bottom: 30px;
        /* text-align: center; */
        position: absolute;
        top: -25%;
        right: 51.5%;
    }
</style>