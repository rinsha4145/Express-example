const express = require("express");
const app = express();

app.use(express.static('view'));

// const path =require('path')

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'view',"index.html"));
// });

// app.get('/contact', (req, res) => {
//     res.send('<h1>Contact</h1>');
// });

app.get('*', (req, res) => {
    res.status(404).send('<h1>404</h1>');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
