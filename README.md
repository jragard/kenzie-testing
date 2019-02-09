Instructions to Run Tests (with Katas4 as example assignment)

1.  Run `npm install --global git+https://github.com/jragard/kenzie-testing`

2.  To test local file, the file should be named according to assignment instructions (e.g. katas1.js).  Then run `kenzie-test katas4` (or appropriate assignment name)

3. To test a completed assignment from a github link, run `kenzie-test katas4 -g https://github.com/jragard/katas4` (or whatever the submitted github link happens to be)

4. To test a completed assignment from a gitlab, run `kenzie-test katas4 -g <Project ID>`  (The student will need to submit their gitlab project ID number, and share their project with KA_SE5 Gitlab account) For example, `kenzie-test katas4 -g 10739614` will grab the contents of the file at https://gitlab.com/jragard/katas4.  