$(document).ready(function(){
  $("form#char-quiz").submit(function(event) {
    var question1 = $("input:radio[name=gender]:checked").val();
    var question2 = $("input:radio[name=fight]:checked").val();
    var question3 = $("input:radio[name=music]:checked").val();
    var question4 = $("input:radio[name=speak]:checked").val();
    var question5 = $("input:radio[name=machinegun]:checked").val();
    var question6 = $("input:radio[name=mind]:checked").val();


    if (question1 === "male" && question2 === "yes2" && question3 === "no3" && question4 === "yes4" && question5 === "no5") {
      $("#output").text("Drax!");
      $("p#output").after('<img src="img/drax.jpeg"/>')
      $("#quiz").hide();
      $("#result").show();
    } else if (question1 === "male" && question3 === "yes3" && question4 === "yes4" && question5 === "no5"){
      $("#output").text("Star Lord!");
      $("p#output").after('<img src="img/starlord.jpeg"/>')
      $("#quiz").hide();
      $("#result").show();
    } else if (question1 === "male" && question4 === "no4"){
      $("#output").text("Groot!");
      $("p#output").after('<img src="img/groot.jpeg"/>')
      $("#quiz").hide();
      $("#result").show();
    } else if (question1 === "male" && question5 === "yes5"){
      $("#output").text("Raccoon!");
      $("p#output").after('<img src="img/raccoon.jpeg"/>')
      $("#quiz").hide();
      $("#result").show();
    } else if (question1 === "female" && question6 === "yes6"){
      $("#output").text("Mantis!");
      $("p#output").after('<img src="img/mantis.jpeg"/>')
      $("#quiz").hide();
      $("#result").show();
    } else if (question1 === "female"){
      $("#output").text("Gamora!");
      $("p#output").after('<img src="img/gamora.jpeg"/>')
      $("#quiz").hide();
      $("#result").show();
    } else {
      $("#output").text("Yondu!");
      $("p#output").after('<img src="img/yondu.jpeg"/>')
      $("#quiz").hide();
      $("#result").show();
    }

    event.preventDefault();
  });

  $("#goBack").click(function(){
    $("#quiz").show();
    $("#result").hide();
    location.reload();
  });

});
