let a = [
    "Installing Virus",
    "Initializing Hack tool...",
    "Connecting to Facebook...",
    "Connecting to server 4...",
    "Connection failed. Retrying...",
    "Connecting to server 3",
    "Firewall conflict...",
    "Retrying...Trying server 2",
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

let delay = async(seconds)=>{
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(true)
        }, seconds*1000);               //delay the time using promise
    })
}

let hack = async(messages)=>{
    await delay(2.2)                               //synchronous task by await
    let text = document.getElementById("process")       //gettting element by id 
    text.innerHTML=text.innerHTML+messages+"<br>"       // inserting  text inside tag
}

(async()=>{
    for(let i=0;i<a.length;i++){
        await hack(a[i])                    //IIFE and function call 
    }
})()
