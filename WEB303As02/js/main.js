// WEB303 Assignment 2
// Programmed by: Nicholas Langley

$(function(){

    let xhr = new XMLHttpRequest;

    $('a#prospect').on('click', function()
    {
        $('div#content').hide();
        xhr.open("GET", "prospect.html", true);
        xhr.onload = function()
        {
            if(this.status===200) 
            {
                let content = document.getElementById("content");
                content.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
        $('div#content').fadeIn(1000);
    });

    $('a#convert').on('click', function()
    {
        $('div#content').hide();
        xhr.open("GET", "convert.html", true);
        xhr.onload = function()
        {
            if(this.status===200)
            {
                let content = document.getElementById("content");
                content.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
        $('div#content').fadeIn(1000);
    });

    $('a#retain').on('click', function()
    {
        $('div#content').hide();
        xhr.open('GET', "retain.html", true);
        xhr.onload = function()
        {
            if(this.status===200)
            {
                let content = document.getElementById("content");
                content.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
        $('div#content').fadeIn(1000);
    });
});
