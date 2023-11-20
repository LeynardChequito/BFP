<template>
    <div class="mdl-layout mdl-js-layout color--gray is-small-screen login">
      <main class="mdl-layout__content">
        <div class="mdl-card mdl-card__login mdl-shadow--2dp">
          <div class="mdl-card__supporting-text color--dark-gray">
            <div class="mdl-grid">
              <LoginForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import LoginForm from '@/components/LOGINREG/LoginForm.vue';
  
  export default {
    components: {
      LoginForm,
    },
  };
  </script>
  