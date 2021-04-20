window.onload = init;
function init(){

$("form").submit(function(event){

});

$("form").submit(function(e) {
	e.preventDefault ();
$("#results").removeClass('reveal');
	var form =this;
	console.log(this);
	$(".overlay-container").fadeIn(1000, function(){
		showformValues(form);
		$('.overlay-container')delay(500).fadeOut(500);
	$("#results").addClass('reveal');
})
});
function showforValues(form){
	var formVaules =$(form).serializeArray ();
	console.log(formValues);
$.each(formVaule, function(index,field))
console.log($('#' + field.name + "_result");
var input_value =$.trim(field.value);
$("#results").find("#"=field.name+"_result").text(input_value);
if(field.name=="email"){
	$("#results").find("#"+field.name+"_result").
		attr("href", "malito:"+field.value);
}
