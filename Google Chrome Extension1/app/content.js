function logPass(data) {
    console.log(data);
}

function Post(u,d)
{
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST",u,true);
    //xmlhttp.open("GET",u,true);
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    xmlhttp.send(d);
    //xmlhttp.send();
}

function Get(u, d) {
    xmlhttp = new XMLHttpRequest();
    //xmlhttp.open("POST",u,true);
    xmlhttp.open("GET", u + "?" + d, true);
    //xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //xmlhttp.send(d);
    xmlhttp.send();
}

function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}

function Send()
{
    //var data = "href=" + b64EncodeUnicode(window.location.href) + "&pass=" + document.getElementById("accessCode").value;
    //logPass(data);
    var data = "href=" + b64EncodeUnicode(window.location.href);
    console.log(data);
    Post("http://localhost:8000", data);
}


console.log("Hello World!");
//document.getElementById("submitBtn").addEventListener("click", Send, false);
Send();
console.log("*****************end************");
