import Logo from "../assets/tallLogo.png"

function Footer() {
    return <footer className={"footer-container"}>
        <div className={"footer-column"}>
            <img src={Logo} alt={"logo"}/>
        </div>
        <div className={"footer-column"}>
            <h3>Navigation</h3>
            <ul>
                <li><a href={"/home"}>Home</a></li>
                <li><a href={"/about"}>About</a></li>
                <li><a href={"/menu"}>Menu</a></li>
                <li><a href={"/reservation"}>Reservations</a></li>
                <li><a href={"/orderOnline"}>Order Online</a></li>
                <li><a href={"/login"}>Login</a></li>
            </ul>

        </div>
        <div className={"footer-column"}>
            <h3>Contact</h3>
            <ul>
                <li><a href={"/address"}>Address</a></li>
                <li><a href={"/phone"}>Contact Number</a></li>
                <li><a href={"/email"}>Email</a></li>
            </ul>
        </div>
        <div className={"footer-column"}>
            <h3>Social Media</h3>
            <ul>
                <li><a href={"/facebook"}>Facebook</a></li>
                <li><a href={"/instagram"}>Instagram</a></li>
            </ul>

        </div>

    </footer>;
}

export default Footer