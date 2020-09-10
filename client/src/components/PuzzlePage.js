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

    const [files, setFiles] = useState([]);

    const fetchItems = async () => {
        let data = await fetch('/api/getpuzzlefiles');
        let files = await data.json();
        console.log(files);
        setFiles(files);
    }

    return (
        <Jumbotron fluid>
            <Container>
                <h1>Fluid jumbotron</h1>
                <Image src="/Users/nirmitd/git/thehunt/media/riddle1.png" fluid />
                <p>
                    This is a modified jumbotron that occupies the entire horizontal space of
                    its parent.
                </p>
            </Container>
        </Jumbotron>
        
        )}

export default PuzzlePage;