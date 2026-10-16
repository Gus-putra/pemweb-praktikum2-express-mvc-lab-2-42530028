exports.getBeranda = (req, res) => {
    res.render('pages/home', {
        pageTitle: 'Beranda',
        namaPengguna: 'Mahasiswa'
    });
};

exports.getTentang = (req, res) => {
    res.render('pages/tentang', {
        pageTitle: 'Tentang Kami'
    });
};

const daftarBuku = [
    { judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005 },
    { judul: 'Bumi', penulis: 'Tere Liye', tahun: 2014 },
    { judul: 'Negeri 5 Menara', penulis: 'Ahmad Fuadi', tahun: 2009 }
];

exports.getKatalog = (req, res) => {
    res.render('pages/katalog', {
        pageTitle: 'Katalog Buku',
        daftarBuku
    });
};

exports.postTambahData = (req, res) => {
    console.log('[BACK-END] Data buku diterima:', req.body);
    res.redirect('/katalog');
};