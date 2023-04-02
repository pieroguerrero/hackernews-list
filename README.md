# Hacker News List
> [Hacker News](https://news.ycombinator.com/) interactive visualizer.
> 
> See the live demo [here](https://main--stalwart-hummingbird-037189.netlify.app/)

## Table of Contents
- [Hacker News List](#hacker-news-list)
  - [Table of Contents](#table-of-contents)
  - [General Information](#general-information)
  - [Requiriments](#requiriments)
    - [Base Functional Requiriments](#base-functional-requiriments)
    - [Bonus Functional Requiriments](#bonus-functional-requiriments)
    - [Non-functional Requiriments](#non-functional-requiriments)
  - [Technologies and Techniques used](#technologies-and-techniques-used)
    - [Testing:](#testing)
  - [Setup in Development mode](#setup-in-development-mode)
    - [Prerequisites](#prerequisites)
    - [Clone the project:](#clone-the-project)
  - [Project Status](#project-status)
  - [Room for Improvement](#room-for-improvement)


## General Information
- This is a Frontend application that retrive the latest news posted on the [YCombinator's Hacker News](https://news.ycombinator.com/) list. It also allows to save your favourite News locally.
- There are only two external javascript libraries used for this project: Axios to interact with APIs and [Date-fns](https://date-fns.org/) to format dates values. The rest is vanilla CSS and HTML.

## Requiriments

### Base Functional Requiriments
- The selected filter should persist on the local storage. ✔ **DONE**
- The favorited posts should persist on the local storage. ✔ **DONE**
- The web app is expected to work as a responsive web application. ✔ **DONE**
- When clicking on the row, a new tab should be open with the link of the post. ✔ **DONE**
- Clicking on the “like button” should not trigger the opening of the post URL link. ✔ **DONE**
- When hovering on the row, apply opacity to the entire row and its children (texts,
icons, like button, etc). ✔ **DONE**

### Bonus Functional Requiriments
- Implement unit testing. ✔ **DONE**
- Good use of Typescript. ✔ **DONE**
- Pagination as infinite scroll. ✔ **DONE**

### Non-functional Requiriments
- Use the latest version of the React framework. ✔ **FULFILLED**
- HTML/CSS only for building the UI components (no 3rd party components library). ✔ **FULFILLED**
- Styled components or CSS Stylesheets. ✔ **FULFILLED**
- Deployment of the web app on Netlify from your Git repository using the New Site
from Git workflow. ✔ **FULFILLED**

## Technologies and Techniques used
- TypeScript as programming language.
- Latest React.js version (v18.2.0) with Vite as web bundler.
- CSS styling was implemented with CSS Modules.
- The web responsiveness was implemented using CSS variables for the values to change based on the different Meria Query results.
- Axios was use to fetch the data from the database.
- ESLint was used for linting purposes.
- Error handling was implemented with a custom class that in the future can contain internal calls to a database or notifications to the support team.
- IntersectionObserver API was used to implement infinite scroll.
- The favourite News and the Framework selection are being stored in the local storage.
- To format the Date values the [date-fns](https://date-fns.org/) javascript library was used.
- The Project's folder structure is implemented with the CLEAN architecture, the layout is below:

    ```
    📦src
    ┣ 📂assets => Media files e.g: Pictures, Video, Fonts, etc.
    ┣ 📂components => Common components that are used in multiple parts of the project.
    ┣ 📂configs => Parameters used along the project.
    ┣ 📂dtos => Transfer objects used as middlewares when transfering data between different components or layers.
    ┣ 📂interfaces => Custom Typescript Interfaces and Types used across the project.
    ┣ 📂services => External services consumed by the application. They could be APIs or other type of interaction with the environment.
    ┣ 📂__mocks__ => Mock data or functions used in tests.
    ┣ 📂__tests__ => Test files.
    ┣ 📜App.tsx
    ┗ 📜main.tsx
    ```
### Testing:
- Jest and React Testing libary were used to perform Unit and integration testing.
- In the Frontend, Manual Unit testing and Automated Unit were performed and implemented for the main Componentes of the application. 
- While testing the Frontend, the project was run using the Chrome's Development Tools "Fast 3G" and "No Caching" options. So the app is ready for slow internet connections.

## Setup in Development mode

### Prerequisites
- [NodeJS 18+](https://nodejs.org/en)

### Clone the project:
In the folder you want to store the project, execute:
```
$ git clone https://github.com/pieroguerrero/hackernews-list.git
```
Then execute:
```
$ npm install
```
To run in dev mode execute:
```
$ npm run dev
```
By default Vite uses the port 5173.

## Project Status
Project is: _in progress_

## Room for Improvement
There are always room for improvement, in this project so far the things that can be improved are:
- Usage of a caching solution. This can be implemente with React Context API or with React Query.
- Code Splitting using React Lazy and Suspense.
- More unit and integration testing.
