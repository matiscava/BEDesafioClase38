const express = require('express');

const router = require('./routers/index');

const app = express();

app.use( express.json() );
app.use( express.urlencoded() );

app.get( '/' , ( req , res ) => res.send({data: Date.now() }));

app.use( '/api' , router );

const PORT = process.env.PORlistenT || 8080 ;

app.listen(PORT, () => {
    console.log(`Servidor abierto en http://localhost:${PORT}/`);
});