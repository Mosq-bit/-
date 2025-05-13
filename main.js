document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const paginationBtns = document.querySelectorAll('.pagination-btn');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;
  const slideCount = slides.length;
  
  // Функция для обновления слайдера
  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Обновляем активные классы для слайдов
    slides.forEach((slide, index) => {
      slide.classList.toggle('active', index === currentIndex);
    });
    
    // Обновляем активные классы для кнопок пагинации
    paginationBtns.forEach((btn, index) => {
      btn.classList.toggle('active', index === currentIndex);
    });
  }
  
  // Обработчики для кнопок пагинации
  paginationBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      currentIndex = parseInt(this.getAttribute('data-index'));
      updateSlider();
    });
  });

  
  // Автоматическое переключение (опционально)
  let slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
  }, 5000);
  
  // Остановка автоматического переключения при наведении
  slider.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
  });
  
  slider.addEventListener('mouseleave', () => {
    slideInterval = setInterval(() => {
      currentIndex = (currentIndex + 1) % slideCount;
      updateSlider();
    }, 5000);
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const reviewSwiper = new Swiper('.review__slider', {
      // Параметры слайдера
    
      grabCursor: true,
      pagination: {
        el: '.review__pagination',
        clickable: true,
      },
      loop: true, // Бесконечная прокрутка
      slidesPerView: 1, // Количество видимых слайдов
      spaceBetween: 100, // Отступ между слайдами
      // autoplay: {
      //     delay: 5000, // Автопрокрутка каждые 5 секунд
      //     disableOnInteraction: false,
      // },
      
      // Навигация
      navigation: {
          nextEl: '.review__swiper-button-next',
          prevEl: '.review__swiper-button-prev',
      },
      
      // Адаптив
      breakpoints: {
          // При ширине экрана 768px и больше
          768: {
              slidesPerView: 1,
          },
          // При ширине экрана 1024px и больше
          1024: {
              slidesPerView: 1,
          }
      }
  });
});

const modal1 = document.getElementById('modal1');
        const modal2 = document.getElementById('modal2');
        const openBtn1 = document.getElementById('openModal1');
        const openBtn2 = document.getElementById('openModal2');
        const closeBtn1 = document.getElementById('closeModal1');
        const closeBtn2 = document.getElementById('closeModal2');
        const visit = document.getElementById('visit');
        
        // Функция для блокировки прокрутки страницы
        function lockScroll() {
            document.body.style.overflow = 'hidden';
        }
        
        // Функция для разблокировки прокрутки
        function unlockScroll() {
            if (!modal1.classList.contains('show') && !modal2.classList.contains('show')) {
                document.body.style.overflow = '';
            }
        }
        
        // Открываем первое модальное окно
        openBtn1.addEventListener('click', () => {
            modal1.classList.add('show');
            lockScroll();
        });
          // Открываем второе модальное окно (и скрываем первое)
        openBtn2.addEventListener('click', () => {
          modal1.classList.remove('show');
          modal2.classList.add('show');
          lockScroll();
      });
        
        // Закрываем первое модальное окно
        closeBtn1.addEventListener('click', () => {
            modal1.classList.remove('show');
            unlockScroll();
        });
        
        // Закрываем второе модальное окно
        closeBtn2.addEventListener('click', () => {
            modal2.classList.remove('show');
            unlockScroll();
        });
        visit.addEventListener('click', () => {
          modal2.classList.remove('show');
          unlockScroll();
      });
        
        // Закрываем при клике вне окна
        window.addEventListener('click', (e) => {
            if (e.target === modal1) {
                modal1.classList.remove('show');
                unlockScroll();
            }
            if (e.target === modal2) {
                modal2.classList.remove('show');
                unlockScroll();
            }
        });
        
        // Закрываем при нажатии Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                if (modal2.classList.contains('show')) {
                    modal2.classList.remove('show');
                } else if (modal1.classList.contains('show')) {
                    modal1.classList.remove('show');
                }
                unlockScroll();
            }
        });