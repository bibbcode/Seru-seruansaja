function checkKhodam() {
    const name = document.getElementById('nameInput').value;
    document.getElementById('nameInput').value = "";
    const responses = [
        `Nasi Goreng`,
        `Pecel Lele`,
        `Bakso Sedap`,
        `Gado-gado uwaww`,
        `Kamu Jenius`,
        `Tukang Bucin`,
        `Iwak Belido Joss`,
        `Buah Apel`,
        `Imut Sekali`,
        `Kamu Cantik`,
        `Kamu Manis`,
        `Kucing Mengemaskan`,
        `Kelinci Gemas`,
        `Katak Ceria`,
        `Buku Kosong`,
        `Kuntilanak`,
        `Buaya Darat`,
        `Tukang Goshting`,
        `Kamu Pembohong`,
        `Tipe Halo Dek`,
        `Tukang Cuek`,
        `Kamu Itu Permata Indah`,
        `Buah Naga`,
        `Naga Guling`,
        `Singa Senyum`,
        `Kura-kura Tangguh`,
        `Gajah Gembira`,
        `Tipe Idaman`,
        `Tipe Setia`,
        `Tipe Frenly`,
        `Tipe Mudah Berbaur Sama Orang`,
        `Kosong Dirimuh`,
        `Sambel Percon`,
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    const response = responses[randomIndex];
    
    document.getElementById('response').innerText = response;
}
