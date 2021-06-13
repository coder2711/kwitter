function log_in(){
    user_name = document.getElementById("Username").value;
    localStorage.setItem("Username" , user_name);
    window.location="kwitter_room.html";
}