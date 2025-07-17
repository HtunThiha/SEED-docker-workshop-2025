const express = require('express');
const os = require('os');

const app = express();
const PORT = 3000;


app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

app.get('/', (req, res) => {
    res.status(200).send(`
        <h2>Index entry point of the server!</h2>
        <h3>System Information</h3>
        <p>OS: ${os.type()}</p>
        <p>CPU: ${os.cpus()[0].model}</p>
    `);
});

app.get('/:input', (req, res) => {
    res.status(200).send(`
        <h2>Your input:&ensp;${req.params.input}</h2>    
    `);
})