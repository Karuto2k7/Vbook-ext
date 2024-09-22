load('crypto.js');
load('config.js');
function execute(url) {
    url = url.replace(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n?]+)/img, BASE_URL);
    var doc = fetch(url).text()
    var regex = /htmlContent\s*=\s*(".*?");/g;
    var htmlContent = JSON.parse(regex.exec(doc)[1]);
    Console.log(htmlContent)
    var chapterHTML=CryptoJSAesDecrypt('EhwuFp'+'SJkhMV'+'uUPzrw',htmlContent)
    chapterHTML = chapterHTML.replace(/EhwuFp/g, '.');
    chapterHTML = chapterHTML.replace(/SJkhMV/g, ':');
    chapterHTML = chapterHTML.replace(/uUPzrw/g, '/');
    var images = Html.parse(chapterHTML).select("img")
    
    var listImage = []
    images.forEach(image=>{
        listImage.push(image.attr("data-ehwufp"))
    })
    return Response.success(listImage)
}


function CryptoJSAesDecrypt(passphrase, encrypted_json_string) {
        var obj_json = JSON.parse(encrypted_json_string);
        var encrypted = obj_json.ciphertext;
        var salt = CryptoJS.enc.Hex.parse(obj_json.salt);
        var iv = CryptoJS.enc.Hex.parse(obj_json.iv);
        var key = CryptoJS.PBKDF2(passphrase, salt, {
            hasher: CryptoJS.algo.SHA512,
            keySize: 64 / 8,
            iterations: 999
        });
        var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
            iv: iv
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
}