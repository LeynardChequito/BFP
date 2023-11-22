<template>
  <v-app>
    <v-container>
      <v-row justify="center" class="login-page">
        <v-col cols="12" sm="8" md="6">
          <v-card class="login-card">
            <v-img
              width="200"
              :aspect-ratio="1/1"
              src="@/assets/logo.jpg"
              style="margin: auto; display: block;"
            ></v-img>
            <v-card-title class="headline bfp-title">Bureau of Fire Protection</v-card-title>
            <v-card-text>
              <v-form @submit.prevent="login">
                <v-text-field v-model="username" label="Username" outlined dense></v-text-field>
                <v-text-field v-model="password" label="Password" type="password" outlined dense></v-text-field>
                <v-btn type="submit" color="primary" class="q-mt-md bfp-btn">Login</v-btn>
                <v-text @click="goToForgotPassword" class="text-button text-decoration-underline bfp-link" style="margin-top: 20px;">
                  Forgot Password?
                </v-text>
                <v-btn @click="goToRegister" color="primary" outlined class="q-mt-md bfp-btn" style="width: 100%;">
                  Create an Account
                </v-btn>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    login() {
      console.log('Login clicked');
      this.$router.push({ name: 'home' });
    },
    goToRegister() {
      this.$router.push({ name: 'register' });
    },
    goToForgotPassword() {
      this.$router.push('/forgot-password');
    },
  },
};
</script>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: url("@/assets/bg.jpg");
  background-size: cover;
  background-position: center;
}

.login-card {
  max-width: 400px;
  width: 100%;
  margin-top: 20px;
  padding: 20px;
  text-align: center;
  position:relative;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.bfp-title {
  color: #d9534f;
  font-size: 1.5em;
  margin-top: 10px;
}

.bfp-btn {
  background-color: #d9534f;
  color: #fff;
  margin-top: 20px;
}

.bfp-link {
  color: #d9534f;
  cursor: pointer;
  margin-top: 10px;
  display: inline-block;
}

.q-mt-md {
  margin-top: 16px;
  width: 100%;
}

.v-text-field {
  color: #000000;
}
</style>
