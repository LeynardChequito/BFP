<template>
    <section class="about-us">
      <div class="about">
        <!-- <img src="girl.png" class="pic" alt="Girl Image"> -->
        <div class="text">
          <h2>About Us</h2>
          <h5>Front-end Developer & <span>Designer</span></h5>
          <p>{{ loremText }}</p>
          <div class="data">
            <router-link to="#" class="hire" @click.prevent="hireMe">Hire Me</router-link>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        loremText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita natus ad sed harum itaque ullam enim quas, veniam accusantium, quia animi id eos adipisci iusto molestias asperiores explicabo cum vero atque amet corporis! Soluta illum facere consequuntur magni. Ullam dolorem repudiandae cumque voluptate consequatur consectetur, eos provident necessitatibus reiciendis corrupti!",
      };
    },
    methods: {
      hireMe() {
        // Add logic for handling the "Hire Me" button click
        console.log("Hire Me button clicked!");
        // You can perform additional actions here
      },
    },
  };
  </script>
  
  <style scoped>
  .about-us {
    height: 100vh;
    width: 100%;
    padding: 90px 0;
    background: #ddd;
  }
  
  .pic {
    height: auto;
    width: 302px;
  }
  
  .about {
    width: 1130px;
    max-width: 85%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  
  .text {
    width: 540px;
  }
  
  .text h2 {
    font-size: 90px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  
  .text h5 {
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 20px;
  }
  
  span {
    color: #4070f4;
  }
  
  .text p {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 1px;
  }
  
  .data {
    margin-top: 30px;
  }
  
  .hire {
    font-size: 18px;
    background: #4070f4;
    color: #fff;
    text-decoration: none;
    border: none;
    padding: 8px 25px;
    border-radius: 6px;
    transition: 0.5s;
  }
  
  .hire:hover {
    background: #000;
    border: 1px solid #4070f4;
  }
  </style>
  