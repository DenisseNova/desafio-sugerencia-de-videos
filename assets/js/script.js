class Multimedia{
  constructor (_url){
    this.url= _url 
  }
  get url(){
    return this.url
  }


}

class Reproductor extends Multimedia{
  constructor(_url){

  }
}

function video(url, id){
  let idVideo = document.getElementById(id);
  idVideo.setAttribute('src', url)
}