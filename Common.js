
    // Hàm hiển thị thông báo
    function showAlert(message) {
        const alertBox = document.getElementById("customAlert");
        const alertMessage = document.getElementById("alertMessage");

        alertMessage.textContent = message; // Gắn thông báo vào popup
        alertBox.style.display = "block"; // Hiển thị popup

        // Tự động đóng sau 3 giây
        setTimeout(() => {
            closeAlert();
        }, 3000);
    }

    // Hàm đóng thông báo
    function closeAlert() {
        const alertBox = document.getElementById("customAlert");
        alertBox.style.display = "none"; // Ẩn popup
    }
