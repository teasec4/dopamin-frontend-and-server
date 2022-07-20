const express = require('express')
const path = require('path')


app = express()

app.get('/*', function (req,res) {
    res.sendFile(path.join(__dirname,'build', 'index.html'));
});

const port = process.env.port || 3000


try{
    app.listen(port, () => {
        console.log(`Server is listening on port ${port}..`)
    })
} catch (err) {
    console.log(err);
}
