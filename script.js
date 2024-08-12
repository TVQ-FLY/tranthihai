// Ẩn nội dung webiste với mật khẩu
const a = document.querySelector(".content-body")
function askForPassword() {
    var correctPassword = '27072004'; // Thay thế bằng mật khẩu của bạn
    var password = prompt('Nhập vào ngày sinh của bạn (ví dụ: 01012001)');

    if (password === correctPassword) {
        a.classList.remove("hidden")
    } else {
        alert('Mật khẩu không đúng, bạn không phải là cô ấy vui lòng dừng truy cập =((');
        // Tùy chọn: Chuyển hướng người dùng ra khỏi trang
        window.location.href = 'https://google.com';
    }
}

askForPassword();


// Loading... 
document.addEventListener("DOMContentLoaded", function() {
    // Chờ 3 giây trước khi ẩn loading và hiển thị nội dung
    setTimeout(function() {
        // Thay đổi trạng thái hiển thị khi nội dung DOM đã sẵn sàng
        var loading = document.getElementById("loading");
        var content = document.getElementById("content");

        // Ẩn loading và hiện nội dung
        loading.style.display = "none";
        content.style.visibility = "visible";
    }, 1000); // 3000 ms = 3 giây
});



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