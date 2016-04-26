	autosize(document.querySelectorAll('textarea'));

$(document ).ready(function() {
  $('#p').keyup(function(){
      var a = $(this).val();
      getLevenshteinenated(this.form);
  });
});

$(document).ready(function() {
  $("#p").click(function() {

    $("#p").text("");
    $("#p").addClass("disappearcompletely");
    $(".progressfill").addClass("load");
    document.getElementById('audio').play();
  });
});
