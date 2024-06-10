/*
const axios = require("axios");
const cheerio = require("cheerio");

//console.log(axios.get("https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C")); //Promise { <pending> } 성공


const getHtml = async() => {
    try {
        return await axios.get("https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C")
    }
    catch(err){
        console.log(err);
    }
}

getHtml().then(
    (html) => {
        let ulList = [];

        const $ = cheerio.load(html.data) // cheerio.load 함수가 반환하는 객체가 $
        const $bodyList = $("div#searchList ol").children("li"); // div 태그의 id로 접근 후 ol태그까지 접근하고 자식태그 li에 접근.
        // console.log($bodyList);

        $bodyList.each((i, elem) => { //데이터 갯수 만큼 반복
            ulList[i] = {
                bookList : $(elem).find('a').text(), //bookList에는 글자들이 들어감
                url : $(elem).find('a').attr('href')
            }
        })

        return ulList; //반복 돌려서 저장한 다음에 반환
    })
.then((result)=>{console.log(result)}) //result = ulList
*/

const axios = require("axios");
const cheerio = require("cheerio");

//console.log(axios.get("https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C")); //Promise { <pending> } 성공


const getHtml = async() => {
    try {
        return await axios.get("https://roadbook.co.kr/category/%EC%8B%A0%EA%B0%84%EC%86%8C%EA%B0%9C")
    }
    catch(err){
        console.log(err);
    }
}

getHtml().then(
    (html) => {
        let ulList = [];

        const $ = cheerio.load(html.data) // cheerio.load 함수가 반환하는 객체가 $
        const $bodyList = $("div#searchList ol").children("li"); // div 태그의 id로 접근 후 ol태그까지 접근하고 자식태그 li에 접근.
        // console.log($bodyList);

        $bodyList.each(function(i){ //데이터 갯수 만큼 반복
            ulList[i] = {
                bookList : $(this).find('a').text(), //bookList에는 글자들이 들어감
                url : $(this).find('a').attr('href')
            }
        })

        return ulList; //반복 돌려서 저장한 다음에 반환
    })
.then((res)=>{console.log(res)}) //res = ulList