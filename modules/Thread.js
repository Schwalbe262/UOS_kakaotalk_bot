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
            await UOSP.UOSP22()
            await Thread.sleep(180000)
            await UOSP.UOSP25()
            await Thread.sleep(180000)
        }
        catch(e){
            await Thread.sleep(180000)
        }
    }
}


let dept_time = 15000


Thread.Thread_dept = async function Thread_dept(){

    botChannel.sendChat("Thread_dept 실행")

    while(1){
        try{
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ECE",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010058&epTicket=INV",dept_name="전전컴")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ECE_g",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20016D8&cate_id2=000010058&epTicket=LOG#a",dept_name="전전컴대학원")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="CHEM",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010059&epTicket=LOG",dept_name="화학공학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="MECH",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010060&epTicket=LOG",dept_name="기계정보공학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="MAT",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010061&epTicket=LOG",dept_name="신소재공학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="CVN",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010382&epTicket=LOG",dept_name="토목공학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="COM",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010383&epTicket=LOG",dept_name="컴퓨터과학부")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="AI",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010085&epTicket=LOG",dept_name="인공지능학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="PADM",dept_link="https://www.uos.ac.kr/engineering/korNotice/allList.do?list_id=20013DA1&cate_id2=000010382&epTicket=LOG",dept_name="행정학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="INTR",dept_link="https://social.uos.ac.kr/social/korNotice/allList.do?list_id=econo01&cate_id2=000010055&epTicket=LOG",dept_name="국제관계학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ECON",dept_link="https://social.uos.ac.kr/social/korNotice/allList.do?list_id=econo01&cate_id2=000010057&epTicket=LOG",dept_name="경제학부")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="SOCWEL",dept_link="https://social.uos.ac.kr/social/korNotice/allList.do?list_id=econo01&cate_id2=000010072&epTicket=LOG",dept_name="사회복지학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="TAX",dept_link="https://social.uos.ac.kr/social/korNotice/allList.do?list_id=econo01&cate_id2=000010074&epTicket=LOG",dept_name="세무학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ENG",dept_link="https://liberalarts.uos.ac.kr/liberalarts/korNotice/allList.do?list_id=human01&seq=1433&cate_id2=000010067&epTicket=LOG",dept_name="영어영문학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="KOR",dept_link="https://liberalarts.uos.ac.kr/liberalarts/korNotice/allList.do?list_id=human01&seq=1433&cate_id2=000010068&epTicket=LOG",dept_name="국어국문학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="HIST",dept_link="https://liberalarts.uos.ac.kr/liberalarts/korNotice/allList.do?list_id=human01&seq=1433&cate_id2=000010069&epTicket=LOG",dept_name="국사학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="PH",dept_link="https://liberalarts.uos.ac.kr/liberalarts/korNotice/allList.do?list_id=human01&seq=1433&cate_id2=000010070&epTicket=LOG",dept_name="철학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="CHN",dept_link="https://liberalarts.uos.ac.kr/liberalarts/korNotice/allList.do?list_id=human01&seq=1433&cate_id2=000011580&epTicket=LOG",dept_name="중국어문화학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="MATH",dept_link="https://www.uos.ac.kr/science/korNotice/allList.do?list_id=scien01&cate_id2=000010064&epTicket=LOG",dept_name="수학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="STAT",dept_link="https://www.uos.ac.kr/science/korNotice/allList.do?list_id=scien01&cate_id2=000010063&epTicket=LOG",dept_name="통계학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="PHY",dept_link="https://www.uos.ac.kr/science/korNotice/allList.do?list_id=scien01&cate_id2=000010065&epTicket=LOG",dept_name="물리학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="LIFSC",dept_link="https://www.uos.ac.kr/science/korNotice/allList.do?list_id=scien01&cate_id2=000010066&epTicket=LOG",dept_name="생명과학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ENVH",dept_link="https://www.uos.ac.kr/science/korNotice/allList.do?list_id=scien01&cate_id2=000010062&epTicket=LOG",dept_name="환경원예학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="UCHEM",dept_link="https://www.uos.ac.kr/science/korNotice/allList.do?list_id=scien01&cate_id2=000010086&epTicket=LOG",dept_name="융합응용화학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ARC",dept_link="https://www.uos.ac.kr/urbansciences/ae/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="건축학부")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="URS",dept_link="https://www.uos.ac.kr/urbansciences/urban/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="도시공학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="TRP",dept_link="https://www.uos.ac.kr/urbansciences/transport/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="교통공학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="LANA",dept_link="https://www.uos.ac.kr/urbansciences/lauos/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="조경학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="UADM",dept_link="https://www.uos.ac.kr/urbansciences/urbanadmin/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="도시행정학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="USOC",dept_link="https://www.uos.ac.kr/urbansciences/usocio/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="도시사회학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="SPINFO",dept_link="https://www.uos.ac.kr/urbansciences/geoinfo/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="공간정보학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ENVEN",dept_link="https://www.uos.ac.kr/urbansciences/env/korNotice/allList.do?list_id=urbansciences01&epTicket=LOG",dept_name="환경공학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="MUS",dept_link="https://www.uos.ac.kr/artandsport/music/korNotice/allList.do?list_id=artandsport01&seq=628&sort=0&pageIndex=1&searchCnd=&searchWrd=&viewAuth=Y&cate_id2=000010079&epTicket=LOG",dept_name="음악학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="INDD",dept_link="https://www.uos.ac.kr/artandsport/design/korNotice/allList.do?list_id=artandsport01&seq=628&sort=0&pageIndex=1&searchCnd=&searchWrd=&viewAuth=Y&cate_id2=000010079&epTicket=LOG",dept_name="산업디자인학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="ENVSC",dept_link="https://www.uos.ac.kr/artandsport/sculpture/korNotice/allList.do?list_id=artandsport01&seq=628&sort=0&pageIndex=1&searchCnd=&searchWrd=&viewAuth=Y&cate_id2=000010079&epTicket=LOG",dept_name="환경조각학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.dept_parsing(test=false,channels=noticeChannel,headless=true,dept="SPO",dept_link="https://www.uos.ac.kr/artandsport/sports/korNotice/allList.do?list_id=artandsport01&seq=628&sort=0&pageIndex=1&searchCnd=&searchWrd=&viewAuth=Y&cate_id2=000010079&epTicket=LOG",dept_name="스포츠과학과")}catch(e){}
            await Thread.sleep(dept_time)
            try{await UOSP.admin_parsing(test=false,channels=noticeChannel,headless=true,dept="ADMIN",dept_link="https://biz.uos.ac.kr/korNotice/list.do?list_id=20008N2&epTicket=LOG",dept_name="경영학부")}catch(e){}
            await Thread.sleep(dept_time)
        
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