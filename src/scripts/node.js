const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/run', (req, res) => {
    const code = req.body.code;
    const filename = 'Main.java';
    
    fs.writeFileSync(filename, code);

    exec(`javac ${filename} && java Main`, (error, stdout, stderr) => {
        if (error) {
            res.send(stderr);
        } else {
            res.send(stdout);
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
