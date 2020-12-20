// $(document).ready(function () {
// });

    let screemHeight = $(window).height();
    // console.log(screemHeight);

    $(window).scroll(function () {
        let currentPosition = $(this).scrollTop();
        // console.log(currentPosition);
        if(currentPosition >= screemHeight-100){
            $(".site-nav").addClass("site-nav-scroll")
        }else{
            $(".site-nav").removeClass("site-nav-scroll");
            // setActive("home");
        }
    });

    $(".navbar-toggler").click(function () {
        let result = $(".navbar-collapse").hasClass("show");
        console.log(result);

        if(result) {
            $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
        }else{
            $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
        }
    });


    var waypoints = $("#home").waypoint(function (direction) {
        console.log("I am home");
        $(".nav-link").removeClass("current-section");
        $(".nav-link[href='#home']").addClass("current-section");
       
    },{
        offset: '0%'
    });
    var waypoints = $("#about").waypoint(function (direction) {
        console.log("I am about");
        $(".nav-link").removeClass("current-section");

        $(".nav-link[href='#about']").addClass("current-section");
    },{
        offset: '25%'
    });
    var waypoints = $("#services").waypoint(function (direction) {
        console.log("I am services");
        $(".nav-link").removeClass("current-section");

        $(".nav-link[href='#services']").addClass("current-section");
    },{
        offset: '25%'
    });
    var waypoints = $("#pricing").waypoint(function (direction) {
        console.log("I am pricing");
        $(".nav-link").removeClass("current-section");

        $(".nav-link[href='#pricing']").addClass("current-section");
    },{
        offset: '25%'
    });
    var waypoints = $("#contactUs").waypoint(function (direction) {
        console.log("I am contact ");
        $(".nav-link").removeClass("current-section");

        $(".nav-link[href='#contactUs']").addClass("current-section");
    },{
        offset: '25%'
    });


// function setActive (current) {
    
//     $(".nav-link").removeClass("active");

//     $(`.nav-link[href='#$(current)']`).addClass("active");

// }

// function navScroll () {

//     let currentSection = $("section[id]");
//     currentSection.waypoint(function (direction) {

//         if(direction == "down"){
//             let currentSectionId = $(this.element).attr('id');
//             console.log(currentSectionId);
//             setActive(currentSectionId);
//         }
//     },{ offset: '150px'});

//     currentSection.waypoint(function (direction) {

//         if(direction == "up"){
//             let currentSectionId = $(this.element).attr('id');
//             console.log(currentSectionId);
//             setActive(currentSectionId);
//         }
//     },{ offset: '150px'});
// }

// navScroll();

// $(window).on("load", function () {
//     $(".loader-container").fadeOut(500);
//     $(this).remove();
// } );