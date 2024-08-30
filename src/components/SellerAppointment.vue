<template>
  <div>
    <h1>BookJunction Appointments</h1>

    <!-- Appointment Form for Delivery -->
    <div class="appointment-form">
      <h2>Appointment to Deliver Book</h2>
      <form @submit.prevent="bookAppointment">
        <input type="hidden" v-model="form.bookID" value="12345">
        <input type="hidden" v-model="form.userID" value="67890">
        <label for="description">Description:</label>
        <textarea id="description" v-model="form.description"></textarea><br>
        <label for="date">Date:</label>
        <input type="date" id="date" v-model="form.date"><br>
        <label for="time">Time:</label>
        <input type="time" id="time" v-model="form.time"><br>
        <label for="location">Location:</label>
        <input type="text" id="location" v-model="form.location" value="Library Room A"><br>
        <button type="submit">Book Appointment</button>
      </form>
    </div>

    <!-- Pop-up Modal -->
    <div v-if="showPopup" class="popup">
      <div class="popup-content">
        <span class="close-btn" @click="closePopup">&times;</span>
        <p>{{ popupMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        bookID: '12345',
        userID: '67890',
        description: '',
        date: '',
        time: '',
        location: 'Library Room A'
      },
      showPopup: false,
      popupMessage: ''
    };
  },
  methods: {
    bookAppointment() {
      // Logic for booking the appointment
      this.popupMessage = 'Delivery appointment booked successfully!';
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

<style scoped>
/* Add your CSS styles here */
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  position: relative;
}
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}
</style>