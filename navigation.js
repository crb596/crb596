function move(location){
    //Reassign active
    document.getElementsByClassName("active")[0].classList.remove("active");
    
    let img = document.getElementById("homeImage");
    img.src = "home.png" //Set default

    if(location == "home"){
        document.body.scrollTop = 0;
        img.classList.add("active");
        img.src = "homeactive.png"
    }
    else if(location == "film"){
        console.log("ran")
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
    // console.log(document.body.scrollTop + " " + (window.innerHeight + window.innerHeight * 0.9))
    console.log(window.innerHeight)
    let shift = 100; //Pixels to shift cutoff by
    //Home section
    console.log(document.body.scrollTop + ", " + window.innerHeight - 100)
    console.log(document.body.scrollTop < window.innerHeight - 100)
    if(document.body.scrollTop < window.innerHeight - 100){
        document.getElementsByClassName("active")[0].classList.remove("active");
        let img = document.getElementById("homeImage");
        img.classList.add("active");
        img.src = "homeactive.png" //Set active
    }
    //Film
    else if(document.body.scrollTop < 2 * window.innerHeight){
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("film").classList.add("active");
        let img = document.getElementById("homeImage");
        img.src = "home.png" //Set inactive
    }
    //Cast
    else if(document.body.scrollTop < 2 * window.innerHeight + window.innerHeight * 0.9){
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("cast").classList.add("active");
        let img = document.getElementById("homeImage");
        img.src = "home.png" //Set inactive
    }
    //Reviews
    else if(document.body.scrollTop < 3 * window.innerHeight + window.innerHeight * 0.9){
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("reviews").classList.add("active");
        let img = document.getElementById("homeImage");
        img.src = "home.png" //Set inactive
    }
    //Coming Soon
    else{
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("comingSoon").classList.add("active");
        let img = document.getElementById("homeImage");
        img.src = "home.png" //Set inactive
    }
}