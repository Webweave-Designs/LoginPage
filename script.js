const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

document.getElementById('show-signup').addEventListener('click', () => {
    document.querySelector('.container').classList.add('active');
});

document.getElementById('show-signin').addEventListener('click', () => {
    document.querySelector('.container').classList.remove('active');
});