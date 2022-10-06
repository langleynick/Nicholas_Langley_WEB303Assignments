// WEB303 Assignment 2
// Programmed by: Nicholas Langley

$(function(){
    $('#prospect').on('click', function()
    {
        $('#content').hide();
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'prospect.html', true);
        xhr.onload = function()
        {
            if(this.status===200) 
            {
                let content = document.getElementById("content");
                content.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    });
    $('#convert').on('click', function()
    {
        $('#content').hide();
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'convert.html', true);
        xhr.onload = function()
        {
            if(this.status===200)
            {
                let content = document.getElementById("content");
                content.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    });
    $('#retain').on('click', function()
    {
        $('#content').hide();
        let xhr = new XMLHttpRequest;
        xhr.open('GET', 'retain.html', true);
        xhr.onload = function()
        {
            if(this.status===200)
            {
                let content = document.getElementById("content");
                content.innerHTML = xhr.responseText;
            }
        }
        xhr.send();
    });
});
