import LeftPanel from "./LeftPanel/LeftPanel";
import Menu from "./Menu/Menu"
import CallContactForm from "./CallContactForm/CallContactForm";

function App() {
   return (
     <div className="App">
      <div className="Container">
       <LeftPanel/> 
       <Menu/>
        <CallContactForm/>
      </div>
     </div>
   );
 }
 
 export default App;