# Faster e2e tests with QA Wolf

```

                     .
                    / V\
                  / '  /
                 <<   |
                 /    |
               /      |
             /        |
           /    \  \ /
          (      ) | |
  ________|   _/_  | |
<__________\______)\__)
```

![GitHub stars](https://img.shields.io/github/stars/tzachbon/qawolf-todo-list?style=social)

![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)
![license](https://img.shields.io/github/license/tzachbon/qawolf-todo-list?color=green)


![react](https://img.shields.io/github/package-json/dependency-version/tzachbon/qawolf-todo-list/react)
![wix-style-react](https://img.shields.io/github/package-json/dependency-version/tzachbon/qawolf-todo-list/wix-style-react)
![mobx](https://img.shields.io/github/package-json/dependency-version/tzachbon/qawolf-todo-list/mobx?color=orange)

Hi! This is the demo project for testing with QA Wolf. In this repo you can switch between branches that representing different steps.

To use this project don't forget to run `npm i`.
Master branch is the finished product. If you want to start from scratch run `git checkout init`

## init

A project without testing, here you can start implementing your own testing.

## init_qawolf_config

Here we init the QA Wolf process as the description says
`npm init qawolf`

Then some questions need to be answered for his CLI
```shell
# rootDir: Directory to create tests in? __test__
# Choose CI Provider (Use arrow keys)? Skip
```

Now the CLI will install the dependencies.

To make sure it all work write 😉🐺: `npx qawolf howl`

The CLI should create a file named `qawolf.config.js`.
We need to add one property: `attribute: 'data-hook'`

Here an example for things you can configure:
```js
module.exports  =  {
	// element attributes to use in selectors whenever possible
	attribute:  'data-cy,data-e2e,data-qa,data-test,data-testid,/^qa-.*/',
	// set jest config
	config:  'node_modules/qawolf/js-jest.config.json',
	createTemplate:  ({ name, url })  =>  {
	// returns test template as a string
	},
	// where tests are created
	rootDir:  '.qawolf',
	// function to generate custom test template
	// default timeout of a test in milliseconds
	testTimeout:  60000,
	// generate .ts files
	useTypeScript:  false
};
```

For more details check [this official docs](https://docs.qawolf.com/docs/configure_qa_wolf)

## create

Let's make our life even more easy with adding some scripts
```json
"scripts": {
	...,
	"test:create":  "URL=${URL:-http://localhost:3000/} ; npx qawolf create $URL"
}
```

### TL;DR:
This script using the default url (http://localhost:3000/) and default name (myTest) to make the script even shorter.

Let run: `npm run test:create firstTest`
And it's going to open a new browser with our app, and also create a new file in `__tests__` named `firstTest.test.ts` which looks like this:

```ts
import  { Browser, Page }  from  "playwright";
import qawolf from  "qawolf";

let browser:  Browser;
let page:  Page;

beforeAll(async  ()  =>  {
	browser =  await qawolf.launch();
	const  context  =  await browser.newContext();
	await qawolf.register(context);
	page =  await context.newPage();
});


afterAll(async  ()  =>  {
	await qawolf.stopVideos();
	await browser.close();
});


test("firstTest",  async  ()  =>  {
	await page.goto("http://localhost:3000/");
	await qawolf.create();
});
```

This is the basic template, If you wish to change it checkout the previous section.

Now in the the terminal let's chose `🗑 Discard and exit `.



## tests

Let's create some basic tests!
### Create todo:
* Run `npm run test:create create-todo`.
* Create todo item in the UI and close the window.
* Chose in the terminal `💾  Save and exit `.

And DONE! 🎊🎉🐺

Now you should have a new file named `create-todo.test.ts`.
After we created the test we can test the test 😎.


## test_the_test

Now when we have the test we can see the result of the test.
Let's add some script to help us.

```json
"scripts": {
	...,
	"test:result":  "npx qawolf test"
}
```

-   [Run a specific test](https://docs.qawolf.com/docs/run_tests_locally#run-a-test-locally)  on Chromium:

`npm run test:result create-todo`

-   [Run all tests](https://docs.qawolf.com/docs/run_tests_locally#run-all-tests-locally)  on Chromium:

`npm run test:result`

If you want to use a diffrent browser [read here](https://docs.qawolf.com/docs/run_tests_locally)
And your done, now you can get the also the result for your tests 🥳.

----

If you like this workshop please give a little star 😁 ![GitHub stars](https://img.shields.io/github/stars/tzachbon/qawolf-todo-list?style=social)
You always welcome to contribute and make a PR!

[<img alt="tzachbon" width="100px" src="https://avatars3.githubusercontent.com/u/45866571?v=4&s=117 width=117">](https://github.com/tzachbon) |
:---:|
| [🤝](https://www.linkedin.com/in/tzach-bonfil-21b822187/)   [💻](https://github.com/tzachbon)
