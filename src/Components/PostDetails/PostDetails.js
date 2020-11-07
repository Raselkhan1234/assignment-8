import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        marginBottom: '20px',
        backgroundColor: "#e8eaf6",

    },


    media: {

        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 48,
        padding: '0 30px',

    },
    center: {
        display: 'block',
        justifyContent: 'right',


    },

    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const PostDetails = (props) => {
    const { id, title, body } = props.post;

    const classes = useStyles();
    return (

        <Container maxWidth="md">
            <Card className={classes.root} variant="outlined" >
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Post-Number:{id}
                    </Typography>
                    <Typography variant="h5" component="h2" style={{ textTransform: 'capitalize' }}>
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p" style={{ textTransform: 'capitalize' }}>
                        {body}
                        <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions className={classes.center} align="right">
                    <Link style={{ textDecoration: 'none' }} to={`/post/${id}`}><Button className={classes.media}>SEE MORE</Button></Link>
                </CardActions>
            </Card>

        </Container>
    );
};

export default PostDetails;