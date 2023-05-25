function add_user(){
    player1_name= document.getElementById("player1_name_input").value;
    player2_name= document.getElementById("player2_name_input").value;

    localStorage.setItem("local_player1_name", player1_name);
    localStorage.setItem("local_player2_name", player2_name);
    localStorage.setItem("local_player1_score", 0 );
    localStorage.setItem("local_player2_score", 0 );

    window.location= "game_page.html";
}