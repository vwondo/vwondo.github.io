const homeSection = document.getElementById('home-page');
const projectsSection = document.getElementById('projects-page');
const eduSection = document.getElementById('edu-page');
const skillsSection = document.getElementById('skills-page');

const homeNav = document.getElementById('nav-home');
const projectsNav = document.getElementById('nav-projects');
const eduNav = document.getElementById('nav-edu');
const skillsNav = document.getElementById('nav-skills');

homeSection.style.display = 'block';
projectsSection.style.display = 'none';
eduSection.style.display = 'none';
skillsSection.style.display = 'none';

document.getElementById('nav-home').addEventListener('click', e => {
  homeNav.classList.add('active');
  projectsNav.classList.remove('active');
  eduNav.classList.remove('active');
  skillsNav.classList.remove('active');
  homeSection.style.display = 'block';
  projectsSection.style.display = 'none';
  eduSection.style.display = 'none';
  skillsSection.style.display = 'none';
});
document.getElementById('nav-projects').addEventListener('click', e => {
  homeNav.classList.remove('active');
  projectsNav.classList.add('active');
  eduNav.classList.remove('active');
  skillsNav.classList.remove('active');
  homeSection.style.display = 'none';
  projectsSection.style.display = 'block';
  eduSection.style.display = 'none';
  skillsSection.style.display = 'none';
});
document.getElementById('nav-edu').addEventListener('click', e => {
  homeNav.classList.remove('active');
  projectsNav.classList.remove('active');
  eduNav.classList.add('active');
  skillsNav.classList.remove('active');
  homeSection.style.display = 'none';
  projectsSection.style.display = 'none';
  eduSection.style.display = 'block';
  skillsSection.style.display = 'none';
});
document.getElementById('nav-skills').addEventListener('click', e => {
  homeNav.classList.remove('active');
  projectsNav.classList.remove('active');
  eduNav.classList.remove('active');
  skillsNav.classList.add('active');
  homeSection.style.display = 'none';
  projectsSection.style.display = 'none';
  eduSection.style.display = 'none';
  skillsSection.style.display = 'block';
});
