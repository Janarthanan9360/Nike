import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Fade,Button } from '@mui/material';

const items = [
    { name: "Move, Shop, Customise & Celebrate With Us", description: "Join Us" },
    { name: "New Styles On Sale: Up To 40% Off", description: "Shop All Our New Markdowns" },
    { name: "Nike Football", description: "shop" }
];

const CarouselItem = ({ item, visible }) => (
    <Fade in={visible} timeout={500}>
        <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', position: 'absolute', width: '100%' }}>
            <Typography variant="h5">{item.name}</Typography>
            <Button href="#outlined-buttons">
                {item.description}
            </Button>
        </Paper>
    </Fade>
);

const AutoCarousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex(prev => (prev + 1) % items.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Box sx={{ position: 'relative', height: 200, maxWidth: 600, margin: '0 auto',padding:'0'}}>
            {items.map((item, i) => (
                <CarouselItem key={i} item={item} visible={i === index} />
            ))}
        </Box>
    );
};

export default AutoCarousel;
