var APIKey = q7cYqjgdTWrVYAfzuD6z9MIXvZOKKHzv

var search = ""//input of user

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?apikey=" + APIKey + "&fq=" + search
// Parameters go heres
""

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {

    })


