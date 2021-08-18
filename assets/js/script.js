function video(url, id){
  let idVideo = document.getElementById(id);
  idVideo.setAttribute('src', url)
}

function videoPublica(url, id){
  video(url, id)
} 

class Multimedia{
  constructor (_url){
    this.url= _url 
  }
  get url(){
    return this.url
  }
  setInicio (){
    return "Este método es para realizar un cambio en la URL del video";
};
}

class Reproductor extends Multimedia{
  constructor(url, id){
    super(url);
    this._id = id;
    this._getId = () =>this._id
};
playMultimedia (){
    let id = this._getId();
    let url = this._url;
    sugerenciaVideo.mostrar(id, url);
};
setInicio (){
    let id = this._getId();
    let url = this._url;
    url += `?start=${tiempo}`;
    sugerenciaVideo.mostrar(id, url);
};
}

let musica = new Reproductor("https://www.youtube.com/embed/eB-b0o0BDr4", "musica");
let pelicula = new Reproductor("https://www.youtube.com/embed/mQXzv_eO9XE","peliculas");
let serie = new Reproductor ("https://www.youtube.com/embed/P4che0rdoQ0", "series");

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

