enyo.kind({
	name: "Aparcamientos",
	kind: "FittableRows",
  classes: "enyo-fit enyo-unselectable contentBg",
	components: [
      { kind:"Header",etiqueta:"Aparcamientos"},
      { kind:"Lista-Aparcamientos",name:"listaDatos"},
      { kind:"Footer" }
	],
 
	create: function(){
    this.inherited(arguments);
      this.conectorDatos();
	},
  
  conectorDatos:function() {
      var ajax = new enyo.Ajax({
          url:"../api-datos.php",
      });

      ajax.go({
              format:"json",
              peticion:"aparcamientos"
            });
      ajax.response(this, "processResponse");
  },

  processResponse:function(inRequest, inResponse){
    if (!inResponse) return;
    this.$.listaDatos.data=inResponse;
    this.$.listaDatos.refreshList();
  },
  
  addLista: function(inResult) {
    var datos=new Array();
    for (var i = 0; i < inResult.length; i++) {
      datos[i]={name:inResult[i]};
    }
      this.createComponent({
      kind: SearchableList,
      container: this.$.Contenedor,
      name: "Lista",
      data: datos,
      count:20
    });
  },
  actualizarLista: function(elemento){
    switch(elemento){
      case "Edificios":
            this.conectorDatos();
            break;
      case "Despachos":
            console.log("vamos a crear Despachos");
            break;
      case "Servicios":
            console.log("vamos a crear Servicios");
            break;
      case "Comedores":
            console.log("vamos a crear Comedores");
            break;
      case "Paradas de bus":
            console.log("vamos a crear Paradas de bus");
            break;
      case "Parkings":
            console.log("vamos a crear Parkings");
            break;
      default:
      break;
    }
  }
});