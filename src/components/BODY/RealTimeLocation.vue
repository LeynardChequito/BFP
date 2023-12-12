<template>
  <div>
    <h1>Realtime Location</h1>
    <p>Latitude: {{ latitude }}</p>
    <p>Longitude: {{ longitude }}</p>

    <!-- Table for Rescuers' Contact Numbers -->
    <div class="mt-4">
      <h2>Rescuers' Contact Numbers</h2>
      <table class="table table-bordered table-striped">
        <thead class="table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Cellphone Number</th>
            <th scope="col">Telephone Number</th>
          </tr>
        </thead>
        <tbody>
          <!-- Add dynamic rows here based on your rescuers data -->
          <tr v-for="(rescuer, index) in rescuers" :key="index">
            <td>{{ rescuer.name }}</td>
            <td>{{ rescuer.telephoneNumber }}</td>
            <td>{{ rescuer.cellphoneNumber }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      rescuers: [
        { name: 'City Disaster Risk Reduction Management Department (Rescue/Fire)', telephoneNumber: ' (043) 288-611 (043) 288-7521', cellphoneNumber: 'Globe: 0915-744-9698, Smart: 0999-735-6447' },
        { name: 'Calapan City Fire Station (BFP)', telephoneNumber: '(043)288-7777', cellphoneNumber: 'Globe: 0915-603-1561'},
        // Add more rescuers as needed
      ],
    };
  },
  // The rest of your component remains unchanged
};
</script>

<style scoped>
/* Custom styles for the component */
.table {
  width: 100%;
  margin-bottom: 1rem;
  color: #212529;
}

.table th, .table td {
  padding: 0.75rem;
  vertical-align: top;
  border-top: 1px solid #dee2e6;
}

.table thead th {
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
}

.table tbody + tbody {
  border-top: 2px solid #dee2e6;
}

.table-sm th, .table-sm td {
  padding: 0.3rem;
}

.table-bordered {
  border: 1px solid #dee2e6;
}

.table-bordered th, .table-bordered td {
  border: 1px solid #dee2e6;
}

.table-bordered thead th, .table-bordered thead td {
  border-bottom-width: 2px;
}

.table-striped tbody tr:nth-of-type(odd) {
  background-color: rgba(0, 0, 0, 0.05);
}
</style>
