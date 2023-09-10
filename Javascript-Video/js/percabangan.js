if (true) {
    console.log("Dijalankan jika benar");
} else {
    console.log("Dijankan jika salah");
}

let nilai = 60;
let standar = 60;
let baik = "LULUS";
let gagal = "TIDAK LULUS";
let batasAtas = 100;
let batasBawah = 0;
let peringatan = "Nilai Salah";

if (nilai <= batasAtas && nilai >= batasBawah) {
    if (nilai >= standar) {
        console.log(baik);
    }else {
        console.log(gagal);
    }
}else {
    console.log(peringatan);
}