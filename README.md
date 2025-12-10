# WeChat-Chat App
This project is a full-stack real-time chat application built using the MERN stack, Socket.io, and Cloudinary. It supports 1-to-1 messaging, online/offline status, real-time updates, image sharing, and message tracking.<br/>

⭐ Features<br/>
🔥 Real-Time Messaging
Live chat powered by Socket.io
Instant delivery of messages without page reload
Automatic scrolling to the newest message<br/>

👤 Authentication & User Management
JWT-based authentication
Protected APIs
User profile with avatar support
Logout functionality<br/>

📡 Online / Offline Status
Real-time presence detection
Green status indicator for active users
Socket-based user connection tracking<br/>

📨 Message System
Send text and image messages
Messages stored in MongoDB
Cloudinary for image uploads
Accurate timestamps
Seen/unseen message tracking
Unread message count badges in the sidebar<br/>

📁 Chat List Sidebar
Search users by name
Filter users
Highlight active chat
Show unseen message counts
Responsive design (mobile & desktop)<br/>

💬 Chat Container
Fully responsive chat UI
Uploaded images preview in chat
Different styling for sent/received messages
Automatic unread message clearing when opening a conversation<br/>

⚙️ Backend API
Secure REST API using Express.js
Endpoints for:
Send message
Fetch messages
Fetch users
Mark messages as seen
Socket.io event handlers for real-time communication<br/>

🧰 Tech Stack
Frontend
React.js
Context API (Auth + Chat Context)
TailwindCSS
Socket.io-client<br/>

Backend<br/>
Node.js / Express.js
Socket.io
MongoDB + Mongoose
JSON Web Tokens (JWT)
Cloudinary (Image uploads)<br/>

📦 Project Structure (Simplified)<br/>
/client
  /src
    /context
      AuthContext.jsx
      ChatContext.jsx
    /components
      Sidebar.jsx
      ChatContainer.jsx
    /assets
      icons, images
    App.jsx

/server
  /controllers
      message.controller.js
      user.controller.js
  /models
      Message.js
      User.js
  /routes
      message.routes.js
      user.routes.js
  /socket
      index.js
  server.js

⚙️Installation
git clone <repo-url>

# install client
cd client
npm install

# install server
cd ../server
npm install

# Run Backend
npm run server

#Run Frontend 
npm run dev





