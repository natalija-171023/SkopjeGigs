

function searchName() {

    var input, filter, nastani, list, i, br=0;
    input = document.getElementById("myInput");


    filter = input.value.toUpperCase();

    nastani = document.getElementById("nastani");
    list = nastani.getElementsByClassName('nastan');

    // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < list.length; i++) {
            person = list[i].innerHTML;
            if (person.toUpperCase().indexOf(filter) > -1) {
                list[i].closest(".nastan").style.display = "";
                br++;
            } else {
                list[i].closest(".nastan").style.display = "none";
            }
        }
    if (br === 0){

        var newLine = document.createElement("hr")
        var newNode = document.createElement('div');
        newNode.classList.add("noResult");
        // newNode.innerHTML = "<div> " +
        //     "<img src='./images/ghost.png' style=' height: 100px; position: absolute; left: 100px;'>" +
        //     "</div>";

            newNode.innerHTML = "<p>Sorry, we couln't come up with a result for your search.</p>" + "";





// Get the reference node
        var referenceNode = document.querySelector('.noResult');
        var referenceNode1 = document.querySelector("#nastani");
        if(referenceNode != null) {
            return null;
        } else{
            referenceNode1.parentNode.insertBefore(newNode, referenceNode);
        }



    }

}
function addName(){
    var inputDiv = document.getElementById("inputDiv");
    inputDiv.innerHTML = "<div class=\"text-center input-group-append\">\n" +
        "                                            <button class=\"btn btn-dark bg-dark\" title='Search by name' type=\"submit\" onclick=\"addName()\"><i class=\"fa fa-user\"></i></button>\n" +
        "                                            <button class=\"btn btn-dark bg-dark\" title='Search by date' type=\"submit\" onclick=\"addDate()\"><i class=\"fa fa-calendar\"></i></button>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <input type=\"search\" class=\"form-control\" onkeypress=\"return event.keyCode!=13\" onkeyup=\"searchName()\" id=\"myInput\" style=\"width: 50px;\" placeholder=\"Search here\">\n" +
        "\n" +
        "                                        <div class=\"input-group-btn\">\n" +
        "                                            <button class=\"btn btn-dark bg-dark\" type=\"button\">\n" +
        "                                                <i class=\"fa fa-search\"></i>\n" +
        "                                            </button>\n" +
        "                                        </div>"
}
function addDate(){
    var inputDiv = document.getElementById("inputDiv");
    inputDiv.innerHTML = "<div class=\"text-center input-group-append\">\n" +
        "                                            <button class=\"btn btn-dark bg-dark\" title='Search by name' type=\"submit\" onclick=\"addName()\"><i class=\"fa fa-user\"></i></button>\n" +
        "                                            <button class=\"btn btn-dark bg-dark\" title='Search by date' type=\"submit\" onclick=\"addDate()\"><i class=\"fa fa-calendar\"></i></button>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <input type=\"date\" class=\"form-control\" onkeypress=\"return event.keyCode!=13\" onsubmit=\'searchDate()\' id=\"myDate\" style=\"width: 50px;\" placeholder=\"Search here\">\n" +
        "\n" +
        "                                        <div class=\"input-group-btn\">\n" +
        "                                            <button class=\"btn btn-dark bg-dark\" type=\"button\"  onclick=\"searchDate()\">\n" +
        "                                                <i class=\"fa fa-search\"></i>\n" +
        "                                            </button>\n" +
        "                                        </div>"
}
function searchDate(){

    var inputDate, filterDate, nastani, listDati, ddConverted, i, dd;
    inputDate = document.getElementById("myDate");
    var br = 0;
    filterDate = inputDate.value;
    nastani = document.getElementById("nastani");
    listDati = nastani.getElementsByClassName("data");

    for (i = 0; i < listDati.length; i++) {
        dd = listDati[i].innerHTML;
        ddConverted = dd[6] + dd[7] + dd[8] +dd[9] + "-" + dd[3] + dd[4] + "-" + dd[0] + dd[1];
        // console.log(ddConverted);
        if (ddConverted.toUpperCase().indexOf(filterDate) > -1) {
            listDati[i].closest(".nastan").style.display = "";
            br++;
        } else {
            listDati[i].closest(".nastan").style.display = "none";
        }
    }
    if (br === 0){
        var newLine = document.createElement("hr")
        var newNode = document.createElement('div');
        newNode.classList.add("noResult");
        // newNode.innerHTML = "<div> " +
        //     "<img src='./images/ghost.png' style=' height: 100px; position: absolute; left: 100px;'>" +
        //     "</div>";
        newNode.innerHTML = "<p>Sorry, we couln't come up with a result for your search.</p>"+"";



// Get the reference node
        var referenceNode = document.querySelector('.noResult');
        var referenceNode1 = document.querySelector("#nastani");
        if(referenceNode != null) {
            return null;
        } else{
            referenceNode1.parentNode.insertBefore(newNode, referenceNode);
        }
    }

}
