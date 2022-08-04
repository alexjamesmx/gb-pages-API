import { XMLHttpRequest } from "xmlhttprequest"

const req = new XMLHttpRequest();

req.open("GET","./numero.txt",true)
req.onload = () => {

    if(req.status === 200) {
        let number = toNumber(req.responseText)
        console.log(req.status, req.responseText)
    }
    else{
        console.log('error')
    }
}
req.onerror = () => {
    console.log('error')
}
req.send()

