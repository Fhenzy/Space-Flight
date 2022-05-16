import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../../../Global.css'

function Item() {

   const { id } = useParams();

   const [list, setList] = useState([]);
   const id2 =  Number.parseInt(id);

   useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v3/articles/${id2}`)
      .then((response) => response.json())
      .then((data) => {
        setList(data); 
      });
   },[]);  

   return (
    <>
     {list.id ? (
     <div id="cards" > 
      <Card sx={{ maxWidth: 745 }} id="card">
       <CardActionArea>
            <CardMedia
                component="img"
                height="356"
                width="10"
                image={list.imageUrl}
                alt={list.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {list.title}  
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {list.summary}
              </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" 
                    color="primary" 
                    onClick={() => {window.location.href = list.url}}>
                    Acessar Página
            </Button>
        </CardActions>
     </Card>
    </div> ): 
    <div id="wait">
      <CircularProgress color="success" />
    </div>
    }    
  </>
  )
}

export default Item;
