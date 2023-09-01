// let a = 2;
// let b = 3;
// let c = a + b;

// console.log(c);

/*3 + 2 * 4 / 2 * 3 * 3 + 2 - 5

let a = 2;
let b = 3;
let c = 4;
let d = 5;

let e = b + ((((a * c) / a) * b) * b) + a - d;
let f = b + a * c / a * b * b + a - d;
let g = ((b+a)*c)/(a*b*b)+a-d;

console.log(e);
console.log(f);
console.log(g);
*/

let x = 6;
let y = 5;

if (x > y) {
    console.log("Benar");
}else {
    console.log("Salah");
}



let nilai = 95;
let KKM = 80;

if (nilai > KKM) {
    console.log("lulus");
}else {
    console.log("tidak lulus");
}



let bulan = 9;
let tanggal = 27;
let zodiak = "Belum dibuat";

if (bulan == 1) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Aquarius";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak = "Taurus";
    }
}else if (bulan == 2) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Capricorn";
    }
    if (tanggal > 19 && tanggal < 30) {
        zodiak = "Pisces";
    }
}else if (bulan == 3) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Gemini";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak = "Cancer";
    }
}else if (bulan == 4) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Leo";
    }
    if (tanggal > 19 && tanggal < 31) {
        zodiak = "Virgo";
    }
}else if (bulan == 5) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Scorpio";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak = "Libra";
    }
}else if (bulan == 6) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Sagitarius";
    }
    if (tanggal > 19 && tanggal < 31) {
        zodiak = "Aries";
    }
}else if (bulan == 7) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Aquarius";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak = "Cancer";
    }
}else if (bulan == 8) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Scorpio";
    }
    if (tanggal > 19 && tanggal < 31) {
        zodiak = "Taurus";
    }
}else if (bulan == 9) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Libra";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak = "Leo";
    }
}else if (bulan == 10) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Pisces";
    }
    if (tanggal > 19 && tanggal < 31) {
        zodiak = "Sagitarius";
    }
}else if (bulan == 11) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Capricorn";
    }
    if (tanggal > 19 && tanggal < 32) {
        zodiak = "Gemini";
    }
}else if (bulan == 12) {
    if (tanggal > 0 && tanggal < 20) {
        zodiak = "Virgo";
    }
    if (tanggal > 19 && tanggal < 31) {
        zodiak = "Aries";
    }
}

console.log(zodiak);