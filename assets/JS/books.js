// إظهار التفاصيل
function toggleDetails(button, detailsId) {
    const details = document.getElementById(detailsId);
    if (details.style.display === "block") {
        details.style.display = "none";
        button.innerText = "تفاصيل";
    } else {
        details.style.display = "block";
        button.innerText = "إخفاء التفاصيل";
    }
}
// إظهار النموذج
function openForm(bookTitle) {
    const modal = document.getElementById("modal-form");
    modal.style.display = "flex";
    console.log(`تم اختيار الكتاب: ${bookTitle}`);
}

// إغلاق النموذج
function closeForm() {
    const modal = document.getElementById("modal-form");
    modal.style.display = "none";
}

// إغلاق النافذة عند النقر خارج المحتوى
window.onclick = function (event) {
    const modal = document.getElementById("modal-form");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
