import { Card} from "react-bootstrap";
import {BsStar,BsStarFill} from "react-icons/bs";
import Women2 from "../assets/Women2.jpg";
import Male1 from "../assets/Male1.jpg";
import Male2 from "../assets/Male2.jpg";
import Women1 from "../assets/Women1.jpg";

const TestCard = ({image, title, description,score}) =>
    <Card>
        <Card.Body>
            <Card.Header>{[...Array(score).keys()].map(()=><BsStarFill/>)}{[...Array(5-score).keys()].map(()=><BsStar/>)}</Card.Header>
            <Card.Title>{title}</Card.Title>
            <Card.Img variant={"center"} src={image}/>
            <Card.Text>
                {description}
            </Card.Text>
        </Card.Body>
    </Card>

    const CustTest = () => {
    return <div className={"testimonials"}>
        <h2>Testimonials</h2>
        <div className={"test-grouping"}>
            <TestCard score={5}title={"Mary"} image={Women1} description={"I recommend to everyone! I want to go again and again"}/>
            <TestCard score={5}title={"Jack"} image={Male1} description={"This cozy restaurant has left the best impression! Delicious .  "}/>
            <TestCard score={5}title={"Chan"} image={Male2} description={"The staff are polite and have great knowledge"}/>
            <TestCard score={5}title={"Ruby"} image={Women2} description={"Cutest little spot with great food"}/>
    </div>
    </div>



}

export default CustTest;