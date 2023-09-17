function halo() {
    alert("Halo JavaScript");
}

function waktu() {
    document.getElementById('waktu').innerHTML = Date();
}

function zodiak() {
    let tanggal = document.getElementById('tanggal').value;
    let bulan = document.getElementById('bulan').value;
    let zodiak = "Belum Ditentukan";

    if (bulan == 1) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Aquarius";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Taurus";
        }
    }else if (bulan == 2) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Aries";
        }
        if (tanggal > 0 && tanggal < 30) {
            zodiak = "Cancer";
        }
    }else if (bulan == 3) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Gemini";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Capricorn";
        }
    }else if (bulan == 4) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Pisces";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Sagitarius"
        }
    }else if (bulan == 5) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Libra";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Scorpio";
        }
    }else if (bulan == 6) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Virgo";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Leo"
        }
    }else if (bulan == 7) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Cancer";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Pisces";
        }
    }else if (bulan == 8) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Capricorn";
        }
        if (tanggal > 0 && tanggal < 30) {
            zodiak = "Virgo";
        }
    }else if (bulan == 9) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Leo";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Sagitarius";
        }
    }else if (bulan == 10) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Libra";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Aries"
        }
    }else if (bulan == 11) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Gemini";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Scorpio";
        }
    }else if (bulan == 12) {
        if (tanggal > 0 && tanggal < 20) {
            zodiak = "Aquarius";
        }
        if (tanggal > 19 && tanggal < 32) {
            zodiak = "Taurus"
        }
    }

    document.getElementById('zodiak').innerHTML = zodiak;
}

function kali() {
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;

    let hasil = a * b;

    document.getElementById('hasil').innerHTML = hasil;
}

function jumlah() {
    let a = parseInt(document.getElementById('bil1').value);
    let b = parseInt(document.getElementById('bil2').value);

    let hasil = a + b;

    document.getElementById('hasil').innerHTML = hasil;
}

function kurang() {
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;

    let hasil = a - b;

    document.getElementById('hasil').innerHTML = hasil;
}

function pembagian() {
    let a = document.getElementById('bil1').value;
    let b = document.getElementById('bil2').value;

    let hasil = a/b;

    document.getElementById('hasil').innerHTML = hasil.toFixed(2);
}

//-----------------------------------

let btn = document.getElementById('jam');

btn.onclick = function() {
    document.getElementById('waktu').innerHTML = Date();
}

let isi = document.getElementById('ketik');
let tampil = document.getElementById('waktu');

isi.onmouseover = function() {
    tampil.innerHTML = isi.value;
}

let hari = document.getElementById('hari');
hari.addEventListener('click', coba);

function coba() {
    alert('Coba-Coba');
}

let searchZodiak = document.getElementById('searchZodiak');

searchZodiak.addEventListener('click', zodiak);