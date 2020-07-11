/* 외부 스크립트 불러오기 */
document.write("<script type='text/javascript' src='content.js'><"+"/script>");  

/* HTMLDOM 객체 */
const title = document.querySelector(".js-title"),
    content = document.querySelector(".js-content"),
    bar = document.querySelector("#content-bar"),
//    bar_li = bar.querySelectorAll("li"),
    side = document.querySelector(".content-side"),
    side_btn = document.querySelector("#side-btn"),
    content_in = content.querySelector(".content-wrapper");

/* 여러 고정 상수 (문자열) */
const SCROLL_UP = "scroll-up",
    SCROLL_UP_W = "scroll-up-wrapper",
    NAME = "PROGRAMMER 최현수",
    SELECT = "./resource/list_select.png",
    DEFAULT = "./resource/list_default.png",
    BTN_CLICK = "hide-side",
    BTN_ON = "./resource/menu_on.png",
    BTN_OFF = "./resource/menu_off.png",
    CONTENT_DATA = "content-data",
    CONTENT_LIST = [ "Introduce", "Project", "Activity", "Source" ]; 

/* 기타 페이지용 변수 */
let content_div = null,
    bar_li = [];

// 안쓰니까 지울까 고민중

// class list 에 중복되는 요소가 있으면 가장 뒤에 등자한 요소로 씀
// 그러니까 CSS 에서 이벤트 처리때 추가되는 놈들은 전부 하단으로 몰아넣을 것

function imgSize(tf){ // 이미지 크기조절
    const big = "30vh", small = "17vh";
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

function listClick(e) {
//    console.log([].indexOf.call(nodes, e.target));
    console.log("리스트 클릭!!");

    // 그냥 target 은 실제 클릭된 대상
    // currentTarget 은 해당 이벤트를 발생시킨 최상위 개체를 의미하는듯..
    bar_li.forEach(element => {
            element.querySelector(".bar-img").src = ( e.currentTarget.key == element.key ? SELECT :DEFAULT);
    });
    createContent(e.currentTarget.key); // 선택된 페이지로 결정
}

function btnClick(e){
    console.log("사이드바 버튼 클릭", e);

    // 숨겨져있으면 보여주고, 보여져있으면 숨김
    if(!side.classList.contains(BTN_CLICK)){
        side.classList.add(BTN_CLICK);
        side_btn.src=BTN_ON;
    }
    else{
        side.classList.remove(BTN_CLICK);
        side_btn.src=BTN_OFF;
    }
}

function init(){
    // scroll 은 페이지가 이동할때만 반응하는듯..
    document.addEventListener("mousewheel", wheelEvent);
    document.querySelector(".js-title").addEventListener("click", clickEvent);

    title.querySelector("#js-name").innerHTML = NAME;
    // 위쪽 바는 document.title 로 변경 ( 윈도우 아님 )
    document.title = "포트폴리오";


    // 좌측 메뉴 리스트 동적 생성
    CONTENT_LIST.forEach(element => {
        const l = document.createElement("li");
        const d1 = document.createElement("div");
        const i1 = document.createElement("img");
        i1.className = "bar-img";
        
        d1.appendChild(i1);
        d1.className = "bar-img-wrapper";

        const d2 = document.createElement("div");
        d2.innerHTML = element;
        d2.className = "bar-name";

        l.appendChild(d1);
        l.appendChild(d2); // 연달아서 쓰면 그 하위의 하위로 들어간다..

        console.log(l);
        bar_li.push(l);
    });

    // 각 리스트에 클릭리스너랑 번호값 지정
    for(let k = 0; k<bar_li.length; k++){
        bar.appendChild(bar_li[k]); // bar 내부에 추가

        bar_li[k].key = k; /* 각 리스트에게 키값 부여 */
        bar_li[k].querySelector(".bar-img").src = DEFAULT;
        bar_li[k].addEventListener('click', listClick);
    }
    side_btn.src = BTN_OFF;
    side_btn.addEventListener('click', btnClick);
}

// content 쪽 동적 생성
function createContent(number){
    const base = document.createElement("div");
    base.className = CONTENT_DATA;

    base.classList.add("content-" + CONTENT_LIST[number]) // 배경 섹 추가 테스트

     // 뭔가 들어간게 있으면 제거 후 추가
    if(content_div != null) content_in.removeChild(content_div);
    content_in.appendChild(base);
    content_div = base;

    switch(number){
        case 0:
            Introduce(base);
            break;
        case 1:
            Project(base);
            break;
        case 2:
            Activity(base);
            break;
        case 3:
            Source(base);
            break;
        default:
            break;
    }
}

init();