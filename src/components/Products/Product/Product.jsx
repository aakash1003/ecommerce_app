import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';

import useStyles from './styles'



const Product = ({ product, onAddToCart}) => {
    const classes = useStyles();

    console.log(product);
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image.url} title={product.name}/>
                <CardContent>
                    <div className={classes.CardContent}>
                        <Typography variant="h5" gutterbottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5">
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography variant="body2" dangerouslySetInnerHTML={{__html: product.description}} color={"textSecondary"}/>
                </CardContent>
                <CardActions className={classes.CardAction}>
                    <IconButton aria-label="Add To Cart" onClick={() => onAddToCart(product.id, 1)}>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions>
        </Card>
    )
}

export default Product
