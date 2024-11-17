// Получаем элементы DOM
const fileInput = document.getElementById('fileInput');
const imagePreview = document.getElementById('imagePreview');
const submitBtn = document.getElementById('submitBtn'); // Кнопка отправки

// Функция для отображения выбранного изображения
fileInput.addEventListener('change', function(event) {
    const file = event.target.files[0]; // Получаем выбранный файл
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            imagePreview.src = e.target.result; // Устанавливаем src изображения
            imagePreview.style.display = 'block'; // Показываем изображение

            // Показываем кнопку отправки
            submitBtn.style.display = 'inline-block';
        };
        reader.readAsDataURL(file); // Читаем файл как Data URL
    }
});
