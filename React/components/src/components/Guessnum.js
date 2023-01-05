function Guessnum(){
    function handler(){
        let randnum=Math.floor(Math.random()*3)+1
        let userinp=prompt("enter your number:")
        alert("System generated number is: "+ randnum +" while your num is: "+userinp);

    }
    return(
        <div>
            <h1>Guess a number between 1 and 3 by clicking below!</h1>
            <button onClick={handler}> Click me!</button>
        </div>
    );
}

export default Guessnum;