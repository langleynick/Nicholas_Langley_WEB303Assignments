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
            this.id=id;
            this.name=name;
            this.description=description;
            this.category=category;
        }

        updateContentItem (id, name, description, category) {
            if (this.id == id && name, description, category !== null){
                name=this.name;
                description=this.description;
                category=this.category;
            } else {
                return;
            }
        }
        toString (){
            return '<div class="content-item-wrapper" id="content-item-' + this.ID + '"><h2>Name: ' + this.name + '</h2><br><p>Description: ' + this.description + '</p><br><div>Category: ' + this.category + '</div></div>';
        }
    }
    let steelers = new ContentItem(1, "Steelers", "Football Team out of Pittsburgh, PA", "NFL");
    let tigers = new ContentItem(2, "Tigers", "Baseball Team out of Detroit, MI", "MLB");
    let lakers = new ContentItem(3, "Lakers", "Basketball Team out of Los Angeles, CA", "NBA");
    let lancers = new ContentItem(4, "Lancers", "Football Team out of Windsor, ON", "OUA");
    let redWings = new ContentItem(5, "Red Wings", "Hockey Team out of Detroit, MI", "NHL");

    for (let i = 0; i < ContentItem.length; i++){
        $('div#content-item-list').append(team.toString());
    }
});


