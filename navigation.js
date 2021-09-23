//Called whenever the navigation bar is clicked, a string will be passed associated with each button
function move(location){
    //Reassign active
    document.getElementsByClassName("active")[0].classList.remove("active");
    
    let img = document.getElementById("homeImage");
    img.src = "home.png" //Set default home image

    //Home button
    if(location == "home"){
        document.body.scrollTop = 0;
        img.classList.add("active");
        img.src = "homeactive.png";  //Light up home iamge with active one
    }
    //Film button
    else if(location == "film"){
        document.body.scrollTop = parseInt(window.innerHeight);
        document.getElementById("film").classList.add("active");
    }
    //Cast button
    else if(location == "cast"){
        document.body.scrollTop = parseInt((2 * window.innerHeight)-100);
        document.getElementById("cast").classList.add("active");
    }
    //Review button
    else if(location == "reviews"){
        document.body.scrollTop = parseInt((3 * window.innerHeight)-2*100);
        document.getElementById("reviews").classList.add("active");
    }
    //Coming soon button
    else if(location == "coming soon"){
        document.body.scrollTop = parseInt((4 * window.innerHeight)-3*100);
        document.getElementById("comingSoon").classList.add("active");
    }

}

//Anytime onscroll event is called this function is called, reasigns active status depending on location of page
function scrollUpdate(){
    let shift = 100; //Pixels to shift cutoff by
    //Home section
    if(document.body.scrollTop < window.innerHeight){
        document.getElementsByClassName("active")[0].classList.remove("active");
        let img = document.getElementById("homeImage");
        img.classList.add("active");
        img.src = "homeactive.png" //Set active
    }
    //Film
    else if(document.body.scrollTop < (2 * window.innerHeight)-100){
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("film").classList.add("active");
        let img = document.getElementById("homeImage");
        img.src = "home.png" //Set inactive
    }
    //Cast
    else if(document.body.scrollTop < (3 * window.innerHeight)-2*100){
        document.getElementsByClassName("active")[0].classList.remove("active");
        document.getElementById("cast").classList.add("active");
        let img = document.getElementById("homeImage");
        img.src = "home.png" //Set inactive
    }
    //Reviews
    else if(document.body.scrollTop < (4 * window.innerHeight)-3*100){
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