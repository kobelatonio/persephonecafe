document.querySelector('#toggle').addEventListener('click', function () {
    document.querySelectorAll('.item').forEach((item) => {
        item.classList.toggle('active-item');
    });
});