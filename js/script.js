$(document).ready(function(){


$.ajax({
  url: 'config.json',
  type: 'GET',
  dataType: 'json',
  success: function(keys){
    newsApiKey = keys.newsApiKey;
    getNewsData();
  },
  error: function(){
    console.log("cannot find config.json file, cannot run application");
  }
});
getNewsDataNZ = () => {
  $.ajax({
    url: `https://newsapi.org/v2/top-headlines?country=nz&apiKey=${newsApiKey}`,
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
