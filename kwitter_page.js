//YOUR FIREBASE LINKS
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
    room_name = localStorage.getItem("room_name");

    document.getElementById("name").innerHTML="You are in room : " +room_name;

    function send(){
          msg=document.getElementById("msg").value;
          document.getElementById("msg").value="";
          firebase.database().ref(room_name).push({
                message : msg,
                name : username,
                likes : 0 
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
          
         Username = message_data['name'];
         message = message_data['message'];
         likes = message_data['likes'];

         console.log(message_data);
         console.log(firebase_message_id);

         name_with_tag = "<h4>"+Username+"<img class='user_tick' src='tick.png'></img>";
         msg = "<h4 class='message_h4'>"+message+"</h4>";
         button = "<button class = 'btn btn-warning' id='"+firebase_message_id+"' value="+likes+" onclick='add_likes(this.id)'>";
         button_with_value = "<span class='glyphicon glyphicon-thumbs-up'> Likes : "+ likes+"</span></button> <hr>";
         row= name_with_tag + msg + button + button_with_value;
         document.getElementById("output").innerHTML += row;


      } });  }); }
getData();


function add_likes(id){
      like = document.getElementById(id).value;
      updated_likes = Number(like) + 1;
      firebase.database().ref(room_name).child(id).update({
            likes : updated_likes
      });
}

function logout(){
      localStorage.removeItem("room_name");
      localStorage.removeItem("Username");
      window.location = "index.html";
}