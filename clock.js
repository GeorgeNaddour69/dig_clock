var the_clock = document.getElementById("the_clock")
var the_date = document.getElementById("the_date")
var the_cont = document.getElementById("cont")
var body = document.getElementById("body")
var article = document.getElementById("article")
var main = document.getElementById("main")
var btn_1 = document.getElementById("flexRadioDefault1")
var btn_2 = document.getElementById("flexRadioDefault2")
var btn_3 = document.getElementById("flexRadioDefault3")
var btn_4 = document.getElementById("flexRadioDefault4")


function setcolor(){
    if(btn_1.checked)
    {
  localStorage.setItem("color_theme","1")
    the_cont.style.background = "linear-gradient(135deg , #14ffe9,#ffeb3b,#ff00e0)"
    body.style.background = "black"
    article.style.background = "linear-gradient(135deg , #14ffe9,#ffeb3b,#ff00e0)"
    main.style.background = "rgb(29, 37, 37)"
    the_cont.style.backgroundClip ="text"
    }
    if(btn_2.checked)
    {
        localStorage.setItem("color_theme","2")
        the_cont.style.background = "#1cffe8"
        body.style.background = "black"
        article.style.background = "#1cffe8"
        main.style.background = "rgb(6, 6, 6)"
        the_cont.style.backgroundClip ="text"
    }
    if(btn_3.checked)
    {
        localStorage.setItem("color_theme","3")
    the_cont.style.background = "#16cc86"
    body.style.background = "#1a1a1a"
    article.style.background = "#16cc86"
    main.style.background = "#1a1a1a"
    the_cont.style.backgroundClip ="text"
    }
    if(btn_4.checked)
    {
        localStorage.setItem("color_theme","4")
    the_cont.style.background = "white"
    body.style.background = "#1a1a1a"
    article.style.background = "linear-gradient(180deg, rgba(99,253,136,1) 0%, rgba(51,197,142,1) 50%, rgba(39,97,116,1) 100%)"
    main.style.background = "linear-gradient(180deg, rgba(99,253,136,1) 0%, rgba(51,197,142,1) 50%, rgba(39,97,116,1) 100%)"
    the_cont.style.backgroundClip ="text"
    }


}


setInterval(()=>{var date = new Date()
    the_clock.innerHTML = date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds()
    the_date.innerHTML = date.getDate() + "/" + parseInt(date.getMonth()+1)  + "/"+ date.getFullYear()
},1*100)

onload =()=>{
if(localStorage.getItem("color_theme")=="1")
{btn_1.click()
 
alert("لقد تم استرجاع الاعدادت السابقة ")
}
else
if(localStorage.getItem("color_theme")=="2")
{btn_2.click()
   
alert("لقد تم استرجاع الاعدادت السابقة ")
}
else if(localStorage.getItem("color_theme")=="3")
{btn_3.click()
    
alert("لقد تم استرجاع الاعدادت السابقة ")
}
else if(localStorage.getItem("color_theme")=="4")
{btn_4.click()
    
alert("لقد تم استرجاع الاعدادت السابقة ")
}

}








