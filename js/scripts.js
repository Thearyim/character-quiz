$(document).ready(function(){
  $("form#char-quiz").submit(function(event) {
    var question1 = $("input:radio[name=gender]:checked").val();
    var question2 = $("input:radio[name=fight]:checked").val();
    var question3 = $("input:radio[name=music]:checked").val();
    var question4 = $("input:radio[name=speak]:checked").val();
    var question5 = $("input:radio[name=machinegun]:checked").val();
    var question6 = $("input:radio[name=mind]:checked").val();


    if (question1 === "male" && question2 === "yes2" && question3 === "no3" && question4 === "yes4" && question5 === "no5") {
        $("#output").text(" Drax");
      } else if (question1 === "male" && question3 === "yes3" && question4 === "yes4" && question5 === "no5"){
        $("#output").text(" Star Lord");
      } else if (question1 === "male" && question4 === "no4" && question5 === "no5"){
        $("#output").text(" Groot");
      } else if (question1 === "male" && question5 === "yes5"){
        $("#output").text(" Racoon");
      } else if (question1 === "female" && question6 === "yes6"){
        $("#output").text(" Mantis");
      } else if (question1 === "female"){
        $("#output").text(" Gamora");
      } else {
        $("#output").text(" Yondu");
      }


    event.preventDefault();
  });

});
