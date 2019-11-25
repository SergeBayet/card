#!/usr/bin/env node
/* leny/npxcard
 *
 * /index.js - Main Entry point
 *
 * coded by leny@flatLand!
 * refactored at 27/08/2019
 */


const CliFrames = require('cli-frames');

const fs = require('fs');

let serge = [];

console.log(serge);
serge[0] = fs.readFileSync('serge1.asc', 'utf-8');
serge[1] = fs.readFileSync('serge2.asc', 'utf-8');
serge[2] = fs.readFileSync('serge3.asc', 'utf-8');
serge[3] = fs.readFileSync('serge4.asc', 'utf-8');
serge[4] = fs.readFileSync('serge5.asc', 'utf-8');
serge[5] = fs.readFileSync('serge4.asc', 'utf-8');
serge[6] = fs.readFileSync('serge3.asc', 'utf-8');
serge[7] = fs.readFileSync('serge2.asc', 'utf-8');

//console.log(serge);
// Text + chalk definitions
new CliFrames({
	frames: serge
	, autostart: {
		delay: 200,
		repeat: true
	}
});
