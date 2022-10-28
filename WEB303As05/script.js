/*
    Assignment 05
    Nicholas Langley
*/

$(document).ready(function () {
    class ContentItem {
        id;
        name;
        description;
        category;

        constructor(id, name, description, category){
            this.id = id;
            this.name = name;
            this.description = description;
            this.category = category;
        }

        updateContentItem (id, name, description, category) {
            if (id == this.id && name, description, category !== null){
                this.name = name; 
                this.description = description;
                this.category = category;
            } else {
                return;
            }
            }
        toString (){
            return '<div class="content-item-wrapper" id="content-item-' + this.id + '"><h4>Name: ' + this.name + '</h4><p>Description: ' + this.description + '</p><div>Category: ' + this.category + '</div></div>';
        }
    }
    let steelers = new ContentItem(0, "Steelers", "Football Team out of Pittsburgh, PA", "NFL");
    let tigers = new ContentItem(1, "Tigers", "Baseball Team out of Detroit, MI", "MLB");
    let lakers = new ContentItem(2, "Lakers", "Basketball Team out of Los Angeles, CA", "NBA");
    let lancers = new ContentItem(3, "Lancers", "Football Team out of Windsor, ON", "OUA");
    let redWings = new ContentItem(4, "Red Wings", "Hockey Team out of Detroit, MI", "NHL");

    let array = [steelers, tigers, lakers, lancers, redWings];

    for (let i = 0; i <= array.length; i++){
        $('div#content-item-list').append(array[i].toString());
        $('div.content-item-wrapper').css({
            "border" : "1px solid red",
            "width" : "80%",
            "padding" : "15px",
            "margin" : "0 auto",
            "margin-top" : "10px"
        });
    }
});


