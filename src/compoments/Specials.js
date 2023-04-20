import GreekSalad from "../assets/GreekSalad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import LemonDessert from "../assets/LemonDessert.jpg"
import {Button, Card, CardGroup} from "react-bootstrap";
import {MdDeliveryDining} from 'react-icons/md'

const SpecialCard = ({image, price, title, description}) =>
    <Card>
        <Card.Img variant="top" src={image}/>
        <Card.Body>
            <Card.Title>{title} <span className={"card-price"}>{price}</span></Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            <Button id={"Delivery-button"} href={"/orderOnline"}>Order a delivery <MdDeliveryDining/></Button>
        </Card.Body>
    </Card>

const Specials = () => {

    return <div className={"Specialsmain"}>
        <h2>Specials</h2>
        <div className={"card-grouping"}>
            <SpecialCard image={GreekSalad} title={"Greek Salad"} description={"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "} price={"$12.99"}/>
            <SpecialCard image={bruchetta} title={"Bruschetta"} description={"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. "} price={"$12.99"}/>
            <SpecialCard image={LemonDessert} title={"Lemon Desert"} description={"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."}
                         price={"$12.99"}/>
        </div>
    </div>
}

export default Specials;