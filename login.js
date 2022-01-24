/*
 * Created on Wed Feb 17 2021
 *
 * Copyright (c) storycraft. Licensed under the MIT Licence.
 */

const { AuthApiClient, ChatBuilder, KnownChatType, MentionContent, ReplyContent, TalkClient, KnownAuthStatusCode } = require('node-kakao');



var start = 1;

env = require("config.json")


const CLIENT = new TalkClient();

const DEVICE_UUID = env.UUID
const DEVICE_ID = env.ID
const DEVICE_PW = env.PW
const DEVICE_NAME = "device"


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
