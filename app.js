const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3060;
const publicPath = path.resolve(__dirname, './public');


app.use(express.static(path.join(__dirname, '/public')));


app.get ('/', (req,res) =>{ 
    res.sendFile(path.join (__dirname, './views/home.html'));
})

app.listen(3060, function () {
    console.log("Servidor corriendo en puerto: http://localhost:" + port);
});
