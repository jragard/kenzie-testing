# Kenzie Testing

## About

This package is used to run tests on student Javascript Assessment submissions at Kenzie Academy.  It uses the Mocha test framework and Chai assertion library.  Students can utilize these tools to run tests on their work as they complete it, giving them instant feedback they can then experiment with.  Instructors and coaches can run terminal commands on student url submissions to instantly grade assessments, freeing up valuable face-to-face instruction time. 


## Installation Instructions

**THIS APPLICATION IS IN DEVELOPMENT**  - If the tests are broken or the installation doesn't work, or if you have any other problems, please open an Issue ticket here https://github.com/jragard/kenzie-testing/issues

Run `npm install -g git+https://github.com/jragard/kenzie-testing`, if this fails, try adding `sudo` to the beginning of the aforementioned command.


# Commands

**Testing Local Files**

To test a local file on your computer, the file should be named according to assignment instructions (e.g. katas4.js).  From the directory holding the file you wish to test, run `kenzie-test <assessment_name>` with the specified assessment name given in the assignment instructions. (Ex: `kenzie-test katas4`)

**Grading Student Submissions**

For the tests/assignments we have covered so far, students will submit either a **Github repository url (Ex: https://github.com/jragard/katas4)** or a **Gitlab repository url (Ex: https://gitlab.com/jragard/katas4)**.  To run a grade command on a Github/Gitlab url:

For a Github/Gitlab repository url, run `kenzie-test <assessment_name> -g <url>` with the specified assessment name in the assignment instructions, and the student's url submission. (Ex: `kenzie-test katas4 -g https://github.com/jragard/katas4`  OR  `kenzie-test katas4 -g https://gitlab.com/jragard/katas4`)

*Please contact Taylor Gentry or Ryan Agard at* **ryan@kenzie.academy** *or* **taylorgentry@kenzie.academy** *if you would like to contribute or have any questions.*

#### *Happy Testing!*