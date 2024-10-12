document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем перезагрузку страницы

    // Получаем данные из формы регистрации
    const username = document.getElementById('reg_username').value;
    const email = document.getElementById('reg_email').value;
    const password = document.getElementById('reg_password').value;
    const confirmPassword = document.getElementById('confirm_password').value;

    // Проверяем, что пароли совпадают
    if (password !== confirmPassword) {
        alert("Пароли не совпадают!");
        return;
    }

    // Сохраняем данные пользователя (в реальной системе это отправляется на сервер)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    // Переход на страницу авторизации
    document.getElementById('registration').style.display = 'none';
    document.getElementById('login').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Получаем данные из формы авторизации
    const loginUsername = document.getElementById('login_username').value;
    const loginPassword = document.getElementById('login_password').value;

    // Получаем сохранённые данные
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Проверяем, что введённые данные совпадают с сохранёнными
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        // Переход на приветственную страницу
        document.getElementById('login').style.display = 'none';
        document.getElementById('welcome').style.display = 'block';
    } else {
        alert("Неправильное имя пользователя или пароль!");
    }
});
