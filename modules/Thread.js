Thread = new Object()

const UOSP = require('./UOSP.js')



Thread.Thread_UOSP1 = async function Thread_UOSP1(){

    botChannel.sendChat("Thread_fast 실행")

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

Thread.Thread_UOSP25 = async function Thread_UOSP25(){

    botChannel.sendChat("Thread_slow 실행")

    while(1){
        try{
            await UOSP.UOSP25()
            await Thread.sleep(360000)
        }
        catch(e){
            await Thread.sleep(360000)
        }
    }
}



Thread.Thread_dept = async function Thread_dept(){

    botChannel.sendChat("Thread_dept 실행")

    while(1){
        try{
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ECE",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010058&epTicket=INV",dept_name="전전컴")
            await Thread.sleep(10000)
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ECE_g",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20016D8&cate_id2=000010058&epTicket=LOG#a",dept_name="전전컴대학원")
            await Thread.sleep(10000)
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="CHEM",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010059&epTicket=LOG",dept_name="화학공학과")
            await Thread.sleep(10000)
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="MECH",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010060&epTicket=LOG",dept_name="기계정보공학과")
            await Thread.sleep(10000)
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="MAT",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010061&epTicket=LOG",dept_name="신소재공학과")
            await Thread.sleep(10000)
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="CVN",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010382&epTicket=LOG",dept_name="토목공학과")
            await Thread.sleep(10000)
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="COM",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010383&epTicket=LOG",dept_name="컴퓨터과학부")
            await Thread.sleep(10000)
            await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="AI",link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010085&epTicket=LOG",dept_name="인공지능학과")
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