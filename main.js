var canvas=new fabric.Canvas("canvas");
player_x=10;
player_y=50;
blockimageheight=50;
blockimagewidth=50;
var player_object="";
var blockimageobject="";
function player_update(){
fabric.Image.fromURL("player.png",function(Img){
player_object=Img;
player_object.scaleToWidth(150);
player_object.scaleToHeight(100);
player_object.set({
top:player_y,left:player_x
});
canvas.add(player_object);
});
}
function block_update(getImage){
    fabric.Image.fromURL(getImage,function(Img){
    block_object=Img;
    block_object.scaleToWidth(blockimagewidth);
    block_object.scaleToHeight(blockimageheight);
    block_object.set({
    top:player_y,left:player_x
    });
    canvas.add(block_object);
    });
    }
window.addEventListener("keydown",keyclicked); 
    function keyclicked(e){
    keypressed=e.keyCode;
    console.log(keypressed);
    if (keypressed=="84") {
     block_update("trunk.jpg");
     console.log("t");
    };
    if (keypressed=="68") {
        block_update("dark_green.png");
        console.log("d");
       };
       if (keypressed=="76") {
        block_update("light_green.png");
        console.log("l");
       };   
       if (keypressed=="71") {
        block_update("ground.png");
        console.log("g");
       }; 
       if (keypressed=="87") {
        block_update("wall.jpg");
        console.log("w");
       };   
       if (keypressed=="89") {
        block_update("yellow_wall.png");
        console.log("y");
       };          if (keypressed=="82") {
        block_update("roof.jpg");
        console.log("r");
       };   
       if (keypressed=="67") {
        block_update("cloud.jpg");
        console.log("c");
       };   
       if (keypressed=="85") {
        block_update("unique.png");
        console.log("u");
       }; 
       if (e.shiftKey==true && keypressed=="80"){
       console.log("p")
       blockimageheight=blockimageheight+10;
       blockimagewidth=blockimagewidth+10;
       document.getElementById("current_height").innerHTML=blockimageheight;
       document.getElementById("current_width").innerHTML=blockimagewidth;
       };  
       if (e.shiftKey==true && keypressed=="77"){
        console.log("m")
        blockimageheight=blockimageheight-10;
        blockimagewidth=blockimagewidth-10;
        document.getElementById("current_height").innerHTML=blockimageheight;
        document.getElementById("current_width").innerHTML=blockimagewidth;
        };
        if (keypressed==37) {
      left()    
        }; 
        if (keypressed==38) {
        up()   
        };
        if (keypressed==39) {
        right()    
        };
        if (keypressed==40) {
         down()   
        };                     
};
function up(){
if (player_y>=10) {
player_y=player_y-blockimageheight;
canvas.remove(player_object);
player_update();    
}
};
function down(){
    if (player_y<=500) {
    player_y=player_y+blockimageheight;
    canvas.remove(player_object);
    player_update();    
    }
    };
    function left(){
    if (player_x>=10) {
player_x=player_x-blockimagewidth;
canvas.remove(player_object);
player_update();      
}
};
function right(){
if (player_x<=700) {
    player_x=player_x+blockimagewidth;
    canvas.remove(player_object);
    player_update();    
}
}