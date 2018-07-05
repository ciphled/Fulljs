import express from 'express';

const router = express.Router(); //similar to the server object.

router.get('/',(req,res) => {
	res.send({Obj:[]}); //send back json data
});


export default router; //to import the router elsewhere, it must be exported