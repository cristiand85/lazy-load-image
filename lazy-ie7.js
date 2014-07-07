/* lazy.js (c) Cristian Dolce
 * semplice e piccolo script per il caricamento asincrono delle immagini
 * MIT License
 *
 * esempio:  
 * `<img src="1.png" data-lazy-src="image.jpg">`
 */
document.querySelectorAll||(document.querySelectorAll=function(a){var b=document,c=b.documentElement.firstChild,d=b.createElement("STYLE");return c.appendChild(d),b.__qsaels=[],d.styleSheet.cssText=a+"{x:expression(document.__qsaels.push(this))}",window.scrollBy(0,0),b.__qsaels});
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

