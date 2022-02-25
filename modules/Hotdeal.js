Hotdeal = new Object()

const DB = require("./DB.js")
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const cheersoup = require('cheersoup')


const { KnownChatType } = require('node-kakao');


Hotdeal.FMK = async function FMK(test=false,channels){

    let url = "https://www.fmkorea.com/hotdeal"

    let body = await ( await fetch(url,{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()


    let content = cheersoup(body).select("div.fm_best_widget._bd_pc").select("li").toArray()[0]

    let title = content.selectFirst("h3.title>a").ownText().trim()

    let temp = content.select("div.hotdeal_info>span").toArray().map(v=>v.text())

    let shop = temp[0]
    let price = temp[1]
    let delivery = temp[2]
    let URL = "https://www.fmkorea.com/" + content.selectFirst("a").attr("href")
    let category = content.select("div>span.category>a").text()


    // 이전 DB 불러오기 작업
    let title_DB = await DB.getDB("FMK_last_title") // DB에 저장된 title list

    try{
        if(title_DB != title || test == true){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("FMK_last_title",title)


        }
    }
    catch(e){

    }

    let str = `==${category} 핫딜==\n\n${title}\n\n${shop}\n${price}\n${delivery}\n\n링크 : ${URL}`


    channels.sendChat(str)



}





String.prototype.replaceAmp=function(){
    var res=this.toString();
    var tmp;
    while(tmp=/&#x....;/.exec(res)){
        res=res.replace(tmp[0],String.fromCharCode(parseInt(tmp[0].substr(3,4),16)));
    }
    while(tmp=/&#..;/.exec(res)){
        res=res.replace(tmp[0],String.fromCharCode(parseInt(tmp[0].substr(2,2))));
    }
    return res.replace(/&nbsp;/g,"\t").replace(/&gt;/g,">")
        .replace(/&lt;/g,"<").replace(/&quot;/g,'"')
        .replace(/&amp;/g,"&").replace(/&#034;/g,"\"");
}



module.exports = Hotdeal