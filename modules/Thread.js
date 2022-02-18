Thread = new Object()

const UOSP = require('./UOSP.js')



Thread.Thread_UOSP1 = async function Thread_UOSP1(){

    botChannel.sendChat("Thread_UOSP1 실행")

    while(1){
        try{
            await UOSP.UOSP1(channels=noticeChannel)
            await Thread.sleep(100000)
        }
        catch(e){
            await Thread.sleep(100000)
        }
    }
}


module.exports = Thread