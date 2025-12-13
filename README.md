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

🧰 Tech Stack<br/>
# Frontend
React.js
Context API (Auth + Chat Context)
TailwindCSS
Socket.io-client<br/>

# Backend<br/>
Node.js / Express.js
Socket.io
MongoDB + Mongoose
JSON Web Tokens (JWT)
Cloudinary (Image uploads)<br/>

# 📦 Project Structure (Simplified)<br/>
/client<br/>
  /srct<br/>
    /contextt<br/>
      AuthContext.jsxt<br/>
      ChatContext.jsxt<br/>
    /componentstt<br/>
      Sidebar.jsxtt<br/>
      ChatContainer.jsxt<br/>
    /assetst<br/>
      icons, imagest<br/>
    App.jsx<br/>

/server<br/>
  /controllers
      message.controller.js
      user.controller.js<br/>
  /models<br/>
      Message.js
      User.js<br/>
  /routes<br/>
      message.routes.js
      user.routes.js<br/>
  /socket<br/>
      index.js<br/>
  server.js<br/>

# ⚙️Installation
git clone <repo-url><br/>

# install client
cd client<br/>
npm install

# install server<br/>
cd ../server
npm install

# Run Backend<br/>
npm run server

# Run Frontend <br/>
npm run dev





