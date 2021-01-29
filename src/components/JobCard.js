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

const JobCard = ({
  image,
  name,
  dates,
  description,
  location,
  position,
  title,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card class="card">
      <CardHeader title={name} subheader={dates} />
      <CardActionArea>
        <CardMedia
          component="img"
          src={`${process.env.PUBLIC_URL}/images/${image}`}
          title={image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="body1" component="h2">
            {location} - {title} - {position}
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
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default JobCard;
