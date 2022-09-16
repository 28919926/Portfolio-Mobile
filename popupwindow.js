const projects = [
  {
    titile: 'Multi-Post Stories Gain+Glory',
    language: ['Ruby on Rails', 'CSS', 'JavScript', 'html'],
    button: 'See Project',
  },

  {
    titile: 'Multi-Post Stories Gain+Glory',
    language: ['Ruby on Rails', 'CSS', 'JavScript', 'html'],
    button: 'See Project',
  },

  {
    titile: 'Multi-Post Stories Gain+Glory',
    language: ['Ruby on Rails', 'CSS', 'JavScript', 'html'],
    button: 'See Project',
  },

  {
    titile: 'Multi-Post Stories Gain+Glory',
    language: ['Ruby on Rails', 'CSS', 'JavScript', 'html'],
    button: 'See Project',
  },

  {
    titile: 'Multi-Post Stories Gain+Glory',
    language: ['Ruby on Rails', 'CSS', 'JavScript', 'html'],
    button: 'See Project',
  },

  {
    titile: 'Multi-Post Stories Gain+Glory',
    language: ['Ruby on Rails', 'CSS', 'JavScript', 'html'],
    button: 'See Project',
  },
];

const collection = document.querySelector('.card-work-row');
projects.forEach((cards) => {
  collection.innerHTML += `
  <div class="card" id="demo-card">
  <div class="card-text">
      <h3 class="card-title">${cards.titile}</h3>
      <ul class="tags">
        <li class="ruby">${cards.language[0]}</li>
        <li class="css">${cards.language[1]}</li>
        <li class="javscript">${cards.language[2]}</li>
        <li class="html">${cards.language[3]}</li>
      </ul>
      <button type="button" onclick="popupHTML(${cards})">${cards.button}</button>
  </div>
</div>`;
});

const worksInfo = [
  {
    projects: 1,
    gridClass: 'w1',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './images/popupdesk.png',
    imageMobile: './images/popupmobile.png',
    githubIcon: './images/Icon -GitHub.png',
    liveIcon: './images/Icon - Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projects: 2,
    gridClass: 'w2',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './images/popupdesk.png',
    imageMobile: './images/popupmobile.png',
    githubIcon: './images/Icon -GitHub.png',
    liveIcon: './images/Icon - Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projects: 3,
    gridClass: 'w3',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './images/popupdesk.png',
    imageMobile: './images/popupmobile.png',
    githubIcon: './images/Icon -GitHub.png',
    liveIcon: './images/Icon - Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projects: 4,
    gridClass: 'w4',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './images/popupdesk.png',
    imageMobile: './images/popupmobile.png',
    githubIcon: './images/Icon -GitHub.png',
    liveIcon: './images/Icon - Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projects: 5,
    gridClass: 'w5',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './images/popupdesk.png',
    imageMobile: './images/popupmobile.png',
    githubIcon: './images/Icon -GitHub.png',
    liveIcon: './images/Icon - Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },

  {
    projects: 6,
    gridClass: 'w6',
    name: 'Keeping tracks of hunders of components',
    projectDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageDesktop: './images/popupdesk.png',
    imageMobile: './images/popupmobile.png',
    githubIcon: './images/Icon -GitHub.png',
    liveIcon: './images/Icon - Export.png',
    technologiesMobile: ['Ruby on Rails', 'CSS', 'JavaScript'],
    technologiesDesktop: ['Codekit', 'Github', 'JavaScript', 'Bootstrap', 'Terminal', 'Codepen'],
    sourceLink: '#',
    liveLink: '#',
  },
];

const popup = document.querySelector('.popoverlay');
// eslint-disable-next-line no-unused-vars
function popupHTML(pop) {
  popup.style.display = 'flex';
  popup.innerHTML = `
    <div class="popup-background">
    <div class="close-button-container">
    <li id="close" class="material-icons" >close</li>
    
    </div>
    <div class"container-popup">
    <img class="popup-image-dsk " src="${worksInfo[pop].imageDesktop}" alt="Project Image">
    <img class="popup-image-mbl " src="${worksInfo[pop].imageMobile}" alt="Project Image">
    <div id="title-btn">
    <div id="title-div">
    <h2 class="popup-title">${worksInfo[pop].name}</h2>
    </div>
    <div class="popup-button-desktop">
    <button class="a1">See live<img class="button-icon" src="${worksInfo[pop].liveIcon}"></button>
    <button class="a1" id="btn2">See Source<img class="button-icon" src="${worksInfo[pop].githubIcon}"></button>
    </div>
    </div>
    <div class="tags">
    <ul class="tags-desktop" id="mytech">  
           <li>${pop.technologiesDesktop[0]}</li>
           <li>${pop.technologiesDesktop[1]}</li>
           <li>${pop.technologiesDesktop[2]}</li>
           <li >${pop.technologiesDesktop[3]}</li>
           <li>${pop.technologiesDesktop[4]}</li>
           <li>${pop.technologiesDesktop[5]}</li>
     </ul>
    <ul class="tags-mobile" id="mobile-ul">
        <li>${pop.technologiesMobile[0]}</li>
        <li>${pop.technologiesMobile[1]}</li>
    </ul>
    </div>
    <div class="desc">
    <p class="popup-description">${worksInfo[pop].projectDescription}</p>
    </div>
    <div class="popup-button-mobile">
    <button class="a1">See live<img class="button-icon" src="${worksInfo[pop].liveIcon}"></button>
    <button class="a1" id="btn2">See Source<img class="button-icon" src="${worksInfo[pop].githubIcon}"></button>
    </div>
    </div>
    </div>
    `;
  const popupClose = document.querySelector('button');
  popupClose.addEventListener('click', () => {
    popup.style.display = 'none';
  });
}