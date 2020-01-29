$("button").click(function (e) {

    e.preventDefault();

    var APIKey = "q7cYqjgdTWrVYAfzuD6z9MIXvZOKKHzv"

    var userQuery = "&q=" + $("#searchTerm").val()
    console.log(userQuery) //key word input of user

    var startYear = "&begin_date=" + $("#startYear").val()//userinput
        + "0101"
    console.log(startYear)
    var endYear = "&end_date=" + $("#endYear").val()//userinput 
        + "1231"
    console.log(endYear);

    if ($("#startYear").val() === "" && $("#endYear").val() === "") {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + userQuery
    }

    else if ($("#endYear").val() === "") {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + userQuery + startYear
    }
    else {
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + userQuery + startYear + endYear
    }
    // Parameters go heres


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        var numOfRecords = $("#numOfArticles").val();
        if (numOfRecords === "") {

            var articleDump = $("#articleDump")
            var headline = $("<div>").html("<a href=" + response.response.docs[0].web_url + "></strong>" + response.response.docs[0].abstract + "</strong></a>")
            var description = $("<div>").text(response.response.docs[0].lead_paragraph)


            articleDump.prepend(description);
            articleDump.prepend(headline);

        } else {
            for (var i = 0; i < numOfRecords; i++) {

                var articleDump = $("#articleDump")
                var headline = $("<div>").html("<a href=" + response.response.docs[i].web_url + "><strong>" + response.response.docs[i].abstract + "</a>")
                var description = $("<div>").text(response.response.docs[i].lead_paragraph)


                articleDump.prepend(description);
                articleDump.prepend(headline);


            }
        }

    })

})
