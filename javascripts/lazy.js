/* lazy.js (c) Cristian Dolce
 * semplice e piccolo script per il caricamento asincrono delle immagini
 * MIT License
 *
 * esempio:  
 * `<img src="1.png" data-lazy-src="image.jpg">`
 */
(function(){
    var lazy = Array.prototype.concat.apply([],document.querySelectorAll('*[data-lazy-src]')),
     height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    window.onscroll = function(e){
       loadImage();
    }
    function loadImage(){
        for(var i in lazy){
          var image = lazy[i],
          scrollTop = window.pageXOffset || document.body.scrollTop || document.documentElement.scrollTop,
          imageTop=image.getBoundingClientRect()['top'];
           if(imageTop-height < scrollTop){
             image.src = image.getAttribute('data-lazy-src');
              image.removeAttribute('data-lazy-src');
              delete lazy[i];
           }
        }
    }
    loadImage();
})();
