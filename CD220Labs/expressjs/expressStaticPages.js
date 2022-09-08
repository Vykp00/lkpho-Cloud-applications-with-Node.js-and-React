const express = require('express');
const app = new express();
//the following code set any file in the 'cad220_staticfiles' to be accessible through the /<filename>
app.use(express.static('cad220_staticfiles'))

app.listen(3333, () => {
    console.log(`Listening at http://localhost:3333`)
})

