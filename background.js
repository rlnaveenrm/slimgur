function redirect() {
  var myTitle = document.title;
  var myURL = document.URL;
  if(!(myURL.search(".gifv")>0||myURL.search(".jpg")>0||myTitle.search("Album on Imgur")>0||myURL.search("/a/")>0)){
    if(myURL.search("gallery")>0){
      if(myTitle.search("GIF on Imgur")>0){
        window.location = myURL.replace("/gallery/","/") + ".gifv";
      }
      else{
        window.location = myURL.replace("/gallery/","/") + ".jpg";
      }
    }
    else{
      if(myTitle.search("GIF on Imgur")>0){
        window.location = myURL + ".gifv";
      }
      else if(myURL.search("png")>0){
        window.location = myURL.replace(".png",".jpg");
      }
      else if(myURL.search("gif")>0){
        window.location = myURL + "v";
      }
      else{
        window.location = myURL + ".jpg" ;
      }
    }
  }
}

chrome.storage.sync.get(function(items) {
  if(items.saveState == true){
    document.addEventListener("DOMContentLoaded", redirect());
  }
});
