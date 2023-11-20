<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>What's New</h1>
  
          <!-- Announcements Section -->
          <v-card v-for="announcement in announcements" :key="announcement.id" class="mb-3">
            <v-card-title>{{ announcement.title }}</v-card-title>
            <v-card-text>{{ announcement.content }}</v-card-text>
          </v-card>
  
          <!-- Fire Incidents Section -->
          <v-card v-for="fireIncident in fireIncidents" :key="fireIncident.id" class="mb-3">
            <v-card-title>{{ fireIncident.title }}</v-card-title>
            <v-card-text>{{ fireIncident.content }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        announcements: [
          // Sample announcement data
          { id: 1, title: 'Important Announcement', content: 'Lorem ipsum dolor sit amet...' },
          // Add more announcements as needed
        ],
        fireIncidents: [
          // Sample fire incident data
          { id: 1, title: 'Major Fire Incident', content: 'Lorem ipsum dolor sit amet...' },
          // Add more fire incidents as needed
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add styles if needed */
  </style>
  