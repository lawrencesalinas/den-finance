# DenFinance

## Introduction
DenFinance is an advanced tool designed for individuals to track and analyze their financial activities. 
This app offers features like monitoring expenses and income, visualizing data through interactive graphs, comprehensive filtering options, and a secure user authentication system.

## Technologies
* React - for a dynamic and responsive frontend.
* Django - for a robust and scalable backend.
* Recharts - for creating interactive charts to visualize financial data.
* Authentication system for secure user access.

## Setup and Installation
* Prerequisites: Node.js (for React) and Python (for Django).
* Instructions for cloning the repository and navigating to the project directory.
* Backend setup:
  * Create a Python virtual environment.
  * Install dependencies from `requirements.txt`.
  * Configure Django (including migrations, admin setup, and authentication system).
* Frontend setup:
  * Navigate to the frontend folder.
  * Install Node modules using `npm install` or `yarn`.
  * Set up necessary environment variables.

## Running the Application
* Start the Django backend server:
  * Run `python manage.py runserver` in the root directory.
* Launch the React frontend application:
  * In a separate terminal, navigate to the frontend folder.
  * Execute `npm start` to start the frontend.

## Features
* **User Authentication**: Secure login and registration system for personalized user experience.
* **Graphical Data Representation**: Utilizes Recharts to create graphs for visualizing financial trends.
* **Advanced Filtering Options**: 
  * Date picker to filter records by specific periods.
  * Price range filtering.
  * Categorization of data as income or expense.
  * Search for filtering expenses by categories.
* **Expense and Income Tracking**: Easy addition and tracking of expenses and income.

## Usage
1. **Sign Up**: New users must first sign up by creating an account.
2. **Login**: After signing up, users can log in to access their dashboard.
3. **Adding Data**: Users can add financial data such as expenses and income.
4. **Viewing Changes**: Upon adding data, the entries will be listed, and the graphs will dynamically update to reflect the new information.
   

   ```html
   <!-- Add this code where you want to display the GIF in your Markdown file -->
   ![Usage GIF](/frontend/src/assets/finance.gif)
