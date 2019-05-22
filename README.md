# Kenzie Testing

## About

This package is used to run tests on student Javascript Assessment submissions at Kenzie Academy.  It uses a combination of [Test Cafe](https://github.com/DevExpress/testcafe), [Mocha](https://github.com/mochajs/mocha) test framework, and [Chai](https://github.com/chaijs/chai) assertion library.  Students can utilize these tools to run tests on their work as they complete it, giving them instant feedback they can then experiment with.  Instructors and coaches can run terminal commands on student url submissions to instantly grade assessments, freeing up valuable face-to-face instruction time.

**THIS APPLICATION IS IN DEVELOPMENT**  - If the tests are broken or the installation doesn't work, or if you have any other problems, please open an [Issue ticket here](https://github.com/jragard/kenzie-testing/issues)

## Installation Instructions
### Students
Run\
`npm install -g git+https://github.com/jragard/kenzie-testing`\
If this fails, try\
`sudo npm install -g git+https://github.com/jragard/kenzie-testing`

### Graders
Run\
 `npm install -g git+https://github.com/jragard/kenzie-testing`\
If this fails, try\
`sudo npm install -g git+https://github.com/jragard/kenzie-testing`\
Create a .env file in the install directory and add `GITLAB_TOKEN=<ProvidedToken>`\
(If you have not been provided with a gitlab token contact Jacob or Ryan to receive a token. These are needed to run tests remotely on the students private repos)

### Contributers
Please see **[Getting Started](./doc/gettingStarted.md)**


# Commands

**Testing Local Files**

To test a local file on your computer, the file should be named according to assignment instructions (e.g. katas4.js).  From the directory holding the file you wish to test, run `kenzie-test grade <assessment_name>` with the specified assessment name given in the assignment instructions. (Ex: `kenzie-test grade katas4`)\
To test a specific file on your computer  without being in that directory you can add `-l <filepath>` to the command. (Ex: `kenzie-test grade katas4 -l ./Documents/katas4/katas4.js)`

**Grading Student Submissions**

For the tests/assignments we have covered so far, students will submit either a **Github repository url (Ex: https://github.com/jragard/katas4)** or a **Gitlab repository url (Ex: https://gitlab.com/jragard/katas4)**.  To run a grade command on a Github/Gitlab url:

    For a Github/Gitlab repository url, run `kenzie-test grade <assessment_name> -g <url>` with the specified assessment name in the assignment instructions, and the student's url submission. (Ex: `kenzie-test katas4 -g https://github.com/jragard/katas4`  OR  `kenzie-test katas4 -g https://gitlab.com/jragard/katas4`)




*Please contact Ryan Agard or Jacob Walker at* **[ryan@kenzie.academy](mailto:ryan@kenzie.academy)** *or* **[jacobdawalker@gmail.com](mailto:jacobdawalker@gmail.com)** *if you would like to contribute or have any questions.*

#### *Happy Testing!*
