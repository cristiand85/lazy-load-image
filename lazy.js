(function(){
    var lazy = Array.prototype.concat.apply([],document.querySelectorAll('*[data-lazy-src]'));
    window.onscroll = function(e){
       loadImage();
    }
    function loadImage(){
        for(var i in lazy){
          var image = lazy[i],
          scrollTop = window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop,
          imageTop=image.getBoundingClientRect()['top'];
           if(imageTop < scrollTop){
             image.src = image.getAttribute('data-lazy-src');
              image.removeAttribute('data-lazy-src');
              delete lazy[i];
           }
        }
    }
    loadImage();
})();
