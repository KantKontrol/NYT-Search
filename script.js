var APIKey = q7cYqjgdTWrVYAfzuD6z9MIXvZOKKHzv

var userQuery = "&q=" + ""//key word input of user



var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=" + APIKey + search + article
// Parameters go heres
""

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        var numOfRecords = "" // User Input

        for (var i = 0; i < numOfRecords, i++) {

            response[i];

        }

    })


