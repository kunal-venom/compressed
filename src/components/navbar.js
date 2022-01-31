import "./navbar.css";

function Navbar() {
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"></link>
            <div class="nav-bar">
                <div class="logo"><img src={require("../assets/Logo.png")} alt="logo image"></img></div>
                <ul class="nav-links">
                    <li>Desitnations</li>
                    <li>Hotel</li>
                    <li>Flight</li>
                    <li>Booking</li>
                    <li>Login</li>
                    <li><button type="button" class="btn btn-outline-primary">Sign-Up</button></li>
                    <li><select class="form-select" aria-label="Default select example">
                            <option selected>EN</option>
                            <option value="1">One</option>
                        </select>
                    </li>
                </ul> 
            </div>
            
        </>
    )
}
export default Navbar