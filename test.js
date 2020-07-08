const p2 = document.querySelector(".js-2"),
    p3 = document.querySelector(".js-3");

var f_timer;

// flex 는 set interver 로도 안되는듯..
function flexControl(){
    let val = p2.style.flex;
    console.log(val);
    if (val >= 2) clearInterval(f_timer);
    else {
        p2.style.flex = val + 0.2;
        console.log(p2.style.flex);
    }
}

function wheelEvent(e){
    console.log("스크롤!!");
}

function clickEvent(e){
    console.log("클릭!!");
    setInterval(flexControl,1000);
}

// scroll 은 페이지가 이동할때만 반응하는듯..
document.addEventListener("mousewheel", wheelEvent);
document.addEventListener("click", clickEvent);
