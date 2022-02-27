Renthome = new Object()

const DB = require("./DB.js")
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const puppeteer = require('puppeteer')
const imgSizeSync = require('image-size')
const cheersoup = require('cheersoup')

const { KnownChatType } = require('node-kakao');




Renthome.SH = async function SH(test=false,channels){

    let SW_new = 0

    let url = "https://www.i-sh.co.kr/main/lay2/program/S1T294C297/www/brd/m_247/list.do?multi_itm_seq=2"

    let body = await ( await fetch(url,{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title = cheersoup(body).select("div#container").selectFirst("tbody>tr>td[class=txtL]").text()

    // 이전 DB 불러오기 작업
    let title_DB = await DB.getDB("SH_last_title") // DB에 저장된 title list

    try{
        if(title_DB != title || test == true){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("SH_last_title",title)

        }
    }
    catch(e){
    }


    

    if (SW_new == 1 || test == true) {

        let str = `- SH 공고 -\n\n${title}\n\n보러가기 : ${URL}`

        try{

            browser = await puppeteer.launch({
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox'],
            });

            let page = await browser.newPage();
            await page.goto(url, { waitUntil: 'networkidle0', timeout: 0 })
            await page.setViewport({ width: 2500, height: 20000 })
            //let buffer = await page.screenshot({ path: './images/RNDJM.png' })
            //let buffer = await page.screenshot()
            //let buffer = await (await page.$('div[id=wrap]')).screenshot()

            await Renthome.sleep(3000)

            await page.click("tbody>tr>td[class=txtL]")

            await Renthome.sleep(3000)


            let buffer = await (await page.$('div.detailTable')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await channels.sendMedia(KnownChatType.PHOTO, {
                name: "UOSP1.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });

            channels.sendChat(str)
        }
        catch(e){
            console.log("UOSP1 image error : " + e)
            await browser.close()
            channels.sendChat(str)
        }



    }

    if (SW_new == 1){

        
        channels.sendChat(str)

    }


}



Renthome.sleep = async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
    // await UOSP.sleep(1000)
}







module.exports = Renthome