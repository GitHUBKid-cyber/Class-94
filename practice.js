
var firebaseConfig = {
    apiKey: "AIzaSyAtjROPZ9cesw4oDDrpXvmHtS3N-K__BmY",
    authDomain: "akshaj-rali-kwitter.firebaseapp.com",
    databaseURL: "https://akshaj-rali-kwitter-default-rtdb.firebaseio.com",
    projectId: "akshaj-rali-kwitter",
    storageBucket: "akshaj-rali-kwitter.appspot.com",
    messagingSenderId: "949537303920",
    appId: "1:949537303920:web:90678e28e6674e4049f3b5"
  };
    firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}