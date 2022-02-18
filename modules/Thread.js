Thread = new Object()

const UOSP = require('./UOSP.js')

const CLIENT = new TalkClient()

const channel_params = {
	botChannelId : "18241774633303097",
	uosChannelId : "18207197078736373",
	eceChannelId : "18292042557542096",
	noticeChannelId : "18264784731796803", // 공지확인방
	noticeChannelId2 : "18246775846233215", // 공지확인방2
	catChannelId : "18285026996346343",
	botMakeChannelId : "18284842349082092" // 시립대 봇제작방(newest)
}



Thread.Thread_UOSP1 = async function Thread_UOSP1(){

    botChannel.sendChat("Thread_UOSP1 실행")

    while(1){
        try{
            botChannel.sendChat("Thread_UOSP1 작동1")
            await UOSP.UOSP1(channels=noticeChannel)
            botChannel.sendChat("Thread_UOSP1 작동2")
            await UOSP.UOSP1(test=true,channels=botChannel)
            botChannel.sendChat("Thread_UOSP1 작동3")
            await Thread.sleep(30000)
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