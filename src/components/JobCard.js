import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import '../styles/styles.css';

import auburn from '../data/images/auburn.jpg';
import lockheed from '../data/images/lockheed.jpg';
import commandalkon from '../data/images/commandalkon.jpg';
import premier from '../data/images/premier.jpg';
import bbva from '../data/images/bbva.png';

const JobCard = ({ image, name, dates, description, location, position }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const showDetails = () => {
    return description.map((detail) => {
      return <Typography paragraph>{detail}</Typography>;
    });
  };

  return (
    <Card class="card">
      <CardHeader title={name} subheader={dates} />
      <CardActionArea>
        <CardMedia
          className=""
          image={require(`../data/images/${image}`)}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {location} - {position}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions class="details">
        <IconButton
          className={expanded ? 'expandOpen' : 'expand'}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{showDetails()}</CardContent>
      </Collapse>
    </Card>
  );
};

export default JobCard;
