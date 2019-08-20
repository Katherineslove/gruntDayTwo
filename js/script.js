$(document).ready(function(){

  $.ajax({
      type: 'GET',
      url: 'config.json',
      dataType: 'json',
      error: (error) => {
          console.log(error);
      },
      success: (data) => {
          key = data.newsApiKey;
          getNewsData();
      }
    });

getNewsData = () => {
  $.ajax({
    url: `https://newsapi.org/v2/everything?apiKey=${newsApiKey}`,
    type: 'GET',
    dataType: 'json',
    success: function(dataFromNewsApi){
      console.log(dataFromNewsApi);
      newsArticleList.empty();
      if (dataFromNewsApi.articles.length === 0) {
        console.log(`There are no news articles`);
      } else {
        dataFromNewsApi.articles.map(function(articles){
          console.log(`${articles.title}, ${articles.description}`);
        })
      }
    },
    error: function(){
      console.log("something went wrong");
    }
  })
}


});
