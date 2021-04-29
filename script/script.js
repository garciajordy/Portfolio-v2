let head = document.getElementById("head-one")
let span = document.getElementById("span-one")
let cursos = document.getElementById("cursor")
let i = 0;
let i2 = 0
let i3 = 0
let intro = "I am"
let myname = "Jordy Garcia."
let myrole = "Full-Stack-Developer."
let passion = "Ruby on Rails."
let love = "I Love"
let count = 0
let inner = "I am a"
i2 = inner.length
function loveWriter() {
    head.innerHTML = inner.substring(0, i2)
    head.innerHTML += "|"
    i2--
    if (i2 >= 0) {
        setTimeout(loveWriter, 80)
    } else if (i <= love.length) {
        head.innerHTML = love.substring(0, i)
        head.innerHTML += "|"
        i++
        setTimeout(loveWriter, 80)
    } else {
        i = 0
        passionWriter()
    }
}
function passionWriter() {
    head.innerHTML = love
    if (i < passion.length) {
        span.innerHTML += passion[i]
        cursor.innerHTML = "|"
        i++
        setTimeout(passionWriter, 80)
    } else {
        if (count >= 5) {
            i2 = passion.length
            i = love.length
            passionDeleting()
            return
        } else if (count % 2 == 0) {
            cursor.innerHTML = "|"
        } else {
            cursor.innerHTML = ""
        }
        count++
        setTimeout(passionWriter, 500)
    }
}
function passionDeleting() {
    
   
    if (i2 >= 0) {
        span.innerHTML = passion.substring(0, i2)
        i2--
        setTimeout(passionDeleting, 80)
    } else if (i >= 0) {
        cursor.innerHTML = ""
        head.innerHTML = love.substring(0, i)
        head.innerHTML += "|"
        i--
        setTimeout(passionDeleting, 80)
    } else if (i3 < intro.length) {
        i3++
        head.innerHTML = intro.substring(0, i3)
        head.innerHTML += "|"
        
        setTimeout(passionDeleting, 80)
    }
    else {
        head.innerHTML = intro
        i = 0
        i2 = 0
        i3 = 0
        count = 0
        nameWriter()
    }
}
function nameWriter() {
    
    if (i < myname.length) {
        cursor.innerHTML = "|"
        span.innerHTML += myname[i];
        i++
        i2 = myname.length
        setTimeout(nameWriter, 80)
    }
    else if (i >= myname.length) {
        
        if (count >= 5) {
            deleting()
            return
        } else if (count % 2 == 0) {
            cursor.innerHTML = "|"
        } else {
            cursor.innerHTML = ""
        }
        count++
        setTimeout(nameWriter, 500)
            
    }
}
function deleting (){
    span.innerHTML = myname.substring(0,i2);
    i2--
    if (i2 >= 0) {
          setTimeout(deleting, 80) 
    } else {
        i = 0
        count = 0
        setTimeout(role, 150) 
    }
 
}
function deletingRole (){
    span.innerHTML = myrole.substring(0,i2);
    i2--
    if (i2 >= 0) {
          setTimeout(deletingRole, 80) 
    } else {
        i = 0
        count = 0
        cursor.innerHTML = ""
        i2 = inner.length
        setTimeout(loveWriter, 80)
    }
 
}
function role() {
    head.innerHTML = "I am a "
    if (i < myrole.length) {
        cursor.innerHTML = "|"
        span.innerHTML += myrole[i];
        i++;
        setTimeout(role, 80)
    }
    else if (i >= myrole.length) {
        if (count >= 5) {
            i2 = myrole.length
            deletingRole()
            return
        } else if (count % 2 == 0) {
            cursor.innerHTML = "|"
        } else {
            cursor.innerHTML = ""
        }
        count++
        setTimeout(role, 500)
    }
}


let nav = document.getElementById("nav")
let line = document.getElementById("line")
var home = document.getElementById("s1").scrollHeight
var about = document.getElementById("s2").scrollHeight
var project = document.getElementById("s3").scrollHeight
var contact = document.getElementById("s4").scrollHeight
function scrolling() {
    navbar()
   if (document.documentElement.scrollTop < home) {
        line.classList.remove("about-line")
        line.classList.remove("project-line")
    } else if (document.documentElement.scrollTop < about) {
        line.classList.remove("project-line")
        line.classList.add("about-line")
    } else if (document.documentElement.scrollTop < project) {
        line.classList.remove("about-line")
        line.classList.add("project-line")
}
}
function navbar() {
    if (document.documentElement.scrollTop < 50) {
        nav.classList.add("top")
    }
     else if (document.documentElement.scrollTop > 50) {
    nav.classList.remove("top")
    
    }
 }
window.onscroll = function (){ scrolling() }
    console.log(home)
    console.log(about)
    console.log(project)
    console.log(contact)


//nameWriter()