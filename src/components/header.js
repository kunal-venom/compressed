import Navbar from "./navbar"
import "./header.css"

function Header(){
    return(
        <>
            
            <Navbar />
            <div class="header-container">
                <div class="header-cont">
                    <span>BEST DESTINATIONS AROUND THE WORLD</span>
                    <div><h1>Travel, enjoy <br />And Live A New <br />And Full Life</h1></div>
                    <div><p>Built Wicket longer admire do barton vanity itself do in it.<br /> Preferred to sportsmen it engrossed listening. Park gate<br />sell they west hard for the.</p></div>
                    <div class="buttons">
                        <button type="button" class="btn btn-outline-primary">Find Out More</button>
                        <img src={require("../assets/play.png")}></img>
                    </div>
                </div>
                
                <div class="girl">
                    <img src={require("../assets/plane.png")} class="plane1"></img>
                    <img src={require("../assets/girl.png")}></img>
                    <img src={require("../assets/plane.png")} class="plane2"></img>
                </div>
            </div>
        </>
    )

}
export default Header