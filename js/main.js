const homeSection = document.getElementById('home-page');
const projectsSection = document.getElementById('projects-page');
const eduSection = document.getElementById('edu-page');
const skillsSection = document.getElementById('skills-page');

homeSection.style.display = 'block';
projectsSection.style.display = 'none';
eduSection.style.display = 'none';
skillsSection.style.display = 'none';

document.getElementById('nav-home').addEventListener('click', e => {
  homeSection.style.display = 'block';
  projectsSection.style.display = 'none';
  eduSection.style.display = 'none';
  skillsSection.style.display = 'none';
});
document.getElementById('nav-projects').addEventListener('click', e => {
  homeSection.style.display = 'none';
  projectsSection.style.display = 'block';
  eduSection.style.display = 'none';
  skillsSection.style.display = 'none';
});
document.getElementById('nav-edu').addEventListener('click', e => {
  homeSection.style.display = 'none';
  projectsSection.style.display = 'none';
  eduSection.style.display = 'block';
  skillsSection.style.display = 'none';
});
document.getElementById('nav-skills').addEventListener('click', e => {
  homeSection.style.display = 'none';
  projectsSection.style.display = 'none';
  eduSection.style.display = 'none';
  skillsSection.style.display = 'block';
});
