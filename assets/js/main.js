/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
// var typingEffect = new Typed(".typedText",{
//   strings : ["My name is Shelby!","I am a senior at LSU.", "My major is Computer Science."],
//   loop : true,
//   typeSpeed : 100, 
//   backSpeed : 80,
//   backDelay : 2000
// })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
// sr.reveal('.featured-text-card',{})
// sr.reveal('.featured-name',{delay: 100})
// sr.reveal('.featured-text-info',{delay: 200})
// sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.about-img',{delay: 300})


sr.reveal('.bar',{delay: 300})
sr.reveal('.spoken-content',{delay: 300})


sr.reveal('.involvement-container',{delay: 300})
/* -- PROJECT BOX -- */
sr.reveal('.project-container',{interval: 100})

/* -- EXPERIENCE BOX -- */
sr.reveal('.experience-text-box',{interval: 200})

/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT Education & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.education-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})

// Coursework
document.addEventListener('DOMContentLoaded', () => {
  const categories = {
      'Computer Science': [
          'Data Structures & Algorithms',
          'Programming Languages',
          'Object Oriented Design',
          'Computer Organization',
          'Databases',
          'Operating Systems', 'Software System Development',
          'Data Science & Analytics'
      ],
      'Business': [
          'Marketing Principles',
          'Management Principles',
          'Economics Principles',
          'Survey of Accounting',
          'Business Finance',
          'Information Systems & Analytics'
      ],
      'Electives/Other': [
          'Public Speaking',
          'Calculus',
          'Differential Equations',
          'Linear Algebra', 'Statistics',
          'Discrete Math', 'Numerical Methods',
          'User Interface Design', 'Digital Media'
      ]
  };

  const educationBox = document.querySelector('.education-box');
  const educationList = educationBox.querySelector('.education-list');
  const buttons = educationBox.querySelectorAll('.education-category button');

  function updateEducationList(category) {
      educationList.classList.remove('show'); // Hide the list
      setTimeout(() => {
          educationList.innerHTML = ''; // Clear existing list
          categories[category].forEach(item => {
              const span = document.createElement('span');
              span.textContent = item;
              educationList.appendChild(span);
          });
          educationList.classList.add('show'); // Show the updated list
      }, 500); // Match the transition duration
  }

  function setActiveButton(category) {
      buttons.forEach(button => {
          if (button.textContent === category) {
              button.classList.add('active');
          } else {
              button.classList.remove('active');
          }
      });
  }

  // Initially display Computer Science category and set it as active
  updateEducationList('Computer Science');
  setActiveButton('Computer Science');

  // Add event listeners to category buttons
  buttons.forEach(button => {
      button.addEventListener('click', () => {
          const category = button.textContent;
          updateEducationList(category);
          setActiveButton(category);
      });
  });
});





/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)


document.addEventListener('DOMContentLoaded', function() {
  // Select all the list items in the .bar list
  const barItems = document.querySelectorAll('.bar li');

  // Event listener for each bar item
  barItems.forEach(function(item) {
      item.addEventListener('click', function() {
          // Remove the 'active' class from all items
          barItems.forEach(function(barItem) {
              barItem.classList.remove('active');
          });

          // Add 'active' class to the clicked item
          item.classList.add('active');

          // Get video source and description from the clicked item's data attributes
          const videoSource = item.getAttribute('data-video');
          const description = item.getAttribute('data-description');

          // Update the video player with the new video source
          const videoElement = document.getElementById('spokenVideo');
          const videoSourceElement = document.getElementById('videoSource');
          videoSourceElement.src = videoSource;
          videoElement.load(); // Reload the video player with the new source

          // Update the description text
          const descriptionElement = document.getElementById('spokenDescription');
          descriptionElement.textContent = description;
      });
  });
});

