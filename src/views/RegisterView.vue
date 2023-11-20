<template>
    <div class="mdl-layout mdl-js-layout color--gray is-small-screen login">
      <main class="mdl-layout__content">
        <div class="mdl-card mdl-card__login mdl-shadow--2dp">
          <div class="mdl-card__supporting-text color--dark-gray">
            <div class="mdl-grid">
              <RegisterForm />
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import RegisterForm from '@/components/LOGINREG/RegisterForm.vue';
  
  export default {
    components: {
    RegisterForm,
},
  };
  </script>
  