UOSP = new Object()

const DB = require("./DB.js")
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const puppeteer = require('puppeteer')
const imgSizeSync = require('image-size')
const cheersoup = require('cheersoup')

const { KnownChatType } = require('node-kakao');






UOSP.UOSP1 = async function UOSP1(test=false,channel=CH){

    str = "";
    SW_new = 0;

    let body = await ( await fetch("http://www.uos.ac.kr/korNotice/list.do?list_id=FA1",{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    title_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").text())
    address_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").attr("href").split("'")[3])
    publisher_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("span").text())

    title = title_array[0]
    address = address_array[0]
    publisher = publisher_array[0]

    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    title_list = JSON.parse(await DB.getDB("UOSP1_last_title")) // DB에 저장된 title list
    address_list = JSON.parse(await DB.getDB("UOSP1_last_address")) // DB에 저장된 title list


    try{
        if(title_list.indexOf(title) || address_list.indexOf(address)){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("UOSP1_last_title",JSON.stringify(title_array))
            await DB.setDB("UOSP1_last_address",JSON.stringify(address_array))

        }
    }
    catch(e){

    }


    if (SW_new == 1 || test == true) {

        let pre_text = `일반공지 : ${title}`
        let header_title = "일반공지알림"
        let link = `http://www.uos.ac.kr/korNotice/view.do?list_id=FA1&seq=${address}&epTicket=INV`
        let str = `일반공지 알림 : ${title}\n보러가기 : ${link}`

        if (test==true){
            browser = await puppeteer.launch({
                headless: false,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
        }
        else{
            browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });
        }

        

        try{
            let page = await browser.newPage();
            await page.goto(link, { waitUntil: 'networkidle0', timeout: 0 })
            await page.setViewport({ width: 2500, height: 20000 })
            //let buffer = await page.screenshot({ path: './images/RNDJM.png' })
            //let buffer = await page.screenshot()
            //let buffer = await (await page.$('div[id=wrap]')).screenshot()
            let buffer = await (await page.$('div.wid')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            channel.sendChat(str)

            await channel.sendMedia(KnownChatType.PHOTO, {
                name: "UOSP1.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });
        }
        catch(e){
            console.log("UOSP1 image error : " + e)
            await browser.close()
            channel.sendChat(str)
        }



    }

    

}

/*
UOSP.UOSP1 = async function UOSP1(){ // 일반공지 파싱
    let str = ""
    let SW_new = 0; // 새로운 공지가 파싱되었을 경우 1이됨


    let body = await ( await fetch("http://www.uos.ac.kr/korNotice/list.do?list_id=FA1",{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let $ = cheerio.load(body)
    let title1 = $("ul.listType>li:not(.on)>a").eq(0).contents().filter(function(){
        return this.nodeType==3
    }).text().trim().replaceAmp()
    let address1 = $("ul.listType>li:not(.on)>a").eq(0).attr("onclick").split("'")[3]
    let publisher = $("ul.listType>li:not(.on)>ul>li").eq(0).contents().filter(function(){
        return this.nodeType==3
    }).text().trim().replaceAmp()

    let title2 = $("ul.listType>li:not(.on)>a").eq(1).contents().filter(function(){
        return this.nodeType==3
    }).text().trim().replaceAmp()

    let title3 = $("ul.listType>li:not(.on)>a").eq(2).contents().filter(function(){
        return this.nodeType==3
    }).text().trim().replaceAmp()

    let title4 = $("ul.listType>li:not(.on)>a").eq(3).contents().filter(function(){
        return this.nodeType==3
    }).text().trim().replaceAmp()

    let title5 = $("ul.listType>li:not(.on)>a").eq(4).contents().filter(function(){
        return this.nodeType==3
    }).text().trim().replaceAmp()

    let address2 = $("ul.listType>li:not(.on)>a").eq(1).attr("onclick").split("'")[3]
    let address3 = $("ul.listType>li:not(.on)>a").eq(2).attr("onclick").split("'")[3]
    let address4 = $("ul.listType>li:not(.on)>a").eq(3).attr("onclick").split("'")[3]
    let address5 = $("ul.listType>li:not(.on)>a").eq(4).attr("onclick").split("'")[3]

    let title = [title1,title2,title3,title4,title5]
    let address = [address1,address2,address3,address4,address5]



    if (title1 == "" || title1 == "MIWIFI" || title1 == undefined) { // 오류일시 종료
        return 0;
    }



    // DB구조 : DB구조 : [[key, title, address, date, publisher],[key, title, address, date, publisher]]
    //let lastDB = await DB.UOSP_getDB("UOSP1","Last")
    let temp =  await JSON.parse(await DB.getDB("UOSP1"))
    let lastNum = temp[0]
    let lastTitle = temp[1]

    if ( lastNum.indexOf(address1) == -1 || lastTitle.indexOf(title1) == -1 ) { // 새로운 내용이 파싱되었을 경우
    //if ( address.indexOf(lastNum) == -1 || title.indexOf(lastTitle))
        let datas = [address,title]
        await DB.setDB("UOSP1",JSON.stringify(datas))
        //await UOSP.UOSP1_collect(Number(lastDB.address)+1,address) // DB 기록작업
        SW_new = 1
    }

    if (SW_new == 1) {

        let pre_text = `일반공지 : ${title1}`
        let header_title = "일반공지알림"
        let link = "http://www.uos.ac.kr/korNotice/view.do?list_id=FA1&seq="+address1


        // ======== image layer ========
        let browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });


        try{
            let page = await browser.newPage();
            await page.goto(link)
            await page.setViewport({ width: 2000, height: 20000 })
            //let buffer = await page.screenshot({ path: './images/RNDJM.png' })
            //let buffer = await page.screenshot()
            //let buffer = await (await page.$('div[id=wrap]')).screenshot()
            let buffer = await (await page.$('ul.listType.view')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await noticeChannel.sendMedia(KnownChatType.PHOTO, {
                name: "UOSP1.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });
        }
        catch(e){
            console.log("UOSP1 image error : " + e)
            await browser.close()
        }

        // ======== image layer ========

        await noticeChannel.sendChat("일반공지알림 : "+title1+"\n\n"+"보러가기 : "+link)
    }
} // 일반공지 파싱
*/



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



module.exports = UOSP