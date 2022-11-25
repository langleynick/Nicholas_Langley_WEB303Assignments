$(function(){
    $.ajax({
        url: "data/characters.json",
        success: function(results){
            var $table = $("<table />");
            var $headers = $("<tr><th>Alias&nbsp;</th><th>First Name&nbsp;</th><th>Last Name&nbsp;</th><th>Actor&nbsp;</th><th>Date First Appeared(Comics)</th></tr>")
            $table.append($headers);
            var $tableBody = $('<tbody></tbody>');
            $table.append($tableBody);
            for (var i = 0; i < results.length; i++){
                var character = results[i];
                var $row = $('<tr><td>' + character.alias + '</td><td>' + character.firstName + '</td><td>' + character.lastName + '</td><td>' + character.actor + '</td><td>' + character.dateFirstAppeared + '</td></tr>');
                $tableBody.append($row);
            }
        $('#table').append($table);
        }
    });
    //TODO: ADD SORTING FUNCTIONS FOR EACH COLUMN
    $('tbody tr th').each(function(){
        
    });
});