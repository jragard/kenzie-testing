# Getting Started
Hello and thank you for your interest in helping to develop the kenzie testing package, here is a quick guide to installing, running, and contributing to the package.

    ## Installation
Clone the repo to your local machine\
`git clone git@github.com:jragard/kenzie-testing.git`\
CD into the new cloned directory and run\
`npm install`\
Now that the package should be successfully installed  the package we need use **[link](https://medium.com/dailyjs/how-to-use-npm-link-7375b6219557)** to run the package. In the project directory run\
`npm link`\
Now we navigate to a folder where we will be testing files\
ex: `cd ~/sampleFilesDirectory`\
Now we link the current folder with the package by running\
`npm link kenzie-testing`\
Now when we run commands from the package in this current folder it will use our project package, so as you work on the project you can test your changes easily.



    ## Useful links for getting started
### [Testcafe](https://devexpress.github.io/testcafe/)
* [getting started](https://devexpress.github.io/testcafe/documentation/getting-started/)
* [Basic type, click, and results](https://www.sitepoint.com/testcafe-easier-end-end-web-app-testing-node-js/)
* [Useful Tutorial Series](https://documentation.platform-os.com/tutorials/qa/writing-testcafe-test)
* [React and Testcafe](https://hackernoon.com/e2e-testing-react-applications-with-testcafe-8edb605ec66c)

### [Mocha](https://github.com/mochajs/mocha) & [Chai](https://github.com/chaijs/chai)
* [getting started](https://mochajs.org/#getting-started)
* [The basics](https://codeburst.io/javascript-unit-testing-using-mocha-and-chai-1d97d9f18e71)
* [3 part tutorial](https://www.dyclassroom.com/mocha-chai/mocha-chai-introduction)