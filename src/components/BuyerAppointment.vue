<template>
  <div>
    <h1>BookJunction Appointments</h1>

    <!-- Appointment Form for Collection -->
    <div class="appointment-form">
      <h2>Appointment to Collect Book</h2>
      <form @submit.prevent="bookAppointment">
        <input type="hidden" v-model="form.orderID" value="54321">
        <input type="hidden" v-model="form.buyerID" value="09876">
        <label for="buyername">Buyer Name:</label>
        <input type="text" id="buyername" v-model="form.buyername"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="form.email"><br>
        <label for="phonenumber">Phone Number:</label>
        <input type="tel" id="phonenumber" v-model="form.phonenumber"><br>
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
        orderID: '54321',
        buyerID: '09876',
        buyername: '',
        email: '',
        phonenumber: ''
      },
      showPopup: false,
      popupMessage: ''
    };
  },
  methods: {
    bookAppointment() {
      // Logic for booking the appointment
      this.popupMessage = 'Collection appointment booked successfully!';
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