# MERN Starter by Jay Jay Cayabyab

This repository includes a boilerplate application that is designed as a launchpad for initializing boilerplate applications.

The structure of the project in its current state assumes that the project will have two separate servers: one for the server-side and one for the client side.

## Table of Contents
1. [To-do before working on your project](#todo)

### To-do before working on your project: <a name="todo"></a>
- Run the following code:
```
npm i
cd client
npm i
```
- Delete the contents of this README.md and replace with `# {your-project-name}`.

**For a separate github repo:**
- Run the following code:
```
git remote set-url origin {repo-url}
git add README.md
git commit -m "initial commit"
git push -u origin master
```

### For heroku deployment:

**For heroku initialization:**

- Ensure git is installed. Preferably, update the github repo with the instructions above.
- Ensure Heroku CLI is installed. You can download it [here](https://devcenter.heroku.com/articles/heroku-cli#download-and-install).
   - If not logged in, run `heroku login`.
- Run `heroku create`. This will log a git repository connected to heroku.
- Run
```
git remote add heroku {heroku git repository}
git push heroku master
```


**This starter installs the following dependencies:**

**Server-side:**
- Express
- Nodemon
- Concurrently

**Client-side:**
- create-react-app dependencies
- Redux
- React-Redux
- Redux-Form
- Redux-Thunk

**This starter automatically completes the following steps:**
- Creates a separate npm directory in the `/client` directory.
- Creates an Express app in index.js.
- Formats the package.json file:
   - Adds the *node* and *npm* engines for deployment purposes.