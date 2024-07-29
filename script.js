let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.experience-slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  const offset = -currentSlide * 100;
  slides.forEach(slide => {
    slide.style.transform = `translateX(${offset}%)`;
  });
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}


showSlide(currentSlide);

function filterSkills(skill) {
  const skillItems = document.querySelectorAll('.skill-item');
  skillItems.forEach(item => {
    if (item.id === skill) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const groups = {
    'group-1': document.querySelectorAll('.group-1'),
    'group-2': document.querySelectorAll('.group-2'),
    'group-3': document.querySelectorAll('.group-3'),
    'group-4': document.querySelectorAll('.group-4'),
    'group-5': document.querySelectorAll('.group-5')
  };

  Object.keys(groups).forEach(group => {
    groups[group].forEach(item => {
      item.addEventListener('mouseover', () => {
        groups[group].forEach(el => el.style.backgroundColor = '#FFA500'); // Warna oren saat hover
      });
      item.addEventListener('mouseout', () => {
        groups[group].forEach(el => el.style.backgroundColor = '#d3d3d3'); // Kembali ke warna abu-abu muda
      });
    });
  });
});

document.getElementById('mobile-menu').addEventListener('click', function() {
  this.classList.toggle('is-active');
  document.querySelector('.navbar').classList.toggle('active');
});

document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function() {
    document.getElementById('mobile-menu').classList.remove('is-active');
    document.querySelector('.navbar').classList.remove('active');
  });
});

// New code to handle social icon clicks
document.getElementById('linkedin-icon').addEventListener('click', function() {
  window.open('https://www.linkedin.com/in/agus-dzuriana-poetra-604ab8102/', '_blank');
});
document.getElementById('facebook-icon').addEventListener('click', function() {
    window.open('//www.facebook.com/Dputra28', '_blank');
  });
document.getElementById('instagram-icon').addEventListener('click', function() {
  window.open('https://www.instagram.com/agusdputraa/', '_blank');
});
document.getElementById('mail-icon').addEventListener('click', function() {
  window.open('mailto:agusdzuriana@gmail.com', '_blank');
});