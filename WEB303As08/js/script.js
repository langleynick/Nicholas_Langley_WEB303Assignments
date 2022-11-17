$(function(){
    $.ajax({
        url: "data/characters.json",
        success: function(results){
            var $table = $("<table />");
            var $headers = $("<tr><th>Alias&nbsp;</th><th>First Name&nbsp;</th><th>Last Name&nbsp;</th><th>Actor&nbsp;</th><th>Partner</th></tr>")
            $table.append($headers);
            var $tableBody = $('<tbody></tbody>');
            $table.append($tableBody);
            for (var i = 0; i < results.length; i++){
                var character = results[i];
                var $row = $('<tr><td>' + character.alias + '</td><td>' + character.firstName + '</td><td>' + character.lastName + '</td><td>' + character.actor + '</td><td>' + character.partner + '</td></tr>');
                $tableBody.append($row);
            }
        $('#table').append($table);
        }
    });
    $('#firstNameSearch').on('input', function(){
        $fNameFilter = $(this).val().toLowerCase();
        $('table tr td:nth-child(2)').filter(function(){
            if($(this).text().toLowerCase().indexOf($fNameFilter) > -1){
                $(this).css({
                    "background-color" : "darkgreen",
                    "color" : "white"
                });
            } if ($fNameFilter == ""){
                $(this).css({
                    "background-color" : "white",
                    "color" : "black"
                });
            }
        });
    })
});