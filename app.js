document.querySelectorAll('.pop').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); 
        const imageSrc = this.querySelector('img').src;
        const modalImage = document.getElementById('imagepreview');
        modalImage.src = imageSrc;
        
        const myModal = new bootstrap.Modal(document.getElementById('imagemodal'));
        myModal.show();
    });
});