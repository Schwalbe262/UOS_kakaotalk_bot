Thread = new Object()

const UOSP = require('./UOSP.js')



Thread.Thread_UOSP1 = async function Thread_UOSP1(){

    botChannel.sendChat("Thread_UOSP1 실행")

    while(1){
        try{
            botChannel.sendChat("Thread_UOSP1 작동1")
            await UOSP.UOSP1(channels=noticeChannel)
            botChannel.sendChat("Thread_UOSP1 작동2")
            await UOSP.UOSP1(test=true,channels=botChannel)
            botChannel.sendChat("Thread_UOSP1 작동3")
            await Thread.sleep(100000)
        }
        catch(e){
            await Thread.sleep(100000)
        }
    }
}


module.exports = Thread