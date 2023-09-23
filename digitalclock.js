var hr24=document.getElementById("24hours")
hr24.addEventListener("click",hr24format)

var timingon;

function hr24format(){

    clearInterval(timingon)

    var date=new Date()
    var hr=date.getHours()
    var min=date.getMinutes()
    var sec=date.getSeconds()
    var date1=date.getDate()
    var month=date.getMonth()
    var year=date.getFullYear()

    var ampm=document.getElementById("ampm")
    if(hr>=12){
        ampm.textContent="PM"
    }
    else{
        ampm.textContent="AM"
    }


    document.getElementById("hours").textContent=zero(hr)
    document.getElementById("minutes").textContent=zero(min)
    document.getElementById("seconds").textContent=zero(sec)
    document.getElementById("date").textContent=date1
    document.getElementById("month").textContent=month+1
    document.getElementById("year").textContent=year

    timingon=setInterval(hr24format,1000) 
}

var hr12=document.getElementById("12hours")
hr12.addEventListener("click",hr12format)

function hr12format(){

    clearInterval(timingon)

    var date=new Date()
    var hr=date.getHours()
    var min=date.getMinutes()
    var sec=date.getSeconds()
    var date1=date.getDate()
    var month=date.getMonth()
    var year=date.getFullYear()

    var ampm=document.getElementById("ampm")
    if(hr>=12){
        hr=hr-12
        if(hr==0){
            hr=12        
        }
        
        ampm.textContent="PM"
    } 
    else{
        ampm.textContent="AM"
    }

    document.getElementById("hours").textContent=zero(hr)
    document.getElementById("minutes").textContent=zero(min)
    document.getElementById("seconds").textContent=zero(sec)
    document.getElementById("date").textContent=date1
    document.getElementById("month").textContent=month+1
    document.getElementById("year").textContent=year

    
    timingon=setInterval(hr12format,1000)
      
}

function zero(num){
    return num<10?"0"+num:num

}











