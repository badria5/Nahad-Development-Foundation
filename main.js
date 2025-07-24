function moveImage(image) {
        // تحريك الصورة عند تمرير المؤشر
        image.style.transform = 'scale(1.1)'; // تكبير الصورة قليلاً
    }

    function resetImage(image) {
        // إعادة الصورة إلى حجمها الأصلي
        image.style.transform = 'scale(1)'; // إعادة الحجم الأصلي
    }
/*    const toggleButton = document.getElementById('toggle-button');
const body = document.body;

toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');
});*/

const toggleButton = document.getElementById('toggle-button');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    body.classList.remove('light');
} else {
    body.classList.add('light');
}


toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    body.classList.toggle('light');

    
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


   