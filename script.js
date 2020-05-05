
https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=Ybp2Enfbu8Us8KYsgZUpwRGok8FvbLhO

// read the JSON file (or, get the live data from NYT)
var xmlhttp = new XMLHttpRequest();
var url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?&api-key=1YS9EjUVAybNrdX39EuY0iN09jVdLHQc";
//movies/genre
// https://api.nytimes.com/svc/movies/v2/url/nytimes.com/2020/04/28/movies/blood-quantum-review-inspired-splatter.html.json?&api-key=1YS9EjUVAybNrdX39EuY0iN09jVdLHQc


// way to add multiple strings into search queary? how to search results by page url.

 //your file name (or, the structured URL for API call)
var data = [];
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    data = JSON.parse(this.responseText);
    console.log(data);
    printReviews(data)
    //we'll do something here
  }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function printReviews(data){
	// console.log(results[0].abstract); //how to access specific data
	var results = data.results;
	for(i=0; i< results.length; i++){

var item = document.createElement("div");
    item.classList.add('reviews');

    var anchor = document.createElement("a");
    anchor.innerText = results[i].summary_short;
    anchor.href = results[i].link.url;
    anchor.target = "_blank";

    // var image = document.createElement("img");
    // // document.cookie = 'cross-site-cookie=bar; SameSite=None; Secure';

    // image.href = results[i].link.url;
    // var imageUrl;
    // for (j = 0; j < results[i].multimedia.length; j++){
    //     if (results[i].multimedia[j].type == "mediumThreeByTwo210") {
    //         break;
    //     }
    // }
    
    // image.src = "http://nytimes.com/" + imageUrl;


    item.appendChild(anchor);
    // document.querySelector('.left-half').appendChild(image);
    document.querySelector('.result').appendChild(item);





}

	};

// function printReviewPhotos(data){

//     // var results2 = data.results;
//     for(i=0; i< results[i].multimedia.length; i++){

//     var item2 = document.createElement("div")
//     item2.classList.add("review-images")
    
//     var articleImage = document.createElement("img");
//     articleImage.src = "http://www.nytimes.com/" + results.multimedia.src;
//     articleImage.href = results[i].link.url;
//     // articleImage.src = results[i].multimedia "http://www.nytimes.com/" + src;


//     item2.appendChild(articleImage);
//     document.querySelector('.left-half').appendChild(item2);

//     // console.log(item2);

// }
// };
	



