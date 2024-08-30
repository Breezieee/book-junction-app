<template>
  <div class="order-confirmation">
    <h2>Order Confirmation</h2>
    <p>You have selected {{ selectedBooks.length }} books.</p>
    <ul>
      <li v-for="book in selectedBooks" :key="book.id">
        <p>{{ book.title }}</p>
        <p>{{ book.price }}</p>
      </li>
    </ul>
    <p>Total: {{ totalPrice }}</p>
    <button @click="checkout">Confirm and Checkout</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedBooks: [],
      totalPrice: 0
    };
  },
  computed: {
    totalItems() {
      return this.selectedBooks.length;
    }
  },
  methods: {
    checkout(selectedBooks) {

      console.log('Checking out with selected books:', selectedBooks);

      if (selectedBooks.length > 0) {

        this.$axios.post('/checkout', { selectedBooks })
            .then(response => {

              console.log('Checkout successful:', response.data);
            })
            .catch(error => {

              console.error('Checkout failed:', error);
            });
      } else {

        alert('Please select at least one book.');
      }
    }
  }
};
</script>