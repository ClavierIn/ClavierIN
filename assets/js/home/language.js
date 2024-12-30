const language = {
    indonesia: {
        //scroll-show  page-1
        Page1span: "Mau punya ",
        Page1span1: " kamu sendiri?",
        Page1paragraf: "Ayo, buat web app atau game yang kamu inginkan, kami siap wujudkan impian mu."

    },
    english: {
        //scroll-show page-1
        Page1span: "Let's make your ",
        Page1span1: " ",
        Page1paragraf: "Come on, make the web app or game you want"
    }
};

// Fungsi untuk mengupdate teks berdasarkan bahasa yang dipilih
function updateLanguage() {
    const selectedLanguage = document.querySelector('input[name="language"]:checked').value;
    //scroll-show page-1
    document.getElementById("container-1-page-1-title").innerHTML = `${language[selectedLanguage].Page1span}<b id="text-item"></b>${language[selectedLanguage].Page1span1}`;
    document.getElementById("container-1-page-1-paragraf").textContent = language[selectedLanguage].Page1paragraf;

}

// Menambahkan event listener untuk setiap perubahan pilihan radio button
const languageRadios = document.querySelectorAll('input[name="language"]');
languageRadios.forEach(radio => {
    radio.addEventListener('change', updateLanguage);
});

// Menjalankan fungsi updateLanguage pertama kali untuk menampilkan teks default
updateLanguage();