const express = require('express');
const app = express();
const PORT = 3000;

app.get('/data', (req, res) => {
    console.log("Request received from another VM!");
    res.json({
        id: 1,
        message: "Hello from VM 1!",
        status: "active",
        timestamp: new Date()
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Provider Service running on port ${PORT}`);
});
