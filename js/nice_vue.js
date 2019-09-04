

var vieData = {
    val:"xxl",
    msg:"mms"
}

var sites = [4,5,7,2,3]
function init() {
    new Vue({
        el: '#vie',
        data: vieData
    })

    new Vue({
        el: '#app',
        data: {
            sites: sites
        }
    })

}

function onclic() {
    sites.push(2)
    // alert(vieData.val + " !!! " + vieData.msg )
}

function helloVue() {
    vieData.msg = "hello"
}

function submitx() {
    alert($("#formx").serialize());
    return false;
}