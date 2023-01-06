import Homepage from "./Homepage"
import Register from "./Register"

export default function LogInOut(props){
    if(props.loggedin){
        return(
            <Homepage />
        )
    }
    else{
        return(
            <Register />
        )
    }
}