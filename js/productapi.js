// tampil data
// $(document).ready(function(){
//    $.ajax({
//        url: 'https://crudcrud.com/api/8831987885ce48d5b3f60f2fd08d5ca2/users',
//        method: 'GET',
//        success: function(data) {
//            // Tampilkan data dalam bentuk tabel
//            data.forEach(function(item, index) {
//                var row = $('<tr>'); // Membuat elemen <tr> baru untuk setiap item
//                row.append('<td>' + (index + 1) + '</td>'); // Nomor urut
//                row.append('<td>' + item.name + '</td>');
//                row.append('<td>' + item.Jumlah + '</td>');
//                row.append('<td>' + item.harga + '</td>');

//                // Menambahkan satu kolom untuk tombol edit dan hapus
//                var actionCell = $('<td>');
//                var editButton = $('<button class="edit-btn">Edit</button>');
//                var deleteButton = $('<button class="delete-btn">Hapus</button>');

//                // Tambahkan jarak antara tombol
//                editButton.css('margin-right', '5px');

//                actionCell.append(editButton).append(deleteButton);
//                row.append(actionCell);

//                $('#data-container').append(row);
//            });
//        },
//        error: function(xhr, status, error) {
//            console.error(error);
//            // Tangani kesalahan jika ada
//        }
//    });
// });

// tambah data
$(document).ready(function(){
   $('#add-form').submit(function(event) {
       event.preventDefault(); // Menghentikan perilaku default form

       var formData = {
           name: $('#name').val(),
           Jumlah: $('#Jumlah').val(),
           harga: $('#harga').val()
       };

       $.ajax({
           url: 'https://crudcrud.com/api/c1919f3320e34f43b51c7976825ebf4a/users',
           method: 'POST',
           contentType: 'application/json',
           data: JSON.stringify(formData),
           success: function(data) {
               alert('Data berhasil ditambahkan!');
               // Reset form setelah data berhasil ditambahkan
               $('#add-form')[0].reset();
               window.location.href = 'productapi.html';
           },
           error: function(xhr, status, error) {
               console.error(error);
               alert('Terjadi kesalahan saat menambahkan data.');
           }
       });
   });
});
// Fungsi untuk kembali ke halaman sebelumnya saat tombol "Kembali" diklik
$('#backBtn').click(function() {
   window.history.back();
   });

// hapus data
$(document).ready(function(){
   // Fungsi untuk menghapus data
   function deleteData(id, row) {
       $.ajax({
           url: 'https://crudcrud.com/api/c1919f3320e34f43b51c7976825ebf4a/users/' + id,
           method: 'DELETE',
           success: function(data) {
               // Hapus baris tabel dari DOM setelah data berhasil dihapus
               row.remove();
               alert('Data berhasil dihapus!');
           },
           error: function(xhr, status, error) {
               console.error(error);
               alert('Terjadi kesalahan saat menghapus data.');
           }
       });
   }

   // Event listener untuk tombol hapus pada setiap baris tabel
   $('#data-container').on('click', '.delete-btn', function() {
       var row = $(this).closest('tr'); // Temukan baris tabel terdekat
       var id = row.attr('data-id'); // Ambil ID dari atribut data-id pada baris tabel
       var confirmation = confirm('Apakah Anda yakin ingin menghapus data ini?');
       if (confirmation) {
           deleteData(id, row); // Panggil fungsi deleteData untuk menghapus data
       }
   });

// Tampil Data
   $.ajax({
       url: 'https://crudcrud.com/api/c1919f3320e34f43b51c7976825ebf4a/users',
       method: 'GET',
       success: function(data) {
           // Tampilkan data dalam bentuk tabel
           data.forEach(function(item, index) {
               var row = $('<tr>'); // Membuat elemen <tr> baru untuk setiap item
               row.attr('data-id', item._id); // Menambahkan atribut data-id dengan nilai ID data
               row.append('<td>' + (index + 1) + '</td>'); // Nomor urut
               row.append('<td>' + item.name + '</td>');
               row.append('<td>' + item.Jumlah + '</td>');
               row.append('<td>' + item.harga + '</td>');

               // Menambahkan satu kolom untuk tombol edit dan hapus
               var actionCell = $('<td>');
               var editButton = $('<button class="edit-btn">Edit</button>');
               var deleteButton = $('<button class="delete-btn">Hapus</button>');

               // Tambahkan jarak antara tombol edit dan hapus
               editButton.css('margin-right', '5px');

               actionCell.append(editButton).append(deleteButton);
               row.append(actionCell);

               $('#data-container').append(row);
           });
       },
       error: function(xhr, status, error) {
           console.error(error);
           // Tangani kesalahan jika ada
       }
   });
});


// edit data
$(document).ready(function(){
   // Fungsi untuk mengambil data dengan ID tertentu
   function getDataById(id) {
       return $.ajax({
           url: 'https://crudcrud.com/api/c1919f3320e34f43b51c7976825ebf4a/users/' + id,
           method: 'GET'
       });
   }

   // Fungsi untuk memperbarui data
   function updateData(id, newData) {
       return $.ajax({
           url: 'https://crudcrud.com/api/c1919f3320e34f43b51c7976825ebf4a/users/' + id,
           method: 'PUT', // Anda dapat menggunakan metode PUT atau PATCH tergantung pada kebutuhan Anda
           contentType: 'application/json',
           data: JSON.stringify(newData)
       });
   }

   // Event listener untuk tombol edit pada setiap baris tabel
   $('#data-container').on('click', '.edit-btn', function() {
       var row = $(this).closest('tr'); // Temukan baris tabel terdekat
       var id = row.attr('data-id'); // Ambil ID dari atribut data-id pada baris tabel
       
       // Ambil data saat ini dengan ID tertentu
       getDataById(id)
           .done(function(data) {
               // Tampilkan formulir pra-diisi dengan nilai-nilai saat ini
               var newName = prompt('Masukkan nama baru:', data.name);
               var newJumlah = prompt('Masukkan jumlah baru:', data.Jumlah);
               var newHarga = prompt('Masukkan harga baru:', data.harga);

               // Perbarui data jika pengguna memasukkan nilai baru dan mengklik OK
               if (newName !== null && newJumlah !== null && newHarga !== null) {
                   var newData = {
                       name: newName,
                       Jumlah: parseInt(newJumlah),
                       harga: parseInt(newHarga)
                   };
                   updateData(id, newData)
                       .done(function(response) {
                           // Refresh halaman setelah data berhasil diperbarui
                           location.reload();
                       })
                       .fail(function(xhr, status, error) {
                           console.error(error);
                           alert('Terjadi kesalahan saat memperbarui data.');
                       });
               }
           })
           .fail(function(xhr, status, error) {
               console.error(error);
               alert('Terjadi kesalahan saat mengambil data.');
           });
   });
});