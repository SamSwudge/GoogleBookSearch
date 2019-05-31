//main.js
var query;
var api_url="https://www.googleapis.com/books/v1/volumes?q="


// Get Titles from Google Books.
$(document).on('keypress', function(e) {
    var query = $('#book-input').val();
    if(e.which == 13) {
        $('#searched').html("<h3>You searched for '" + query + "' </h3>")
        $.ajax({
            url: api_url + query,
            dataType: "json",
            contentType: "application/json",
            success: function (response) {
                console.log(response);
                res = document.getElementById("res");
                res.innerHTML = "" //Clear old entries.
                $('#book-input').val("") // Clear last search
                for (var i = 0; i < response.items.length; i++) {
                    var item = response.items[i];
                    var bookLinks = item.accessInfo.webReaderLink
                    var bookTitles = item.volumeInfo.title
                    var bookAuthors = item.volumeInfo.authors[0]
                    var links = "<br>" + "<div class='res-container'>" 
                    + "<a href='" 
                    + bookLinks 
                    + "'>" 
                    + bookTitles 
                    + "</a>" 
                    + "<span id='authors'>" 
                    + bookAuthors  
                    + "</span>" 
                    + "</div>"

                    res.innerHTML += links;
                }
        }
    });
    }
});