
# RestaurantRealm

## Introduction

RestaurantRealm is a comprehensive web application designed to streamline restaurant management operations. This application offers a wide range of features to help restaurant owners and managers efficiently manage various aspects of their business, from handling reservations and orders to managing menus and customer feedback.

### Key Features

1. **User-friendly Interface:** Navigate our website effortlessly with a sleek and intuitive design.
2. **Responsive Design:** Enjoy seamless browsing on any device, whether desktop, tablet, or smartphone.
3. **Real-time Updates:** Receive instant updates on new listings, price changes, and property availability.
4. **Reservation Management:** Efficiently manage table reservations with an intuitive reservation system.
5. **Inventory Management:** Keep track of ingredients and supplies to optimize stock levels and prevent shortages. Features include:
   - Inventory tracking and replenishment alerts
   - Ingredient usage analytics and forecasting
6. **Social Media Integration:** Stay connected and updated on the latest news and listings through seamless integration with popular social media platforms.
7. **User Authentication:** Implement user authentication to allow users to create accounts, log in, and save their favorite properties or preferences.

## Category Name: Restaurant Management Website

### Website Link

Visit our website: [RestaurantRealm](https://b9a11-restaurant-management.web.app/)

## Getting Started

To run this project locally, follow these steps:

1. **Clone the Repository**

2. **Install Dependencies**
- Navigate to the project directory and install frontend dependencies:
  ```
  npm install
  ```
- For backend dependencies, navigate to the backend directory and run:
  ```
  npm install
  ```

3. **Configure Firebase Keys**
- Add your Firebase configuration keys to a `.env.local` file in the project root:
  ```
  FIREBASE_API_KEY=<your-api-key>
  FIREBASE_AUTH_DOMAIN=<your-auth-domain>
  FIREBASE_PROJECT_ID=<your-project-id>
  ```

4. **Start the Backend Server**
- Use `nodemon` to start the backend server:
  ```
  nodemon index.js
  ```
- Ensure MongoDB URI, username, and password are set in a `.env` file in the backend directory:
  ```
  MONGODB_URI=<your-mongodb-uri>
  DB_USERNAME=<your-db-username>
  DB_PASSWORD=<your-db-password>
  ```

5. **Set Environment Variables**
- Update `.env.local` or `.env` with necessary variables, for example:
  ```
  VITE_API_URL='http://localhost:5000'
  ```

6. **Start the Frontend Server**

Follow these steps to clone, configure, and run the project locally.

