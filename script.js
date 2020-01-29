var APIKey = q7cYqjgdTWrVYAfzuD6z9MIXvZOKKHzv

var userQuery = "&q=" + ""//key word input of user

var startYear = "&begin_date=" + ""//userinput
    + "0101"

var endYear = "&end_date=" + "" //userinput 
    + "1231"



var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=" + APIKey + userQuery + startYear + endYear
// Parameters go heres
""

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

        var numOfRecords = "" // User Input

        for (var i = 0; i < numOfRecords, i++) {

            // Where will this show up?
            response[i];

        }

    })


