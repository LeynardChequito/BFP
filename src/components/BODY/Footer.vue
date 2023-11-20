<template>
    <footer>
      <div>
        <p class="small">&copy; 2023 Bureau of Fire Protection</p>
        <p class="small">REPUBLIC OF THE PHILIPPINES</p>
        <p class="small">All content is in the public domain unless otherwise stated.</p>
      </div>
      <div>
        <p class="small">ABOUT GOVPH</p>
        <p class="small">Learn more about the Philippine government, its structure, how government works, and the people behind it.</p>
      </div>
      <div>
        <p class="small">GOV.PH</p>
        <ul>
          <li><a class="small" href="#">Open Data Portal</a></li>
          <li><a class="small" href="#">Official Gazette</a></li>
        </ul>
      </div>
      <div>
        <p class="small">GOVERNMENT LINKS</p>
        <ul>
          <li><a class="small" href="#">Office of the President</a></li>
          <li><a class="small" href="#">Office of the Vice President</a></li>
          <li><a class="small" href="#">Senate of the Philippines</a></li>
          <li><a class="small" href="#">House of Representatives</a></li>
          <li><a class="small" href="#">Supreme Court</a></li>
          <li><a class="small" href="#">Court of Appeals</a></li>
          <li><a class="small" href="#">Sandiganbayan</a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  footer {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 80px; /* Adjust the height to your preference */
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  a {
    color: #fff;
    text-decoration: none;
    font-size: small;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .small {
    font-size: small;
  }
  </style>
  