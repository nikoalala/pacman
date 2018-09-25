/* app/controllers/map.controller.ts */

// Import only what we need from express
import { Router, Request, Response } from 'express';
import { Map } from '../models/map';

// Assign router to the express.Router() instance
const router: Router = Router();

// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req: Request, res: Response) => {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});

router.get('/:x/:y', (req: Request, res: Response) => {
    // Extract the name from the request parameters
    let { x, y } = req.params;
    console.log(x, y);
    let array:number[][] = [];
    for(let i:number = 0 ; i<x ; i++) {
        let inside:number[] = [];
        for(let j:number = 0 ; j<x ; j++) {
            inside[j] = Math.floor(Math.random() * 2);
        }
        array[i] = inside;
    }
    let mapReturn: Map = new Map(array);
    res.send(mapReturn);
});


// Export the express.Router() instance to be used by server.ts
export const MapController: Router = router;