import React from "react";
import Mario from "../assets/Mario and Adrian A.jpg"
import Mario2 from "../assets/Mario and Adrian b.jpg"

const About = () => {
    return <div  className={"About-sec"}>
        <div>
            <h2>About</h2>
            <p id={"AboutP"}>"Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario. Despite the city's diversity, the
                two brothers recognized the lack of Mediterranean cuisine in Chicago, and were inspired to bring the
                flavors of their hometown in Italy to the people of Chicago. The two brothers continue to oversee the
                Little Lemon restaurant"</p>
        </div>
        <div className={"container"}>
            <img src={Mario} id={'aboutImage1'} height={'150px'}/>

            <img src={Mario2} id={'aboutImage2'} height={'150px'}/>
    </div>
    </div>
}

export default About;