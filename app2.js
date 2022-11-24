const cont=document.querySelector('.container')
const body=document.querySelector('body')
const startbtn=document.querySelector('.start')
const toglogcha=document.querySelector('#toglogcha')
const toglogchb=document.querySelector('#toglogchb')
const pointtsenher1=document.querySelector(".pointblue1")
const pointtsenher2=document.querySelector(".pointblue2")
const pointtsenher3=document.querySelector(".pointblue3")
const pointtsenher4=document.querySelector(".pointblue4")
const pointg1=document.querySelector(".pointgreen1")
const pointg2=document.querySelector(".pointgreen2")
const pointg3=document.querySelector(".pointgreen3")
const pointg4=document.querySelector(".pointgreen4")
const mycanvas=document.querySelector("#mycanvas")
const home=document.querySelector('#home')
const greenvvr=document.querySelector('.greenvvr')
const bluevvr=document.querySelector('.bluevvr')
const yvahsound=document.querySelector('#yvahduu')
const idehsound=document.querySelector('#idehduu')
const garahsound=document.querySelector('#garahduu')
const orohsound=document.querySelector('#orohduu')
const shoohayhsound=document.querySelector('#shoohayhduu')
const go=document.querySelector(".go")
const ctx=mycanvas.getContext("2d")
const greenehleh=document.querySelector('.child-1')
const blueehleh=document.querySelector('.child-27')
const Sambar=document.querySelector('.Sambar')
const SambariinX=document.querySelector('#SambariinX')
mycanvas.width=innerWidth
mycanvas.height=innerHeight
let tsenherhuu1=document.createElement("img")
tsenherhuu1.src="./img/blue.png"
tsenherhuu1.className="huu1"
pointtsenher1.appendChild(tsenherhuu1)
let tsenherhuu2=document.createElement("img")
tsenherhuu2.src="./img/blue.png"
tsenherhuu2.className="huu2"
pointtsenher2.appendChild(tsenherhuu2)
let tsenherhuu3=document.createElement("img")
tsenherhuu3.src="./img/blue.png"
tsenherhuu3.className="huu3"
pointtsenher3.appendChild(tsenherhuu3)
let tsenherhuu4=document.createElement("img")
tsenherhuu4.src="./img/blue.png"
tsenherhuu4.className="huu4"
pointtsenher4.appendChild(tsenherhuu4)
function setParent(el, newParent){
    newParent.appendChild(el)
}
let nogoonhuu1=document.createElement("img")
nogoonhuu1.src="./img/green.png"
nogoonhuu1.className="hvv1"
pointg1.appendChild(nogoonhuu1)
let nogoonhuu2=document.createElement("img")
nogoonhuu2.src="./img/green.png"
nogoonhuu2.className="hvv2"
pointg2.appendChild(nogoonhuu2)
let nogoonhuu3=document.createElement("img")
nogoonhuu3.src="./img/green.png"
nogoonhuu3.className="hvv3"
pointg3.appendChild(nogoonhuu3)
let nogoonhuu4=document.createElement("img")
nogoonhuu4.src="./img/green.png"
nogoonhuu4.className="hvv4"
pointg4.appendChild(nogoonhuu4)
let ehlehrandom=[toglogcha,toglogchb]
let toglogch=ehlehrandom[Math.floor(Math.random()*ehlehrandom.length)]
setParent(startbtn, toglogch)
body.addEventListener('click', start)
body.addEventListener('click', hvvgargah)
body.addEventListener('click', hvvYvah)
let x
let t=true
const Shooniizurag=startbtn.getElementsByTagName('img')
Shooniizurag[0].src="./img/download (1).jpg"
let NodeList=document.querySelectorAll('.child')
const arrayElement=Array.from(NodeList)
let check=true
let onooa=0
let onoob=0
let kicka=0
let kickb=0
let hojsoniikick=document.querySelector('#hojsoniikick')
let hojsoniionoo=document.querySelector("#hojsoniionoo")
let hojigdsoniikick=document.querySelector('#hojigdsoniikick')
let hojigdsoniionoo=document.querySelector("#hojigdsoniionoo")
let hojsoniifall=document.querySelector("#hojsoniifall")
let hojigdsoniifall=document.querySelector('#hojigdsoniifall')
let hojson=document.querySelector('.hojson')
let hojigdson=document.querySelector('.hojigdson')
function start(event){
    if(check==true){
        let targetgo=event.target
        let parenttarget=event.path[1]
        if(parenttarget.className=="start"){
            let Interval
            interval=setInterval(shoohayh,10)
            setTimeout(Shoozogsoh,2000)
            ToglogchShiljih();
        } 
    }
}
function shoohayh(){
        t=true
        shoohayhsound.play()
        let shoonuud=["./img/dice1.jpg",'./img/dice2.webp',"./img/dice3.webp","./img/dice41.jpg","./img/dice5.jpg","./img/dice6.png"]
        let arr=[0,1,2,3,4,5]
        x=arr[Math.floor(Math.random()*arr.length)]
        let Buusantoo=shoonuud[x]
        Shooniizurag[0].src=Buusantoo
        check=false
}
function Shoozogsoh(){
        clearInterval(interval)
        check=true
}
function hvvgargah(e){
    let targethvv=e.target
    let parenthome=e.path[2]
    if(x==5&&t==true){
        if(parenthome.className=="child-home"){
            if(toglogch==toglogcha){
                if(targethvv.className=="huu1"||targethvv.className=="huu2"||targethvv.className=="huu3"||targethvv.className=="huu4"){
                    garahsound.play()
                    setParent(targethvv,blueehleh)
                    Shooniizurag[0].src="./img/download (1).jpg"
                    t=false
                }
            }else if(targethvv.className=="hvv1"||targethvv.className=="hvv2"||targethvv.className=="hvv3"||targethvv.className=="hvv4"){
                garahsound.play()
                setParent(targethvv,greenehleh)
                Shooniizurag[0].src="./img/download (1).jpg"
                t=false
            }
        }
    }
}
function ToglogchShiljih(){
    if(toglogch==toglogcha){
        let homeblue=document.querySelector('.homeblue')
        let bs=homeblue.getElementsByTagName('img')
        if(bs.length==4){
            setTimeout(()=>{
                if(x!=5){
                    toglogchsolih()
                }
            },3500)
        }
    }else{
        let homegreen=document.querySelector('.homegreen')
        let bs=homegreen.getElementsByTagName('img')
        if(bs.length==4){
            setTimeout(()=>{
                if(x!=5){
                    toglogchsolih()
                }
            },3500)
        }
    }
}
function toglogchsolih(){
    if(toglogch==toglogcha){
        toglogch=toglogchb
        setParent(startbtn,toglogch)
        Shooniizurag[0].src="./img/download (1).jpg"
    }else{
        toglogch=toglogcha
        setParent(startbtn,toglogch)
        Shooniizurag[0].src="./img/download (1).jpg"
    }
}
function hvvYvah(e){
    let odtoi=0
    let targethvv=e.target
    let parentChild=e.path[1]
    let parenthome=e.path[2]
    if(parenthome.className!="child-home" && parentChild.className!="start"&&t==true&&parentChild.className!="Sambar displayblock"&&parentChild.className!="row"){
        yvahsound.play()
        let c=parentChild.innerHTML
        parentchild=node=null
        let i=0
        let indexofparentchild
        arrayElement.forEach((el) => {
            let b=arrayElement[i].innerHTML
            if(b==c){
                indexofparentchild=i
            }
            i++
        });
        if(t==true){
            if(toglogch==toglogchb){
                if(targethvv.className=='hvv1'||targethvv.className=="hvv2"||targethvv.className=="hvv3"||targethvv.className=="hvv4"){
                    if(indexofparentchild+x+1<51){
                        var daraagiinnuudel=arrayElement[indexofparentchild+x+1]
                        daraagiinnuudel.appendChild(targethvv)
                    }
                    else if(indexofparentchild+x+1>50&&indexofparentchild<51){
                        var daraagiinnuudel=arrayElement[indexofparentchild+x+2]
                        daraagiinnuudel.appendChild(targethvv)
                    }
                    else if(indexofparentchild>50&&indexofparentchild+x+1<57){
                        var daraagiinnuudel=arrayElement[indexofparentchild+x+1]
                        daraagiinnuudel.appendChild(targethvv)
                    }else if(indexofparentchild+x+2==57||indexofparentchild+x+1==57){
                        orohsound.play()
                        targethvv.className+=" vvrendeeorson"
                        greenvvr.appendChild(targethvv)
                    }
                    if(x!=5){
                        setTimeout(toglogchsolih,500)
                    }
                    t=false
                    Shooniizurag[0].src="./img/download (1).jpg"
                    for(let i=0;i<=daraagiinnuudel.classList.length;i++){
                        if(daraagiinnuudel.classList[i]=='odtoi'){
                            odtoi++
                            console.log('me')
                        }
                    }
                }
            }else 
            if(toglogch==toglogcha){
                if(targethvv.className=="huu1"||targethvv.className=="huu2"||targethvv.className=="huu3"||targethvv.className=="huu4"){
                    if(indexofparentchild+x+1<52&&indexofparentchild>=26){
                    var daraagiinnuudel=arrayElement[indexofparentchild+x+1]
                    daraagiinnuudel.appendChild(targethvv)
                    }else if(indexofparentchild+x+1>=52&&indexofparentchild+x+1<67){
                    var daraagiinnuudel=arrayElement[indexofparentchild+(x+1-52)]
                    daraagiinnuudel.appendChild(targethvv)
                    }else if(indexofparentchild+x+1<=24){
                        var daraagiinnuudel=arrayElement[indexofparentchild+x+1]
                        daraagiinnuudel.appendChild(targethvv)
                    }else if(indexofparentchild+x+1>24&&indexofparentchild+x+1<30){
                        var daraagiinnuudel=arrayElement[indexofparentchild+x+1+42]
                        daraagiinnuudel.appendChild(targethvv)
                    }else if(indexofparentchild+x+1==30){
                        orohsound.play()
                        targethvv.className+=" uurendeeorson"
                        bluevvr.appendChild(targethvv)
                    }else if(indexofparentchild>=67&&indexofparentchild+x+1<72){
                        var daraagiinnuudel=arrayElement[indexofparentchild+x+1]
                        daraagiinnuudel.appendChild(targethvv)
                    }else if(indexofparentchild+x+1==72){
                        orohsound.play()
                        targethvv.className+=" uurendeeorson"
                        bluevvr.appendChild(targethvv)
                    }
                    if(x!=5){
                        setTimeout(toglogchsolih,500)
                    }
                    t=false
                    Shooniizurag[0].src="./img/download (1).jpg"
                    for(let i=0;i<=daraagiinnuudel.classList.length;i++){
                        if(daraagiinnuudel.classList[i]=='odtoi'){
                            odtoi++
                            console.log('me')
                        }
                    }
                }
            }
        }
        ylagchiigshalgah()
        function davhardsantohioldoldideh(){
            let childdimgbgaagshalgah=daraagiinnuudel.querySelectorAll("img")
            let gantsbaigaaimg=daraagiinnuudel.querySelector('img')
            let hedenimg=childdimgbgaagshalgah.length
            if(hedenimg==2&&odtoi==0){
                let childdbgaaimgiinsrc=gantsbaigaaimg.src
                if(targethvv.src!=childdbgaaimgiinsrc){
                    console.log(targethvv.src)
                    if(childdbgaaimgiinsrc=='http://127.0.0.1:5500/img/blue.png'){
                        onoob+=500
                        kickb+=1
                        let tsenherger=document.querySelector('.homeblue')
                        console.log(tsenherger)
                        let bluehome=tsenherger.querySelector('.child-home')
                        let pointlist=bluehome.querySelectorAll('.point')
                        console.log(gantsbaigaaimg.src)
                        let k=0
                        let hoosonpoint
                        pointlist.forEach((el)=>{
                            if(k==0){
                                console.log('i')
                                if(el.innerHTML==''){
                                    console.log('hi')
                                    console.log(el)
                                    k++
                                    hoosonpoint=el
                                }
                           }
                        });
                        hoosonpoint.appendChild(gantsbaigaaimg)
                    }
                    if(childdbgaaimgiinsrc=='http://127.0.0.1:5500/img/green.png'){
                        onooa+=500
                        kicka+=1
                        let tsenherger=document.querySelector('.homegreen')
                        console.log(tsenherger)
                        let bluehome=tsenherger.querySelector('.child-home')
                        let pointlist=bluehome.querySelectorAll('.point')
                        console.log(gantsbaigaaimg.src)
                        let k=0
                        let hoosonpoint
                        pointlist.forEach((el)=>{
                            if(k==0){
                                console.log('i')
                                if(el.innerHTML==''){
                                    console.log('hi')
                                    console.log(el)
                                    k++
                                    hoosonpoint=el
                                }
                           }
                        });
                        idehsound.play()
                        hoosonpoint.appendChild(gantsbaigaaimg)
                    }
                }
            }
        }
        davhardsantohioldoldideh()
    }
}
function ylagchiigshalgah(){
    let Blueylagch=document.querySelectorAll('.uurendeeorson')
    let greenylagch=document.querySelectorAll('.vvrendeeorson')
    if(Blueylagch.length==4){
        console.log("blue yllaa")
        hojson.src='http://127.0.0.1:5500/img/a1247e345ce7e4277dc7e1df231bf338.jpg'
        hojigdson.src="./img/download.jpg"
        Sambar.className+=" displayblock"
        hojsoniikick.innerText=kicka
        hojigdsoniikick.innerText=kickb
        hojsoniionoo.innerText="+"+onooa
        hojigdsoniionoo.innerText="You lose"
        hojsoniifall.innerText=kickb
        hojigdsoniifall.innerText=kicka
    }else if(greenylagch.length==4){
        console.log("green yllaa")
        hojson.src="./img/download.jpg"
        hojigdson.src='http://127.0.0.1:5500/img/a1247e345ce7e4277dc7e1df231bf338.jpg'
        Sambar.className+=" displayblock"
        hojsoniikick.innerText=kickb
        hojigdsoniikick.innerText=kicka
        hojsoniionoo.innerText="+"+onoob
        hojigdsoniionoo.innerText="You lose"
        hojsoniifall.innerText=kicka
        hojigdsoniifall.innerText=kickb
    }
}