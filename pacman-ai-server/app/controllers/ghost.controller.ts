/* app/controllers/map.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
import { Map } from '../models/map';

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.post('/', (req: Request, res: Response) => {
    let ret:number = Math.floor(Math.random() * 4);
    res.send('"'+ret+'"');
});

// Export the express.Router() instance to be used by server.ts
export const GhostController: Router = router;