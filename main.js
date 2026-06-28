

document.addEventListener('DOMContentLoaded', function () {
    new Splide('#skills-marquee', {
    type       : 'loop',     
    drag       : 'free',      
    focus      : 'center',   
    perPage    : 3,           
    arrows     : false,      
    pagination : false,       
    autoScroll : {
        speed: 1,              
        pauseOnHover: true,     
    },
    breakpoints: {
        768: {
        perPage: 3,          
        },
        425: {
        perPage: 2,           
        }
    }
    }).mount( window.splide.Extensions ); 
});