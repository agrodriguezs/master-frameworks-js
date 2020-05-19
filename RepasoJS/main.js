//alert("hola mundo");

    /*document.write(nombre + ' '+ altura);*/

var datos = document.getElementById("datos");

var arregloDatos = ["uno","dos","tres","cautro","cinco","seis","siete"];

var coche = {
    modelo: "Explorer 6",
    marca: "Ford",
    peso: 1500,
    year: 2010,
    mostrarDatos(){
        console.log(this.modelo, this.peso, this.marca);
    },
    capacidad: "6 personas"

}
coche.mostrarDatos();
document.write(coche.marca+", "+coche.modelo+' '+coche.year);

/*datos.innerHTML = "EL nombre es " + nombre;    
datos.innerHTML += " y la altura es " + altura;*/

function MisDatos(nombre,altura){
    var datos = "";
    datos = `<hr />
                        <h1>Informacion</h1>
                        <h2>El nombre es: ${nombre}</h2>
                        <h3>Su altura es: ${altura}</h3>`;
    datos += analizarAltura(altura);    
    return datos;
}

function analizarAltura(altura){
    var datos = "";
    if (altura >= 175){
        datos = `<h3>Eres una persona alta</h3>`;
    }else {
        datos = `<h3>Eres una persona bajita</h3>`;
    }
    return datos;
    
}
function verArregloFor(arreglo){
    var datos = `<h3>usando For</h3>`;
    for (let i = 0; i < arregloDatos.length; i++) {
        datos += `-- ${arregloDatos[i]}<br/>`;
        
    }  
    return datos;  
}
function verArregloForEach(arreglo){
    arregloDatos.forEach((dato)=>{
        document.write(dato+'/');
    }); 
    document.write('<hr />');
}
function verArregloMap(arreglo){
    document.write('<h2>Usando Map</h2>');
    arregloDatos.map((dato) => {
        document.write(dato+';');
     }); 
     document.write('<hr />');
}

function imprimir(datos){
    document.write(datos);
}

imprimir(MisDatos("Adriana Gabriela Rodriguez Sanabria", 150));
imprimir(verArregloFor(arregloDatos));
verArregloForEach(arregloDatos);
verArregloMap(arregloDatos);

var saludar = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let saludo = "hola, buenos dias";
        saludo = false;
        if(saludo){
            resolve(saludo);
        }else{
            reject('no hay saludo');
        }

    },2000 );
});

saludar.then(resultado => {
    alert(resultado);
})
.catch(err =>{
    alert(err);
 });