$(document).ready(function(){
    loadPage(window.location.hash);
    setClickEvents();
});

function loadPage(hash){
    hash = getHash(hash);
    let htmlpath = "../html/";
    let page = hash.substring(1, hash.length);
    let content = htmlpath + page + ".html";
    $("#content").load(content);
}

function getHash(hash){
    if(hash.length == 0){
        hash = "#about";
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
