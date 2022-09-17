// const nav = document.getElementById('rightNav');
// const navLinks = document.getElementById('menu');
// function showMenu() {
//   nav.style.right = '0px';
// }
// function hideMenu() {
//   nav.style.right = '-500px';
//   nav.classList.remove('active');
// }

// nav.forEach((n) => n.addEventListener('click', hideMenu));

// function afterClick() {
//   nav.classList.remove('active');
// }

// navLinks.forEach((n) => n.addEventListener('click', afterClick));
// nav.forEach((n) => n.addEventListener('click', showMenu));
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
        <button type="button" onclick="popup.innerHTML(${cards})">${cards.button}</button>
    </div>
  </div>`;
  });

  // form validation

  const subButton = document.querySelector('.form-container-button');

// Function to check if email is valid

const validMail = (email) => {
  if (email.match(/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)*$/)) {
    return true;
  }
  return false;
};
// Checking validation after button is pressed

subButton.addEventListener('click', (event) => {
  const validatedMail = document.getElementById('email').value;
  if (!validMail(validatedMail)) {
    document.querySelector('.lable').innerHTML = 'Please fill the email in lowercase';
    event.preventDefault();
  } else {
    document.querySelector('.lable').innerHTML = '';
  }
});