const express = require("express");
const https = require("https");

const app = express();

app.get("/", function (req, res) {
    const url = "https://api.openweathermap.org/data/2.5/weather?q=mumbai&APPID=717cd8e52c48e2b5557a2d93f751f6df&units=metric"

    https.get(url, function (response) {
        console.log(response.statusCode);

        response.on("data", function (data) {
            const weatherData = JSON.parse(data);
            const object = {
                name: "Mamta",
                favFood: "Ramen"
            }
            console.log(JSON.stringify(object));
        })
    });
    res.send("Server is up and running")
});

app.listen(3000, function () {
    console.log('Server is running on port 3000');
});
