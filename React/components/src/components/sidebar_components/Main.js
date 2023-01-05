function Main(props){
    const mainstyle={
        // display:"flex",
        // flexWrap:"wrap",
        background:"lightgrey",
        width:"70%",
        height:"50%"
    }
    return (
        <div className="main-class" style={mainstyle}>
            <h1>{props.msg}</h1>
        </div>
    );
}
export default Main;