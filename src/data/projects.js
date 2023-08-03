import travelImg from "../assets/travelReact.png";
import travelImg2 from "../assets/travelReact2.png";
import travelImg3 from "../assets/travelReact3.png";
import gameImg from "../assets/geography-arcade.png";
import gameImg2 from "../assets/geography-arcade2.png";
import gameImg3 from "../assets/geography-arcade3.png";
import innerImg from "../assets/inner-journey.png";
import innerImg2 from "../assets/inner-journey2.png";
import innerImg3 from "../assets/inner-journey3.png";
import mulanImg from "../assets/mulan-website.png";
import mulanImg2 from "../assets/mulan-website2.png";
import mulanImg3 from "../assets/mulan-website3.png";

const projects = [
  {
    title: "Travel agency website",
    screenshots: [travelImg, travelImg2, travelImg3],
    descriptionShort:
      "A project where we recreated a single page application based on a given design file. Coded in React and styled with CSS, incorporating React Router for navigation.",
    descriptionLong:
      "In this project me and my group got to create our very first single page application using React. We got a Figma file consisting of the design of the first page, however no function or other pages were specified so we had a lot of freedom to use our imagination. \n I was responsible for React Router and the clickable components of countries, cities and hotels. I also did the design for the individual pages that you reach when you clock aruond, based on the design of the home page. I created my own dummy data to be able to expand the page and make it look better, that took a lot of time but was worth it for the final result. \n This project was my first encounter with React and the learning curve was steep (and sometimes hard to climb). I got the chance to learn the logic of React, React Router, passing props, filtering etc. I also got to deepen my CSS-knowledge and started seeing progress in my learning. It was a great opportunity to take a well executed design and add every possible function we could think of, a really fun project. I ran out of time but I had plans to incorporate APIs and fetching info of the countries and cities (like temperature, current time, currency exchange rates etc), and displaying them on the individual pages. Next time!",
    diReact: true,
    diJavascript: false,
    diCss3: true,
    diNodejs: false,
    diHtml5: false,
    siReactrouter: true,
    projectURL: "https://gentle-florentine-40a92e.netlify.app/",
    projectGit: "https://github.com/MalinWallander/TravelPage-React",
  },
  {
    title: "Game arcade",
    screenshots: [gameImg, gameImg2, gameImg3],
    descriptionShort:
      "A project where we created retro styled geography related games using JavaScript, HTML and CSS. Calling real time data (like temperature) with APIs. I created the snake-game, guess the weather-game and bucket list.",
    descriptionLong:
      "This was my first project that involved JavaScript, so exciting to be able to add some real functionality! \n The brief was to create a game using Javascript. To be able to do as many different things as possible my group decided to create an arcade with smaller games that covered each and every thing we learned during the course. We chose a retro theme since the games in themselves felt basic but timeless. \n I did the bucketlist with local storage, the snake game and the gueass the weather game. \n I learned so much during this course! The magic of fetching data with APIs, creating moving and controllable objects on a screen and seeing inputted data stay even efter refreshing, my mind was blown! Since we worked a lot individually on our own games I felt like a grew as a developer, I was in control of every line of code and I think that was good for me in the beginning, I feel much more confident pair/mob programming since I got to learn the basic in my own way and pace. \n There are a lot of improvements to be made for sure (like accessibility and performance) and I would probably do a neater job today but I like the comments troughout the code. I would probably create a high score for the snake game and count points in the guess the weather game, hindsight right? \n One more lesson I learnt is that snake is a higly addictive game and you can easily spend more time playing it than coding in a day.",
    diReact: false,
    diJavascript: true,
    diCss3: true,
    diNodejs: false,
    diHtml5: true,
    siReactrouter: false,
    projectURL: "https://shiny-maamoul-d09a01.netlify.app/",
    projectGit: "https://github.com/MalinWallander/Game-group-2",
  },
  {
    title: "Client project",
    screenshots: [innerImg, innerImg2, innerImg3],
    descriptionShort:
      "A project where we worked with UX-design students who made the design and we implemented in React. React router was used to create navigation and libraries for image-carousels.",
    descriptionLong:
      "My first coding project with a real life client! \n My group of fellow developers were paired with a group of UX-students. They were responsible for designing, testing and user experience while we were responsible for implementing the finished design in code. Our client was a company that organized events and retreats and wanted a brens new website. Quite a big job for a course spanning 4 weeks. \n I learnt a lot from this project, not only regarding coding but also the important lesson of working in a team that consisted of different competences. To learn how to communicate within a team that come from different viewpoints but still find a common goal and way of working was really great and humbling. \n While maybe not my aestethics it was fun to make someone else's vison come to life using code. To be a vessel (and having the competence) to create a functioning application was fun! I got to learn more about React Router, and using libraries to create image carousels. I also got to practice a lot of CSS. \n In this course we also focused a lot on Scrum-practices, a really fun way of realting to your team. I learnt how much a check in or retro can streamline a day's/week's work. I look forward to implementing my Scrum-knowledge in the future. ",
    diReact: true,
    diJavascript: false,
    diCss3: true,
    diNodejs: false,
    diHtml5: false,
    siReactrouter: true,
    projectURL: "https://taupe-lily-5236d2.netlify.app/",
    projectGit:
      "https://github.com/Code-Collaborate-FED-UX-Hyper-Island/inner-journeys-collab",
  },
  {
    title: "Mulan 90s website",
    screenshots: [mulanImg, mulanImg2, mulanImg3],
    descriptionShort:
      "My first ever coding project! It is all done in HTML and CSS. While not being the most sleek or complex, it shows where I began. And with a theme of 90s website, it was the perfect excuse to make it as ugly as possible!",
    descriptionLong:
      "This is my first ever interaction with coding. The course taught us HTML and CSS and the brief was to create a 90s website about our favourite thing from the 90s. It is not pretty or complex (or impressive) but this project means a lot to me simply because it was the first time I created something using code. I lernt a lot about animations, structure of a good HTML document and just how much you can accomplish with CSS. Would I do it differently today? Absolutely. Do I return to this website just to see how far I've come? Yes. I'm very glad absout all the mistakes and clumpsy lines because in them I see my progress.",
    diReact: false,
    diJavascript: false,
    diCss3: true,
    diNodejs: false,
    diHtml5: true,
    siReactrouter: false,
    projectURL: "https://mellow-ganache-a272bd.netlify.app/",
    projectGit: "https://github.com/MalinWallander/Mulan-website",
  },
];

export default projects;
