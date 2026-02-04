// переключение светлой/темной
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;
// при загрузке страницы проверяем сохранённую тему
const savedTheme = localStorage.getItem('theme'); // создаем константу в которую получаем значение по ключу 'theme' (название ключа зависит от нашего - ХАТЮ)
    if (savedTheme) { // проверяем если значение есть - подключаем его, если нет - оно по умолчанию
        body.classList.remove('light-theme', 'dark-theme'); // убираем возможные старые классы
        body.classList.add(savedTheme); // добавляем сохранённый класс темы
        toggleBtn.textContent = savedTheme === 'dark-theme' ? '☀️ Светлая тема' : '🌙 Тёмная тема'; // меняем текст кнопки в зависимости от темы
    }
toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    body.classList.toggle('light-theme');

    let currentTheme;
    if (body.classList.contains('dark-theme')) {
        toggleBtn.textContent = '☀️ Светлая тема';
        currentTheme = 'dark-theme';
    } else {
        toggleBtn.textContent = '🌙 Тёмная тема';
        currentTheme = 'light-theme';
    }
    // сохраняем выбор в localStorage
    localStorage.setItem('theme', currentTheme);
});
// контент
const app = Vue.createApp({
    data() {
        return {
            hello: 'Хайлоу, Vue.js!', // задача 2
            count: 0, // задача 3
            imageUrl: 'https://cs8.pikabu.ru/post_img/2017/01/26/5/1485412757124666721.jpg', // задача 4
            inputUrl: '', // задача 4
            isShow: false, // задача 5
            tasks: [], // задача 6
            newTask: '', // задача 6
            inputText: '', // задача 7
            displayedText: '', // задача 7
            formName: '', // задача 8
            formEmail: '', // задача 8
            angle: 0, // задача 9
            timer: 0, // задача 10
            intervalId: null, // задача 10
            firstName: '', // задача 11
            lastName: '' // задача 11
        };
    },
    methods: {
        less() { // задача 3
            if (this.count > 0) this.count--;
        },
        more() { // задача 3
            this.count++;
        },
        applyUrl() { // задача 4
            this.imageUrl = this.inputUrl
        },  
        toggleText() { // задача 5
            this.isShow = !this.isShow;
        },    
        addTask() { // задача 6
            this.tasks.push(this.newTask.trim());
            this.newTask = '';
        },
        removeTask(index) { // задача 6
            this.tasks.splice(index, 1);
        },
        showText() { // задача 7
            this.displayedText = this.inputText;
        },
        resetForm() { // задача 8
            this.formName = ''; this.formEmail = '';
        },
        rotateImage() { // задача 9
            this.angle += 15;
        },
        startTimer() { // задача 10
            if (this.intervalId) return; // уже запущен, не создаём новый
                this.intervalId = setInterval(() => {
                    this.timer++;
                }, 1000);
        },
        stopTimer() { // задача 10
            clearInterval(this.intervalId);
            this.intervalId = null;
        },
    },
    computed: {
        fullName: function () { // задача 11
            return 'Ню прива чел, ' + this.firstName + ' ' + this.lastName;
        }
    }
});

app.mount('#app');
