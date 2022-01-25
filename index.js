/*
 * Created on Wed Feb 17 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

const { AuthApiClient, ChatBuilder, KnownChatType, MentionContent, ReplyContent, TalkClient, KnownAuthStatusCode } = require('node-kakao');



var start = 1;

env = require("../config.json")

const DEVICE_UUID = env.UUID
const DEVICE_ID = env.ID
const DEVICE_PW = env.PW
const DEVICE_NAME = "UOS_kakaotalk_bot"

const CLIENT = new TalkClient();


CLIENT.on('chat', async(data, channel) => {

    try{

        const sender = data.getSenderInfo(channel);
        if (!sender) return;

        //==============================================================================================================
		//=========================================== eval 코드 ========================================================
		try {
			if ( data.text.startsWith("<") ) {
                const funcBody = (await data.text).substr(1).trim().split('\n'); // 긴 코드 테스트를 위해 1천자 이상 경우에도 대응 (FullText 이용)
                funcBody.push(`channel.sendChat(String(${funcBody.pop()}));`); // 함수의 마지막 줄 내용은 자동으로 출력
				await eval(`(async() => {${funcBody.join('\n')}})();`); // 에러캐치를 위해 await까지 해준다.
			}
		} catch (e) {
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
