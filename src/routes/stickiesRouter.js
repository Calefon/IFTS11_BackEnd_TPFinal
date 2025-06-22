import { Router } from "express";
import * as stickiesController from '../controllers/stickiesController.js'

const stickiesRouter = Router();

stickiesRouter.get('/all', stickiesController.getAllStickies);

stickiesRouter.post('/new', stickiesController.postCreateSticky);

stickiesRouter.delete('/delete/:id', stickiesController.deleteSticky);


export default stickiesRouter;