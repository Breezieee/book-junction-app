<!-- src/views/HomePage.vue -->
<template>
  <div id="app">
    <header>
      <div class="logo">
        <img src="../assets/logo.jpg" />
        Book Junction
      </div>
      <nav>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Home</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>WELCOME TO BOOK JUNCTION</h1>
        <div class="slogan">books for students, by students</div>
        <p>
          Book Junction is a platform where students can buy and sell textbooks,
          novels, and other educational materials conveniently.
        </p>
        <div class="buttons">
          <button @click="sellBook">Sell a Book</button>
          <button @click="buyBook">Buy a Book</button>
          <button @click="manageBooks">Manage Books</button>
        </div>
      </section>
    </main>

    <footer>
      <div class="social-media">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
      <div class="books-around">
        <img src="./assets/book1.png" alt="Book 1" />
        <img src="./assets/book2.png" alt="Book 2" />
        <img src="./assets/book3.png" alt="Book 3" />
        <img src="./assets/book4.png" alt="Book 4" />
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  methods: {
    sellBook() {
      alert("Sell a Book clicked");
      // Add navigation or logic here
    },
    buyBook() {
      alert("Buy a Book clicked");
      // Add navigation or logic here
    },
    manageBooks() {
      alert("Manage Books clicked");
      // Add navigation or logic here
    },
  },
};
</script>

<style>
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Roboto:wght@400;500;700&display=swap');

/* CSS variables */
:root {
  --primary-color: #8c7851;
  --secondary-color: #d4c6a9;
  --text-color: #333;
  --background-color: #f8f4ef;
  --font-heading: 'Playfair Display', serif;
  --font-body: 'Roboto', sans-serif;
}

/* General styles */
body {
  margin: 0;
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--background-color);
}

/* Header styles */
header {
  background-color: var(--primary-color);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.5rem;
  color: var(--background-color);
}

.logo img {
  height: 2.5rem;
  margin-right: 0.5rem;
}

nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav li {
  margin-left: 1.5rem;
}

nav a {
  text-decoration: none;
  color: var(--background-color);
  font-weight: 500;
}

/* Main content styles */
.hero {
  padding: 4rem 2rem;
  text-align: center;
}

.hero h1 {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.slogan {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.buttons button {
  background-color: var(--secondary-color);
  border: none;
  color: var(--text-color);
  padding: 0.8rem 1.5rem;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}

/* Footer styles */
footer {
  background-color: var(--primary-color);
  color: var(--background-color);
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.social-media {
  display: flex;
  gap: 1rem;
}

.social-media a {
  color: var(--background-color);
  font-size: 1.5rem;
}

/* Books around section */
.books-around {
  display: flex;
  gap: 1rem;
}

.books-around img {
  height: 80px;
}

/* Responsive styles */
@media (max-width: 768px) {
  header {
    flex-direction: column;
    padding: 1rem;
  }

  .logo {
    margin-bottom: 1rem;
  }

  nav li {
    margin-left: 1rem;
  }

  .hero {
    padding: 3rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .slogan {
    font-size: 1rem;
  }

  footer {
    flex-direction: column;
    text-align: center;
    padding: 1.5rem;
  }

  .social-media {
    margin-bottom: 1rem;
  }
}
</style>