function getAccess(client_id, client_secret){ 
    var result = false; 
    $.ajax({
        async: false,
        type: "POST",
        url: "https://accounts.spotify.com/api/token",
        dataType: "json",
        data: {
            "grant_type": "client_credentials"
        },
        headers: {
            "Authorization": "Basic " + btoa(client_id + ":" + client_secret),
            "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function(data) {
            console.log("success");
            result = data;
        },
        error: function(data) {
            console.log("error"); 
            console.log(data);
        }
    })
    return result; 
}

function search_artist(query, token) {
    var result = false;
    $.ajax({
        async: false,
        type: "GET",
        url: "https://api.spotify.com/v1"+ "/search",
        dataType: "json",
        data: {
            q: query,
            type: "artist"
        },
        headers: {
            "Authorization": "Bearer " + token
        },
        success: function(data) {
            console.log(data);
            result = data; 
        },
        error: function(data) {
            console.log("error");
            console.log(data); 
        }
    })

    return result;
}