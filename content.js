/*
const axios = require('axios');

const getBreeds = async () => {
  try {
    return await axios.get('https://dog.ceo/api/breeds/list/all');
  } catch (error) {
    console.error(error);
    return null;
  }
};

const countBreeds = async () => {
  const breeds = await getBreeds();
  
  if (breeds.data.message) {
    console.log();
  }
};
*/
// -----------------------
// 현재 axios 불러오는것부터 문제.. 자꾸 에러뜬다

function Introduce(base){
  console.log("Introduce");
/*
  let breeds = getBreeds();
  if(breeds.data.message){
      base.innerHTML = `현재 강아지의 수는 ${Object.entries(breeds.data.message).length}입니다.`
  }
  */
}
function Project(base){
    console.log("Project");
    base.innerHTML = "ced";
}
function Activity(base){
    console.log("Activity");
    base.innerHTML = "gdhfaad";
}
function Source(base){
    console.log("Source");
    base.innerHTML = "abasdfsafdsaf";
}

/* 해야할거
1. 내부 형태 제작
2. axios 연동 관련해서 연구하기
3. DB 구축 => 이건 지금 firebase 에 프로젝트만 생성함
4. api 관련 공부..
*/