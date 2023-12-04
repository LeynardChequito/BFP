<template>
  <footer>
    <div style="margin-top: 10px;">
      <p class="small">&copy; 2023 Bureau of Fire Protection</p>
      <p class="small">REPUBLIC OF THE PHILIPPINES</p>
      <p class="small">All content is in the public domain unless otherwise stated.</p>
    </div>
    <div style="margin-top: 10px;">
      <p class="small font-weight-black" style="text-align: center;">ABOUT GOVPH</p>
      <p class="small">Learn more about the Philippine government, its structure,</p>
      <p class="small">how government works, and the people behind it.</p>
    </div>
    <div style="margin-top: 10px;">
      <p class="small font-weight-black"  style="text-align: center;">GOV.PH</p>
      <ul>
        <li><a class="small" href="#">Open Data Portal</a></li>
        <li><a class="small" href="#">Official Gazette</a></li>
      </ul>
    </div>
    <div style="margin-top: 10px;">
      <p class="small font-weight-black" style="text-align: center;">GOVERNMENT LINKS</p>
      <div style="display: flex; flex-direction: row; justify-content: space-between;">
        <div style="margin-right: 15px;">
          <ul>
            <li><a class="small " href="#">Office of the President</a></li>
            <li><a class="small " href="https://www.ovp.gov.ph/">Office of the Vice President</a></li>
          </ul>
        </div>
        <div style="margin-right: 15px;">
          <ul>
            <li><a class="small" href="#">Senate of the Philippines</a></li>
            <li><a class="small" href="#">House of Representatives</a></li>
          </ul>
        </div>
        <div style="margin-right: 15px;">
          <ul>
            <li><a class="small" href="#">Supreme Court</a></li>
            <li><a class="small" href="#">Court of Appeals</a></li>
            <li><a class="small" href="#">Sandiganbayan</a></li>
          </ul>
        </div>
      </div>
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
  background-color: red;
  color: #fff;
  padding: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
  overflow-y: auto; /* Add this line for scrollability */
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

/* responsive to all screen */
@media only screen and (max-width: 600px) {
  footer {
    padding: 5px;
    margin-top: 10px; /* Use margin-top instead of max-height */
  }
}
</style>
