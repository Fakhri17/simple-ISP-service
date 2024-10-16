// Handle USSD code input validation
document.getElementById("checkCodeBtn").addEventListener("click", function () {
  const ussdInput = document.getElementById("ussdInput").value.trim();

  if (ussdInput === "*858#") {
    // Open USSD modal if the USSD code is correct
    const ussdModal = new bootstrap.Modal(document.getElementById("ussdModal"));
    // document.getElementById("ussdInput").value = "";
    ussdModal.show();
  } else {
    // sweetalert
    Swal.fire({
      title: "Kode USSD Salah",
      text: "Kode USSD yang Anda masukkan salah. Silakan coba lagi.",
      icon: "error",
      confirmButtonText: "OK",
    });
  }
});

// Handle Send button logic inside the USSD modal
document.getElementById("sendBtn").addEventListener("click", function () {
  const userInput = document.getElementById("userInput").value;
  document.getElementById("userInput").value = "";

  if (userInput === "1") {
    // Open Transfer Pulsa modal if the user selects option 1
    const transferModal = new bootstrap.Modal(
      document.getElementById("transferModal")
    );
    transferModal.show();
    document
      .getElementById("transferPulsaForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman normal

        // Ambil nilai input dari form
        const nomorPenerima = document.getElementById("nomorPenerima").value;
        const jumlahPulsa = document.getElementById("jumlahPulsa").value;

        // Tampilkan SweetAlert dengan informasi pengiriman
        Swal.fire({
          title: "Pengiriman Pulsa",
          text: `Pulsa terikirim ke ${nomorPenerima} dengan jumlah ${jumlahPulsa}.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            transferModal.hide();

            document.getElementById("transferPulsaForm").reset();
          }
        });
      });

    const ussdModal = bootstrap.Modal.getInstance(
      document.getElementById("ussdModal")
    );
    ussdModal.hide(); // Hide the USSD modal when Transfer Pulsa modal is opened
  } else if (userInput === "2") {
    // Open Minta Pulsa modal if the user selects option 2
    const mintaPulsaModal = new bootstrap.Modal(
      document.getElementById("mintaPulsaModal")
    );
    mintaPulsaModal.show();
    document
      .getElementById("requestPulsaForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman normal

        // Ambil nilai input dari form
        const nomorPenerima =
          document.getElementById("nomorPenerimaMinta").value;
        const jumlahPulsa = document.getElementById("jumlahPulsaMinta").value;

        // Tampilkan SweetAlert dengan informasi pengiriman
        Swal.fire({
          title: "Minta Pulsa",
          text: `Pulsa berhasil diminta ke ${nomorPenerima} dengan jumlah ${jumlahPulsa}.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            mintaPulsaModal.hide();

            document.getElementById("requestPulsaForm").reset();
          }
        });
      });
    const ussdModal = bootstrap.Modal.getInstance(
      document.getElementById("ussdModal")
    );
    ussdModal.hide(); // Hide the USSD modal when Minta Pulsa modal is opened
  } else if (userInput === "3") {
    // Open Auto TP modal if the user selects option 3
    const autoTpModal = new bootstrap.Modal(
      document.getElementById("autoTPModal")
    );
    autoTpModal.show();

    document
      .getElementById("autoTPForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman normal

        // Ambil nilai input dari form
        const nomorTujuan = document.getElementById("autoTPNumber").value;
        const jumlahPulsa = document.getElementById("autoTPAmount").value;
        const periode = document.getElementById("autoTPInterval").value;

        // Tampilkan SweetAlert dengan informasi pengiriman
        Swal.fire({
          title: "Auto Transfer Pulsa",
          text: `Pulsa berhasil diatur untuk dikirim ke ${nomorTujuan} dengan jumlah ${jumlahPulsa} setiap ${periode} interval.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            autoTpModal.hide();

            document.getElementById("autoTPForm").reset();
          }
        });
      });

    const ussdModal = bootstrap.Modal.getInstance(
      document.getElementById("ussdModal")
    );
    ussdModal.hide(); // Hide the USSD modal when Auto TP modal is opened
  } else if (userInput === "4") {
    // Open Delete Auto TP modal if the user selects option 4
    const deleteAutoTpModal = new bootstrap.Modal(
      document.getElementById("deleteAutoTPModal")
    );
    deleteAutoTpModal.show();
    

    document
      .getElementById("deleteTPForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman normal

        // Ambil nilai input dari form
        const nomorTujuan = document.getElementById("deleteTPNumber").value;

        // Tampilkan SweetAlert dengan informasi pengiriman
        Swal.fire({
          title: "Hapus Auto Transfer Pulsa",
          text: `Auto Transfer Pulsa ke ${nomorTujuan} berhasil dihapus.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            deleteAutoTpModal.hide();

            document.getElementById("deleteTPForm").reset();
          }
        });
      });

    const ussdModal = bootstrap.Modal.getInstance(
      document.getElementById("ussdModal")
    );
    ussdModal.hide(); // Hide the USSD modal when Delete Auto TP modal is opened
  } else if (userInput === "5") {
    console.log(userInput);
    console.log("Opening List Auto TP modal");
    // Open List Auto TP modal if the user selects option 5
    const modal5Modal = new bootstrap.Modal(
      document.getElementById("modal5Modal")
    );
    modal5Modal.show();

    const ussdModal = bootstrap.Modal.getInstance(
      document.getElementById("ussdModal")
    );
    ussdModal.hide(); // Hide the USSD modal when List Auto TP modal is opened
    
  } else if (userInput === "6") {
    // Open Cek Kupon Undian TP modal if the user selects option 6
    const cekKuponModal = new bootstrap.Modal(
      document.getElementById("cekKuponModal")
    );
    cekKuponModal.show();

    document
      .getElementById("cekKuponForm")
      .addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah form dari pengiriman normal

        // Ambil nilai input dari form
        const kodeKupon = document.getElementById("cekKuponNumber").value;

        // Tampilkan SweetAlert dengan informasi pengiriman
        Swal.fire({
          title: "Cek Kupon Undian TP",
          text: `Kupon undian dengan kode ${kodeKupon} berhasil dicek. Data kupon akan dikirimkan melalui SMS.`,
          icon: "success",
          confirmButtonText: "OK",
        }).then((result) => {
          if (result.isConfirmed) {
            cekKuponModal.hide();

            document.getElementById("cekKuponForm").reset();
          }
        });
      });

    const ussdModal = bootstrap.Modal.getInstance(
      document.getElementById("ussdModal")
    );
    ussdModal.hide(); // Hide the USSD modal when Cek Kupon Undian TP modal is opened
  } else {
    // Show an alert for invalid input
    alert("Pilihan nomor tidak tersedia");
  }
});
