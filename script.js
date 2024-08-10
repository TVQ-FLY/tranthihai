// Ẩn nội dung webiste với mật khẩu
// const a = document.querySelector(".content-body")
// function askForPassword() {
//     var correctPassword = '27'; // Thay thế bằng mật khẩu của bạn
//     var password = prompt('Nhập vào ngày sinh của bạn (ví dụ: 01)');

//     if (password === correctPassword) {
//         a.classList.remove("hidden")
//     } else {
//         alert('Mật khẩu không đúng, bạn không phải là cô ấy vui lòng dừng truy cập =((');
//         // Tùy chọn: Chuyển hướng người dùng ra khỏi trang
//         window.location.href = 'https://google.com';
//     }
// }

askForPassword();

// Hiển thị ảnh (Thêm ảnh theo cấu trúc img + số thứ tự đuôi PNG vào Image)
// Tăng số lượng ảnh hiển thị ở biến totalImages
document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById("image-grid");
    const totalImages = 51; // Số lượng ảnh mà bạn có

    for (let i = 1; i <= totalImages; i++) {
        const img = document.createElement("img");
        img.src = `Image/img${i}.png`; // Tên file ảnh theo thứ tự
        img.alt = `Image ${i}`;
        img.classList.add("w-full", "h-auto");
        const col = document.createElement("div");
        col.classList.add("image-container"); // Thêm lớp CSS cho thẻ div chứa ảnh
        col.appendChild(img);
        imageGrid.appendChild(col);
    }
});