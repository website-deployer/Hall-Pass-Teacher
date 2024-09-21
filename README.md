# Digital Hall Pass System - Teacher Dashboard

## Overview
This project provides a digital dashboard for teachers to monitor student hall passes in real-time. It displays information about students who have signed in or out, including their names, destinations, and timestamps.

## Features
- Real-time updates of student hall pass activities
- Clean, intuitive interface for easy monitoring
- Automatic refresh every 30 seconds
- Responsive design for various screen sizes
- Light and dark mode support

## Technical Stack
- Node.js
- Express.js
- HTML5, CSS3, JavaScript
- Bootstrap for styling
- Font Awesome for icons

## Setup and Deployment
1. Clone the repository
2. Run `npm install` to install dependencies
3. Start the server with `npm start`
4. Access the dashboard at `http://localhost:3000` (or your deployed URL)

## API Endpoints
- GET `/api/hallpass`: Retrieve all hall pass entries
- POST `/api/hallpass`: Add a new hall pass entry

## Customization
You can modify the `public/index.html` file to adjust the dashboard's appearance or add new features as needed.

## Author
Developed by Abhinav M.

## Note
This system works in conjunction with a separate student interface for full functionality.
