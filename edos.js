document.addEventListener('DOMContentLoaded', function() {
    // Проверяем, был ли уже произведен выбор (локальное хранилище)
    if (!localStorage.getItem('ageVerified')) {
        // Показываем модальное окно, если возраст не подтвержден
        const modal = document.getElementById('age-verification-modal');
        const confirmButton = document.getElementById('age-confirm');
        const denyButton = document.getElementById('age-deny');

        // Показываем модальное окно
        modal.style.display = 'flex';

        // Обработчик для кнопки подтверждения возраста (18 или больше)
        confirmButton.addEventListener('click', function() {
            // Сохраняем факт подтверждения в локальное хранилище
            localStorage.setItem('ageVerified', 'true');
            modal.style.display = 'none'; // Скрываем модальное окно

            // Перенаправляем на другую страницу (например, на главную страницу сайта)
            window.location.href = 'page.html'; // Укажите нужный URL
        });

        // Обработчик для кнопки отказа (меньше 18)
        denyButton.addEventListener('click', function() {
            // Если пользователь не старше 18 лет, закрываем страницу
            alert('Вы должны быть старше 18 лет!');
            window.close(); // Закрыть вкладку (работает только если страница была открыта программно)
        });
    }
});
