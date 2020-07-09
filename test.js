const title = document.querySelector(".js-title"),
    content = document.querySelector(".js-content");

const SCROLL_UP = "scroll-up",
    SCROLL_UP_W = "scroll-up-wrapper",
    NAME = "PROGRAMMER 최현수";


// class list 에 중복되는 요소가 있으면 가장 뒤에 등자한 요소로 씀
// 그러니까 CSS 에서 이벤트 처리때 추가되는 놈들은 전부 하단으로 몰아넣을 것

function imgSize(tf){ // 이미지 크기조절
    const big = "30vh", small = "10vh";
    title.querySelector("img").style.maxWidth = tf ? big : small;
    title.querySelector("img").style.maxHeight = tf ? big : small;
}

// flex 는 set interver 로도 안되는듯..
function flexControl(){
    console.log("크기 변경");
    if (!title.classList.contains(SCROLL_UP)){ // 해당 클래스명을 갖고있지 않으면
        title.classList.add(SCROLL_UP); // 추가하고 화면 올림
        content.style.flex = 7;
        imgSize(false); // 이미지 크기 조절
        title.querySelector(".title-wrapper").classList.add(SCROLL_UP_W)
    }
    else{ // 있으면
        title.classList.remove(SCROLL_UP); // 제거하고 화면 내림
        content.style.flex = 0;
        imgSize(true);
        title.querySelector(".title-wrapper").classList.remove(SCROLL_UP_W)
    }
}

function wheelEvent(e){
    console.log("스크롤!!");
}

function clickEvent(e){
    console.log("클릭!!");
    flexControl();
}


function init(){
    // scroll 은 페이지가 이동할때만 반응하는듯..
    document.addEventListener("mousewheel", wheelEvent);
    document.querySelector(".js-title").addEventListener("click", clickEvent);

    title.querySelector("#js-name").innerHTML = NAME;
}

init();