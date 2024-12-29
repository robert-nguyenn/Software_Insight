// Toggle Menu
let navLinks = document.getElementById("navLinks");
function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}

// Auto-scrolling testimonials
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-col');
const totalTestimonials = testimonials.length;

function showNextTestimonial() {
  currentIndex = (currentIndex + 1) % totalTestimonials;
  document.querySelector('.testimonial-carousel').style.transform = `translateX(-${currentIndex * 100}%)`;
}
  
setInterval(showNextTestimonial, 3000); // Change testimonial every 3 seconds

function showDetails(skill) {
  const details = {
    html: {
      title: "HTML",
      content: `
        <h2>HTML</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Basic Tags (headings, paragraphs, links, images)</li>
          <li>Forms and Inputs</li>
          <li>Semantic HTML</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Personal Portfolio: Create a personal portfolio website showcasing your projects and skills.</li>
          <li>Simple Blog: Develop a simple blog with posts, comments, and user authentication.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank">MDN Web Docs</a></li>
          <li><a href="https://www.w3schools.com/html/" target="_blank">W3Schools</a></li>
        </ul>
      `
    },
    css: {
      title: "CSS",
      content: `
        <h2>CSS</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Selectors and Properties</li>
          <li>Box Model</li>
          <li>Flexbox and Grid</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Responsive Website: Build a responsive website that works on different screen sizes.</li>
          <li>CSS Art: Create artwork using only CSS.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank">MDN Web Docs</a></li>
          <li><a href="https://www.w3schools.com/css/" target="_blank">W3Schools</a></li>
        </ul>
      `
    },
    javascript: {
      title: "JavaScript",
      content: `
        <h2>JavaScript</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Variables and Data Types</li>
          <li>Functions and Scope</li>
          <li>DOM Manipulation</li>
          <li>Event Handling</li>
          <li>Asynchronous JavaScript (Promises, Async/Await)</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Interactive Web Page: Create a web page with interactive elements like forms and buttons.</li>
          <li>Simple Game: Develop a simple game like Tic-Tac-Toe or Snake.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">MDN Web Docs</a></li>
          <li><a href="https://www.w3schools.com/js/" target="_blank">W3Schools</a></li>
        </ul>
      `
    },
    git: {
      title: "Git",
      content: `
        <h2>Git</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Version Control Basics</li>
          <li>Branching and Merging</li>
          <li>Collaboration with Git</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Version Controlled Project: Set up a project with version control using Git, including branching and merging strategies.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://git-scm.com/doc" target="_blank">Git Documentation</a></li>
          <li><a href="https://www.atlassian.com/git/tutorials" target="_blank">Atlassian Git Tutorials</a></li>
        </ul>
      `
    },
    npm: {
      title: "NPM",
      content: `
        <h2>NPM</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Package Management</li>
          <li>Installing and Using Packages</li>
          <li>Creating and Publishing Packages</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Project with NPM Packages: Create a project that uses several NPM packages to add functionality.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://docs.npmjs.com/" target="_blank">NPM Documentation</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_npm.asp" target="_blank">W3Schools NPM</a></li>
        </ul>
      `
    },
    github: {
      title: "GitHub",
      content: `
        <h2>GitHub</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Repository Management</li>
          <li>Pull Requests</li>
          <li>GitHub Actions</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Collaborative Project on GitHub: Work on a collaborative project using GitHub, including managing issues and pull requests.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://docs.github.com/en" target="_blank">GitHub Documentation</a></li>
          <li><a href="https://guides.github.com/" target="_blank">GitHub Guides</a></li>
        </ul>
      `
    },
    typescript: {
      title: "TypeScript",
      content: `
        <h2>TypeScript</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Type Annotations</li>
          <li>Interfaces and Classes</li>
          <li>Generics</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>TypeScript Project: Convert a JavaScript project to TypeScript to understand the benefits of static typing.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://www.typescriptlang.org/docs/" target="_blank">TypeScript Documentation</a></li>
          <li><a href="https://www.w3schools.com/typescript/" target="_blank">W3Schools TypeScript</a></li>
        </ul>
      `
    },
    react: {
      title: "React",
      content: `
        <h2>React</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Introduction to React</li>
          <li>JSX Syntax</li>
          <li>Components and Props</li>
          <li>State and Lifecycle</li>
          <li>Handling Events</li>
          <li>Conditional Rendering</li>
          <li>Lists and Keys</li>
          <li>Forms</li>
          <li>Lifting State Up</li>
          <li>Composition vs Inheritance</li>
          <li>React Router for Navigation</li>
          <li>Hooks (useState, useEffect, etc.)</li>
          <li>Context API for State Management</li>
          <li>Testing React Components</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Todo App: Build a simple todo application to manage tasks.</li>
          <li>Weather App: Create a weather application that fetches data from an API and displays it.</li>
          <li>Blog Platform: Develop a blog platform with user authentication, post creation, and comments.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://reactjs.org/docs/getting-started.html" target="_blank">React Documentation</a></li>
          <li><a href="https://www.w3schools.com/react/" target="_blank">W3Schools React</a></li>
        </ul>
      `
    },
    sass: {
      title: "SASS",
      content: `
        <h2>SASS</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Variables and Nesting</li>
          <li>Mixins and Functions</li>
          <li>Partials and Imports</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>SASS Styled Project: Create a project using SASS to manage your CSS more efficiently.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://sass-lang.com/guide" target="_blank">SASS Documentation</a></li>
          <li><a href="https://www.w3schools.com/sass/" target="_blank">W3Schools SASS</a></li>
        </ul>
      `
    },
    tailwind: {
      title: "Tailwind CSS",
      content: `
        <h2>Tailwind CSS</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Utility-First CSS</li>
          <li>Responsive Design</li>
          <li>Customizing Tailwind</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Tailwind Styled Project: Build a project using Tailwind CSS for styling.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://tailwindcss.com/docs" target="_blank">Tailwind CSS Documentation</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_tailwindcss.asp" target="_blank">W3Schools Tailwind CSS</a></li>
        </ul>
      `
    },
    nodejs: {
      title: "Node.js",
      content: `
        <h2>Node.js</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Introduction to Node.js</li>
          <li>Setting up a Node.js environment</li>
          <li>Understanding the Event Loop</li>
          <li>Working with Modules</li>
          <li>File System Operations</li>
          <li>Creating a Web Server</li>
          <li>Using Express.js for Web Applications</li>
          <li>Middleware and Routing</li>
          <li>Handling Requests and Responses</li>
          <li>Connecting to a Database (e.g., MongoDB, PostgreSQL)</li>
          <li>Authentication and Authorization</li>
          <li>Real-time Communication with WebSockets</li>
          <li>Error Handling and Debugging</li>
          <li>Deploying Node.js Applications</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Simple API: Build a RESTful API with CRUD operations using Express.js and connect it to a database.</li>
          <li>Real-time Chat Application: Create a chat application using WebSockets for real-time communication.</li>
          <li>Task Manager: Develop a task management application with user authentication and task CRUD operations.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://nodejs.org/en/docs/" target="_blank">Node.js Documentation</a></li>
          <li><a href="https://www.w3schools.com/nodejs/" target="_blank">W3Schools Node.js</a></li>
        </ul>
      `
    },
    postgresql: {
      title: "PostgreSQL",
      content: `
        <h2>PostgreSQL</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Database Design</li>
          <li>SQL Queries</li>
          <li>Advanced SQL</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>PostgreSQL Database: Design and implement a PostgreSQL database for a sample application.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://www.postgresql.org/docs/" target="_blank">PostgreSQL Documentation</a></li>
          <li><a href="https://www.w3schools.com/sql/sql_intro.asp" target="_blank">W3Schools SQL</a></li>
        </ul>
      `
    },
    restful: {
      title: "RESTful APIs",
      content: `
        <h2>RESTful APIs</h2>
        <p>Things to learn:</p>
        <ul>
          <li>API Design Principles</li>
          <li>CRUD Operations</li>
          <li>Authentication and Authorization</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>RESTful API Project: Build a RESTful API with authentication and CRUD operations.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://restfulapi.net/" target="_blank">RESTful API Guide</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_restful_api.asp" target="_blank">W3Schools RESTful API</a></li>
        </ul>
      `
    },
    jwt: {
      title: "JWT Auth",
      content: `
        <h2>JWT Auth</h2>
        <p>Things to learn:</p>
        <ul>
          <li>JWT Basics</li>
          <li>Token Generation</li>
          <li>Token Validation</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>JWT Auth Project: Implement JWT authentication in a web application.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://jwt.io/introduction/" target="_blank">JWT Introduction</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_jwt.asp" target="_blank">W3Schools JWT</a></li>
        </ul>
      `
    },
    redis: {
      title: "Redis",
      content: `
        <h2>Redis</h2>
        <p>Things to learn:</p>
        <ul>
          <li>In-Memory Data Structure</li>
          <li>Caching Strategies</li>
          <li>Redis Commands</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Redis Caching Project: Implement caching in a web application using Redis.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://redis.io/documentation" target="_blank">Redis Documentation</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_redis.asp" target="_blank">W3Schools Redis</a></li>
        </ul>
      `
    },
    linux: {
      title: "Linux Basics",
      content: `
        <h2>Linux Basics</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Command Line Basics</li>
          <li>File System Navigation</li>
          <li>Shell Scripting</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Linux Shell Script: Write a shell script to automate a task on a Linux system.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://linuxjourney.com/" target="_blank">Linux Journey</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_linux.asp" target="_blank">W3Schools Linux</a></li>
        </ul>
      `
    },
    aws: {
      title: "AWS",
      content: `
        <h2>AWS</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Cloud Computing Basics</li>
          <li>AWS Services</li>
          <li>Deployment and Scaling</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>AWS Deployment Project: Deploy a web application on AWS using services like EC2 and S3.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://aws.amazon.com/documentation/" target="_blank">AWS Documentation</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_aws.asp" target="_blank">W3Schools AWS</a></li>
        </ul>
      `
    },
    testing: {
      title: "Automated Testing",
      content: `
        <h2>Automated Testing</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Unit Testing</li>
          <li>Integration Testing</li>
          <li>End-to-End Testing</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Testing Suite: Create a suite of automated tests for a web application.</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://www.selenium.dev/documentation/en/" target="_blank">Selenium Documentation</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_software_testing.asp" target="_blank">W3Schools Testing</a></li>
        </ul>
      `
    },
    nextjs: {
      title: "Next.js",
      content: `
        <h2>Next.js</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Server-Side Rendering</li>
          <li>Static Site Generation</li>
          <li>API Routes</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>Next.js Application</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://nextjs.org/docs" target="_blank">Next.js Documentation</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_nextjs.asp" target="_blank">W3Schools Next.js</a></li>
        </ul>
      `
    },
    reactnative: {
      title: "React Native",
      content: `
        <h2>React Native</h2>
        <p>Things to learn:</p>
        <ul>
          <li>Mobile Development Basics</li>
          <li>React Native Components</li>
          <li>Navigation and State Management</li>
        </ul>
        <p>Projects:</p>
        <ul>
          <li>React Native App</li>
        </ul>
        <p>Resources:</p>
        <ul>
          <li><a href="https://reactnative.dev/docs/getting-started" target="_blank">React Native Documentation</a></li>
          <li><a href="https://www.w3schools.com/whatis/whatis_react_native.asp" target="_blank">W3Schools React Native</a></li>
        </ul>
      `
    }
  };

  document.getElementById('modal-body').innerHTML = details[skill].content;
  document.getElementById('modal').style.display = "block";
}

function closeModal() {
  document.getElementById('modal').style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust this value as needed
  });

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const tipContent = document.querySelector('.tip-content');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, {
    threshold: 0.1 // Adjust this value as needed
  });

  observer.observe(tipContent);
});

document.addEventListener('DOMContentLoaded', function() {
  const internshipList = document.getElementById('internship-list');

  // Static list of internship opportunities
  const internships = [
    // US Companies
    { title: 'Software Engineering Intern', company: 'Google', location: 'Mountain View, CA, USA', link: 'https://careers.google.com/jobs/results/' },
    { title: 'Data Science Intern', company: 'Facebook', location: 'Menlo Park, CA, USA', link: 'https://www.facebookcareers.com/jobs/' },
    { title: 'Product Management Intern', company: 'Apple', location: 'Cupertino, CA, USA', link: 'https://www.apple.com/careers/us/' },
    { title: 'Software Engineering Intern', company: 'Microsoft', location: 'Redmond, WA, USA', link: 'https://careers.microsoft.com/us/en' },
    { title: 'Software Engineering Intern', company: 'Amazon', location: 'Seattle, WA, USA', link: 'https://www.amazon.jobs/en/' },
    { title: 'Software Engineering Intern', company: 'Intel', location: 'Santa Clara, CA, USA', link: 'https://jobs.intel.com/' },
    { title: 'Software Engineering Intern', company: 'IBM', location: 'Armonk, NY, USA', link: 'https://www.ibm.com/employment/' },
    { title: 'Software Engineering Intern', company: 'Oracle', location: 'Redwood City, CA, USA', link: 'https://www.oracle.com/corporate/careers/' },
    { title: 'Software Engineering Intern', company: 'Cisco', location: 'San Jose, CA, USA', link: 'https://jobs.cisco.com/' },
    { title: 'Software Engineering Intern', company: 'Tesla', location: 'Palo Alto, CA, USA', link: 'https://www.tesla.com/careers' },
    { title: 'Software Engineering Intern', company: 'Adobe', location: 'San Jose, CA, USA', link: 'https://adobe.wd5.myworkdayjobs.com/en-US/external_experienced' },
    { title: 'Software Engineering Intern', company: 'Salesforce', location: 'San Francisco, CA, USA', link: 'https://www.salesforce.com/company/careers/' },
    { title: 'Software Engineering Intern', company: 'Uber', location: 'San Francisco, CA, USA', link: 'https://www.uber.com/us/en/careers/' },
    { title: 'Software Engineering Intern', company: 'Lyft', location: 'San Francisco, CA, USA', link: 'https://www.lyft.com/careers' },
    { title: 'Software Engineering Intern', company: 'Airbnb', location: 'San Francisco, CA, USA', link: 'https://careers.airbnb.com/' },
    { title: 'Software Engineering Intern', company: 'Twitter', location: 'San Francisco, CA, USA', link: 'https://careers.twitter.com/en.html' },
    { title: 'Software Engineering Intern', company: 'Snap Inc.', location: 'Santa Monica, CA, USA', link: 'https://www.snap.com/en-US/jobs' },
    { title: 'Software Engineering Intern', company: 'Pinterest', location: 'San Francisco, CA, USA', link: 'https://www.pinterestcareers.com/' },
    { title: 'Software Engineering Intern', company: 'LinkedIn', location: 'Sunnyvale, CA, USA', link: 'https://careers.linkedin.com/' },
    { title: 'Software Engineering Intern', company: 'Netflix', location: 'Los Gatos, CA, USA', link: 'https://jobs.netflix.com/' },
    { title: 'Software Engineering Intern', company: 'Dropbox', location: 'San Francisco, CA, USA', link: 'https://www.dropbox.com/jobs' },
    { title: 'Software Engineering Intern', company: 'Slack', location: 'San Francisco, CA, USA', link: 'https://slack.com/careers' },
    { title: 'Software Engineering Intern', company: 'Square', location: 'San Francisco, CA, USA', link: 'https://squareup.com/us/en/careers' },
    { title: 'Software Engineering Intern', company: 'Stripe', location: 'San Francisco, CA, USA', link: 'https://stripe.com/jobs' },
    { title: 'Software Engineering Intern', company: 'Palantir', location: 'Palo Alto, CA, USA', link: 'https://www.palantir.com/careers/' },
    { title: 'Software Engineering Intern', company: 'Reddit', location: 'San Francisco, CA, USA', link: 'https://www.redditinc.com/careers' },
    { title: 'Software Engineering Intern', company: 'GitHub', location: 'San Francisco, CA, USA', link: 'https://github.com/about/careers' },
    { title: 'Software Engineering Intern', company: 'Atlassian', location: 'San Francisco, CA, USA', link: 'https://www.atlassian.com/company/careers' },
    { title: 'Software Engineering Intern', company: 'Zoom', location: 'San Jose, CA, USA', link: 'https://zoom.us/careers' },
    { title: 'Software Engineering Intern', company: 'Qualcomm', location: 'San Diego, CA, USA', link: 'https://www.qualcomm.com/company/careers' },
    { title: 'Software Engineering Intern', company: 'NVIDIA', location: 'Santa Clara, CA, USA', link: 'https://www.nvidia.com/en-us/about-nvidia/careers/' },
    { title: 'Software Engineering Intern', company: 'HP', location: 'Palo Alto, CA, USA', link: 'https://jobs.hp.com/' },
    { title: 'Software Engineering Intern', company: 'Dell', location: 'Round Rock, TX, USA', link: 'https://jobs.dell.com/' },
    { title: 'Software Engineering Intern', company: 'AMD', location: 'Santa Clara, CA, USA', link: 'https://www.amd.com/en/corporate/careers' },
    { title: 'Software Engineering Intern', company: 'Western Digital', location: 'San Jose, CA, USA', link: 'https://jobs.westerndigital.com/' },
    { title: 'Software Engineering Intern', company: 'Seagate', location: 'Cupertino, CA, USA', link: 'https://www.seagate.com/jobs/' },
    { title: 'Software Engineering Intern', company: 'Broadcom', location: 'San Jose, CA, USA', link: 'https://www.broadcom.com/company/careers' },
    { title: 'Software Engineering Intern', company: 'Texas Instruments', location: 'Dallas, TX, USA', link: 'https://careers.ti.com/' },
    { title: 'Software Engineering Intern', company: 'Micron', location: 'Boise, ID, USA', link: 'https://www.micron.com/about/careers' },

    // Vietnam Companies
    { title: 'Software Engineering Intern', company: 'VinGroup', location: 'Hanoi, Vietnam', link: 'https://tuyendung.vingroup.net/' },
    { title: 'Software Engineering Intern', company: 'FPT Software', location: 'Hanoi, Vietnam', link: 'https://career.fpt-software.com/' },
    { title: 'Software Engineering Intern', company: 'VNG Corporation', location: 'Ho Chi Minh City, Vietnam', link: 'https://career.vng.com.vn/' },
    { title: 'Software Engineering Intern', company: 'TMA Solutions', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.tmasolutions.com/careers/' },
    { title: 'Software Engineering Intern', company: 'KMS Technology', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.kms-technology.com/careers/' },
    { title: 'Software Engineering Intern', company: 'Axon Active', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.axonactive.com/careers/' },
    { title: 'Software Engineering Intern', company: 'NashTech', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.nashtechglobal.com/careers/' },
    { title: 'Software Engineering Intern', company: 'Harvey Nash', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.harveynash.vn/careers/' },
    { title: 'Software Engineering Intern', company: 'DEK Technologies', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.dektech.com.au/careers/' },
    { title: 'Software Engineering Intern', company: 'LogiGear', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.logigear.com/careers/' },
    { title: 'Software Engineering Intern', company: 'Tiki', location: 'Ho Chi Minh City, Vietnam', link: 'https://tuyendung.tiki.vn/' },
    { title: 'Software Engineering Intern', company: 'Shopee', location: 'Ho Chi Minh City, Vietnam', link: 'https://careers.shopee.vn/' },
    { title: 'Software Engineering Intern', company: 'Grab', location: 'Ho Chi Minh City, Vietnam', link: 'https://grab.careers/' },
    { title: 'Software Engineering Intern', company: 'Lazada', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.lazada.com/en/careers/' },
    { title: 'Software Engineering Intern', company: 'Sendo', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.sendo.vn/tuyen-dung/' },
    { title: 'Software Engineering Intern', company: 'Viettel', location: 'Hanoi, Vietnam', link: 'https://tuyendung.viettel.vn/' },
    { title: 'Software Engineering Intern', company: 'VNPT', location: 'Hanoi, Vietnam', link: 'https://www.vnpt.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'Mobifone', location: 'Hanoi, Vietnam', link: 'https://www.mobifone.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'CMC Corporation', location: 'Hanoi, Vietnam', link: 'https://www.cmc.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'FPT Telecom', location: 'Hanoi, Vietnam', link: 'https://www.fpt.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'Vietcombank', location: 'Hanoi, Vietnam', link: 'https://www.vietcombank.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'Techcombank', location: 'Hanoi, Vietnam', link: 'https://www.techcombank.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'VPBank', location: 'Hanoi, Vietnam', link: 'https://www.vpbank.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'VIB', location: 'Hanoi, Vietnam', link: 'https://www.vib.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'ACB', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.acb.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'Sacombank', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.sacombank.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'HDBank', location: 'Ho Chi Minh City, Vietnam', link: 'https://www.hdbank.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'VietinBank', location: 'Hanoi, Vietnam', link: 'https://www.vietinbank.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'BIDV', location: 'Hanoi, Vietnam', link: 'https://www.bidv.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'MB Bank', location: 'Hanoi, Vietnam', link: 'https://www.mbbank.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'Agribank', location: 'Hanoi, Vietnam', link: 'https://www.agribank.com.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'Viettel Digital', location: 'Hanoi, Vietnam', link: 'https://digital.viettel.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'VNPay', location: 'Hanoi, Vietnam', link: 'https://www.vnpay.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'MoMo', location: 'Ho Chi Minh City, Vietnam', link: 'https://momo.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'ZaloPay', location: 'Ho Chi Minh City, Vietnam', link: 'https://zalopay.vn/tuyen-dung' },
    { title: 'Software Engineering Intern', company: 'Viettel Solutions', location: 'Hanoi, Vietnam', link: 'https://solutions.viettel.vn/tuyen-dung' }
  ];

  // Display the internships
  internships.forEach(internship => {
    const internshipItem = document.createElement('div');
    internshipItem.classList.add('internship-item');
    internshipItem.innerHTML = `
      <h3>${internship.title}</h3>
      <p>${internship.company}</p>
      <p>${internship.location}</p>
      <a href="${internship.link}" target="_blank">Apply Now</a>
    `;
    internshipList.appendChild(internshipItem);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const heading = document.querySelector('.animated-heading');
  const text = heading.textContent;
  heading.innerHTML = '';

  text.split('').forEach(letter => {
    const span = document.createElement('span');
    span.textContent = letter;
    heading.appendChild(span);
  });
});