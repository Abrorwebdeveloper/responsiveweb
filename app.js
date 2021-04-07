window.addEventListener('scroll', function(){
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

function toggleMenu(){
  const menuToggle = document.querySelector('.menuToggle');
  const navigation = document.querySelector('.navigation');
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}