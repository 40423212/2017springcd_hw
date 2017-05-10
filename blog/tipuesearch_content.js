var tipuesearch = {"pages":[{"url":"./pages/about/","tags":"misc","title":"About","text":"2017Spring 機械設計工程系協同產品設計實習 課程倉儲 課程投影片 分組倉儲 分組網誌 fossil網誌(bg2)"},{"url":"./week12.html","tags":"40423212","title":"week12","text":"期末協同實習專案規劃與執行 期末協同實習專案規劃與執行,上課時段準備以oral presentation, text presentation,theoretical presentation 逐步朝期末考週 physical presentation的目標邁進。 oral presentation:口語說明進度，規劃細節，分工情形，問題討論。 text presentation:以gh-pages的blog與Fossil SCM 倉儲wiki紀錄每周專題執行情形。 並利用github與Fossil SCM倉儲管理衍生的檔案。 theoretical presentation:利用Solvespace，Onshape，V-rep，Brython進行評估模擬。 physical presentation:在期末考周必須完成實體模型製作，並以video影片展示各階段的準備工作與執行結果。"},{"url":"./week11.html","tags":"40423212","title":"week11","text":"閱讀關於onshape的設計理念，寫出 心得 寫出篩選學生數量的py檔 嘗試利用cango做出正齒輪 2017-05-09_20-40-55 from 40423212 on Vimeo . 利用 Brython 3.3.1 執行四連桿運動模擬. 直接在網頁中編寫 Brython 模擬程式: window.onload=function(){ // 設定 data/py 為共用程式路徑 brython({debug:1, pythonpath:['./../data/py']}); } from browser import document import math import time from browser import timer class Coord(object): def __init__(self,x,y): self.x = x self.y = y def __sub__(self,other): # This allows you to substract vectors return Coord(self.x-other.x,self.y-other.y) def __repr__(self): # Used to get human readable coordinates when printing return \"Coord(%f,%f)\"%(self.x,self.y) def length(self): # Returns the length of the vector return math.sqrt(self.x**2 + self.y**2) def angle(self): # Returns the vector's angle return math.atan2(self.y,self.x) def normalize(coord): return Coord( coord.x/coord.length(), coord.y/coord.length() ) def perpendicular(coord): # Shifts the angle by pi/2 and calculate the coordinates # using the original vector length return Coord( coord.length()*math.cos(coord.angle()+math.pi/2), coord.length()*math.sin(coord.angle()+math.pi/2) ) # 點類別 class Point(object): # 起始方法 def __init__(self, x, y): self.x = x self.y = y # 繪製方法 def drawMe(self, g, r): self.g = g self.r = r self.g.save() self.g.moveTo(self.x,self.y) self.g.beginPath() # 根據 r 半徑繪製一個圓代表點的所在位置 self.g.arc(self.x, self.y, self.r, 0, 2*math.pi, True) self.g.moveTo(self.x,self.y) self.g.lineTo(self.x+self.r, self.y) self.g.moveTo(self.x, self.y) self.g.lineTo(self.x-self.r, self.y) self.g.moveTo(self.x, self.y) self.g.lineTo(self.x, self.y+self.r) self.g.moveTo(self.x, self.y) self.g.lineTo(self.x, self.y-self.r) self.g.restore() self.g.stroke() # 加入 Eq 方法 def Eq(self, pt): self.x = pt.x self.y = pt.y # 加入 setPoint 方法 def setPoint(self, px, py): self.x = px self.y = py # 加上 distance(pt) 方法, 計算點到 pt 的距離 def distance(self, pt): self.pt = pt x = self.x - self.pt.x y = self.y - self.pt.y return math.sqrt(x * x + y * y) # 利用文字標示點的座標位置 def tag(self, g): self.g = g self.g.beginPath() self.g.fillText(\"%d, %d\"%(self.x, self.y),self.x, self.y) self.g.stroke() # Line 類別物件 class Line(object): # 起始方法 def __init__(self, p1, p2): self.p1 = p1 self.p2 = p2 # 直線的第一點, 設為線尾 self.Tail = self.p1 # 直線組成的第二點, 設為線頭 self.Head = self.p2 # 直線的長度屬性 self.length = math.sqrt(math.pow(self.p2.x-self.p1.x, 2)+math.pow(self.p2.y-self.p1.y,2)) # setPP 以指定頭尾座標點來定義直線 def setPP(self, p1, p2): self.p1 = p1 self.p2 = p2 self.Tail = self.p1 self.Head = self.p2 self.length = math.sqrt(math.pow(self.p2.x-self.p1.x, 2)+math.pow(self.p2.y-self.p1.y,2)) # setRT 方法 for Line, 應該已經確定 Tail 點, 然後以 r, t 作為設定 Head 的參考 def setRT(self, r, t): self.r = r self.t = t x = self.r * math.cos(self.t) y = self.r * math.sin(self.t) self.Tail.Eq(self.p1) self.Head.setPoint(self.Tail.x + x,self.Tail.y + y) # getR 方法 for Line def getR(self): # x 分量與 y 分量 x = self.p1.x - self.p2.x y = self.p1.y - self.p2.y return math.sqrt(x * x + y * y) # 根據定義 atan2(y,x), 表示 (x,y) 與 正 x 軸之間的夾角, 介於 pi 與 -pi 間 def getT(self): x = self.p2.x - self.p1.x y = self.p2.y - self.p1.y if (math.fabs(x) < math.pow(10,-100)): if(y < 0.0): return (-math.pi/2) else: return (math.pi/2) else: return math.atan2(y, x) # setTail 方法 for Line def setTail(self, pt): self.pt = pt self.Tail.Eq(pt) self.Head.setPoint(self.pt.x + self.x, self.pt.y + self.y) # getHead 方法 for Line def getHead(self): return self.Head def getTail(self): return self.Tail def drawMe(self, g): self.g = g self.g.beginPath() self.g.moveTo(self.p1.x,self.p1.y) self.g.lineTo(self.p2.x,self.p2.y) self.g.stroke() def test(self): return (\"this is pure test to Inherit\") class Link(Line): def __init__(self, p1, p2): self.p1 = p1 self.p2 = p2 self.length = math.sqrt(math.pow((self.p2.x - self.p1.x), 2) + math.pow((self.p2.y - self.p1.y), 2)) #g context def drawMe(self, g): self.g = g hole = 5 radius = 10 length = self.getR() # alert(length) # 儲存先前的繪圖狀態 self.g.save() self.g.translate(self.p1.x,self.p1.y) #alert(str(self.p1.x)+\",\"+str(self.p1.y)) #self.g.rotate(-((math.pi/2)-self.getT())) self.g.rotate(-math.pi*0.5 + self.getT()) #alert(str(self.getT())) #self.g.rotate(10*math.pi/180) #this.g.rotate(-(Math.PI/2-this.getT())); # 必須配合畫在 y 軸上的 Link, 進行座標轉換, 也可以改為畫在 x 軸上... self.g.beginPath() self.g.moveTo(0,0) self.g.arc(0, 0, hole, 0, 2*math.pi, True) self.g.stroke() self.g.moveTo(0,length) self.g.beginPath() self.g.arc(0,length, hole, 0, 2*math.pi, True) self.g.stroke() self.g.moveTo(0,0) self.g.beginPath() self.g.arc(0,0, radius, 0, math.pi, True) self.g.moveTo(0+radius,0) self.g.lineTo(0+radius,0+length) self.g.stroke() self.g.moveTo(0,0+length) self.g.beginPath() self.g.arc(0, 0+length, radius, math.pi, 0, True) self.g.moveTo(0-radius,0+length) self.g.lineTo(0-radius,0) self.g.stroke() self.g.restore() ''' self.g.beginPath() self.g.fillStyle = \"red\" self.g.font = \"bold 18px sans-serif\" self.g.fillText(\"%d, %d\"%(self.p2.x, self.p2.y),self.p2.x, self.p2.y) self.g.stroke() ''' class Triangle(object): def __init__(self, p1, p2, p3): self.p1 = p1 self.p2 = p2 self.p3 = p3 def getLenp3(self): p1 = self.p1 ret = p1.distance(self.p2) return ret def getLenp1(self): p2 = self.p2 ret = p2.distance(self.p3) return ret def getLenp2(self): p1 = self.p1 ret = p1.distance(self.p3) return ret # 角度 def getAp1(self): ret = math.acos(((self.getLenp2() * self.getLenp2() + self.getLenp3() * self.getLenp3()) - self.getLenp1() * self.getLenp1()) / (2* self.getLenp2() * self.getLenp3())) return ret # def getAp2(self): ret =math.acos(((self.getLenp1() * self.getLenp1() + self.getLenp3() * self.getLenp3()) - self.getLenp2() * self.getLenp2()) / (2* self.getLenp1() * self.getLenp3())) return ret def getAp3(self): ret = math.acos(((self.getLenp1() * self.getLenp1() + self.getLenp2() * self.getLenp2()) - self.getLenp3() * self.getLenp3()) / (2* self.getLenp1() * self.getLenp2())) return ret def drawMe(self, g): self.g = g r = 5 # 繪出三個頂點 self.p1.drawMe(self.g,r) self.p2.drawMe(self.g,r) self.p3.drawMe(self.g,r) line1 = Line(self.p1,self.p2) line2 = Line(self.p1,self.p3) line3 = Line(self.p2,self.p3) # 繪出三邊線 line1.drawMe(self.g) line2.drawMe(self.g) line3.drawMe(self.g) # ends Triangle def # 透過三個邊長定義三角形 def setSSS(self, lenp3, lenp1, lenp2): self.lenp3 = lenmidpt = Point(0, 0) self.lenp1 = lenp1 self.lenp2 = lenp2 self.ap1 = math.acos(((self.lenp2 * self.lenp2 + self.lenp3 * self.lenp3) - self.lenp1 * self.lenp1) / (2* self.lenp2 * self.lenp3)) self.ap2 = math.acos(((self.lenp1 * self.lenp1 + self.lenp3 * self.lenp3) - self.lenp2 * self.lenp2) / (2* self.lenp1 * self.lenp3)) self.ap3 = math.acos(((self.lenp1 * self.lenp1 + self.lenp2 * self.lenp2) - self.lenp3 * self.lenp3) / (2* self.lenp1 * self.lenp2)) # 透過兩個邊長與夾角定義三角形 def setSAS(self, lenp3, ap2, lenp1): self.lenp3 = lenp3 self.ap2 = ap2 self.lenp1 = lenp1 self.lenp2 = math.sqrt((self.lenp3 * self.lenp3 + self.lenp1 * self.lenp1) - 2* self.lenp3 * self.lenp1 * math.cos(self.ap2)) #等於 SSS(AB, BC, CA) def setSaSS(self, lenp2, lenp3, lenp1): self.lenp2 = lenp2 self.lenp3 = lenp3 self.lenp1 = lenp1 if(self.lenp1 > (self.lenp2 + self.lenp3)): #<CAB 夾角為 180 度, 三點共線且 A 介於 BC 之間 ret = math.pi else : # <CAB 夾角為 0, 三點共線且 A 不在 BC 之間 if((self.lenp1 < (self.lenp2 - self.lenp3)) or (self.lenp1 < (self.lenp3 - self.lenp2))): ret = 0.0 else : # 透過餘絃定理求出夾角 <CAB ret = math.acos(((self.lenp2 * self.lenp2 + self.lenp3 * self.lenp3) - self.lenp1 * self.lenp1) / (2 * self.lenp2 * self.lenp3)) return ret # 取得三角形的三個邊長值 def getSSS(self): temp = [] temp.append( self.getLenp1() ) temp.append( self.getLenp2() ) temp.append( self.getLenp3() ) return temp # 取得三角形的三個角度值 def getAAA(self): temp = [] temp.append( self.getAp1() ) temp.append( self.getAp2() ) temp.append( self.getAp3() ) return temp # 取得三角形的三個角度與三個邊長 def getASASAS(self): temp = [] temp.append(self.getAp1()) temp.append(self.getLenp1()) temp.append(self.getAp2()) temp.append(self.getLenp2()) temp.append(self.getAp3()) temp.append(self.getLenp3()) return temp #2P 2L return mid P def setPPSS(self, p1, p3, lenp1, lenp3): temp = [] self.p1 = p1 self.p3 = p3 self.lenp1 = lenp1 self.lenp3 = lenp3 #bp3 is the angle beside p3 point, cp3 is the angle for line23, p2 is the output line31 = Line(p3, p1) self.lenp2 = line31.getR() #self.lenp2 = self.p3.distance(self.p1) #這裡是求角3 ap3 = math.acos(((self.lenp1 * self.lenp1 + self.lenp2 * self.lenp2) - self.lenp3 * self.lenp3) / (2 * self.lenp1 * self.lenp2)) #ap3 = math.acos(((self.lenp1 * self.lenp1 + self.lenp3 * self.lenp3) - self.lenp2 * self.lenp2) / (2 * self.lenp1 * self.lenp3)) bp3 = line31.getT() cp3 = bp3 - ap3 temp.append(p3.x + self.lenp1*math.cos(cp3))#p2.x temp.append(p3.y + self.lenp1*math.sin(cp3))#p2.y return temp def tag(g, p): None midpt = Point(0, 0) tippt = Point(0, 0) contour = [] # 執行繪圖流程, 注意 x, y 為 global variables def draw(): global theta, midpt, oldpt context.clearRect(0, 0, canvas.width, canvas.height) line1.drawMe(context) line2.drawMe(context) line3.drawMe(context) #triangle1.drawMe(context) #triangle2.drawMe(context) theta += dx p2.x = p1.x + line1.length*math.cos(theta*degree) p2.y = p1.y - line1.length*math.sin(theta*degree) p3.x, p3.y = triangle2.setPPSS(p2,p4,link2_len,link3_len) # 計算垂直單位向量 a = Coord(p3.x, p3.y) b = Coord(p2.x, p2.y) normal = perpendicular(normalize(a-b)) midpt.x = (p2.x + p3.x)/2 midpt.y = (p2.y + p3.y)/2 tippt.x = midpt.x + 150*normal.x tippt.y = midpt.y + 150*normal.y if theta < 360: contour.append((tippt.x, tippt.y)) context.beginPath() context.moveTo(midpt.x, midpt.y) context.lineTo(tippt.x, tippt.y) # 利用 fillRect 繪製一個長寬各 1 單位的正方形 for i in range(len(contour)): context.fillRect(contour[i][0], contour[i][1], 1, 1) context.stroke() #p1.tag(context) # 以上為相關函式物件的定義區 # 全域變數 # 幾何位置輸入變數 x=10 y=10 r=10 # 畫布與繪圖內容 # 其他輸入變數 theta = 0 degree = math.pi/180.0 dx = 2 dy = 4 #set p1.p2.p3.p4 position lift = 10 p1 = Point(150,100+lift) p2 = Point(150,200+lift) p3 = Point(300,300+lift) p4 = Point(350,100+lift) #accord position create link line1 = Link(p1,p2) line2 = Link(p2,p3) line3 = Link(p3,p4) line4 = Link(p1,p4) line5 = Link(p2,p4) link2_len = p2.distance(p3) link3_len = p3.distance(p4) #link2_len = line1.getR() #link3_len = line3.getR() #alert(str(link2_len)+','+str(link3_len)) triangle1 = Triangle(p1,p2,p4) triangle2 = Triangle(p2,p3,p4) # 視窗載入時執行內容 # 繪圖畫布設定 canvas = document[\"plotarea\"] context = canvas.getContext(\"2d\") # 座標轉換, 移動 canvas.height 並且 y 座標變號, 也就是將原點座標移到畫面左下角 context.translate(0,canvas.height) context.scale(1,-1) #以間隔 20 micro seconds 重複呼叫 draw() timer.set_interval(draw,20) #timer.set_interval(draw,10) 將四連桿模擬程式庫存在 ./../data/py 子目錄, 然後以 import 導入方式執行運算: # import point-line-triangle module import plt import math from browser import document from browser import timer midpt = plt.Point(0, 0) tippt = plt.Point(0, 0) contour = [] # 執行繪圖流程, 注意 x, y 為 global variables def draw(): global theta, midpt, oldpt context.clearRect(0, 0, canvas.width, canvas.height) line1.drawMe(context) line2.drawMe(context) line3.drawMe(context) line4.drawMe(context) #triangle1.drawMe(context) #triangle2.drawMe(context) theta += dx #PLAP p2.x = p1.x + line1.length*math.cos(theta*degree) p2.y = p1.y - line1.length*math.sin(theta*degree) #PLLP p3.x, p3.y = triangle2.setPPSS(p2,p4,line2.length,line3.length) # 計算垂直單位向量 a = plt.Coord(p3.x, p3.y) b = plt.Coord(p2.x, p2.y) normal = plt.perpendicular(plt.normalize(a-b)) midpt.x = (p2.x + p3.x)/2 midpt.y = (p2.y + p3.y)/2 tippt.x = midpt.x + 150*normal.x tippt.y = midpt.y + 150*normal.y if theta < 360: contour.append((tippt.x, tippt.y)) context.beginPath() context.moveTo(midpt.x, midpt.y) context.lineTo(tippt.x, tippt.y) # 利用 fillRect 繪製一個長寬各 1 單位的正方形 for i in range(len(contour)): context.fillRect(contour[i][0], contour[i][1], 1, 1) context.stroke() #p1.tag(context) # 以上為相關函式物件的定義區 # 全域變數 # 幾何位置輸入變數 x=10 y=10 r=10 # 畫布與繪圖內容 # 其他輸入變數 theta = 0 degree = math.pi/180.0 dx = 2 dy = 4 #set p1.p2.p3.p4 position lift = 10 # 各起始座標點必須精確 p1 = plt.Point(150,100+lift) p2 = plt.Point(150,200+lift) p3 = plt.Point(300,300+lift) p4 = plt.Point(350,100+lift) #共有五條線 line1 = plt.Link(p1,p2) line2 = plt.Link(p2,p3) line3 = plt.Link(p3,p4) line4 = plt.Link(p1,p4) line5 = plt.Link(p2,p4) #link2_len = p2.distance(p3) #link3_len = p3.distance(p4) #link2_len = line1.getR() #link3_len = line3.getR() #alert(str(link2_len)+','+str(link3_len)) triangle1 = plt.Triangle(p1,p2,p4) triangle2 = plt.Triangle(p2,p3,p4) # 視窗載入時執行內容 # 繪圖畫布設定 canvas = document[\"plotarea2\"] context = canvas.getContext(\"2d\") # 座標轉換, 移動 canvas.height 並且 y 座標變號, 也就是將原點座標移到畫面左下角 context.translate(0,canvas.height) context.scale(1,-1) #以間隔 20 micro seconds 重複呼叫 draw() timer.set_interval(draw,20)"},{"url":"./week7.html","tags":"40423212","title":"week7","text":"往fossil傳遞檔案，以及onshape參數繪圖 Part1. 全自動的 start.bat 近端的 fossil SCM + stunnel W7 起將要利用FOSSIL進行文字檔設計資料的版次管理. 協同產品設計課程有哪些文字檔案設計資料？ .py .md .bat reveal 與 pelican 的設計檔案 Part2. Solvespace , Onshape 的 one-link , fore-bar , eight-bar零件組圖，轉入V-rep 進行速度控制(動畫模擬) 將stl零組件展示在分組網誌，能否多stl零組件集中在一個 html業面，協同？ Part3. 期中報告與自評 Part_X1. Onshape Part Studio 建立教學，零件參數管理建立。 Onshape 零組件轉出 stl 檔為定位方便，軸與孔不可以理想完整配合。 須留餘隙，否則在轉出 stl 檔時將會將會與孔干涉，導致孔與軸疊合為一零件。 圓柱體總高不可小於或者等於直徑，導入 V-rep 會無法辨識其為柱狀零件(軸)。V-rep 其便是軸為抓取零件之長寬比。 Part_X2. sqlite3.exe 工具 sqlite vcp.fossil log in pw cap .schema user select login,pw cap from user 更改user ps(password) update user set up ='s' where login='****'; Part_X3. fossil clone uri vcp.fossil(Filename) fossil open ./ ../ ../vcp.fossil 進行改版 fossil add. fossil remote -url off fossil commit -m \"commit messenge\" fossil push https://user@192.168. . * key-in user passeword to complete push 2017-04-11_19-51-04 w7 40423212 from 40423212 on Vimeo ."},{"url":"./week6.html","tags":"40423212","title":"week6","text":"準備期中驗收 完成其他組件的v-rep做動模擬 完成課程遺漏部分，便於下週進行自評 2017-04-04_23-26-45 40423212_w6 from 40423212 on Vimeo ."},{"url":"./week5.html","tags":"40423212","title":"week5","text":"fossil wiki首頁的使用及使one-link bar轉動 建立一個與project name同名的wiki，該wiki會成為首頁 認識fossil wiki的三種編譯方式-Fossil wiki，Markdown 以及Plain text 嘗試利用V-rep使solvespace做出的one-link bar，利用triangle mesh存檔後進行旋轉做動 做好one link bar 之後要利用export triangle mesh存成stl檔，在V-REP用inport打開此檔案，之後用edit>grouping/merging>divide selected shapes進行分解 將軸放至底部的子目錄，再將上蓋放置軸的子目錄進行固定，最後將軸變成馬達，即可讓簡易的one-link bar進行轉動 2017-03-28_18-30-41 40423212_hw5 from 40423212 on Vimeo ."},{"url":"./week4.html","tags":"40423212","title":"week4","text":"運營fossil製程的wiki 使用老師建立的新fossil，獲得管理權後加入其他組員 介紹altair的應力分析 認識Xming X-windows vnc remote desktop 2017-03-20_22-26-25 40423212﹍w4 from 40423212 on Vimeo ."},{"url":"./week3.html","tags":"40423212","title":"week3","text":"介紹Altair及製作近端fossil 從 https://mde2al.kmol.info 進入新區域的wiki檢視每周進度 了解Altair的soildthinking 認識Altair的特色，其中包括檢測受力.受熱.流力.最小化資源利用.較為人性的快捷列 更改start的fossil路徑並且建立自己的近端fossil帳號密碼 2017-03-10_40423212_w3 from 40423212 on Vimeo ."},{"url":"./week2.html","tags":"40423212","title":"week2","text":"使用py進行有效率的分組 使用ethercalc製作簡易的分組表格 認識cp950(大五碼) 使用py建立分組程序，並且挑出未被分類的學生 製作簡易連桿組 了解vrep起始抓點，在做stl檔的時候原點需跟物件拉開一定距離 2017-03-02 40423212 w2 from 40423212 on Vimeo ."},{"url":"./week1.html","tags":"40423212","title":"week1","text":"介紹課程大綱 了解Blender 3dstudio maya之相關性 stunnel 的使用 http的proxy 在py語言中,;(分號)=註解 簡略介紹c語言與py的優劣與使用時機 利用cmd輸出ipconfig /all 查詢ip後 至stunnel>config>stunnel.conf\\,利用Scite找到http字串修改其ip 進入例如https://192.168.1.24/2017springvcp_hw/index 的協同區域,並且嘗試以anonymous（無名氏/遊客）的身份進入 利用vrep配合Scite打開的ttt檔完成做動模擬"}]};