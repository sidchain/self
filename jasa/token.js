function next() {
    var token = document.getElementById("tokennya").value;
    if(token == "www") {
        aa = "Devanka - RG 761"
        alert("Berhasil")
        document.getElementById("daftar").style.display = "none";
        document.getElementById("pembuka").style.display = "none";
        document.getElementById("masuk").style.display = "none";
        document.getElementById("welkam").style.display = "none";
        document.getElementById("jasa").style.display = "none";
        document.getElementById("kecocokan").style.display = "none";
        document.getElementById("token").style.display = "none";
        document.getElementById("review").style.display = "block";
        document.getElementById("bayar").style.display = "none";
        document.getElementById("konfirmasi").style.display = "none";
    }
    else {
        alert("failed")
    }
}
