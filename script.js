let a = [
    "Installing Virus...",
    "Initializing Hack tool...",
    "Connecting to Facebook,Instagram,Twitter...",
    "Connecting to server 4...",
    "Connection failed. Retrying...",
    "Connecting to server 3...",
    "Firewall conflict...",
    "Retrying...Trying server 2...",
    "Access granted",
    "Connected Successfully...",
    "Hacking your device...",
    "Trying Brute Force...",
    "100K passwords tried...",
    "Match not found",
    "Another 300K passwords tried...",
    "Match not found...",
    "Another 100K passwords tried...",
    "Match not found...",
    "Another 50K passwords tried...",
    "Match found...",
    "Accessing Account...",
    "Hack Successful..."
]

let b=["It's a Prank---Chill bro!"]

let delay = async(seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds*1000);               //delay the time using promise
    })
}

let hack = async(messages)=>{
    await delay(1.5)                               //synchronous task by await
    let text = document.getElementById("process")       //gettting element by id 
    text.innerHTML=text.innerHTML+messages+ `<br /><br />`       // inserting  text inside tag
}

(async()=>{
    for(let i=0;i<a.length;i++){
        await hack(a[i])                    //IIFE and function call 
    }
    await delay(4)

    let save =prompt(`Type "SORRY" to save yourself`) //prompt for typing

    if(save ==="sorry"||save==="Sorry"|| save==="SORRY"){
        let p = document.getElementById("prank")       //gettting element by id 
        p.innerHTML=p.innerHTML+ "You are pranked"
        alert(b)                                    //final alert
    }
    else{
        alert("You did not listen to me  & I hacked you completely") //final alert
    }
})()
