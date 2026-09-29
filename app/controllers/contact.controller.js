// Tạo và lưu một liên hệ mới
exports.create = (req, res) => {
    res.send({ message: "create handler" });
};

// Trả về tất cả liên hệ có trong cơ sở dữ liệu
exports.findAll = (req, res) => {
    res.send({ message: "findAll handler" });
};

// Tìm một liên hệ duy nhất bằng id
exports.findOne = (req, res) => {
    res.send({ message: "findOne handler" });
};

// Cập nhật thông tin một liên hệ bằng id
exports.update = (req, res) => {
    res.send({ message: "update handler" });
};

// Xóa một liên hệ bằng id
exports.delete = (req, res) => {
    res.send({ message: "delete handler" });
};

// Xóa tất cả các liên hệ
exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

// Tìm tất cả các liên hệ được đánh dấu yêu thích (favorite = true)
exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};
