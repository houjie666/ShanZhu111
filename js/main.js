(function(win,doc){
    //浏览器缩放时
    win.onresize = function(){
        change();
    };
    change();
    function change(){
        var oFs = doc.documentElement.clientWidth/640*20;
        //设置根目录字体大小
        doc.documentElement.style.fontSize = oFs + 'px';
    }
})(window,document);

var inp = document.getElementById("inp");
var img1 = document.getElementsByClassName('img1')[0];
var img2 = document.getElementsByClassName('img2')[0];
img1.onclick = function(){
    img2.style.display = "block";
    inp.type = "text"
};
img2.onclick = function(){
    img2.style.display = "none";
    inp.type = "password"
};

$('#success').hide();
$('#sure').click(function(){
    $('#success').show()
});
$('#success').click(function(){
    $(this).hide()
});






