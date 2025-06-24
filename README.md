# 🚀 Backend CRUD Application (Node.js + Express + MongoDB)

A simple and clean CRUD (Create, Read, Update, Delete) backend built with **Node.js**, **Express**, **MongoDB**, and **EJS templates** — perfect for learning full-stack development and RESTful routing.

---

## 🧰 Features

- 📝 **Create User** — Add new users with name, email, image URL.  
- 📊 **Read Users** — View all users in a styled, responsive grid.  
- ✏️ **Update User** — Edit existing user details.  
- ❌ **Delete User** — Remove users from the database.  
- 🧩 **EJS Templating** — Single-page style with routes: `/create`, `/read`, `/edit/:id`, `/delete/:id`.  
- 📦 **Tailwind CSS** — Modern UI, full responsiveness.  
- ⚙️ **Express Middleware** — `body-parser` (or built-in parsing), static assets via `public/`, error-handling.

---

## 🛠️ Tech Stack

- **Node.js**  
- **Express.js**  
- **MongoDB** (via [Mongoose](https://mongoosejs.com/))  
- **EJS** for view templates  
- **Tailwind CSS** for frontend styling  

---

## 💾 Installation

1. Clone the repo:  
  
       git clone https://github.com/Shikhasinghtjp/backend.git
       cd backend
2. Install dependencies:

        npm install
   
3. Create a .env file for environment variables:

        MONGODB_URI=mongodb://localhost:27017/my_database
        PORT=3000
   
5. Start the server in development mode:

        npm run dev
   
Or production mode:

        npm start
Open in your browser: http://localhost:3000

---

🎨 Styling & UX
All forms, buttons, and grids are styled using Tailwind CSS, fully responsive.

Includes success & error banners on create/update.

Responsive layouts for Create, Read, and Edit pages with mobile-first design.

---

🔧 Tips & Customization
Database: Switch between local MongoDB or Atlas via your .env.

Validation: Add extra validation (e.g., email format, empty fields).

Flash Messages: Replace inline message banner with connect-flash or similar.

Image Preview: Add client-side JS to preview the image URL before submission.

Advanced UX: Add delete confirmation, modals, pagination, or search.

---

🧩 Future Enhancements
✅ User avatar preview before creation/edit.

✅ Flash messages that auto-dismiss.

✅ Dark/light theme toggle.

🔄 REST API endpoints for JSON-based consumption.


