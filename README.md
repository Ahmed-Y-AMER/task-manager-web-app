# Task Manager Web App

A modern, responsive task management application built with React and Vite. Features include task creation, completion tracking, filtering, and a beautiful dark/light theme toggle.

## Features

- ✅ Create and manage tasks
- 🎨 Dark/Light theme toggle
- 🔍 Filter tasks (All, Active, Completed)
- 💾 Local storage persistence
- 📅 Task creation and completion timestamps
- 🎯 Clean and modern UI

## Technologies

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern gradients and transitions

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Task Manager Web App"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Docker Deployment

### Using Docker Compose (Recommended)

1. Build and start the container:
```bash
docker-compose up --build
```

2. Access the application at `http://localhost:8080`

3. Stop the container:
```bash
docker-compose down
```

### Using Docker directly

1. Build the Docker image:
```bash
docker build -t task-manager-app .
```

2. Run the container:
```bash
docker run -p 8080:80 task-manager-app
```

3. Access the application at `http://localhost:8080`

### Docker Commands

- **List running containers**: `docker ps`
- **View logs**: `docker-compose logs` or `docker logs <container-id>`
- **Stop container**: `docker-compose down` or `docker stop <container-id>`
- **Remove container**: `docker rm <container-id>`
- **Remove image**: `docker rmi task-manager-app`

## Project Structure

```
Task Manager Web App/
├── src/
│   ├── components/
│   │   ├── TaskForm.jsx
│   │   ├── TaskItem.jsx
│   │   └── TaskList.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── public/
├── Dockerfile
├── docker-compose.yml
└── package.json
```

## Features in Detail

### Theme Toggle
Click the sun/moon icon in the header to switch between dark and light themes. Your preference is saved in localStorage.

### Task Management
- Add new tasks with the input field
- Mark tasks as complete by checking the checkbox
- Delete tasks with the delete button
- Filter tasks by status (All, Active, Completed)

### Data Persistence
All tasks are automatically saved to browser localStorage and persist across page refreshes.

### Project Production Enviornment Depoloyment
- The project has been deployed using back4app.com
- The git and docker have been initialized in Assignment #2
- To deploy the project using back4app :
    * Go to the website and signup or login using your github.com account
    * create a new app and name as the suiting the project
    * click on the app
    * a left sidebar appears, go to the 'Web Deployment' choice
    * press '+ Deploy a Web app'
    * select you git repo. project from you github.com account
    * fill the options appearing
    * at last, you will find the link of your project, click it and you will go to it
  - The Website URl : https://taskmanager-n64yw0ow.b4a.run/

## License

This project is open source and available under the MIT License.
