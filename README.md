
# Testing setup for Mocha/Chai/Sinon/Wallaby

So I have revisited this with the new cli version 1.2.2 and its appears its much simpler, or I just over complicated the first version. (That wouldn't suprise me)

Anyways, here is how I have:
* 	Mocha
* 	Chai
* 	Sinon
* 	Wallaby

now running both using a command line, and the standard Wallaby interface.

So wind up the Aurelia CLI and create a new project.

I used the following prompt selections:
1. * 	Custom App
2. * 	CLI's built-in bundler
3. * 	Alameda
4. * 	Web
5. * 	Typescript
6. * 	Maximum Minification
7. * 	Sass
8. * 	Typical
9. * 	None
10. * 	None
11. * 	Visual Studio Code
12. * 	Minimum
13. * 	No
14. * 	Yes
	
Change into your project directory.
	
Add the following npm modules:
* ```npm i mocha @types/mocha chai @types/chai sinon @types/sinon chai-datetime @types/chai-datetime -D```
* ```npm i ts-node ts-mocha tsconfig-paths -D```
	
Once those are installed add/update the following files:
* 	/package.json
* 	/wallaby.js
* 	/.mocharc.json
* 	/test/tsconfig.cjs.json
* 	/test/unit/test.spec.ts

I originally had the chai initialization inside of the wallaby config, but of course if you used the command line it would error out not finding it. So I moved it into the mocha setup() function, which does create more boilerplate noise. There is probably a way to seperate that out, but I haven't looked into that yet.

I override the default module type selection for testing only using a parameter to ts-mocha, which extends the root tsconfig.json.

You should now be able to run Wallaby in VS Code if you have it installed

* ```[shift][control]-p and select wallaby start```

or

Using the ts-mocha wrapper, run tests on the command line using:

* ```npm run test```


# Default Readme content
# `testing-cli-1-2-2`

This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

For more information, go to https://aurelia.io/docs/cli/cli-bundler

## Run dev app

Run `au run`, then open `http://localhost:9000`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To change dev server host, do `au run --host 127.0.0.1`


**PS:** You could mix all the flags as well, `au run --host 127.0.0.1 --port 7070 --open`

## Build for production

Run `au build --env prod`.
