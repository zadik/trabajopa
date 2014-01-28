enyo.kind({
    name: "Cabecera",
    kind: "Control",
    components: [
        {
             kind: "onyx.Toolbar",
             layoutKind: "FittableColumnsLayout",
             components:[
             	{
             		tag:"h1",
             		fit:true,
             		content:"Mupos",
             		//classes:"headerTextTitle",
             		style:"text-align:left;color:lightblue;"
             	},
                {kind:"onyx.Button",name:"login",content:"Entrar", classes:"onyx-blue",ontap:"handleBtnNextPage"}
             ]
        },
        {kind: "PopupWindow", name: "popup", onWindowClosed: "closed"}
    ],
    
    handleBtnNextPage : function(inSender,inEvent){
      this.openUrl("../gestion/entrar.php");
    },
    openUrl : function(inSender) {
      this.$.popup.setUrl(inSender);
      this.$.popup.open();
    }
}); 