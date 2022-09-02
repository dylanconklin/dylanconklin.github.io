$(document).ready(function(){
    loadPage(window.location.hash);
    setClickEvents();
});

function loadPage(hash){
    let htmlpath = "../html/";
    let extension = ".html";
    hash = getHash(htmlpath, hash, extension);
    let page = getPage(htmlpath, hash, extension);
    $("#content").load(page);
}

function getPage (htmlpath, hash, extension){
    return htmlpath + hash.substring(1, hash.length) + extension;
}

function getHash(htmlpath, hash, extension){
    if(hash.length == 0){
        hash = "#about";
    }else{
        var result = null;
        var filePath = getPage(htmlpath, hash, extension);
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("GET", filePath, false);
        xmlhttp.send();
        if (xmlhttp.status == 200) {
            result = xmlhttp.responseText;
        }
        if (result == null) {
            hash = "#missing";
        }
    }
    return hash;
}

function setClickEvents(){
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        $(link.attributes.href.value).click(function(){
            loadPage(link.attributes.href.value);
        });
    });
}
