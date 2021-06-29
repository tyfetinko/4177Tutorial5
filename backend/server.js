const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = process.env.PORT || 5000;


const routes = require('./routes/users');

//middleware
app.use(bodyParser.json());
app.use(routes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
}
app.get("*", function (request, response) {
    response.sendFile(path.resolve(__dirname, "../build", "index.html"));
});
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


