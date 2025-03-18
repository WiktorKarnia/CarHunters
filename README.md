# CarHunters

CarHunters is an application developed as part of the Rich Internet Applications course. It enables users to share photos of unique vehicles they've encountered worldwide. Users can capture and upload images, pinpoint the exact location on a map, and provide descriptions of the spotted cars. The platform displays posts from various users on the main page, and each user has a personal profile showcasing their contributions. Additionally, posts can be commented on and added to favorites, with the number of likes and comments visible to all users.

## Features

- **User Authentication**: Secure login system allowing users to create and manage their accounts.
- **Photo Upload**: Capture and upload images of vehicles directly through the application.
- **Geolocation Tagging**: Mark the exact location of the spotted vehicle on an interactive map.
- **Post Descriptions**: Add detailed descriptions to each post to provide context about the vehicle.
- **User Profiles**: View personal profiles displaying all posts made by a user.
- **Interactive Feed**: Explore a main feed showcasing posts from all users.
- **Engagement**: Comment on and like posts, with counts visible to everyone.

## Prototype

A prototype of the application is available on Figma: [**CarHunters**](https://www.figma.com/file/GnWxLYfJkij7t52yqzdCZb/CarSpottingApp?node-id=214%3A234&t=K0LK65YsJeqbG4VI-1)

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/WiktorKarnia/CarHunters.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd CarHunters
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

4. **Start the Development Server**:

   ```bash
   npm run dev
   ```

The application should now be accessible at `http://localhost:3000`.

## Technologies Used

- **Frontend**: Vue.js
- **Backend**: Node.js
- **Database**: Firestore Database
- **Authentication**: Firebase Authentication
- **Mapping**: Leaflet.js
