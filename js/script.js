
function replaceName(){
    let name = prompt("Siapakah nama anda?","");
    document.getElementById("name").innerHTML=name
    }
    replaceName();

    document.getElementById('formulir').addEventListener('submit', function(event) {
    event.preventDefault();

    const now = new Date();
    const dateTimeString = now.toLocaleString();

    const nama = document.getElementById('nama').value;
    const tglLahir = document.getElementById('tgl_lahir').value;
    const jenisKelamin = document.querySelector('input[name="jeniskelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    const resultText = `Date/time: ${dateTimeString}\n\nNama: ${nama}\nTanggal Lahir: ${tglLahir}\nJenis Kelamin: ${jenisKelamin}\nPesan:\n${pesan}`;

    document.getElementById('result').value = resultText;

    alert('Pesan telah tersubmit');
    document.getElementById('nama').value = "";
    document.getElementById('tgl_lahir').value = "";
    document.getElementById('pesan').value = "";
});

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("banner")[0].getElementsByTagName("img");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 10000);
}