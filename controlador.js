let juegos=document.getElementById("juegos")
let sobremi=document.getElementById("sobremi")
let musica=document.getElementById("musica")
let foto=document.getElementById("foto")
let titulo=document.getElementById("titulo")
let parrafo=document.getElementById("parrafo")
let parrafo2=document.getElementById("parrafo2")


/*--------------------------------------*/
/*-----         BOTON INFO         -----*/
/*--------------------------------------*/

function cambiarJuego(){
    foto.src="img/gears.jpg"
    titulo.textContent="Algunos de mis Hobbies"
    parrafo.textContent="Uno de ellos tiene conexión con mis ganas de programar, los videojuegos son mi hobby desde que tengo 10 años y fue gracias a mi padre que tenía un Xbox 360, empecé con juegos de accion sobre guerras y luego fui pasando a más variedades como aventura, sandbox, historias lineales, estrategicos."
    parrafo2.textContent="Pero ese no es mi unico hobby, también me gusta jugar futbol, ver freestyle (improvisación-batallas) y escuchar musica de cualquier genero aunque mi favorita es el RAP, Reggae junto con algunos clasicos de Reggaeton, estos hobbies han formado parte de mi vida y son causa de mi forma de ser hoy en día, incluso quiero comprar varios instrumentos musicales para practicar."
}

function cambiarSobremi(){
    foto.src="img/sobremi.jpg"
    titulo.textContent="Un poco sobre mí"
    parrafo.textContent="Soy Yeferson, un estudiante del CESDE que está cursando Desarrollo de software para crear sus propias paginas WEB y aplicaciones, y poder dedicarme a ello, las ganas de estudiar sobre software empezaron por jugar videojuegos y querer desarrollarlos yo mismo pero solo como un hobby"
    parrafo2.textContent="pesar de que aún no termino el curso ya pude realizar las practicas en una empresa dedicada a desarrollar formatos para facturas de venta, ya sean electronicas o fisicas, en dicha empresa estuve muy dedicado a trabajar con queryS de MySql."
}

function cambiarMusica(){
    foto.src="img/gona.jpg"
    titulo.textContent="Uno de mis artistas favoritos"
    parrafo.textContent="Llamado Gérman Romero pero es más conocido como GONA, es un cantante venezolano de RAP y reggae que ha tenido una gran trayectoria en los ultimos 10 años llegando a escenarios de Perú, Colombia e incluso España, su álbum más exitoso es `Ocho Lunas` y la canción más exitosa fue `Hasta las 3 de la mañana` perteneciente de Ocho Lunas"
    parrafo2.textContent="Conocí su musica en el 2016 y desde ese entonces no he dejado de escucharlo, también he tenido la oportunidad de conocerlo en un concierto que presento en Medellín hace 3 años."
}

musica.addEventListener("click",cambiarMusica)
sobremi.addEventListener("click",cambiarSobremi)
juegos.addEventListener("click",cambiarJuego)


/*--------------------------------------*/
/*-----       BOTON SPOTIFY        -----*/
/*--------------------------------------*/

function mostrar(){
    document.getElementById('botonescondido').style.display ='inline'
    }

function ocultar(){
    document.getElementById('botonescondido').style.display ='none'
    }

musica.addEventListener("click",mostrar)
sobremi.addEventListener("click",ocultar)
juegos.addEventListener("click",ocultar)




