function Sidebar(props){
    const sidestyle={
        // display:"flex",
        // flexWrap:"wrap",
        background:"lightblue",
        width:"30%",
        height:"20em"
    }
    return (
        <div className="sidebar-class" style={sidestyle}>
            <h1>{props.msg}</h1>
        </div>
    );
}
export default Sidebar;