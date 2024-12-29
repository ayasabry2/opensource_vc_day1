
function counttag() {
    var tag = document.getElementsByTagName("div");
    return tag.length;
}
function countclas() {
    var clas = document.getElementsByClassName("content");
    return clas.length;
}
function countid() {
    var id = document.getElementById("result");
    if (id && id.checked) {
        return true;
    }
    return false;
}
function countname() {
    var name = document.getElementsByName("choose");
    return name.length;
}
function result() {
    var inputtag=document.getElementById("input1").value;
    var inputclass=document.getElementById("input2").value;
    var inputid=document.getElementById("input3").value;
    var inputname= document.getElementById("input4").value;

    var tags = counttag(inputtag);      
    var classes = countclas(inputclass);    
    var ids = countid(inputid);       
    var names = countname(inputname);      

    var outputField = document.getElementById("outputfield");
    outputField.value = `Tags: ${tags} `+ `Classes: ${classes}`+ `IDs: ${ids}`+ `Names: ${names}`;
}
