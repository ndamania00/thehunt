import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function PuzzlePage() {

    useEffect(() => {
        fetchItems();
    }, []);

    const [file, setFile] = useState([]);

    const fetchItems = async () => {
        let data = await fetch('/api/getpuzzlefiles');
        let files = await data.json();
        const temp = files[0].puzzle_url;
        setFile(temp);
        console.log(file);

    }

    return (
        <Jumbotron fluid>
            <Container>
                <h1></h1>
                <Image src={`/media/${file}`} fluid/>
                <p>

                </p>
            </Container>
        </Jumbotron>
        
        )}

export default PuzzlePage;