   function toggleForm(){
   const formCont = document.getElementById("form-container")

   if (formCont.style.display === "none"){
      formCont.style.display = "block";
   } else {
    formCont.style.display = "none";
   }
   }
   // Cek apakah ada data yang disimpan di Local Storage
   let dataStok = JSON.parse(localStorage.getItem('dataStok')) || [];
   let nomorBarang = 1; // Untuk penamaan otomatis barang

   // Fungsi untuk menambahkan dua item ke tabel dalam satu nomor urut
   function tambahItem() {
       // Ambil data dari input form untuk barang 1
       let namaBarang1 = document.getElementById('namaBarang1').value.trim();
       const stokBarang1 = parseInt(document.getElementById('stokBarang1').value);
       const hargaBarang1 = parseFloat(document.getElementById('hargaBarang1').value);

       // Ambil data dari input form untuk barang 2
       let namaBarang2 = document.getElementById('namaBarang2').value.trim();
       const stokBarang2 = parseInt(document.getElementById('stokBarang2').value);
       const hargaBarang2 = parseFloat(document.getElementById('hargaBarang2').value);

       // Cek jika nama barang kosong, beri nama otomatis
       if (namaBarang1 === '') {
           namaBarang1 = 'Bensin ' + nomorBarang++;
       }
       if (namaBarang2 === '') {
           namaBarang2 = 'Bensin ' + nomorBarang++;
       }

       // Validasi input untuk kedua barang
       if ((isNaN(stokBarang1) || stokBarang1 <= 0 || isNaN(hargaBarang1) || hargaBarang1 <= 0) && 
           (isNaN(stokBarang2) || stokBarang2 <= 0 || isNaN(hargaBarang2) || hargaBarang2 <= 0)) {
           alert('Stok dan harga harus diisi dengan benar.');
           return;
       }

    

       // Ambil tanggal saat ini
       const tanggalMasuk = new Date().toLocaleDateString();

       // Tambahkan data barang ke array
       dataStok.push({
           items: [
               { nama: namaBarang1, stok: stokBarang1, terjual: 0, harga: hargaBarang1 },
               { nama: namaBarang2, stok: stokBarang2, terjual: 0, harga: hargaBarang2 }
           ],
           tanggalMasuk: tanggalMasuk,
       });

       // Simpan data ke Local Storage
       localStorage.setItem('dataStok', JSON.stringify(dataStok));

       // Kosongkan input form setelah tambah
       document.getElementById('namaBarang1').value = '';
       document.getElementById('stokBarang1').value = 0;
       document.getElementById('hargaBarang1').value = 0;
       document.getElementById('namaBarang2').value = '';
       document.getElementById('stokBarang2').value = 0;
       document.getElementById('hargaBarang2').value = 0;

       // Update tampilan tabel
       tampilkanTabel();
   }

   // Fungsi untuk menampilkan data stok ke tabel
   function tampilkanTabel() {
       const tbody = document.getElementById('tabelStok').getElementsByTagName('tbody')[0];
       tbody.innerHTML = ''; // Kosongkan tabel sebelum diisi ulang

       let nomor = 1;
       // Loop untuk menampilkan data
       dataStok.forEach((entry) => {
           entry.items.forEach((item, index) => {
               const row = tbody.insertRow();

               // Nomor urut (berbagi nomor urut yang sama untuk dua barang)
               const cellNo = row.insertCell(0);
               if (index === 0) {
                   cellNo.textContent = nomor; // Nomor hanya pada barang pertama
               } else {
                   cellNo.textContent = ''; // Tidak ada nomor untuk barang kedua
               }

               // Nama barang
               const cellNama = row.insertCell(1);
               cellNama.textContent = item.nama;

               // Stok barang
               const cellStok = row.insertCell(2);
               cellStok.textContent = item.stok;

               // Terjual (ditampilkan di tengah kolom)
               const cellTerjual = row.insertCell(3);
               const adjustButtons = document.createElement('div');
               adjustButtons.classList.add('adjust-buttons');

               const btnMinus = document.createElement('button');
               btnMinus.textContent = '-';
               btnMinus.onclick = () => adjustTerjual(item, 'minus');
               btnMinus.disabled = item.stok === 0; // Disable if no stock available
               
               const btnPlus = document.createElement('button');
               btnPlus.textContent = '+';
               btnPlus.onclick = () => adjustTerjual(item, 'plus');
               adjustButtons.appendChild(btnMinus);
               adjustButtons.appendChild(btnPlus);
               
               // Tambahkan jumlah terjual yang tampil di tengah
               const terjualText = document.createElement('span');
               terjualText.textContent = item.terjual;
               terjualText.style.marginLeft = '10px';  // Space between buttons and number
               cellTerjual.appendChild(adjustButtons);
               cellTerjual.appendChild(terjualText);

               // Harga per barang
               const cellHarga = row.insertCell(4);
               cellHarga.textContent = `Rp ${item.harga.toLocaleString()}`;

               // Total (harga * terjual)
               const cellTotal = row.insertCell(5);
               const total = item.harga * item.terjual;
               cellTotal.textContent = `Rp ${total.toLocaleString()}`;

               // Tanggal masuk
               const cellTanggalMasuk = row.insertCell(6);
               cellTanggalMasuk.textContent = entry.tanggalMasuk;

               // Tombol Aksi
               const cellAksi = row.insertCell(7);

               const btnDelete = document.createElement('button');
               btnDelete.textContent = 'Hapus';
               btnDelete.classList.add('delete-button');
               btnDelete.onclick = () => hapusItem(item.nama);
               cellAksi.appendChild(btnDelete);
           });

           // Increment nomor urut hanya setelah dua barang ditambahkan
           nomor++;
       });
   }

   // Fungsi untuk menambah atau mengurangi jumlah barang yang terjual
   function adjustTerjual(item, action) {
       if (action === 'plus') {
           if (item.stok > 0) {
               item.stok--;
               item.terjual++;
               localStorage.setItem('dataStok', JSON.stringify(dataStok)); // Simpan perubahan ke Local Storage
               tampilkanTabel();
           }
       } else if (action === 'minus') {
           if (item.terjual > 0) {
               item.stok++;
               item.terjual--;
               localStorage.setItem('dataStok', JSON.stringify(dataStok)); // Simpan perubahan ke Local Storage
               tampilkanTabel();
           }
       }
   }

   // Fungsi untuk menghapus item berdasarkan nama
   function hapusItem(nama) {
       // Konfirmasi penghapusan
       const confirmHapus = confirm("Apakah Anda yakin ingin menghapus item ini?");
       if (confirmHapus) {
           // Hapus item dari array dataStok
           dataStok = dataStok.map(entry => ({
               ...entry,
               items: entry.items.filter(item => item.nama !== nama)
           })).filter(entry => entry.items.length > 0);

           // Simpan perubahan ke Local Storage
           localStorage.setItem('dataStok', JSON.stringify(dataStok));

           // Update tampilan tabel setelah penghapusan
           tampilkanTabel();
       }
   }

   // Memuat data awal saat halaman pertama kali dimuat
   window.onload = function() {
       tampilkanTabel();
   };