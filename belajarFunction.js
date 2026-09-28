// Perbedaan Function modern dan tradisional dijavascript
// Function dari Javascript tradisional untuk membuat Fungsi setelah kita buat kode sebelumnya.
function cetakNama() {
    let namaDepan = "Wildan"
    let namaBelakang = "Malaki"
    const pesanan = ["nasi", "ayam", "goreng"]
    console.log("Halo mr. " ,namaDepan ,namaBelakang)
    console.log("berikut hasil pesananmu :", pesanan)
    console.log("Terima kasih sudah pesan direstoran kami..")
}
cetakNama();

// Function dari javascript modern yang biasanya ada direactJS. perbedaan yang paling mencolok adalah dari nama variabelnya "function" dan 
// "const"
const cetakNama2 = () => {
    let namaDepanBaru = "Wildan"
    let namaBelakangBaru = "Malaki"
    const pesanan = ["ini", "javaScript", "Modern"]
    console.log("Halo mr. " ,namaDepanBaru ,namaBelakangBaru)
    console.log("berikut hasil pesananmu :", pesanan)
    console.log("Terima kasih sudah pesan direstoran kami..")    
}
cetakNama2();