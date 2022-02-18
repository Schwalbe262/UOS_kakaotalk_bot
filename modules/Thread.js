Thread = new Object()

const UOSP = require('./UOSP.js')



Thread.Thread_UOSP1 = async function Thread_UOSP1(){

    botChannel.sendText("Thread_UOSP1 실행")

    while(1){
        try{
            await UOSP.UOSP1(channel=noticeChannel)
            await Thread.sleep(300000)
        }
        catch(e){
            await Thread.sleep(300000)
        }
    }
}


module.exports = Thread