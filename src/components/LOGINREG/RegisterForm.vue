<template>
    <v-card class="registration-card">
      <v-card-title class="primary">
        <div class="text-h4 text-center white--text">Community Registration Form</div>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <form @submit.prevent="submitForm">
              <div class="form-group" style="margin-top:70px">
                <label class="input-label" for="fullName">Full Name:</label>
                <v-text-field v-model="fullName" required outlined></v-text-field>
              </div>
  
              <div class="form-group" style="margin-bottom:5px">
                <label class="input-label" for="dob">Date of Birth:</label>
                <v-date-picker width="800"   v-model="dob" required outlined small></v-date-picker>
              </div>
  
              <div class="form-group" style="margin-top:5px">
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
                <div class="text-h5 font-weight-black">Household Members</div>
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
              <v-checkbox v-model="permission" required>
                <template v-slot:label>
                  <div class="input-label">
                    I hereby grant permission for real-time location tracking and facial recognition via my smartphone during emergencies, acknowledging its use as a witness to a fire incident.
                  </div>
                </template>
              </v-checkbox>
            </div>
  
              <v-btn type="submit" class="primary">Submit</v-btn>
              <div class="form-group">
                <v-text class="text-body-1">Already have an account?</v-text>
                <v-text class="text-body-1 text-decoration-underline" style="margin-left: 15px; cursor: pointer" @click="goToLogin" text color="primary">Login</v-text>
              </div>
            </form>
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
      goToLogin() {
        console.log('Back to Home');
      this.$router.push({ name: 'login' });
         },
    },
  };
  </script>
  <style scoped>
  .registration-card {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .primary {
    background-color: #d9534f;
    color: #fff;
  }
  
  .input-label {
    font-weight: bold;
    max-width: 900px;
  }
  
  .form-group {
    margin-bottom: 20px;
    margin-top: 20px;
  }
  
  .v-text-field,
  .v-select,
  .v-file-input,
  .v-textarea {
    width: 200%;
    margin-bottom: 12px;
  }
  
  .v-btn.primary {
    border: 2px solid #d9534f;
    border-radius: 8px;
    background-color: #d9534f;
    color: #fff;
  }
  
  .v-checkbox__label {
    font-size: 14px;
    
  }

  </style>