(function (window){
    var hello={};
    var hi="hello"
    hello.speak=function(name){
        console.log(hi + " " + name);
    }
    window.hello=hello;
})(window);