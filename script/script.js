let head = document.getElementById("head-one")
let span = document.getElementById("span-one")
let cursos = document.getElementById("cursor")
let i = 0;
let i2 = 0
let name = "Jordy Garcia"
let myrole = "Full-Stack-Developer"
let count = 0
function jordy() {
    console.log(i >= name.length)
    if (i < name.length) {
        cursor.innerHTML = "|"
        span.innerHTML += name[i];
        i++
        i2 = name.length
        setTimeout(jordy, 80)
    }
    else if (i >= name.length) {
        
        if (count >= 5) {
            deleting()
            return
        } else if (count % 2 == 0) {
            cursor.innerHTML = "|"
        } else {
            cursor.innerHTML = ""
        }
        count++
        setTimeout(jordy, 500)
            
    }
}
function deleting (){
    span.innerHTML = name.substring(0,i2);
    i2--
    if (i2 >= 0) {
          setTimeout(jordy, 80) 
    } else {
        i = 0
        count = 0
        head.innerHTML = "I am a "
        setTimeout(role, 500) 
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
        head.innerHTML = "I am "
        setTimeout(jordy, 500)
    }
 
}
function role() {
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


jordy()