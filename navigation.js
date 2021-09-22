function move(location = "home"){
    //Reassign active
    document.getElementsByClassName("active")[0].classList.remove("active");
    
    let img = document.getElementById("homeImage");
    img.source = "home.png" //Set default

    if(location == "home"){
        document.body.scrollTop = 0;
        img.classList.add("active");
        img.src = "homeactive.png"
    }
    else if(location == "film"){
        document.body.scrollTop = parseInt(window.innerHeight);
        document.getElementById("film").classList.add("active");
    }
    else if(location == "cast"){
        document.body.scrollTop = parseInt(window.innerHeight + window.innerHeight * 0.9);
        document.getElementById("cast").classList.add("active");
    }
    else if(location == "reviews"){
        document.body.scrollTop = parseInt(window.innerHeight + window.innerHeight * 0.9 * 2);
        document.getElementById("reviews").classList.add("active");
    }
    else if(location == "coming soon"){
        document.body.scrollTop = parseInt(window.innerHeight * 2 + window.innerHeight * 0.9 * 2);
        document.getElementById("comingSoon").classList.add("active");
    }

}

function scrollUpdate(){
    let shift = 100; //Pixels to shift cutoff by
    //Home section
    if(document.body.scrollTop < window.innerHeight + shift){
        console.log("home")
        let img = document.getElementById("homeImage");
        img.source = "homeactive.png" //Set default

    }
    //Film
    else if(document.body.scrollTop < window.innerHeight + window.innerHeight * 0.9 + shift){
        console.log("film");
        document.getElementById("film").classList.add("active");
    }
    //Cast
    else if(document.body.scrollTop < window.innerHeight + window.innerHeight * 0.9 * 2 + shift){
        console.log("cast")
        document.getElementById("cast").classList.add("active");
    }
    //Reviews
    else if(document.body.scrollTop < window.innerHeight * 2 + window.innerHeight * 0.9 * 2 + shift){
        console.log("reviews")
        document.getElementById("reviews").classList.add("active");
    }
    //Coming Soon
    else{
        console.log("coming soon")
        document.getElementById("comingSoon").classList.add("active");
    }
}