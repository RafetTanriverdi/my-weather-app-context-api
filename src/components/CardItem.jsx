
import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { color, height, padding, style } from '@mui/system';




function CardItem({ item }) {
  const date = new Date(item.date);
  const dayNumber = date.getDay()
  const days = [ "Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi","Pazar"]
  const day = days[dayNumber]

  return (
    <div style={{ width: "100%", justifyContent: "space-between", marginTop: "20px", marginLeft: "15px" }}>

      <Card sx={{ maxWidth: 190, }}
        style={{ backgroundColor: "#eee" }}
      >
        <CardContent>

          <Typography gutterBottom variant="h6" component="div">

            {day}
          </Typography>
        </CardContent>
        <CardMedia style={{ width: "60px", height: "60px", display: "flex", margin: "auto", marginTop: "15px" }}
          sx={{ height: 100 }}
          image={item.day.condition.icon}

        />
        <CardContent style={{ textAlign: "center" }}>
          <Typography gutterBottom variant="h9" component="div">
            Lizard
          </Typography>
          <Typography gutterBottom variant="h4" component="div">
            Lizard
          </Typography>

        </CardContent>
        <CardActions style={{ justifyContent: "space-between" }}>
          <div>

            Min
            <p>52°C</p>
          </div>
          <div>

            Max
            <p>52°C</p>
          </div>

        </CardActions>
      </Card>
    </div>
  )
}

export default CardItem