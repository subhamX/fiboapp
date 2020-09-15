const Express = require('express');

const app = Express();

app.get('/', (req, res) => {
    res.send(new Date().toLocaleTimeString());
})

app.listen(process.env.PORT || 8000)