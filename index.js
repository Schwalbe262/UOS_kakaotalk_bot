/*
 * Created on Wed Feb 17 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

const { AuthApiClient, ChatBuilder, KnownChatType, MentionContent, ReplyContent, TalkClient, KnownAuthStatusCode } = require('node-kakao');



var start = 1;

env = require("./config.json")

// module
const DB = require("./modules/DB.js")
const UOSP = require("./modules/UOSP.js")

const DEVICE_UUID = env.UUID
const DEVICE_ID = env.ID
const DEVICE_PW = env.PW
const DEVICE_NAME = "UOS_kakaotalk_bot"

const CLIENT = new TalkClient();


const channel_params = {
	botChannelId : "18241774633303097",
	uosChannelId : "18207197078736373",
	eceChannelId : "18292042557542096",
	noticeChannelId : "18264784731796803", // 공지확인방
	noticeChannelId2 : "18246775846233215", // 공지확인방2
	catChannelId : "18285026996346343",
	botMakeChannelId : "18284842349082092" // 시립대 봇제작방(newest)
}


CLIENT.on('chat', async(data, channel) => {

    try{


        if(start==1){ // 초기 구동
            //global.botChannel = CLIENT.channelManager.getChannelList().filter(v=>v.id==channel_params.botChannelId)[0]
			//global.noticeChannel = CLIENT.channelManager.getChannelList().filter(v=>v.id==channel_params.noticeChannelId)[0]
            start = 0
        }

        const sender = data.getSenderInfo(channel);
        if(!sender) return;

        //==============================================================================================================
		//=========================================== eval 코드 ========================================================
		try {
			if( data.text.startsWith("<") ) {
                const funcBody = (await data.text).substr(1).trim().split('\n'); // 긴 코드 테스트를 위해 1천자 이상 경우에도 대응 (FullText 이용)
                funcBody.push(`channel.sendChat(String(${funcBody.pop()}));`); // 함수의 마지막 줄 내용은 자동으로 출력
				await eval(`(async() => {${funcBody.join('\n')}})();`); // 에러캐치를 위해 await까지 해준다.
			}
		} catch(e) {
			channel.sendChat("Eval Response Error\n" + e + "\n===============\n메시지 : "+ data.Text)
		}
		//=========================================== eval 코드 끝======================================================
		//==============================================================================================================

    }
    catch(e){
        console.log("main error : " + e)
    }
});


async function main() {
    const api = await AuthApiClient.create(DEVICE_NAME, DEVICE_UUID);
    const loginRes = await api.login({
        email: DEVICE_ID,
        password: DEVICE_PW,
        // this option force login even other devices are log on
        forced: true,
    })


    if (!loginRes.success) throw new Error(`Web login failed with status: ${loginRes.status}`);
    console.log(`Received access token: ${loginRes.result.accessToken}`)

    const res = await CLIENT.login(loginRes.result)
    if (!res.success) throw new Error(`Login failed with status: ${res.status}`)

    console.log("Login success")
}
main().then()




Object.defineProperty(Object.prototype,"prop2",   {
	get:function(){
		var self=this;
		return Object.getOwnPropertyNames(this).map(v=>{
			try{
				return v+" : "+self[v]
			}catch(e){
			}
			return v+" : error"

		}).join("\n");
	}
});
