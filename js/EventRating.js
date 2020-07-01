var stars = 0;

function rate(broj){
    stars = broj;
    i=1;
    while(i<=broj)
    {
        n=document.getElementById(i);
        n.innerHTML="&starf;";
        i++;
    }
    while(i<6)
    {
        n=document.getElementById(i);
        n.innerHTML="&star;";
        i++;
    }

}

function addComment(){

    var comment = document.getElementById("comment").value;
    var ime = document.getElementById("ime").value;
    var txt = "<img src=\"images/user2.png\" style=\"width: 50px; height: 50px;\" class=\"rounded-circle mr-2\">\n" +
        "                            <div class=\"media-body\">\n" +
        "                                <h4 ><span id='myIme'></span> <span id='myStars' class=\"text-warning\" style=\"font-size: small\"></span></h4>\n" +
        "                                <p id='myComment'>Can't wait!</p>\n" +
        "                            </div>\n" +
        "                        </div>";
    // Create a new element

    var newLine = document.createElement("hr")
    var newNode = document.createElement('div');
    newNode.classList.add("media", "kom");
    newNode.innerHTML = txt;


// Get the reference node
    var referenceNode = document.querySelector('.kom');
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
    referenceNode.parentNode.insertBefore(newLine, referenceNode);
    document.getElementById("myIme").innerText = ime;
    document.getElementById("myComment").innerText = comment;
    var stars1;
    switch (stars){
        case 1 : stars1 ='&starf;&star;&star;&star;&star;'; break;
        case 2 : stars1 ='&starf;&starf;&star;&star;&star;'; break;
        case 3 : stars1 ='&starf;&starf;&starf;&star;&star;'; break;
        case 4 : stars1 ='&starf;&starf;&starf;&starf;&star;'; break;
        case 5 : stars1 ='&starf;&starf;&starf;&starf;&starf;'; break;
    }
    document.getElementById("myStars").innerHTML = stars1;

}