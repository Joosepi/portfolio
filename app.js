const skills = document.querySelectorAll('.skill');

skills.forEach(skill => {
  skill.addEventListener('mouseenter', () => {
    skill.style.border = '2px solid #333';
  });
  
  skill.addEventListener('mouseleave', () => {
    skill.style.border = 'none';
  });
});
