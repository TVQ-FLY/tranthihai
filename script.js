// Hiển thị ảnh (Thêm ảnh theo cấu trúc img + số thứ tự đuôi PNG vào Image)
// Tăng số lượng ảnh hiển thị ở biến totalImages
document.addEventListener("DOMContentLoaded", function() {
    const imageGrid = document.getElementById("image-grid");
    const totalImages = 36; // Số lượng ảnh mà bạn có

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

var typed = new Typed(".auto-text", {
    strings: ["Hải Cute", "Trần Thị Hải"],
    typeSpeed: 150, 
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".auto-text1", {
    strings: ["Thông Tin", "About"],
    typeSpeed: 150, 
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".auto-text2", {
    strings: ["Infor", "Profile"],
    typeSpeed: 150, 
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".auto-text3", {
    strings: ["Image", "Photo"],
    typeSpeed: 150, 
    backSpeed: 150,
    loop: true
})

var typed = new Typed(".auto-text4", {
    strings: ["Liên Hệ", "Contact"],
    typeSpeed: 150, 
    backSpeed: 150,
    loop: true
})