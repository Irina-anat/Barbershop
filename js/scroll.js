window.addEventListener('scroll', () => {
  const scrollBtn = document.getElementById('scroll-top-btn');
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

document.getElementById('scroll-top-btn').addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
