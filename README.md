# CodeSync: Realtime Collaborative Code Editor

## Introduction

Are you tired of sending code snippets back and forth, struggling to debug and collaborate with your team? Look no further! **CodeSync** is here to revolutionize the way you code together. This powerful and intuitive collaborative code editor is designed to empower developers, and teams to work seamlessly in real-time, regardless of their location. With **CodeSync**, you can code together, debug together, and ship faster, together.

## Features

- Multiple users can join a room and edit code together
- Changes are reflected in real time
- Copy button to copy the room id to clipboard
- Leave button to leave the room
- Supports syntax highlighting for different programming languages
- Users can leave the room and rejoin later to continue editing
- Joining & leaving of users is also reflected in real time

## Tech Stack

- React.js
- Node.js
- Express.js
- Socket.io
- CodeMirror
- React-Toastify

## Screenshots
Home Page: 

![image](https://github.com/user-attachments/assets/bda90145-81a8-473b-85c3-ddb813292a3f)

The initial login screen allows users to join a collaboration room by entering a ROOM ID and username. It also includes an option to create a new room if the user does not have an invite. All the actions performed by the user are displayed using notifications for easier understanding and usability.
Each time when the user clicks on the “new room” button, a unique ROOM ID is generated. This ROOM ID is a combination of alphabets, numbers and special characters separated by hyphens. Bcrypt is used for hashing the ROOM ID, making it more secure and reliable.

\
Editor Page: 

![image](https://github.com/user-attachments/assets/bd30dbfb-6ec2-4495-8c4e-8201129e88e9)

The code editor interface supports real-time collaboration, displaying connected users and enabling synchronized code changes among participants. It also includes options for copying the ROOM ID and leaving the session. When the user copies the ROOM ID or leaves the room, a notification is shown to inform other users.

## Installation

### Running Locally

1. Clone this repository and cd into it
2. Run `npm install` to install the dependencies
3. Create .env file in the root folder and copy paste the content of example.env, and add necessary credentials.
4. To start the react app client run `npm start` in one terminal
5. To start the server run `npm server:dev` in another terminal
6. Go to `http://localhost:3000` to view the app
