var firebaseConfig = {
    apiKey: "AIzaSyC-VQRpIdpWcwN65Ke3sBbGuGpeRYAGdYk",
    authDomain: "live-support-a8984.firebaseapp.com",
    projectId: "live-support-a8984",
    storageBucket: "live-support-a8984.appspot.com",
    messagingSenderId: "1076558872562",
    appId: "1:1076558872562:web:d2821bdc9ce9aca6de756b"
  };
  firebase.initializeApp(firebaseConfig);

  aw = prompt("Siapa nama kamu?");
  if(aw == null || aw == '') {
      window.location.reload();
  }
  else{
      alert("Selamat datang "+aw)
      $.ajax({
        url:'https://api.telegram.org/bot706508689:AAFjEIthPhxwCBxT9EAXrwntMFTTEi6CL94/sendMessage?chat_id=-500948056&text=LiveChat%20'+aw+'&parse_mode=markdown',
        method:'POST',
        });
  }

      setInterval(() => {
  document.querySelector(".message-body").style.height =
    window.innerHeight - 110 + "px";
}, 100);
var me = aw;
    document
      .querySelector(".message-input")
      .addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          firebase
            .database()
            .ref(aw)
            .push({
              user: me,
              msg: document
                .querySelector(".message-input")
                .value.trim()
                .replace(/</g, "&lt;"),
            });
          document.querySelector(".message-input").value = "";
          }
      });
    var id = "";
    firebase
      .database()
      .ref(aw)
      .on("child_added", (s) => {
        document.querySelector(".loader").style.opacity = "0";
        if (s.val().user === me) {
          if (id !== s.val().user)
            document.querySelector(".message-body").innerHTML +=
              '<div class="my-name">Kamu</div><div class="message-holder"><div class="my-text" onclick="deleteMsg(\'' +
              s.key +
              "')\" id=" +
              s.key +
              " >" +
              s.val().msg +
              "</div></div>";
          else
            document.querySelector(".message-body").innerHTML +=
              '<div class="message-holder"><div class="my-text" onclick="deleteMsg(\'' +
              s.key +
              "')\" id=" +
              s.key +
              ">" +
              s.val().msg +
              "</div></div>";
        } else {
          if (id !== s.val().user)
            document.querySelector(".message-body").innerHTML +=
              '<div class="their-name">' +
              s.val().user +
              '</div><div class="message-holder"><div class="their-text" id=' +
              s.key +
              ">" +
              s.val().msg +
              "</div></div>";
          else
            document.querySelector(".message-body").innerHTML +=
              '<div class="message-holder"><div class="their-text" id=' +
              s.key +
              ">" +
              s.val().msg +
              "</div></div>";
        }
        document.querySelector(".message-body").scrollBy(0, 1000);
        id = s.val().user;
    });
function pilihGambar(){
document.getElementById('imageFile').click();
}
function SendImage(event){
var file = event.files[0];
if(!file.type.match("image.*")){
  alert("Tolong pilih file tipe gambar ya")
}
else{
  var reader = new FileReader();
  reader.addEventListener("load", function () {
    firebase
          .database()
          .ref(aw)
          .push({
            user: me,
            msg: '<img src="'+reader.result+'"/>'
          });
  }, false);
  if(file){
    reader.readAsDataURL(file);
  }
}
}
function kembalilv() {
    window.location.href='http://www.devanka.my.id'
}
