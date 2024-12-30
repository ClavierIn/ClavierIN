     
     

     // Fungsi untuk mengganti teks secara otomatis
        function gantiTeksBertahap() {
            let teksArray = ["Websites", "Application", "Game"];
            let iconArray = [" <i class='ri-window-line'></i>"," <i class='ri-google-play-fill'></i>", " <i class='ri-gamepad-line'></i>"]
            let index = 0;

            setInterval(function() {
                document.getElementById('text-item').innerHTML = `${teksArray[index]}${iconArray[index]}`;
                index++;

                // Setelah semua teks ditampilkan, reset ke teks pertama
                if (index === teksArray.length || index === iconArray.length) {
                    index = 0; // Kembali ke awal
                }
            }, 2000); // Ganti teks setiap 1 detik (1000ms)
        }

        // Menjalankan fungsi saat halaman dimuat
        window.onload = function() {
            gantiTeksBertahap();
        }


let backGrid = document.getElementById("scroll-show-page-1-background")
let numberBox = 300;
    for (let i = 0; i < numberBox; i++) {
        let box = document.createElement("div");
        box.classList.add("grid-box")
        backGrid.append(box)
    }

let cursor = document.getElementById("cursor-1")
window.onmousemove = function(e){
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}


    
        const containerScroll = document.getElementById('scroll-show');
        const contentDisplay = document.getElementById('scroll-content');
        const contentItems = document.querySelectorAll('#scroll-show .page');

        // Fungsi untuk memperbarui konten di bawah berdasarkan posisi scroll
        function updateContentDisplay() {
            const scrollPosition = containerScroll.scrollLeft;
            const contentWidth = contentItems[0].offsetWidth; // Lebar konten yang ditampilkan

            // Tentukan konten yang terlihat berdasarkan posisi scroll
            const index = Math.round(scrollPosition / contentWidth);

            // Mengupdate konten di bawah scroll sesuai dengan konten yang sedang terlihat
            switch (index) {
                case 0:
                    contentDisplay.innerHTML = `
                        <div class="content-1">
                        <div class="page-1">
                        <div class="box-title">
                             <h1>Paket Pembuatan</h1>
                          </div>

            <div class="box-2">
                <div class="radio-group">
                <input type="radio" name="pilihan" value="1" id="pilihanWeb" checked>
                <label for="pilihanWeb" class="radio-label">WEB</label>

                <input type="radio" name="pilihan" value="2" id="pilihanApp">
                <label for="pilihanApp" class="radio-label">APP</label>
                </div>

                <div class="content-group">
                    <div class=" group group-1" id="ScrollDiv" >
                        <div class=" item">
                            <span>Paket Standar</span>
                            <p>Buat usaha kecil dan penggunaan pribadi yang ingin tampil online</p>
                            <ul>
                                <li><i>//</i>Hingga 9 Halaman</li>
                                <li><i>//</i>Desain Responsif All Device</li>
                                <li><i>//</i>SEO dasar untuk Visilitas</li>
                                <li><i>//</i>Dukungan prioritas</li>

                            </ul>
                            <a>Order</a>
                        </div>
                        <div class="item">
                            <span>Paket Medium</span>
                            <p>Dirancang khusus untuk bisnis yang masih berkembang</p>
                            <ul>
                                <li>Hingga 13 Halaman</li>
                                <li>Desain Custom Responsif</li>
                                <li>Fitur Login Multi Role</li>
                                <li>Admin Dash board/manangement dasar</li>
                                <li>Optimasi Seo lanjutan</li>
                                <li>Dukungan prioritas</li>
                            </ul>
                            <a href="Order">Order</a>
                        </div>
                        <div class="item">
                            <span>Paket Bisnis</span>
                            <p>Untuk kamu yang punya bisnis jualan online</p>
                            <ul>
                                <li>Halaman Tidak Terbatas</li>
                                <li>Fitur Intergerasi custom</li>
                                <li>Optimasi Seo premium</li>
                                <li>Admin Dash board/management lanjutan</li>
                                <li>Interigrasi payment Gateaway untuk transaksi mudah</li>
                                <li>Dukungan Prioritas</li>
                            </ul>
                            <a>Order</a>
                        </div>
                        <div class="item">
                            <span>Paket Custom</span>
                            <p>Kustomisasi lengkap untuk memenuhi kebutuhan spesifik Anda..</p>
                            <ul>
                                <li>Halaman & Fitur Kustom Sesuai Permintaan</li>
                                <li>Konsultasi Langsung untuk Solusi Optimal</li>
                                <li>Dukungan Khusus untuk Pengalaman yang Memuaskan</li>
                            </ul>
                            <a href="">Order</a>
                        </div>
                    </div>
                    <div class="group group-2"></div>
                </div>
                </div>
            </div>
        </div>
                    `;
                    break;
                case 1:
                    contentDisplay.innerHTML = `
                      <div class="content content-2">
                        <div class="container-1">
                        <div class="box box-1">
                            <div class="box-title">
                                <span>KATEGORI</span>

                                <h1 class="text">
                                Mau Belajar apa hari ini?
                                </h1>

                            </div>
                            <div class="box-item" id="content-2-box-item-1">
                                <div class="item">
                                <span class="icon" style="background: rgb(97, 58, 187);">
                                    <svg class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4 4 4-4 4M6 16l-4-4 4-4"></path>
                                    </svg>
                                </span>
                                   <h3 class="">Basic Programing</h3>
                                  
                                    <div class="text">
                                    <p class="">Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak
                                    lagi.</p>
                                    
                                    <span class="arrow">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                                    </span>
                                    </div>
                                </div>

                                 <div class="item">
                                    <span class="icon" style="background: rgb(224, 143, 77);">
                                    <svg class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657.0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657.0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9">
                                    </path></svg>
                                    </span>
                                    <h3 class="">Web Programming</h3>
                                  
                                    <div class="text">
                                    <p class="">Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak
                                    lagi.</p>
                                    
                                    <span class="arrow">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                                    </span>
                                    </div>
                                </div>

                                <div class="item">
                                    <span class="icon" style="background:rgb(108, 152, 235);">
                                    <svg class="h-6 w-6 stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                                    </span>
                                    <h3 class="">Web Programming</h3>
                                  
                                    <div class="text">
                                    <p class="">Baca tutorial cara membuat web. Mulai dari HTML, CSS, JS, PHP, MySQL, Codeigniter, React, dan masih banyak
                                    lagi.</p>
                                    
                                    <span class="arrow">
                                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentcolor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path></svg>
                                    </span>
                                    </div>
                                </div>
                            </div> 

                            <div class="box box-2">
                            <div class="box-title">
                            </div>
                            </div>
                        </div>
                        </div>
                      </div>
                    `;
                    break;
                case 2:
                    contentDisplay.innerHTML = `
                        <div class="content">
                            <h2>Konten Acak</h2>
                            <p>Konten Acak: Gambar berikut adalah contoh random dari internet.</p>
                            <img src="https://via.placeholder.com/600x300/ff7f7f" alt="Random Gambar" />
                        </div>
                    `;
                    break;
                default:
                    contentDisplay.innerHTML = `
                        <div class="content">
                            <p>Konten tidak ditemukan.</p>
                        </div>
                    `;
                    break;
            }
        }

        // Update konten saat halaman dimuat pertama kali
        updateContentDisplay();

        // Event listener untuk mendeteksi perubahan scroll
        containerScroll.addEventListener('scroll', updateContentDisplay);
