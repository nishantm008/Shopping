import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography, Grid, Container,
    Card, CardContent, CardActionArea,
    CardActions, Button, CardMedia
} from '@material-ui/core';
import Herenow from '../assets/HereNow.jpg';
import USPolo from '../assets/USPolo.jpg';
import H_and_M from '../assets/H_and_M.webp';
import Mayra from '../assets/Mayra.webp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
    },
    cardPricing: {
        display: 'flex',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
}));
const products = [
    {
        imgsrc: Herenow,
        title: 'HERE&NOW',
        description: ['Men Black Printed Round Neck T-shirt'],
        price: '374',
        buttonText: 'Add to cart',
        buttonVariant: 'outlined',
    },
    {
        imgsrc: USPolo,
        title: 'U.S. Polo Assn.',
        description: ['Men Green Solid Polo Collar T-shirt With Embroidery'],
        price: '1039',
        buttonText: 'Add to cart',
        buttonVariant: 'outlined',
    },
    {
        imgsrc: Mayra,
        title: 'Mayra',
        price: '304',
        description: ['Women Black Printed Shirt Style Top'],
        buttonText: 'Add to cart',
        buttonVariant: 'outlined',
    },
    {
        imgsrc: H_and_M,
        title: 'H&M',
        description: ['Beige Patterned Wrapover Blouse'],
        price: '1299',
        buttonText: 'Add to cart',
        buttonVariant: 'outlined',
    },
    

];

export default function ProducCatalog() {
    const classes = useStyles();

    return (
        <Container className={classes.root} maxWidth="md" component="main" >
            <Grid container spacing={8} alignItems="flex-end">
                {products.map((product) => (
                    <Grid item key={product.title} xs={12} sm={6} md={4}>
                        <Card>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                src={product.imgsrc}
                                height="400px"
                            />
                            </CardActionArea>
                            <CardContent>
                                <div >
                                    <Typography component="h6" variant="h5" color="textPrimary">
                                        {product.title}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography component="subtitle2" variant="subtitle2" align="center">
                                        {product.description}
                                    </Typography>
                                </div>
                                <div className={classes.cardPricing}>
                                    <Typography component="subtitle1" variant="subtitle1" color="textPrimary">
                                    ₹{product.price}
                                    </Typography>
                                </div>
                            </CardContent>
                            <CardActions>
                                <Button  variant={product.buttonVariant} color="primary">
                                    {product.buttonText}
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}