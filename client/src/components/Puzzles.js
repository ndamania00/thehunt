import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function Puzzles() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [people, setPeople] = useState([]);

    const fetchItems = async () => {
        let data = await fetch('/api/getpeople');
        let ppl = await data.json();
        console.log(ppl);
        setPeople(ppl);
    }

    return (
        <div>
            {people.map(person => (
                <div>{person.first_name}</div>
            ))}
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )

}

export default Puzzles;