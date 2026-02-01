const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 8080;

// REPLACE WITH YOUR VM 1 IP ADDRESS
const VM1_IP = '10.0.2.15'; 

app.get('/dashboard', async (req, res) => {
    try {
        // Call the microservice on VM 1
        const response = await axios.get(`http://${VM1_IP}:3000/data`);

        res.send(`
            <h1>Microservice Dashboard</h1>
            <p>Status: <strong>Connected</strong></p>
            <p>Data received from VM 1:</p>
            <pre>${JSON.stringify(response.data, null, 2)}</pre>
        `);
    } catch (error) {
        res.send(`<h1>Error</h1><p>Could not connect to VM 1 at ${VM1_IP}</p>`);
    }
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Gateway Service running on port ${PORT}`);
});
