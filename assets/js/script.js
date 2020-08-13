function mostrar(e) {
    if (e.classList.contains("fa-moon-o")) {
        e.classList.remove("fa-moon-o");
        e.classList.add("fa-sun-o");
        e.style.color = "#e86100";
        document.body.style.background = '#000000';

        let links = document.querySelectorAll('.link');
        links[0].style.filter = 'grayscale(0%)';
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        circulos[0].style.filter = 'grayscale(0%)';
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }

        let inputCard = document.getElementsByClassName('link');
        for (let i = 0; i < inputCard.length; i++){
            inputCard[i].style.boxShadow = '0 0 10px 3px #e86100';
        }

        let idPhoto = document.getElementById('userPhoto');
        idPhoto.style.boxShadow = "0 0 10px 3px #e86100";

        let iconSosmed = document.getElementsByClassName('iconSosmed');
        for (let i = 0; i < iconSosmed.length; i++){
            iconSosmed[i].style.boxShadow = '0 0 10px 3px #e86100';
        }

    } else {
        e.classList.remove("fa-sun-o");
        e.classList.add("fa-moon-o");
        e.style.color = "#000000";
        document.body.style.background = '#e86100';
        let links = document.querySelectorAll('.link');
        links[0].style.filter = 'grayscale(0%)';
        for (let i = 0; i < links.length; i++) {
            links[i].style.filter = 'grayscale(0%)';
        }

        let circulos = document.querySelectorAll('.circulo');
        circulos[0].style.filter = 'grayscale(0%)';
        for (let i = 0; i < circulos.length; i++) {
            circulos[i].style.filter = 'grayscale(0%)';
        }

        let inputCard = document.getElementsByClassName('link');
        for (let i = 0; i < inputCard.length; i++){
            inputCard[i].style.boxShadow = '0 0 10px 3px #000000';
        }

        let idPhoto = document.getElementById('userPhoto');
        idPhoto.style.boxShadow = "0 0 10px 3px #000000";
    }

}