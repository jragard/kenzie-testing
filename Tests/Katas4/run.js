const { TestBase } = require("../../TestBase");

let test = new TestBase(__dirname, {
  mochaFunctions:
    "kata1, kata2, kata3,kata4, kata5, kata6, kata7, kata8, kata9, kata10, kata11, kata12, kata13, kata14, kata15, kata16, kata17, kata18, kata19, kata20, kata21, kata22, kata23, kata24, kata25, kata26, kata27, kata28, kata29, kata30, kata31, kata32"
});

async function runTests() {
  await test.runMochaTest();
}

runTests();
