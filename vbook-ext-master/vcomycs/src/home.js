function execute() {
    return  Response.success([
        { title: "Hot tháng", input: "https://vivicomi.com/", script: "gen.js" },
        { title: "Mới cập nhật", input: "https://vivicomi.com/page/", script: "gen.js" },
        { title: "Hot nhất", input: "https://vivicomi.com/truyen-hot-nhat/", script: "gen.js" }, 
        { title: "Xem nhiều", input: "https://vivicomi.com/nhieu-xem-nhat/", script: "gen.js" }, 
    ])
}