<template>
  <div class="login-form-layout">
    <el-icon><food /></el-icon>
    <div class="login-title">餐馆管理系统</div>
    <el-form ref="formRef" :model="form" >
      <el-form-item>
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  <img :src="login_center_bg" class="login-center-layout" />
</template>
<script>
import { reactive } from "vue";

// import { useRoute,useRouter } from 'vue-router'
import login_center_bg from "@/assets/images/login_center_bg.png";
export default {
  components: {},
  setup() {
    const form = reactive({
      username: "11",
      password: "222",
    });
    const onSubmit = () => {
      console.log("登陆了");
    };
    return {
      form,
      onSubmit,
      login_center_bg,
    };
  },
};
</script>

<style>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;

  padding: 20px;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
  background: #fff;
}

.login-title {
  text-align: center;
  padding: 10px 0;
  font-size: 20px;
  font-weight: 700;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>
