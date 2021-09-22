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
    console.log(document.body.scrollTop)
    //Home section
    if(document.body.scrollTop < window.innerHeight){
        console.log("home")
    }
    //Film
    else if(document.body.scrollTop < window.innerHeight + window.innerHeight * 0.9){
        console.log("film")
    }
    //Cast
    else if(document.body.scrollTop < window.innerHeight + window.innerHeight * 0.9 * 2){
        console.log("cast")
    }
    //Reviews
    else if(document.body.scrollTop < window.innerHeight * 2 + window.innerHeight * 0.9 * 2){
        console.log("reviews")
    }
    //Coming Soon
    else{
        console.log("coming soon")
    }
}