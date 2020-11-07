import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        margin: '20px auto',
        maxWidth: 700,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));

const MainDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data));
    }, [])
    const [comment, setComment] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data));
    }, []);
    const classes = useStyles();
    const header = {
        width: '60%',
        textAlign: 'center',
        margin: 'auto',
        color: '#47a1bc',
    };

    return (
        <div>

            <div style={header}>
                <h3>POST TITLE: {user.title}</h3>
                <p>DETAILS: {user.body}</p>
            </div>

            {
                comment.map(cm =>
                    <Card key={cm.id} className={classes.root}>
                        <CardHeader
                            avatar={<Avatar alt="Remy Sharp" src={`https://randomuser.me/api/portraits/men/${cm.id}.jpg`} className={classes.large} />

                            }
                            title={`User name:${cm.name}`}
                            subheader={`User email address:${cm.email}`}

                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Comment details:{cm.body}
                            </Typography>
                        </CardContent>


                    </Card>
                )

            }
        </div>
    );
};

export default MainDetails;