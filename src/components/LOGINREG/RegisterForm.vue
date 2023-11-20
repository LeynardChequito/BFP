<template>
    <v-card class="registration-card">
      <v-card-title class="primary">
        <h2 class="white--text">Registration Form</h2>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <form @submit.prevent="submitForm">
              <div class="form-group">
                <label class="input-label" for="fullName">Full Name:</label>
                <v-text-field v-model="fullName" required outlined></v-text-field>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="dob">Date of Birth:</label>
                <v-date-picker v-model="dob" required outlined></v-date-picker>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="address">Home Address:</label>
                <v-textarea v-model="address" required outlined></v-textarea>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="phoneNumber">Phone Number:</label>
                <v-text-field v-model="phoneNumber" required outlined></v-text-field>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="email">Email Address:</label>
                <v-text-field v-model="email" required outlined></v-text-field>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="sex">Sex:</label>
                <v-select v-model="sex" :items="['male', 'female']" required outlined></v-select>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="photoId">Photo ID Upload:</label>
                <v-file-input accept="image/*" @change="handleFileUpload('photoId', $event)" outlined></v-file-input>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="profilePhoto">Profile Photo Upload:</label>
                <v-file-input accept="image/*" @change="handleFileUpload('profilePhoto', $event)" outlined></v-file-input>
              </div>
  
              <div class="form-group">
                <h3>Household Members</h3>
                <div v-for="(member, index) in householdMembers" :key="index" class="household-member">
                  <label class="input-label" :for="'memberName' + index">Enter Name:</label>
                  <v-text-field :id="'memberName' + index" v-model="member.name" required outlined></v-text-field>
  
                  <label class="input-label" :for="'contactNumber' + index">Enter Contact Number:</label>
                  <v-text-field :id="'contactNumber' + index" v-model="member.contactNumber" required outlined></v-text-field>
                </div>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="medicalConditions">Medical Conditions/Disabilities:</label>
                <v-textarea v-model="medicalConditions" outlined></v-textarea>
              </div>
  
              <div class="form-group">
                <label class="input-label" for="homeType">Home Type:</label>
                <v-text-field v-model="homeType" required outlined></v-text-field>
              </div>
  
              <div class="form-group">
                <v-checkbox v-model="permission" required label="I hereby grant permission for real-time location tracking and facial recognition via my smartphone during emergencies, acknowledging its use as a witness to a fire incident." />
              </div>
  
              <v-btn type="submit" class="primary">Submit</v-btn>
            </form>
          </v-col>
          <v-col cols="12" md="6">
            <!-- Additional content or form fields for larger screens -->
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        fullName: "",
        dob: new Date(), // Initialize dob as a Date object
        address: "",
        phoneNumber: "",
        email: "",
        sex: "",
        photoId: null,
        profilePhoto: null,
        householdMembers: [{ name: "", contactNumber: "" }],
        medicalConditions: "",
        homeType: "",
        permission: false,
      };
    },
    methods: {
      handleFileUpload(field, event) {
        const file = event.target.files[0];
        this[field] = file;
      },
      submitForm() {
        if (this.dob) {
          this.dob = new Date(this.dob);
        }
        console.log("Form submitted:", this.$data);
      },
    },
  };
  </script>
  
  <style scoped>
    .registration-card {
      max-width: 400px; /* Adjust the max-width according to your preference */
      margin: 0 auto;
      padding: 20px; /* Add some padding for better readability */
    }
  
    .primary {
      background-color: #3498db;
      color: #fff;
    }
  
    .input-label {
      font-weight: bold;
    }
  
    .form-group {
      margin-bottom: 20px;
    }
  
    .v-text-field,
    .v-select,
    .v-file-input,
    .v-textarea {
      width: 100%;
      margin-bottom: 12px;
    }
  
    .v-btn.primary {
      background-color: #3498db;
      color: #fff;
    }
  
    .v-checkbox__label {
      font-size: 14px;
    }
  
    .household-member {
      margin-bottom: 20px;
    }
  </style>
  