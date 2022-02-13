const pages = {
  home : document.getElementById('home-page'),
  projects : document.getElementById('projects-page'),
  edu : document.getElementById('edu-page'),
  skills : document.getElementById('skills-page')
}

const nav = {
  home : document.getElementById('nav-home'),
  projects : document.getElementById('nav-projects'),
  edu : document.getElementById('nav-edu'),
  skills : document.getElementById('nav-skills')
}

pages.home.style.display = 'block';
pages.projects.style.display = 'none';
pages.edu.style.display = 'none';
pages.skills.style.display = 'none';

const findPrevPage = () => {
  for (const p in pages) {
    if (pages[p].style.display === 'block') return pages[p];
  }
}

document.getElementById('logo').addEventListener('click', e => {
  nav.home.classList.add('active');
  nav.projects.classList.remove('active');
  nav.edu.classList.remove('active');
  nav.skills.classList.remove('active');
  pages.home.style.display = 'block';
  pages.projects.style.display = 'none';
  pages.edu.style.display = 'none';
  pages.skills.style.display = 'none';
});

document.getElementById('nav-home').addEventListener('click', e => {
  nav.home.classList.add('active');
  nav.projects.classList.remove('active');
  nav.edu.classList.remove('active');
  nav.skills.classList.remove('active');
  pages.home.style.display = 'block';
  pages.projects.style.display = 'none';
  pages.edu.style.display = 'none';
  pages.skills.style.display = 'none';
});

document.getElementById('nav-projects').addEventListener('click', e => {
  nav.home.classList.remove('active');
  nav.projects.classList.add('active');
  nav.edu.classList.remove('active');
  nav.skills.classList.remove('active');
  pages.home.style.display = 'none';
  pages.projects.style.display = 'block';
  pages.edu.style.display = 'none';
  pages.skills.style.display = 'none';
});

document.getElementById('nav-edu').addEventListener('click', e => {
  nav.home.classList.remove('active');
  nav.projects.classList.remove('active');
  nav.edu.classList.add('active');
  nav.skills.classList.remove('active');
  pages.home.style.display = 'none';
  pages.projects.style.display = 'none';
  pages.edu.style.display = 'block';
  pages.skills.style.display = 'none';
});

document.getElementById('nav-skills').addEventListener('click', e => {
  nav.home.classList.remove('active');
  nav.projects.classList.remove('active');
  nav.edu.classList.remove('active');
  nav.skills.classList.add('active');
  pages.home.style.display = 'none';
  pages.projects.style.display = 'none';
  pages.edu.style.display = 'none';
  pages.skills.style.display = 'block';
});
