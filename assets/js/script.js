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
            inputCard[i].classList.toggle('link-moon');
        }

        let iconSosmed = document.getElementsByClassName('iconSosmed');
        for (let i = 0; i < iconSosmed.length; i++){
            iconSosmed[i].style.boxShadow = '0 0 10px 3px #e86100';
            iconSosmed[i].classList.toggle('circulo-moon');
        }

        let footer = document.getElementsByClassName('footer');
        for (let i = 0; i < footer.length; i++){
            footer[i].style.textShadow = '2px 2px 5px #e86100';
        }

        let text = document.getElementsByClassName('text');
        for (let i = 0; i < text.length; i++){
            text[i].style.color = '#e86100';
        }

        let idPhoto = document.getElementById('userPhoto');
        idPhoto.style.boxShadow = "0 0 10px 3px #e86100";

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
            inputCard[i].classList.toggle('link-moon');
        }

        let iconSosmed = document.getElementsByClassName('iconSosmed');
        for (let i = 0; i < iconSosmed.length; i++){
            iconSosmed[i].style.boxShadow = '0 0 10px 3px #000000';
            iconSosmed[i].classList.toggle('circulo-moon');
        }

        let footer = document.getElementsByClassName('footer');
        for (let i = 0; i < footer.length; i++){
            footer[i].style.textShadow = '2px 2px 5px #000000';
        }
        
        let text = document.getElementsByClassName('text');
        for (let i = 0; i < text.length; i++){
            text[i].style.color = '#000000';
        }

        let idPhoto = document.getElementById('userPhoto');
        idPhoto.style.boxShadow = "0 0 10px 3px #000000";
    }

}

$( document ).ready(function() {
    $('.cta-open').on('click', function() {
      $('.toggle-form, .formwrap, .toggle-bg').addClass('active');
      $('.icon-close').addClass('open');
  });
   $('.icon-close').on('click', function() {
      $('.toggle-form, .formwrap, .toggle-bg').removeClass('active');
      $('.icon-close').removeClass('open');
  });
});

const btnSubmit = document.getElementById('btnSubmit');

function closeForm() {
    const link = document.getElementById('link');
    const nleng = document.getElementById('nleng');
    const nope = document.getElementById('nope');
    const almt = document.getElementById('almt');
    const kel = document.getElementById('kel');
    const kec = document.getElementById('kec');
    const kota = document.getElementById('kota');
    const prov = document.getElementById('prov');
    const pos = document.getElementById('pos');

    link.value = '';
    nleng.value = '';
    nope.value = '';
    almt.value = '';
    kel.value = '';
    kec.value = '';
    kota.value = '';
    prov.value = '';
    pos.value = '';
}

function forwardMessage() {
    const link = document.getElementById('link').value;
    const nleng = document.getElementById('nleng').value;
    const nope = document.getElementById('nope').value;
    const almt = document.getElementById('almt').value;
    const kel = document.getElementById('kel').value;
    const kec = document.getElementById('kec').value;
    const kota = document.getElementById('kota').value;
    const prov = document.getElementById('prov').value;
    const pos = document.getElementById('pos').value;
    const pengiriman = document.getElementById('pengiriman').value;
    const metpem = document.getElementById('metpem').value;

    const message = `Hallo kak, aku mau order barang ini dong❤️%0A%0ALink Barang : ${link}%0ANama Lengkap : ${nleng}%0ANomor HP : ${nope}%0AAlamat : ${almt}%0A- Kelurahan : ${kel}%0A- Kecamatan : ${kec}%0A- Kota/Kabupaten : ${kota}%0A- Provinsi : ${prov}%0A- Kode POS : ${pos}%0APengiriman : ${pengiriman}%0AMetode Pembayaran : ${metpem}%0A
    `;

    window.open(`https://api.whatsapp.com/send?phone=+6288219778851&text=${message}`);
    this.closeForm();
}


setInterval(() => {
    const baseMessage = {
        link: document.getElementById('link').value,
        nleng: document.getElementById('nleng').value,
        nope: document.getElementById('nope').value,
        almt: document.getElementById('almt').value,
        kel: document.getElementById('kel').value,
        kec: document.getElementById('kec').value,
        kota: document.getElementById('kota').value,
        prov: document.getElementById('prov').value,
        pos: document.getElementById('pos').value
    }

    for ( const item of Object.values(baseMessage) ) {
        if ( item == '' ) {
            btnSubmit.setAttribute('disabled', true);
            break;
        } else {
            btnSubmit.removeAttribute('disabled');
        }
    }
})