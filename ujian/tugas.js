// soal no 1 A
var perusahaan = {
 Direksi : {
    nip : '225720',
    nama : 'Bujang',
    noHP : '082391141981',
    alamat : {
        jalan : 'pulai',
        kota : 'padang',
        provinsi : 'sumatra barat'
    }
},

// soal no 1 B
Manager : {
    nip : '205720',
    nama : 'agus',
    noHP : '08232141981',
    alamat : {
        jalan : 'jati',
        kota : 'padang',
        provinsi : 'sumatra barat'
    }
},


// soal no 1 C

 DivisiProduk : {
    nip : '205720',
    nama : 'agus',
    noHP : '08232141981',
    alamat : {
        jalan : 'jati',
        kota : 'padang',
        provinsi : 'sumatra barat'
    },
DivisiPemasaran : {
    nip : '205730',
    nama : 'aguss',
    noHP : '08233141981',
    alamat : {
        jalan : 'jate',
        kota : 'padang',
        provinsi : 'sumatra barat'
    }
},
}
}
console.log(perusahaan)

// soal No 2
var s = "";
for (var i = 0; i < 5; i++){
    for(var j = 0; j <=i; j++){
        s += "*"
    }
    s += "\n";
}
console.log(s);

//soal no 5

//var SemenPadang = [ 'struktur perusahaan',['defisiFungsional',['defisiProduksi',['dodo']],['defisipemasaran',['tono']]]]

var semenpadang = [ 'struktur perusahaan',['DivisiFungsi', ['divisi Administrasi',['dodo']],['divisi pemasaran',['ayu']]]]
console.log ('ini adalah ' + semenpadang [0] + ' pegawai yang bernama ' + semenpadang [1][1][1][0] + 'menjabat sebagai leader di ' + semenpadang[1][1][0] + ' sedangkan ' + semenpadang [1][2][1][0] + ' menjabat sebagai leader di ' + semenpadang[1][2][0] )





