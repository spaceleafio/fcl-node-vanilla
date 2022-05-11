# fcl-node-vanilla
fcl using node for webpack attempt

run npm i to install dependancies

running node src/index.js will succesfully get fcl, it is logged to the console.

any function other than fcl.config will throw an error in node as they are looking for 'window' object (broweser)


webpack is setup, run: "npm run build" to packaged src/index.js into the /dist/bundle.js to be imported into index.html for testing.


index.html has imports for the src/index.js script directly, bundle.js to test webpack as well as the flowjs cdn to test that (I was unable to successfuly get fcl through that).
