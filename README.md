Local Tech Meetup Landing Page
This project is a landing page for a local tech meetup built using Vue 2, Vuetify 2, Notion API, and Node.js. The page displays information about the meetup, its agenda, and allows users to RSVP.

Features
Display event information
Showcase speakers and agenda
RSVP form
Backend server for handling Notion API calls
Prerequisites
Node.js (version >= 12.x.x)
NPM or Yarn
A Notion account with API key
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/local-tech-meetup.git
cd local-tech-meetup
Install dependencies:

bash
Copy code
npm install
# or
yarn
Create a .env file in the root folder of the project and fill in the necessary environment variables. Use the provided .env.example file as a template:

makefile
Copy code
NOTION_API_KEY=your_notion_api_key
Run the development server: node server/server.js

bash
Copy code
npm run serve
# or
yarn serve
Open your browser and navigate to http://localhost:8080 to view the local tech meetup landing page.

Deployment
To deploy the project, follow the deployment guidelines of your preferred hosting platform (e.g., Netlify, Vercel, Heroku, etc.). Make sure to set up the environment variables on your hosting platform as well.

Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT License