function addLoadEvent(func) {
//    func为将要绑定到window.onload上的函数
    var oldonload = window.onload ;//可能已经绑定了yixie函数
    if (typeof window.onload != 'function'){
        //    如果在这个处理函数上还没有绑定任何函数，救下给平时那样把心寒树添加给它
        window.onload = func() ;
    }
    else {
        //如果在这个处理函数上已经绑定了一些函数，就把新函数追加到现在指令的末尾
        window.onload = function () {
            oldonload() ;
            func() ;
        }
    }
}

function Hover() {
    var Lis = document.getElementsByName("li") ;
    for(var i = 0, len = Lis.length; i < len; i++){
        Lis[i].onmouseover = function () {
            var secondUI = this.getElementsByTagName("ul")[0] ;
            if(secondUI != undefined){
                secondUI.style.display = "block" ;
            }
            this.style.backgroundColor = "#0066ff" ;
        }
        Lis[i].onmouseout = function () {
            var secondUI = this.getElementsByTagName("ul")[0] ;
            if (secondUI != undefined){
                secondUI.style.display = "none";
            }
            this.style.backgroundColor = '#eee' ;
        }
    }
}

addLoadEvent(Hover) ;