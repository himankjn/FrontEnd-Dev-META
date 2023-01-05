function ToggleMode(){
    let darkflag=true;
    let dark_msg="Dark mode is on!";
    let light_msg="Light mode is on!";
    
    function toggle(){
        darkflag=!darkflag;
        darkflag?console.log(dark_msg):console.log(light_msg);

        const btn=document.getElementById("heading");
        if(!darkflag)
        btn.innerText=light_msg;
        else btn.innerText=dark_msg
    }

    return(
        <div>
            {darkflag?<h1 id="heading">{dark_msg}</h1>:<h1>{light_msg}</h1>}
             <button onClick={toggle}> Click me!</button>
        </div>
    );
}

export default ToggleMode;