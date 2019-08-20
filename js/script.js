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
          getNewsDataNZ();
      }
    });

getNewsDataNZ = () => {
  $.ajax({
    url: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${key}`,
    type: 'GET',
    dataType: 'json',
    success: function(dataFromNewsApi){
      console.log(dataFromNewsApi);
      if (dataFromNewsApi.articles.length === 0) {
        console.log(`There are no news articles`);
      } else {
        dataFromNewsApi.articles.map(function(articles){
        console.log(articles);
        });
      }
    },
    error: function(){
      console.log("something went wrong");
    }
  });
};

getNewsDataUS = () => {
  $.ajax({
    url: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`,
    type: 'GET',
    dataType: 'json',
    success: function(dataFromNewsApi){
      console.log(dataFromNewsApi);
      if (dataFromNewsApi.articles.length === 0) {
        console.log(`There are no news articles`);
      } else {
        dataFromNewsApi.articles.map(function(articles){

        });
      }
    },
    error: function(){
      console.log("something went wrong");
    }
  });
};


});
