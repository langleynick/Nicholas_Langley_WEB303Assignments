$(function(){
    $.ajax({
        url: "data/characters.json",
        success: function(results){
            var $table = $("<table class='sortable' />");
            var $headers = $("<thead><tr><th data-sort='name'>Alias</th><th data-sort='name'>First Name</th><th data-sort='name'>Last Name</th><th data-sort='name'>Actor</th><th data-sort='date'>Date First Appeared(Comics)</th></tr></thead>")
            $table.append($headers);
            var $tableBody = $('<tbody></tbody>');
            $table.append($tableBody);
            for (var i = 0; i < results.length; i++){
                var character = results[i];
                var $row = $('<tr><td>' + character.alias + '</td><td>' + character.firstName + '</td><td>' + character.lastName + '</td><td>' + character.actor + '</td><td>' + character.dateFirstAppeared + '</td></tr>');
                $tableBody.append($row);
            }
        $('h1').append($table);
        var compare = {
            name: function (a,b) {
                a = a.replace(/^the /i, '');
                b =  b.replace(/^the /i, '');
        
                if (a < b) {
                    return -1;
                } else {
                    return a > b ? 1 : 0;
                }
            },
            duration: function (a, b){
                a = a.split(':');
                b = b.split(':');
        
                a = Number(a[0])* 60 + Number(a[1]);
                b = Number(b[0])* 60 + Number(a[1]);
        
                return a - b;
            },
            date: function (a, b) {
                a = new Date(a);
                b = new Date(b);
        
                return a - b;
            }
           };
           $('.sortable').each(function(){
            var $table = $(this);
            var $tbody = $table.find('tbody');
            var $controls = $table.find('th');
            var rows = $tbody.find('tr').toArray();
            var originalRows = $tbody.find('tr');

            $controls.on('click', function(){
                var $header = $(this);
                var order = $header.data('sort');
                var column;
        
                if($header.is('.ascending')) {
                    $header.removeClass('ascending');
                    $header.addClass('descending');
                    $tbody.append(rows.reverse());
                } else if($header.is('.descending')){
                    $header.removeClass('descending');
                    $tbody.append(originalRows);
                } else {
                    $header.addClass('ascending');
                    $header.siblings().removeClass('ascending descending');
        
                    if(compare.hasOwnProperty(order)) {
                        column = $controls.index(this);
                        rows.sort(function(a,b){
                            a = $(a).find('td').eq(column).text();
                            b = $(b).find('td').eq(column).text();
                            return compare[order](a,b);
                        });
                        $tbody.append(rows);
                    }
                }
            })
           })
        }
    });
    //TODO: ADD SORTING FUNCTIONS FOR EACH COLUMN
})