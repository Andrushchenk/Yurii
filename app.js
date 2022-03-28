
// SCROLL
var anchors = [];
var currentAnchor = -1;
var isAnimating  = false;
$(function(){
    function updateAnchors() {
        anchors = [];
        $('.scroll').each(function(i, element){
            anchors.push( $(element).offset().top );
        });
    }
    $('body').on('mousewheel', function(e){
        e.preventDefault();
        e.stopPropagation();
        if( isAnimating ) {
            return false;
        }
        isAnimating  = true;
        if( e.originalEvent.wheelDelta >= 0 ) {
            currentAnchor--;
        }else{
            currentAnchor++;
        }
        if( currentAnchor > (anchors.length - 1)
           || currentAnchor < 0 ) {
            currentAnchor = 0;
        }
        isAnimating  = true;
        $('html, body').animate({
            scrollTop: parseInt( anchors[currentAnchor] )
        }, 500, 'swing', function(){
            isAnimating  = false;
        });
    });
    updateAnchors();



// SLAIDER
    let slider = $("#slaider");


    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        // fade:true,
        arrows:false,
        dots:true,
        autoplay: true,
        autoplaySpeed: 2500,
    });



 });


//  MASK
let mask = document.querySelector('.mask');

window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600)
});

