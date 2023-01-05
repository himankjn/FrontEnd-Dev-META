function Nav() {

    const navstyle={
        background:"grey",
        display: "flex",
        flexWrap:"wrap",
        flexDirection:"row",
        color:"blue",
        borderWidth:"10px",
        borderStyle:"solid",
        borderColor:"black",
        justifyContent:"center"
    };

    const listyle={
        display: "inline-block",
        borderWidth:"2px",
        borderStyle:"solid",
        borderColor:"black",
        padding:"1em",
        margin:"10px",
        borderRadius:"10px"
    }

    return (
        <nav className="main-nav" style={navstyle}>
            <ul>
                <li style={listyle}>Home</li>
                <li style={listyle}>Articles</li>
                <li style={listyle}>About</li>
                <li style={listyle}>Contact</li>
            </ul>
        </nav>
    );
};

export default Nav;