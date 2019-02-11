# Installation Instructions

1. `mocha`, an npm package, must be installed globally on your machine, run `sudo npm install -g mocha`

2.  Run `npm install -g git+https://github.com/jragard/kenzie-testing`, if this fails, try adding `sudo` to the beginning of the aforementioned command.

3. To test local file, the file should be named according to assignment instructions (e.g. katas4.js).  Then run `kenzie-test katas4` (or appropriate assignment name)

4. To test a completed assignment from a github or gitlab:
    * For a github link run `kenzie-test katas4 -g https://github.com/jragard/katas4` (or whatever the submitted github link happens to be)

    * For a gitlab link run `kenzie-test katas4 -g <studentprojectID>`, example `kenzie-test katas4 -g 10739614` (you are welcome to try this in your terminal).  If using Gitlab, the student will be submitting this ID along with their Gitlab Pages page.

*Please contact Taylor Gentry or Ryan Agard at* **ryan@kenzie.academy** *or* **taylorgentry@kenzie.academy** *if you would like to contribute or have any questions.*

#### *Happy Testing!*