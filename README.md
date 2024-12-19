# About Page

The study project [Easy Charts](https://easy-charts-8d058.web.app).

The Easy Charts is a website for creating charts and diagrams online.  
Select the chart type (bars, horizontal bars, lines, radar, pie, doughnut), fill data tables, and the chart is done!  
You can view and save the chart to paste it into Excel, Word, and other programs on your computer.  
You can get a link to the chart page to share it.  
It is very easy to create charts and diagrams online!

The interface was developed on the React library using the Formik library for working with forms.  
The Redux library was used as a state manager and the Axios library was used to interact with the REST API.

---

### Technologies

This chart creating project was built using:  
`React`, `Redux`, `TypeScript`, `SCSS`, `Axios`, `REST API`, `Formik`, `i18next`, `ESLint`.

---

### Design

- Creating charts and diagrams;
- Viewing and saving the chart in full size format (PNG);
- Getting a link to the chart page to share it;
- Viewing weather and currency exchange rates;
- Switching theme and language mode.

---

### Developing

- Add following `.env.local` file to the root of the project (`git` ignored) :  
  `REACT_APP_OPENWEATHER_KEY='xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'`  
  You should take the KEY from the developer!

* Project deployment ([firebase.google.com](https://firebase.google.com)) :
  - To host your site with Firebase Hosting, you need the Firebase CLI (a command line tool).  
    Run the following npm command to install the CLI or update to the latest CLI version.  
    `npm install --global firebase-tools`;
  - Sign in to Google.  
    For deploy new project you should create new firebase project.  
    For redeploy current project you must be added to members of current firebase project.  
    `firebase login`;
  - Build your web app.  
    `npm run build`;
  - Deploy or redeploy your web app.  
    Put your static files (e.g., HTML, CSS, JS) in your app's deploy directory (the default is "public").  
    `firebase deploy`.

---

###### If you have some questions access, write me on [LinkedIn](www.linkedin.com/in/maksimkasota)
