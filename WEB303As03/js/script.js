$.getJSON("team.json", function getJson(result){
    $.each(result, function(){
        $('#team').append('<h2>Name: ' + this.name + '</h2>');
        $('#team').append('<h5>Position: ' + this.position + '</h5>');
        $('#team').append('<p>Bio: ' + this.bio + '</p>');
    })
});
$.get("team.json", function getAjax(result) {
    $('#team').prepend('<h1>Loading...</h1>');
    $.each(result, function(){
        $('h1').hide();
        $('#team').append('<h2>Name: ' + this.name + '</h2>');
        $('#team').append('<h5>Position: ' + this.position + '</h5>');
        $('#team').append('<p>Bio: ' + this.bio + '</p>');
    })
    $.fail(function(){
        $('#team').html('<p>Error: The content could not be loaded</p>')
    })
});
$(function(){
    getJson();
});