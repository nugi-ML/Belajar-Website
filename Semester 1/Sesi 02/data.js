const nama = "Nugie Saputra";
let usia = 21;

const biodata = document.getElementById('biodata');
console.log(biodata)

function generateBiodata() {
    let generasi;

    if (usia > 30) {
        // ini adalah kondisi pertama
        generasi = 'generasi tua'
    }
    else if (usia > 17 && usia <= 30) {
        // ini adalah kondisi kedua
        generasi = 'generasi dewasa'
    } 
    else if (usia > 10 && usia <= 17) {
        // ini adalah kondisi ketiga
        generasi = 'generasi remaja'
    } 
    else if (usia >= 0 && usia <= 10) {
        // ini adalah kondisi keempat
        generasi = 'generasi anak-anak'
    }
    else {
        // ini adalah jika kondisi tidak terpenuhi
        generasi = 'lu makhluk apa bjir'
    }
    return biodata.innerHTML = generasi;
}

console.log(nama)

generateBiodata();