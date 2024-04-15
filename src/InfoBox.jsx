import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({info}) {

    const INIT_URL="https://media.istockphoto.com/id/1659295735/photo/blue-sky-background-with-clouds.webp?b=1&s=170667a&w=0&k=20&c=BJWcsR336P_Ne9AtBS3H30YdeRYBWzyFqgOLO2AH7CY=";

    return (
        <div className='InfoBox'>
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={INIT_URL}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {info.city}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"span"}>
                        <div>Temparature: {info.temp}&deg;C</div>
                        <div>Humidity: {info.humidity}</div>
                        <div>Min Temp: {info.tempMin}&deg;C</div>
                        <div>Max Temp: {info.tempMax}&deg;C</div>
                        <div>The weather can be described as '{info.weather}' and feels like {info.feelsLike}&deg;C</div>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}