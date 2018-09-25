/* app/server.ts */

// Import everything from express and assign it to the express variable
import express from 'express';

// Import WelcomeController from controllers entry point
import {WelcomeController, MapController} from './controllers';
import { PredictController } from './controllers/predict.controller';
import { GhostController } from './controllers/ghost.controller';

// Create a new express application instance
const app: express.Application = express();
// The port the express app will listen on
const port: string = process.env.PORT || "8080";

var allowCrossDomain = function(req: express.Request, res: express.Response, next:Function) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.use(allowCrossDomain);

// Mount the WelcomeController at the /welcome route
app.use('/welcome', WelcomeController);
app.use('/map', MapController);
app.use('/predict', PredictController);
app.use('/ghost', GhostController);



// Serve the application at the given port
app.listen(port, () => {
    // Success callback
    console.log(`Listening at http://localhost:${port}/`);
});
