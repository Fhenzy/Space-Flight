import React from "react";
import Container from '@mui/material/Container';
import List from '../Home/List/List';
import Header from '../Home/Header/Header';


function Home(){
    return (
        <Container className="App" maxWidth="xl" >
            <Header/>
            <List></List>
        </Container>
    );
}

export default Home;