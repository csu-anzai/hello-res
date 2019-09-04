console.log("nm");
var na = document.getElementById("name");
// document.getElementById("name").innerHTML = "xx";
// document.getElementById("name").innerHTML = 5 + 6;
var c = document.cookie
document.write(c);
document.write("sd");

// 初始化计数器
var counter = 0;

// 递增计数器的函数
function add() {
    counter += 1;
}

// 调用三次 add()
add();
add();
add();

function change() {
    alert(1)
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var  val = this.responseText;
            alert(1)
            document.getElementById("name").innerHTML = val;
        }
    };


    xhttp.open("GET", "/apis/hello", false);
    xhttp.send();
}

function sendUrl() {
    $.get("/apis/hello", function (data, status) {
        alert(data + "~~~" + status)
    })
}

var flag = false;
function chanx() {
    // alert(1)
    $("#name").fadeToggle()
}

function submit() {
    alert(1)
    // var val = document.getElementById("myForm").serialize;
    // alert(val)
    return false;
}