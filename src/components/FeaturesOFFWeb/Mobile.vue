<template>
    <v-container>
      <!-- Real-Time Location Section -->
      <v-card>
        <v-card-title>Real-Time Location</v-card-title>
        <leaflet-map :center="currentLocation" :zoom="15">
          <leaflet-tile-layer :url="tileLayerUrl"></leaflet-tile-layer>
          <leaflet-marker :lat-lng="currentLocation"></leaflet-marker>
        </leaflet-map>
      </v-card>
  
      <!-- Face Recognition Section -->
      <v-card>
        <v-card-title>Face Recognition</v-card-title>
        <v-container>
          <v-row>
            <v-col>
              <v-img
                v-if="faceDetected"
                :src="faceDetectedImage"
                class="face-detected-image"
              ></v-img>
              <webcam-capture @capture="handleCapture"></webcam-capture>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
  
      <!-- Emergency Call Section -->
      <v-card>
        <v-card-title>Emergency Call</v-card-title>
        <v-btn @click="makeEmergencyCall" color="red" dark>
          Emergency Call
        </v-btn>
      </v-card>
    </v-container>
  </template>
  
  <script>
  import * as faceapi from 'face-api.js';
  
  export default {
    data() {
      return {
        currentLocation: { lat: 0, lng: 0 }, // Initialize with default or user's location
        tileLayerUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', // Example tile layer URL
        faceDetected: false,
        faceDetectedImage: '',
      };
    },
    mounted() {
      // Load face-api.js models
      Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
        faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
        faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
        faceapi.nets.faceExpressionNet.loadFromUri('/models'),
      ]).then(() => {
        console.log('Face-api.js models loaded');
        // Start face recognition logic if needed
      });
    },
    methods: {
      handleCapture(imageData) {
        // Perform face detection on the captured image
        const image = new Image();
        image.src = imageData;
        image.onload = async () => {
          const detections = await faceapi.detectAllFaces(image).withFaceLandmarks().withFaceDescriptors();
  
          if (detections.length > 0) {
            // Face detected
            this.faceDetected = true;
            this.faceDetectedImage = imageData;
          } else {
            // No face detected
            this.faceDetected = false;
          }
        };
      },
      makeEmergencyCall() {
        // Implement logic to initiate an emergency call
        console.log('Emergency call initiated');
      },
    },
  };
  </script>
  
  <style scoped>
  .face-detected-image {
    max-width: 100%;
    max-height: 400px;
    margin: auto;
    display: block;
  }
  </style>
  