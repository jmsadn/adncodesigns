const popUp = document.querySelector(`#cookiepopup`);

    document.querySelector(`#acceptCookie`).
    addEventListener(`click`, ()=>{
    
        
        let c = new Date();
        c.setMinutes(2 + c.getMinutes());
        document.cookie = "myCookieName=thisIsMyCookie; expires = " + c + ";";
        
        popUp.classList.add(`hide`);
        popUp.classList.remove(`show`);
    })
    
    const checkCookie = () =>{
    
        let input = document.cookie.split("=");
        if (input[0]== "myCookieName"){
            popUp.classList.add("hide");
            popUp.classList.remove("show");
        }
        else{
            popUp.classList.add("show");
            popUp.classList.remove("hide");   
        }
    };
    
    window.onload = () =>{
        setTimeout(()=>{
            checkCookie();
        }, 2000);
    } 
 
