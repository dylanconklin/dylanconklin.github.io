$(document).ready(function(){
    let hash = getpage(window.location.hash);
    loadpage(hash);
    $("#about").click(function(){
        $("#content").load("../html/about.html");
    });
    $("#previous").click(function(){
        $("#content").load("../html/previous.html");
    });
    $("#table").click(function(){
        $("#content").load("../html/table.html");
    });
    $("#projects").click(function(){
        $("#content").load("../html/projects.html");
    });
});

function loadpage(hash){
    let htmlpath = "../html/";
    let content = htmlpath + hash + ".html";
    $("#content").load(content);
}

function getpage(hash){
    if(hash.length == 0){
        hash = "about";
    }else{
        hash = hash.substring(1, hash.length);
    }
    return hash;
}
