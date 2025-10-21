# Weather Favorites App

A full-stack web application that allows users to check the weather by **city name** or **ZIP code**, and manage their favorite locations. Built with **Node.js**, **Express**, **Sequelize**, **PostgreSQL**, and **React**.

---

## Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Environment Variables](#environment-variables)
* [Backend](#backend)
* [Frontend](#frontend)
* [API Endpoints](#api-endpoints)
* [Contributing](#contributing)
* [License](#license)

---

## Features

* **Check Weather:** Search by **city name** or **ZIP code**.
* **Favorites Management:**

  * Add favorite locations by name or ZIP code.
  * Update favorite location details.
  * Delete favorites.
* **Full CRUD functionality** for favorite locations.
* **Responsive frontend** built with React.

---

## Tech Stack

**Backend:**

* Node.js
* Express.js
* Sequelize ORM
* PostgreSQL

**Frontend:**

* React.js
* Fetch API / Axios for HTTP requests

**Other:**

* dotenv for environment variables
* pnpm for package management

---

## Getting Started

### Prerequisites

* Node.js (v18+)
* PostgreSQL (v14+)
* pnpm

### Clone the repo

```bash
git clone <your-repo-url>
cd <repo-folder>
```

---

### Backend Setup

1. Navigate to backend folder:

```bash
cd backend
```

2. Install dependencies with pnpm:

```bash
pnpm install
```

3. Create a PostgreSQL database:

```sql
CREATE DATABASE weather_app;
```

4. Set environment variables in `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=weather_app
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=5000
```

5. Run database migrations / sync models (if using Sequelize):

```bash
npx sequelize-cli db:migrate
# or programmatically via sequelize.sync()
```

6. Start the backend server:

```bash
pnpm dev
```

Server should run on `http://localhost:5000` by default.

---

### Frontend Setup

1. Navigate to frontend folder:

```bash
cd frontend
```

2. Install dependencies with pnpm:

```bash
pnpm install
```

3. Start the React development server:

```bash
pnpm start
```

Frontend should run on `http://localhost:3000` and communicate with the backend.

---

## Environment Variables

Make sure you have a `.env` file in your **backend** directory:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=weather_app
DB_USER=your_db_user
DB_PASSWORD=your_db_password
PORT=5000
```

> Optional: You can also define frontend environment variables if your frontend fetches from a dynamic API URL.

---

## API Endpoints

### Favorites (CRUD)

| Method | Endpoint         | Description          |
| ------ | ---------------- | -------------------- |
| GET    | `/favorites`     | Fetch all favorites  |
| GET    | `/favorites/:id` | Fetch favorite by ID |
| POST   | `/favorites`     | Add a new favorite   |
| PUT    | `/favorites/:id` | Update a favorite    |
| DELETE | `/favorites/:id` | Delete a favorite    |

### Weather

| Method | Endpoint               | Description                |
| ------ | ---------------------- | -------------------------- |
| GET    | `/weather?name=<city>` | Fetch weather by city name |
| GET    | `/weather?zip=<zip>`   | Fetch weather by ZIP code  |

---

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature/feature-name`)
3. Make your changes and commit (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/feature-name`)
5. Open a pull request

---

## License

This project is licensed under the MIT License.
