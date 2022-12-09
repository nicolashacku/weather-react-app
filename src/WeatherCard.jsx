import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { WiCloudy } from "react-icons/wi";
import React from "react";
function WeatherCard({
  description,
  resolvedAddress,
  temp,
  tempMax,
  tempMin,
  humidity,
  conditions,
  status,
}) {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          style={{ color: "#8c5bbf" }}
          sx={{ fontSize: 14 }}
          color="text.secondary"
          gutterBottom
        >
          <strong>{resolvedAddress}</strong>
        </Typography>
        <Typography style={{ color: "#c54a72" }} variant="h5" component="div">
          {conditions}
        </Typography>
        <Typography
          style={{ color: "#467fff" }}
          sx={{ mb: 1.5 }}
          color="text.secondary"
        >
          Temp: {temp} Temp Min: {tempMin} Temp Max: {tempMax}
        </Typography>
        <Typography style={{ color: "#467fff" }} variant="body2">
          {description}
          <br />
          <br />
          🌧 Humedad {humidity}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </React.Fragment>
  );

  if (status === true) {
    return (
      <>
        <br />
        <br />
        <Stack sx={{ width: "100%" }} spacing={2}>
          <Alert
            style={{ maxWidth: "300px", backgroundColor: "#31f981" }}
            severity="success"
          >
            Consulta realizada con exito!
          </Alert>
        </Stack>
        <br />
        <Box sx={{ minWidth: 275, maxWidth: 300 }}>
          <Card style={{ backgroundColor: "#292d3e" }} variant="outlined">
            {card}
          </Card>
        </Box>
      </>
    );
  } else if (status === false) {
    <>
      <br />
      <br />
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert
          style={{ maxWidth: "300px", backgroundColor: "#31f981" }}
          severity="error"
        >
          Error
        </Alert>
      </Stack>
      <br />
    </>;
  }
}
export default WeatherCard;
