Thread = new Object()

const UOSP = require('./UOSP.js')



Thread.Thread_UOSP1 = async function Thread_UOSP1(){

    botChannel.sendChat("Thread_UOSP1 실행")

    while(1){
        try{
            await UOSP.UOSP1()
            await Thread.sleep(10000)
            await UOSP.UOSP2()
            await Thread.sleep(10000)
        }
        catch(e){
            await Thread.sleep(30000)
        }
    }
}


Thread.Thread_dept = async function Thread_dept(){

    botChannel.sendChat("Thread_UOSP1 실행")

    while(1){
        try{
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ECE",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010058&epTicket=INV",dept_name="전전컴")
            await Thread.sleep(10000)
        }
        catch(e){
            await Thread.sleep(30000)
        }
    }
}





Thread.sleep = async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
    // await UOSP.sleep(1000)
}



module.exports = Thread