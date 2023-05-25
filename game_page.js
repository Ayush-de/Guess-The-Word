player1_name=localStorage.getItem("local_player1_name");
player2_name=localStorage.getItem("local_player2_name");
player1_score=localStorage.getItem("local_player1_score");
player2_score=localStorage.getItem("local_player2_score");

document.getElementById("player1_name").innerHTML=player1_name+ " : ";
document.getElementById("player2_name").innerHTML=player2_name+ " : ";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question Turn - "+ player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+ player2_name;

function submit(){
    get_word= document.getElementById("word").value;
    word= get_word.toLowerCase();
    console.log("Word in lowercase= "+ word);

    first_character=word.charAt(1);
    console.log(first_character);

    length_divide_by_2= Math.floor(word.length/2);
    second_character=word.charAt(length_divide_by_2);
    console.log(second_character);

    length_minus_1=word.length-1;
    third_character=word.charAt(length_minus_1);
    console.log(third_character);

    remove_first_character=word.replace(first_character, "_");
    remove_second_character=remove_first_character.replace(second_character, "_");
    remove_third_character=remove_second_character.replace(third_character, "_");
    console.log(remove_third_character);

    question_word="<h4 id='word_display'>Question: "+ remove_third_character+ "</h4><br>";
    input_box="Answer: <input type='text' id='input_checkbox'><br><br>";
    check_button="<button class='btn btn-info' onclick='check()'>Check</button>";
    row= question_word+ input_box+ check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}

question_turn= "player1";
answer_turn= "player2";

function check(){
    get_answer=document.getElementById("input_checkbox").value;
    answer=get_answer.toLowerCase();
    console.log("Answer in lowercase= "+ answer);

    if(answer==word){
        if(answer_turn=="player1"){
            player1_score=Number(player1_score);
            player1_score=player1_score+ 1;
            localStorage.setItem("local_player1_score", player1_score);
            player1_score_from_local_storage=localStorage.getItem("local_player1_score");
            document.getElementById("player1_score").innerHTML= player1_score_from_local_storage;

        } else{
            player2_score=Number(player2_score);
            player2_score=player2_score+ 1;
            localStorage.setItem("local_player2_score", player2_score);
            player2_score_from_local_storage=localStorage.getItem("local_player2_score");
            document.getElementById("player2_score").innerHTML= player2_score_from_local_storage;
        }
    }

    if(question_turn=="player1"){
        question_turn="player2";
        document.getElementById("player_question").innerHTML="Question turn- "+ player2_name;
    } else{
        question_turn="player1";
        document.getElementById("player_question").innerHTML="Question turn- "+ player1_name;
    }

    if(answer_turn=="player1"){
        answer_turn="player2";
        document.getElementById("player_answer").innerHTML="Answer turn- "+ player2_name;
    } else{
        answer_turn="player1";
        document.getElementById("player_answer").innerHTML="Answer turn- "+ player1_name;
    }
    document.getElementById("output").innerHTML="";
}