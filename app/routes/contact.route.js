const express = require("express");
const contacts = require("../controllers/contact.controller"); // Nạp bộ xử lý controller vào

const router = express.Router(); // Khởi tạo một Router con của Express

// Tuyến đường có đường dẫn gốc "/"
router.route("/")
    .get(contacts.findAll)      // GET  / -> Lấy toàn bộ danh sách
    .post(contacts.create)      // POST / -> Tạo liên hệ mới
    .delete(contacts.deleteAll); // DELETE / -> Xóa sạch danh sách

// Tuyến đường dành cho danh sách yêu thích "/favorite"
router.route("/favorite")
    .get(contacts.findAllFavorite); // GET /favorite -> Lấy danh sách yêu thích

// Tuyến đường có tham số biến số ID "/:id"
router.route("/:id")
    .get(contacts.findOne)     // GET  /:id -> Xem chi tiết 1 liên hệ
    .put(contacts.update)      // PUT  /:id -> Cập nhật 1 liên hệ
    .delete(contacts.delete);   // DELETE /:id -> Xóa 1 liên hệ

module.exports = router; // Xuất cấu hình tuyến đường này ra ngoài
