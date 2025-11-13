FormFlow - Frontend Application

Welcome to the frontend for FormFlow, a modern "Google Forms Alternative" built with React, Vite, and Tailwind CSS.

This application provides a complete user interface for creating forms, sharing them with the public, and viewing responses. It is designed to be paired with the FormFlow backend API.

Core Technologies

React: For building the user interface.

Vite: As the frontend build tool.

React Router (react-router-dom): For all client-side routing.

Tailwind CSS: For all styling and theming (Light & Dark mode).

Auth Context: A React Context for managing user authentication state (JWT tokens).

Axios: For making all API requests to the backend.

Features

Creator Features (Authenticated)

Authentication: Users can register and log in via JWT.

Dashboard: View all created forms in one place.

Form Builder: Create new forms, add, edit, and re-order questions (Text, Multiple-Choice, File Upload).

Response Viewer: View all submitted responses for a form, either as a summary or one-by-one.

Public Features (Unauthenticated)

Public Form Page: Anyone with a direct link can view and submit a form.

File Uploads: Supports file uploads as a response type.

Routing & Page Structure

The application is structured around a central pages directory, with routes managed by react-router-dom.

1. Index.tsx

Route: /

Purpose: This is the main landing page or home page of the application. It's the first page new users will see. It likely contains marketing information and a call-to-action to "Sign Up" or "Login."

2. Login.tsx

Route: /login

Purpose: Displays the login form (username/password). On successful login, it saves the JWT to localStorage and the Auth Context, then redirects the user to their dashboard.

3. Register.tsx

Route: /register

Purpose: Displays the registration form. On successful registration, it automatically logs the user in and redirects them to the dashboard.

4. Dashboard.tsx

Route: /dashboard

Access: Protected Route (Requires authentication).

Purpose: The main hub for a logged-in user.

Fetches and displays a list of all forms created by the user.

Provides a primary button to "Create New Form" (links to /form/builder/new).

Each form in the list links to its ResponseViewer.tsx page.

5. FormBuilder.tsx

Route: /form/builder/:formId (e.g., /form/builder/new or /form/builder/60d...)

Access: Protected Route (Requires authentication).

Purpose: The core "creator" interface for building and editing forms.

Fetches form data if formId is not "new".

Allows adding, editing, and deleting questions.

Manages question types (text, multiple-choice, file-upload).

Provides a "Save Form" button to POST/PUT changes to the backend.

6. PublicForm.tsx

Route: /form/:formId (e.g., /form/60d...)

Access: Public Route.

Purpose: The public, shareable page for a single form.

Fetches the form structure (title, questions) from the public API.

Renders the questions for anyone to fill out.

Handles file uploads (if any) and submission of all answers to the backend.

7. ResponseViewer.tsx

Route: /form/:formId/responses

Access: Protected Route (Requires authentication).

Purpose: Allows the form creator to see all the data they've collected.

Fetches all responses for the given formId.

Often includes two views:

Summary: Charts and graphs (e.g., pie charts for multiple-choice).

Individual: A way to click through each response one by one.

8. NotFound.tsx

Route: * (Catch-all)

Access: Public Route.

Purpose: A simple 404 "Page Not Found" component that is displayed when a user tries to access a route that doesn't exist.