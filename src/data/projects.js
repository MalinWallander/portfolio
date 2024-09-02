import travelImg from "../assets/travelReact.png";
import travelImg2 from "../assets/travelReact2.png";
import travelImg3 from "../assets/travelReact3.png";
import gameImg from "../assets/geography-arcade.png";
import gameImg2 from "../assets/geography-arcade2.png";
import gameImg3 from "../assets/geography-arcade3.png";
import mulanImg from "../assets/mulan-website.png";
import mulanImg2 from "../assets/mulan-website2.png";
import mulanImg3 from "../assets/mulan-website3.png";
import sarcomaImg1 from "../assets/sarcomaImg1.png";
import sarcomaImg2 from "../assets/sarcomaImg2.png";
import sarcomaImg3 from "../assets/sarcomaImg3.png";
import sarcomaDbImg1 from "../assets/sarcomaDbImg1.png";
import sarcomaDbImg2 from "../assets/sarcomaDbImg2.png";
import sarcomaDbImg3 from "../assets/sarcomaDbImg3.png";
import sarcomaDbImg4 from "../assets/sarcomaDbImg4.png";

const projects = [
  {
    title: "Sarcoma research group website",
    screenshots: [sarcomaImg1, sarcomaImg2, sarcomaImg3],
    descriptionShort:
      "One of my latest project where I designed and created a website for a research group using React, Typescript CSS, React Router, ThreeJS and Figma.",
    descriptionLong:
      "A website that I created as my individual project in school. It's based upon a research groups work, made to inform both patients and prospective collaborators. I got to improvise with 3D-technology, more in depth exploring of React and code in a new language: Typescript. I was responsible for everything from designing to coding and learnt a lot of UI/UX and hard skills such as ThreeJS and the Google maps API which was new to me. I got to work for a client that provided information they wanted to be displayed but I has creative freedom as to how that information was displayed. I learnt a lot and loved seeing a proper website grow and develop. ",
    diReact: true,
    diJavascript: false,
    diCss3: true,
    diNodejs: false,
    diHtml5: false,
    siReactrouter: true,
    BsBadge3D: true,
    FiFigma: true,
    projectURL: "https://shiny-maamoul-d09a01.netlify.app/",
    projectGit: "https://github.com/MalinWallander/Game-group-2",
  },
  {
    title: "Sarcoma research group internal patient data storage",
    screenshots: [sarcomaDbImg1, sarcomaDbImg2, sarcomaDbImg3, sarcomaDbImg4],
    descriptionShort:
      "My internship that gave me the opportunity to deep dive into data storage, data manipulation and proper backend work. ",
    descriptionLong:
      "During my internship I got to create an entire sytem for patient data storage to make information more accessible and easier to handle. I procured a lot of hard skills during my six months working on this project, some new and some deeping my knowledge of tech I had used before. Some of the new skills I learnt was Java, RegEx, incorporating libraries, form input, database incorporation and security. I got to practice and anchor my knowledge in Typescript, React, CSS and Docker. I got help setting up a server and majority of back end, while I did the design, UI/UX, planning and front end coding. ",
    diReact: true,
    diJavascript: false,
    diCss3: true,
    diNodejs: false,
    diHtml5: false,
    siReactrouter: true,
    BsBadge3D: true,
    FiFigma: true,
    projectURL: "https://shiny-maamoul-d09a01.netlify.app/",
    projectGit: "https://github.com/MalinWallander/Game-group-2",
  },
  {
    title: "Travel agency website",
    screenshots: [travelImg, travelImg2, travelImg3],
    descriptionShort:
      "A project where we recreated a single page application based on a given design file. Coded in React and styled with CSS, incorporating React Router for navigation.",
    descriptionLong:
      "In this project me and my group got to create our very first single page application using React. We got a Figma file consisting of the design of the first page, however no function or other pages were specified so we had a lot of freedom to use our imagination. I was responsible for React Router and the clickable components of countries, cities and hotels. I also did the design for the individual pages that you reach when you clock aruond, based on the design of the home page. I created my own dummy data to be able to expand the page and make it look better, that took a lot of time but was worth it for the final result. This project was my first encounter with React and the learning curve was steep (and sometimes hard to climb). I got the chance to learn the logic of React, React Router, passing props, filtering etc. I also got to deepen my CSS-knowledge and started seeing progress in my learning.",
    diReact: true,
    diJavascript: false,
    diCss3: true,
    diNodejs: false,
    diHtml5: false,
    siReactrouter: true,
    BsBadge3D: false,
    FiFigma: true,
    projectURL: "https://gentle-florentine-40a92e.netlify.app/",
    projectGit: "https://github.com/MalinWallander/TravelPage-React",
  },
  {
    title: "Game arcade",
    screenshots: [gameImg, gameImg2, gameImg3],
    descriptionShort:
      "A project where we created retro styled geography related games using JavaScript, HTML and CSS. Calling real time data (like temperature) with APIs. I created the snake-game, guess the weather-game and bucket list.",
    descriptionLong:
      "This was my first project that involved JavaScript, so exciting to be able to add some real functionality! The brief was to create a game using Javascript. To be able to do as many different things as possible my group decided to create an arcade with smaller games that covered each and every thing we learned during the course. I did the bucketlist with local storage, the snake game and the gueass the weather game. I learned so much during this course! The magic of fetching data with APIs, creating moving and controllable objects on a screen and seeing inputted data stay even efter refreshing, my mind was blown! Since we worked a lot individually on our own games I felt like a grew as a developer, I was in control of every line of code and I think that was good for me in the beginning, I feel much more confident pair/mob programming since I got to learn the basic in my own way and pace. There are a lot of improvements to be made for sure (like accessibility and performance) and I would probably do a neater job today but I like the comments troughout the code. One more lesson I learnt is that snake is a higly addictive game and you can easily spend more time playing it than coding in a day.",
    diReact: false,
    diJavascript: true,
    diCss3: true,
    diNodejs: false,
    diHtml5: true,
    siReactrouter: false,
    BsBadge3D: false,
    FiFigma: false,
    projectURL: "https://shiny-maamoul-d09a01.netlify.app/",
    projectGit: "https://github.com/MalinWallander/Game-group-2",
  },
  {
    title: "Mulan 90s website",
    screenshots: [mulanImg, mulanImg2, mulanImg3],
    descriptionShort:
      "My first ever coding project! It is all done in HTML and CSS. While not being the most sleek or complex, it shows where I began. And with a theme of 90s website, it was the perfect excuse to make it as ugly as possible!",
    descriptionLong:
      "This is my first ever interaction with coding. The course taught us HTML and CSS and the brief was to create a 90s website about our favourite thing from the 90s. It is not pretty or complex (or impressive) but this project means a lot to me simply because it was the first time I created something using code. I lernt a lot about animations, structure of a good HTML document and just how much you can accomplish with CSS. Would I do it differently today? Absolutely. Do I return to this website just to see how far I've come? Yes. I'm thankful of all the mistakes and clumpsy lines because in them I see my progress.",
    diReact: false,
    diJavascript: false,
    diCss3: true,
    diNodejs: false,
    diHtml5: true,
    siReactrouter: false,
    BsBadge3D: false,
    FiFigma: false,
    projectURL: "https://mellow-ganache-a272bd.netlify.app/",
    projectGit: "https://github.com/MalinWallander/Mulan-website",
  },
];

export default projects;
