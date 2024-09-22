function execute() {
    return  Response.success([
        { title: "Hot tháng", input: "https://vivicomi.online/", script: "gen.js" },
        { title: "Mới cập nhật", input: "https://vivicomi.online/page/", script: "gen.js" },
        { title: "Hot nhất", input: "https://vivicomi.online/truyen-hot-nhat/", script: "gen.js" }, 
        { title: "Xem nhiều", input: "https://vivicomi.online/nhieu-xem-nhat/", script: "gen.js" }, 
    ])
}