(function(window){
var goodbye={};
var bye="goodbye";
goodbye.speak=function(name){
    console.log(bye + " " + name)
}
window.goodbye=goodbye;
}
)(window);