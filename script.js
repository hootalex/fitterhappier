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
		$(".finalscore").addClass("displayscore");
    document.getElementById('audio').play();
  });
});
$(function(){
		$(".element").typed({
			strings: ["Click to begin"],
			typeSpeed: 0,
		});
});
function getLevenshteinenated(fob) {
	// get distance
	var distArray = levenshteinenator(fob.string_a.value, fob.string_b.value);
	var dist = distArray[ distArray.length - 1 ][ distArray[ distArray.length - 1 ].length - 1 ];
	// display distance
	var percentage = dist/1347*100;
	var score = (Math.round (percentage * 100) / 100);
	var scoretwo = 100-score;
	var scorethree = (Math.round (scoretwo * 100) / 100+"%");
	fob.result.value = scorethree;

	$('.finalscore p').text(scorethree);

}
