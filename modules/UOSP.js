UOSP = new Object()

const DB = require("./DB.js")
const cheerio = require('cheerio')
const fetch = require('node-fetch')
const puppeteer = require('puppeteer')
const imgSizeSync = require('image-size')
const cheersoup = require('cheersoup')

const { KnownChatType } = require('node-kakao');






UOSP.UOSP1 = async function UOSP1(test=false,channels=noticeChannel,headless=true){

    let str = "";
    let SW_new = 0;

    let body = await ( await fetch("http://www.uos.ac.kr/korNotice/list.do?list_id=FA1",{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").text())
    let address_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").attr("href").split("'")[3])
    let publisher_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("span").text())

    let title = title_array[0]
    let address = address_array[0]
    let publisher = publisher_array[0]

    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    let title_list = JSON.parse(await DB.getDB("UOSP1_last_title")) // DB에 저장된 title list
    let address_list = JSON.parse(await DB.getDB("UOSP1_last_address")) // DB에 저장된 title list


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
        let str = `일반공지 알림 : ${title}\n\n보러가기 : ${link}`

        if (headless==false){
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
            let buffer = await (await page.$('div.view-bx')).screenshot()
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

    

}





UOSP.UOSP2 = async function UOSP2(test=false,channels=noticeChannel,headless=true){

    let str = "";
    let SW_new = 0;

    let body = await ( await fetch("http://www.uos.ac.kr/korNotice/list.do?list_id=FA2",{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").text())
    let address_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").attr("href").split("'")[3])
    let publisher_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("span").text())

    let title = title_array[0]
    let address = address_array[0]
    let publisher = publisher_array[0]

    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    let title_list = JSON.parse(await DB.getDB("UOSP2_last_title")) // DB에 저장된 title list
    let address_list = JSON.parse(await DB.getDB("UOSP2_last_address")) // DB에 저장된 title list


    try{
        if(title_list.indexOf(title) || address_list.indexOf(address)){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("UOSP2_last_title",JSON.stringify(title_array))
            await DB.setDB("UOSP2_last_address",JSON.stringify(address_array))

        }
    }
    catch(e){

    }


    if (SW_new == 1 || test == true) {

        let pre_text = `학사공지 : ${title}`
        let header_title = "학사공지알림"
        let link = `http://www.uos.ac.kr/korNotice/view.do?list_id=FA2&seq=${address}&epTicket=INV`
        let str = `학사공지 알림 : ${title}\n\n보러가기 : ${link}`

        if (headless==false){
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
            let buffer = await (await page.$('div.view-bx')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await channels.sendMedia(KnownChatType.PHOTO, {
                name: "UOSP2.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });

            channels.sendChat(str)
        }
        catch(e){
            console.log("UOSP2 image error : " + e)
            await browser.close()
            channels.sendChat(str)
        }



    }

    

}



// 입찰
UOSP.UOSP22 = async function UOSP22(test=false,channels=noticeChannel,headless=true){

    let str = "";
    let SW_new = 0;

    let body = await ( await fetch("http://www.uos.ac.kr/korNotice/list.do?list_id=FA22",{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").text())
    let address_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").attr("href").split("'")[3])
    let publisher_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("span").text())

    let title = title_array[0]
    let address = address_array[0]
    let publisher = publisher_array[0]

    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    let title_list = JSON.parse(await DB.getDB("UOSP22_last_title")) // DB에 저장된 title list
    let address_list = JSON.parse(await DB.getDB("UOSP22_last_address")) // DB에 저장된 title list


    try{
        if(title_list.indexOf(title) || address_list.indexOf(address)){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("UOSP22_last_title",JSON.stringify(title_array))
            await DB.setDB("UOSP22_last_address",JSON.stringify(address_array))

        }
    }
    catch(e){

    }


    if (SW_new == 1 || test == true) {

        let pre_text = `입찰공지 : ${title}`
        let header_title = "입찰공지알림"
        let link = `http://www.uos.ac.kr/korNotice/view.do?list_id=FA22&seq=${address}&epTicket=INV`
        let str = `입찰공지 알림 : ${title}\n\n보러가기 : ${link}`

        if (headless==false){
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
            let buffer = await (await page.$('div.view-bx')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await channels.sendMedia(KnownChatType.PHOTO, {
                name: "UOSP22.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });

            channels.sendChat(str)
        }
        catch(e){
            console.log("UOSP22 image error : " + e)
            await browser.close()
            channels.sendChat(str)
        }



    }

    

}


// 시설공사공지
UOSP.UOSP25 = async function UOSP25(test=false,channels=noticeChannel,headless=true){

    let str = "";
    let SW_new = 0;

    let body = await ( await fetch("http://www.uos.ac.kr/korNotice/list.do?list_id=FA25",{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").text())
    let address_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("a").attr("href").split("'")[3])
    let publisher_array = cheersoup(body).select("ul.brd-lstp1>li").toArray().filter(v=>!v.selectFirst("span.cl")).map(v=>v.selectFirst("span").text())

    let title = title_array[0]
    let address = address_array[0]
    let publisher = publisher_array[0]

    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    let title_list = JSON.parse(await DB.getDB("UOSP25_last_title")) // DB에 저장된 title list
    let address_list = JSON.parse(await DB.getDB("UOSP25_last_address")) // DB에 저장된 title list


    try{
        if(title_list.indexOf(title) || address_list.indexOf(address)){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("UOSP25_last_title",JSON.stringify(title_array))
            await DB.setDB("UOSP25_last_address",JSON.stringify(address_array))

        }
    }
    catch(e){

    }


    if (SW_new == 1 || test == true) {

        let pre_text = `시설공사공지 : ${title}`
        let header_title = "시설공사공지알림"
        let link = `http://www.uos.ac.kr/korNotice/view.do?list_id=FA25&seq=${address}&epTicket=INV`
        let str = `시설공사공지 알림 : ${title}\n\n보러가기 : ${link}`

        if (headless==false){
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
            let buffer = await (await page.$('div.view-bx')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await channels.sendMedia(KnownChatType.PHOTO, {
                name: "UOSP25.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });

            channels.sendChat(str)
        }
        catch(e){
            console.log("UOSP25 image error : " + e)
            await browser.close()
            channels.sendChat(str)
        }



    }

    

}



// 장학

UOSP.UOSPschloar = async function UOSPschloar(test=false,channels=noticeChannel,headless=true){

    let str = "";
    let SW_new = 0;

    let body = await ( await fetch("https://scholarship.uos.ac.kr/scholarship/notice/notice/list.do?brdBbsseq=1&epTicket=LOG",{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title_array = cheersoup(body).select("div#subConWarp").select("tbody").select("tr").toArray().filter(v=>v.select("td.left_C.fontBold.line_h_41").text() != "공지").map(v=>v.select("td>a").text())

    let title = title_array[0]


    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    let title_list = JSON.parse(await DB.getDB("UOSPschloar_last_title")) // DB에 저장된 title list


    try{
        if(title_list.indexOf(title) || address_list.indexOf(address)){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("UOSPschloar_last_title",JSON.stringify(title_array))

        }
    }
    catch(e){

    }


    if (SW_new == 1 || test == true) {


        let link = "https://scholarship.uos.ac.kr/scholarship/notice/notice/list.do?brdBbsseq=1&epTicket=LOG"
        let str = `장학공지 알림 : ${title}\n\n보러가기 : ${link}`

        if (headless==false){
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
            await page.setViewport({ width: 2500, height: 20000 })

            await page.goto(link, { waitUntil: 'networkidle0', timeout: 0 })

            await UOSP.sleep(3000)

            await page.click( "td.left_L:not(.fontBold)")

            await UOSP.sleep(3000)

            let buffer = null
            try{
                buffer = await (await page.$("#subConWarp")).screenshot()
            }
            catch(e){}
            
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await channels.sendMedia(KnownChatType.PHOTO, {
                name: "UOSPs.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });

            channels.sendChat(str)
        }
        catch(e){
            console.log("UOSP scholar image error : " + e)
            await browser.close()
            channels.sendChat(str)
        }



    }

    

}





// "https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010058&epTicket=INV" 전전컴


UOSP.dept_parsing = async function dept_parsing(test=false,channels=noticeChannel,headless=true,dept,dept_link,dept_name){ // 공과대학 최신공지 제목을 파싱하여 어레이로 반환

    let SW_new = 0

    let body = await ( await fetch(dept_link,{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title_array = cheersoup(body).select(".tb-body").toArray().filter(v=>v.select("li.tb-wid01").text() != "[공지]").map(v=>v.selectFirst("a").text())

    let title = title_array[0]

    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    let title_list = JSON.parse(await DB.getDB("title_"+dept)) // DB에 저장된 title list


    try{
        if(title_list.indexOf(title)){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("title_"+dept,JSON.stringify(title_array))

        }
    }
    catch(e){

    }


    if (SW_new == 1 || test == true) {

        let str = `${dept_name}공지 알림 : ${title}\n\n보러가기 : ${dept_link}`

        if (headless==false){
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
            await page.setViewport({ width: 2500, height: 20000 })

            await page.goto(dept_link, { waitUntil: 'networkidle0', timeout: 0 })

            await UOSP.sleep(3000)

            await page.click( "ul.clearfix:not(.on)>li.tb-wid02>a")

            await UOSP.sleep(3000)

            let buffer = await (await page.$('div.sc-right')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await channels.sendMedia(KnownChatType.PHOTO, {
                name: "UOS.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });

            await channels.sendChat(str)
        }
        catch(e){
            console.log("dept image error : " + e)
            await browser.close()
            await channels.sendChat(str)
        }




    }
        

}




UOSP.admin_parsing = async function admin_parsing(test=false,channels=noticeChannel,headless=true,dept,dept_link,dept_name){ // 공과대학 최신공지 제목을 파싱하여 어레이로 반환

    let SW_new = 0

    let body = await ( await fetch(dept_link,{
        headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.99 Safari/537.36'
        }
    })).text()

    let title_array = cheersoup(body).select("ul.listType>li:not(.on)>a").toArray().map(v=>v.text().split(" ").slice(1).join(" "))

    let title = title_array[0]

    // 파싱 에러 필터링
    if (title == "" || title == "MIWIFI" || title == undefined) {
        return 0;
    }

    // 이전 DB 불러오기 작업
    let title_list = JSON.parse(await DB.getDB("title_"+dept)) // DB에 저장된 title list


    try{
        if(title_list.indexOf(title)){ // DB에 기록된내용이 없는지 감지

            SW_new = 1

            // DB 재기록작업
            await DB.setDB("title_"+dept,JSON.stringify(title_array))

        }
    }
    catch(e){

    }


    if (SW_new == 1 || test == true) {

        let str = `${dept_name}공지 알림 : ${title}\n\n보러가기 : ${dept_link}`

        if (headless==false){
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
            await page.setViewport({ width: 2500, height: 20000 })

            await page.goto(dept_link, { waitUntil: 'networkidle0', timeout: 0 })

            await UOSP.sleep(3000)

            await page.click( "ul.listType>li:not(.on)>a" )

            await UOSP.sleep(3000)

            let buffer = await (await page.$('div.contents')).screenshot()
            let picInfo = await imgSizeSync(buffer)
            await browser.close()

            await channels.sendMedia(KnownChatType.PHOTO, {
                name: "UOS.png",
                data: buffer,
                width: picInfo.width,
                height: 100,
                ext: 'png'
            });

            await channels.sendChat(str)
        }
        catch(e){
            console.log("dept image error : " + e)
            await browser.close()
            await channels.sendChat(str)
        }




    }
        

}



UOSP.sleep = async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
    // await UOSP.sleep(1000)
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