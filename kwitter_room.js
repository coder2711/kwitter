var firebaseConfig = {
      apiKey: "AIzaSyCI5bmuQmmrxoGJNAdFqpufk6jqqoMBoig",
      authDomain: "kwitter-c6339.firebaseapp.com",
      databaseURL: "https://kwitter-c6339-default-rtdb.firebaseio.com",
      projectId: "kwitter-c6339",
      storageBucket: "kwitter-c6339.appspot.com",
      messagingSenderId: "139922481575",
      appId: "1:139922481575:web:dc1c10466e588544e95682",
      measurementId: "G-SRJ5JZDGMM"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("Username");
    document.getElementById("name").innerHTML="Welcome "+username+"!";

    function add(){
          room_name= document.getElementById("room_name").value;
          localStorage.setItem("room_name" , room_name);

          firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"   
          });
          window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room name = " + Room_names);
      row= "<div class='room_name' id="+Room_names+" onclick='redirectToPage(this.id)'>"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToPage(name){
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "kwitter_page.html";
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username");
      window.location="index.html";
}