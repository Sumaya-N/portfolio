function showSection(id) {
  
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none';
  });


  const target = document.getElementById(id);
  target.style.display = 'block';
}

function showSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.style.display = 'none'; 
  });

  const activeSection = document.getElementById(sectionId);
  if (activeSection) {
    activeSection.style.display = 'block';
  }
}


const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
hamburger.innerHTML = '&#9776;'; 
document.body.appendChild(hamburger);

hamburger.addEventListener('click', () => {
  const menu = document.querySelector('.menu');
  menu.classList.toggle('open'); 
});


