var tipuesearch = {"pages":[{"title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲 課程投影片 分組倉儲 分組網誌 fossil網誌(bg2)","url":"./pages/about/","tags":"misc"},{"title":"test","text":"window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/midterm1.csv\").read() fourbar_list = fourbar_data.splitlines() fourbar2_data = open(\"./../data/midterm2.csv\").read() fourbar2_list = fourbar2_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 1 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 4 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) ctx.strokeStyle = \"red\" for data in fourbar2_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./test.html","tags":"40423212"},{"title":"week7","text":"往fossil傳遞檔案，以及onshape參數繪圖 Part1. 全自動的 start.bat 近端的 fossil SCM + stunnel W7 起將要利用FOSSIL進行文字檔設計資料的版次管理. 協同產品設計課程有哪些文字檔案設計資料？ .py .md .bat reveal 與 pelican 的設計檔案 Part2. Solvespace , Onshape 的 one-link , fore-bar , eight-bar零件組圖，轉入V-rep 進行速度控制(動畫模擬) 將stl零組件展示在分組網誌，能否多stl零組件集中在一個 html業面，協同？ Part3. 期中報告與自評 Part_X1. Onshape Part Studio 建立教學，零件參數管理建立。 Onshape 零組件轉出 stl 檔為定位方便，軸與孔不可以理想完整配合。 須留餘隙，否則在轉出 stl 檔時將會將會與孔干涉，導致孔與軸疊合為一零件。 圓柱體總高不可小於或者等於直徑，導入 V-rep 會無法辨識其為柱狀零件(軸)。V-rep 其便是軸為抓取零件之長寬比。 Part_X2. sqlite3.exe 工具 sqlite vcp.fossil log in pw cap .schema user select login,pw cap from user 更改user ps(password) update user set up ='s' where login='****'; Part_X3. fossil clone uri vcp.fossil(Filename) fossil open ./ ../ ../vcp.fossil 進行改版 fossil add. fossil remote -url off fossil commit -m \"commit messenge\" fossil push https://user@192.168. . * key-in user passeword to complete push 2017-04-11_19-51-04 w7 40423212 from 40423212 on Vimeo .","url":"./week7.html","tags":"40423212"},{"title":"week6","text":"準備期中驗收 完成其他組件的v-rep做動模擬 完成課程遺漏部分，便於下週進行自評 2017-04-04_23-26-45 40423212_w6 from 40423212 on Vimeo .","url":"./week6.html","tags":"40423212"},{"title":"week5","text":"fossil wiki首頁的使用及使one-link bar轉動 建立一個與project name同名的wiki，該wiki會成為首頁 認識fossil wiki的三種編譯方式-Fossil wiki，Markdown 以及Plain text 嘗試利用V-rep使solvespace做出的one-link bar，利用triangle mesh存檔後進行旋轉做動 做好one link bar 之後要利用export triangle mesh存成stl檔，在V-REP用inport打開此檔案，之後用edit>grouping/merging>divide selected shapes進行分解 將軸放至底部的子目錄，再將上蓋放置軸的子目錄進行固定，最後將軸變成馬達，即可讓簡易的one-link bar進行轉動 2017-03-28_18-30-41 40423212_hw5 from 40423212 on Vimeo .","url":"./week5.html","tags":"40423212"},{"title":"week4","text":"運營fossil製程的wiki 使用老師建立的新fossil，獲得管理權後加入其他組員 介紹altair的應力分析 認識Xming X-windows vnc remote desktop 2017-03-20_22-26-25 40423212﹍w4 from 40423212 on Vimeo .","url":"./week4.html","tags":"40423212"},{"title":"week3","text":"介紹Altair及製作近端fossil 從 https://mde2al.kmol.info 進入新區域的wiki檢視每周進度 了解Altair的soildthinking 認識Altair的特色，其中包括檢測受力.受熱.流力.最小化資源利用.較為人性的快捷列 更改start的fossil路徑並且建立自己的近端fossil帳號密碼 2017-03-10_40423212_w3 from 40423212 on Vimeo .","url":"./week3.html","tags":"40423212"},{"title":"week2","text":"使用py進行有效率的分組 使用ethercalc製作簡易的分組表格 認識cp950(大五碼) 使用py建立分組程序，並且挑出未被分類的學生 製作簡易連桿組 了解vrep起始抓點，在做stl檔的時候原點需跟物件拉開一定距離 2017-03-02 40423212 w2 from 40423212 on Vimeo .","url":"./week2.html","tags":"40423212"},{"title":"week1","text":"介紹課程大綱 了解Blender 3dstudio maya之相關性 stunnel 的使用 http的proxy 在py語言中,;(分號)=註解 簡略介紹c語言與py的優劣與使用時機 利用cmd輸出ipconfig /all 查詢ip後 至stunnel>config>stunnel.conf\\,利用Scite找到http字串修改其ip 進入例如https://192.168.1.24/2017springvcp_hw/index 的協同區域,並且嘗試以anonymous（無名氏/遊客）的身份進入 利用vrep配合Scite打開的ttt檔完成做動模擬","url":"./week1.html","tags":"40423212"}]};