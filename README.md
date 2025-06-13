## 🚀 30-Day Coding Challenge: Day 6

This project is the sixth entry in my 30-day coding challenge. The objective was to build a functional and visually appealing tool for developers by interacting with a real-world, professional API. The app allows users to search for any GitHub profile and retrieve key information and recent activity.

### 📖 Project Overview

The GitHub Profile Finder is a sleek, single-page application that fetches and displays data from the official GitHub REST API. Users can enter a GitHub username to see a well-structured view of the profile, including their avatar, bio, follower counts, and their 10 most recently created public repositories.

A major focus of this project was creating a high-quality user experience with a professional, developer-centric "dark mode" UI, instant search, and efficient data loading.

### ✨ Live Demo & Screenshot

Below is a screenshot of the application's dark mode interface after searching for a user.
![Jun-12-2025 22-21-14](https://github.com/user-attachments/assets/138cb445-a5f5-42eb-bb54-377f193054cf)



### 🌟 Key Features

* **Live API Integration:** Fetches real-time data directly from the official GitHub REST API.
* **Efficient Data Fetching:** Uses `Promise.all()` to make parallel API calls for user details and repositories, significantly improving loading performance.
* **Dynamic UI Rendering:** The entire profile and repository list is generated dynamically in JavaScript based on the API response.
* **Professional Dark Mode UI:** Aesthetically pleasing dark theme inspired by GitHub's own design language, providing a familiar and comfortable experience for developers.
* **Latest Repository List:** Displays the user's 10 most recent public repositories, sorted by creation date.
* **Robust Error Handling:** Provides clear feedback to the user if the username is not found or if there is a network error.
* **Fully Responsive:** The layout seamlessly adapts to all screen sizes, from mobile devices to desktops.

### 💻 Technologies Used

This project was built with a focus on modern, vanilla web technologies.

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

* **GitHub REST API:** The source of all user and repository data.
* **Google Fonts:** For the 'Inter' font family.
* **Font Awesome:** For icons used in the UI.

### 🛠️ How to Run Locally

To run this project on your local machine, please follow these simple steps:

1.  **Clone the repository (or download the code):**
    ```bash
    git clone https://github.com/timothy-agboada/github-profile-finder.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd github-finder
    ```
3.  **Open the `index.html` file in your web browser:**
    * You can simply double-click the `index.html` file, or right-click and choose "Open with" your preferred browser.

No special installations or dependencies are required.

### 🎯 Learning Objectives

This project was an excellent opportunity to practice several important front-end development skills:

* **Working with a Professional API:** Making `GET` requests, handling responses, and parsing JSON data.
* **Asynchronous JavaScript:** Mastering `async/await` and leveraging `Promise.all` for performance optimization.
* **Complex DOM Manipulation:** Building a multi-component UI entirely from JavaScript based on API data.
* **UI/UX Design:** Focusing on creating a visually appealing and intuitive interface with a specific audience (developers) in mind.
* **Responsive Design with Grid:** Using CSS Grid to create a complex layout that adapts gracefully to different screen sizes.
