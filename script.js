var url = window.location.toString()
console.log("hi")
console.log(url)
var patt = new RegExp("^https:\/\/www\.udemy\.com\/course");
var res = patt.test(url);
if (res){
  window.open(document.querySelectorAll('video.vjs-tech')[0].getAttribute('src'), '_blank')
}
