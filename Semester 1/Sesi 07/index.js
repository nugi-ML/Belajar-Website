const http = require('http');
const rupiah = require('rupiah-format');
const fs = require('fs');
const port = 3001;
const host = '127.0.0.1';

const server = http.createServer(function (request, response) {
    const nama = 'Nugie Saputra';
    let uang = 100000;
    let jajan = 83000;
    let sisa = uang - jajan;

    uang = rupiah.convert(uang);
    jajan = rupiah.convert(jajan);
    sisa = rupiah.convert(sisa);

    fs.appendFile('sisauang.txt', sisa, () => {
        console.log('data uang berhasil disimpan')
    });

    const hasil = `
    <head>
        <title>Coba-coba</title>
    </head>
    <body>
        <h1 style='background: black; color: white; padding: 20px; text-align: center;'>NODE JS UANG JAJAN</h1>
        <p>Nama saya adalah ${nama}, saya memiliki uang sebanyak ${uang}, saya menggunakan uang tersebut untuk jajan sebesar ${jajan}, dan kini uang saya tersisa ${sisa} </p>
    </body>`

    response.statusCode = 200;
    response.end(hasil);
});

server.listen(port, host, '', function() {
    console.log(`Server sedang berjalan di ${host}:${port}`)
});