import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 300,
    margin: " 6px",
    borderRadius: "10px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
  media: {
    height: "150px",
    margin: "0 auto  ",
  },

  displayButtons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  button: {
    margin: "2px",
  },
});

const Cards = ({ product }) => {
  const classes = useStyles();
  const { id, codigoErp, apresentacao, nomeComercial, unidadeMedidaAnvisa } =
    product;

  // const history = useHistory();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa0oOBgZfNRL5FmlAdE4QX1OgiG4VS1pTa1Q&usqp=CAU"
          }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {apresentacao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.displayButtons}>
        <div>
          <Button
            size="small"
            variant="outlined"
            color="secondary"
            className={classes.button}
          >
            Remove Item
          </Button>
        </div>
      </CardActions>
    </Card>
  );
};

export default Cards;
