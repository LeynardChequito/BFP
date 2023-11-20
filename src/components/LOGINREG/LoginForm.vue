<template>
    <v-app>
      <v-container>
        <v-row justify="center" class="login-page">
          <v-col cols="12" sm="8" md="6">
            <v-card class="login-card">
              <v-card-title class="headline">Bureau of Fire Protection</v-card-title>
              <v-card-text>
                <v-form @submit.prevent="login">
                  <v-text-field v-model="username" label="Username" outlined dense></v-text-field>
                  <v-text-field v-model="password" label="Password" type="password" outlined dense></v-text-field>
                  <v-btn type="submit" color="primary" class="q-mt-md" style="width: 100%">Login</v-btn>
                  <v-text @click="goToForgotPassword" class="text-caption">Forgot Password?</v-text>
                  <v-btn @click="goToRegister" color="primary" outlined class="q-mt-md" style="width: 100%">Create an Account</v-btn>
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
        this.$router.push({name: 'home'});
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
    background-color: #EFEFEF;
  }
  
  .login-card {
    max-width: 400px;
    width: 100%;
    margin-top: 20px;
  }
  
  .q-mt-md {
    margin-top: 16px;
  }
  
  .text-caption {
    font-size: 0.75rem;
    text-decoration: underline;
    cursor: pointer;
  }
  
  .q-mt-md {
    margin-top: 16px;
    width: 100%;
  }
  </style>
  