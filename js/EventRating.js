function rate(broj){
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