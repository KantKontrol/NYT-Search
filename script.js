var APIKey = q7cYqjgdTWrVYAfzuD6z9MIXvZOKKHzv

var search = "&fq=" + ""//key word input of user

var article = "&_id=" + ""//article user input

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=" + APIKey + search + article
// Parameters go heres
""

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

    })


