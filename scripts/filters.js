// filters.js - скрипт для фильтрации проектов
document.addEventListener('DOMContentLoaded', function() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    
    // Проверяем, что мы на странице проектов
    if (filterBtns.length > 0 && projectItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Убираем активный класс у всех кнопок
                filterBtns.forEach(b => {
                    b.classList.remove('active');
                    b.classList.add('btn-outline-primary');
                });
                
                // Добавляем активный класс текущей кнопке
                this.classList.add('active');
                this.classList.remove('btn-outline-primary');
                
                const filter = this.getAttribute('data-filter');
                
                projectItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});