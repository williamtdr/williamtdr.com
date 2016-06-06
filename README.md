# williamtdr.com

Here lies the web content & server that runs [williamtdr.com](http://williamtdr.com)/[tdr.moe](http://tdr.moe).

## Installation Instructions ##

 1. **Install the latest 4.x release from [the NodeJS website](https://nodejs.org).** Our app does not function on node 0.10.x (no ES6 support), and some of the dependencies we use have warned of compatibility issues with the latest release. So, please grab and install the latest 4.x version and follow the instructions to set up and install Node.
 2. **From a command line, type the command `npm install -g gulp`.** Assuming that Node was properly installed, you should see a tree-like list of dependencies that were installed. Our project uses gulp to combine and minify our Javascript and CSS that serve the website. Once installed, type `gulp` from the project directory, then ctrl+C to kill the process once complete.
 3. **Download and extract our project.** This can be done from the "Download Zip" option on the top of our repository page, or using [this link](https://github.com/williamtdr/iowa/archive/master.zip). Extract the files using your unarchiver of choice.
 4. **From the newly extracted project directory, run `npm install`.** This retrieves all of the dependencies needed for our project to function. If you get an error, make sure you're running the command from where our project was extracted to on your computer.
 5. **Run `node app.js`**. Enjoy! Make sure that gulp is running when you want to modify source files.
