$("button").click(function () {



    var APIKey = q7cYqjgdTWrVYAfzuD6z9MIXvZOKKHzv

    var userQuery = "&q=" + $("#searchTerm").val() //key word input of user

    var startYear = "&begin_date=" + $("#startYear").val()//userinput
        + "0101"

    var endYear = "&end_date=" + $("#endYear").val()//userinput 
        + "1231"



    var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + userQuery + startYear + endYear
    // Parameters go heres
    ""

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var numOfRecords = $("numOfArticles").val();

        for (var i = 0; i < numOfRecords; i++) {

            var articleDump = $("#articleDump")
            var headline = $("<div>").html("<a href=" + response[i].web_url + ">" + response[i].abstract + "</a>")
            var description = $("<div>").text(response[i].lead_paragraph)


            articleDump.prepend(description);
            articleDump.prepend(headline);


        }


    })
})
