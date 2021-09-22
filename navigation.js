function move(location = "home"){
    console.log(document.body.scrollTop);
    if(location == "home"){
        document.body.scrollTop = 0;
    }
    else if(location == "film"){
        document.body.scrollTop = parseInt(window.innerHeight);
    }
    else if(location == "cast"){
        document.body.scrollTop = parseInt(window.innerHeight + window.innerHeight * 0.9);
    }
    else if(location == "reviews"){
        document.body.scrollTop = parseInt(window.innerHeight + window.innerHeight * 0.9 * 2);
    }
    else if(location == "coming soon"){
        document.body.scrollTop = parseInt(window.innerHeight * 2 + window.innerHeight * 0.9 * 2);
    }
}