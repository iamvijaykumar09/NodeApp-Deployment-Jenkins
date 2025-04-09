const express = require('express');
const app = express();
const path = require('path');

let PORT = 7000;

app.use(express.json());
app.use(express.static(path.join(__dirname)));

//GET API
app.get("/files", (req, res) => {
    res.sendFile(path.join(__dirname, 'default.html'))
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});