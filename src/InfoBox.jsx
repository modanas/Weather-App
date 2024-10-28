import "./InfoBox.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// import AcUnitIcon from "@mui/icons-material/AcUnit";
// import LightModeIcon from "@mui/icons-material/LightMode";
// import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
export default function InfoBox({ info }) {
	const INIT_URL =
		"https://images.unsplash.com/photo-1491121873784-475380321895?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const HOT_URL =
		"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
	const COLD_URL =
		"https://plus.unsplash.com/premium_photo-1670596899123-c4c67735d77a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2ludGVyfGVufDB8fDB8fHww";
	const RAIN_URL =
		"https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

	return (
		<div className="InfoBox">
			<div className="cardContainer">
				<Card sx={{ maxWidth: 345 }}>
					<CardMedia
						sx={{ height: 140 }}
						image={
							info.humidity > 80
								? RAIN_URL
								: info.temp > 15
								? HOT_URL
								: COLD_URL
						}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="div">
							{info.city}
       {/* {" "}
							{info.humidity > 80 ? (
								<ThunderstormIcon />
							) : info.temp > 15 ? (
								<LightModeIcon />
							) : (
								<AcUnitIcon />
							)} */}
						</Typography>
						<Typography
							variant="body2"
							sx={{ color: "text.secondary" }}
							component={"span"}
						>
							<p>Temperature = {info.temp} &deg;C</p>
							<p>Humidity = {info.humidity}</p>
							<p>Min Temp : {info.tempMin} &deg;C</p>
							<p>Max Temp : {info.tempMax} &deg;C</p>
							<p>
								The weather can be described as <i>{info.weather}</i> and feels
								like {info.feelsLike}
							</p>
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
