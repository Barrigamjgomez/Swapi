fetch('https://swapi.co/api/people/')
    .then(function(response)  {
        return response.json();
  })
    .then((data)=>{
      let name = data.results[0].name;
      let created = data.results[0].create;
      let skin_color = data.results[0].skin_color;
      console.log(data)
    
  $('.modal-body').append('<p> Nombre:' + name + '</p>' + '<p> Creación:' 
    + created + '</p>' + '<p>Nacimiento:' + skin_color + '</p>' );
    }) 

    .then((data)=>{
      let name2 = data.results[2].name;
      let created2 = data.results[2].create;
      let skin_color = data.results[2].skin_color;
      console.log(data)
    
  $('.modal-body').append('<h4 class="modal-title" id="myModalLabel">Caracteristicas de:'+ name +'</h4>' + '<p> Creación:' 
    + created2 + '</p>' + '<p>Nacimiento:' + skin_color + '</p>' );
    })       




