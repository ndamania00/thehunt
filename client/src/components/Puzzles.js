import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardColumns from 'react-bootstrap/CardColumns';
import { Link } from 'react-router-dom';

function Puzzles() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [people, setPeople] = useState([]);
    const [puzzlecards, setPuzzleCards] = useState([]);

    const fetchItems = async () => {
        let data = await fetch('/api/getpeople');
        let ppl = await data.json();
        console.log(ppl);
        setPeople(ppl);

        let data2 = await fetch('/api/getpuzzlecards')
        let pcs = await data2.json();
        console.log(pcs);   
        setPuzzleCards(pcs);
    }

    return (
        <CardColumns>
            {puzzlecards.map(card => (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="/media/puzzlepeice.png" />
                    <Card.Body>
                        <Card.Title>{card.puzzle_title}</Card.Title>
                        <Card.Text>{card.puzzle_description}</Card.Text>
                        <Link to={`/puzzle/${card.puzzle_id}`}>
                            <Button component={Puzzles} variant="primary">Select</Button>
                        </Link>
                    </Card.Body>
                </Card>
            ))}
        </CardColumns>
    )

}

export default Puzzles;