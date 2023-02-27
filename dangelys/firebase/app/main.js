$(document).ready(function(){

    const firebaseConfig = {
        apiKey: "AIzaSyD8PIZd2WbrXIsOW9rdhYFTfMimpuUm_kU",
        authDomain: "unidad-iv.firebaseapp.com",
        projectId: "unidad-iv",
        storageBucket: "unidad-iv.appspot.com",
        messagingSenderId: "881588879504",
        appId: "1:881588879504:web:c430d513af6c60d1e39815",
        measurementId: "G-3P0M1EKWFK"
      };
    
      // Initialize Firebase
      const app = firebase.initializeApp(firebaseConfig);
      console.log(app);
      
})

//registrar usuarios

$("#btn-registrar").click(function(){
    //capturar el email y el paswsord
    let email = $("#email").val();
    let password = $("#password").val();

    //console.log(email,pass); ///comprobamos si captura los datos

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log("creaste una nueva cuenta");

    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
})