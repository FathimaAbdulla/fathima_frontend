import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid2';
import axios from 'axios';


const Pokemon = () => {
    const [cards, setCards] = useState([]);
    axios.get("https://dummyapi.online/api/pokemon").then((res) => {
        setCards(res.data);
        console.log(resdata);
    });

    return (
        <>
            <Grid container spacing={1}>
                {
                    cards.map((val) => {
                        return (
                            <Grid item xs={4}>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        height="140"
                                        image={val.image_url}
                                        alt="pokemon img"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {val.pokemon}
                                        </Typography>
                                        <div>
                                            <Typography
                                                gutterBottom
                                                variant="h6"
                                                component="p"
                                                sx={{ color: "text.secondary" }}
                                            >
                                                {val.type}
                                            </Typography>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
            </Grid>
        </>
    );
};


export default Pokemon