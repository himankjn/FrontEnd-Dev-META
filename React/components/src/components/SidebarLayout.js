import Main from './sidebar_components/Main'
import Nav from './sidebar_components/Nav'
import Sidebar from './sidebar_components/Sidebar'


// Assume we need to display same text in both Main and sidebar. 
// We can use props to pass data from parent instead of manually updating it in both children.
function SidebarLayout() {
    const msg="part of sidebar layout!"
    return (
      <div>
        <Nav />
        <div style={{height:"100%" , width:"100%", display:"flex"}}>
          <Main msg={msg}/>
          <Sidebar msg={msg}/>
        </div>
      </div>
      
    );
  }

  export default SidebarLayout;