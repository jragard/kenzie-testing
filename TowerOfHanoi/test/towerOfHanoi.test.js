import { Selector } from "testcafe";

const START_TOWER = "#startTower";
const MIDDLE_TOWER = "#middleTower";
const END_TOWER = "#endTower";
const GAME_STATUS = "#status";

const startTower = Selector(START_TOWER);
const middleTower = Selector(MIDDLE_TOWER);
const endTower = Selector(END_TOWER);
const gameStatus = Selector(GAME_STATUS);

fixture`Initial Configuration`.page`../index.html`;
test(`${START_TOWER} should exist`, async t => {
  await t.expect(startTower.exists).ok();
});

test(`${MIDDLE_TOWER} should exist`, async t => {
  await t.expect(middleTower.exists).ok();
});

test(`${END_TOWER} should exist`, async t => {
  await t.expect(endTower.exists).ok();
});

test(`${GAME_STATUS} should exist`, async t => {
  await t.expect(gameStatus.exists).ok();
});

test(`${START_TOWER} should start with 4 disks`, async t => {
  await t.expect(startTower.childElementCount).eql(4);
});

test(`${MIDDLE_TOWER} should start with 0 disks`, async t => {
  await t.expect(middleTower.childElementCount).eql(0);
});

test(`${END_TOWER} should start with 0 disks`, async t => {
  await t.expect(endTower.childElementCount).eql(0);
});

test(`each disk in ${START_TOWER} should have a data-size attribute`, async t => {
  await t.expect(startTower.child("[data-size]").count).eql(4);
});

test(`the disks in ${START_TOWER} should be ordered from smallest at the top to largest at the bottom`, async t => {
  await t
    .expect(startTower.child(-1).getAttribute("data-size"))
    .eql("1")
    .expect(startTower.child(-2).getAttribute("data-size"))
    .eql("2")
    .expect(startTower.child(-3).getAttribute("data-size"))
    .eql("3")
    .expect(startTower.child(-4).getAttribute("data-size"))
    .eql("4");
});

fixture`Game Rules`.page`../index.html`;
test("only one disk can be moved at a time", async t => {
  const startCount = await startTower.childElementCount;
  const endCount = await endTower.childElementCount;
  await t
    .click(startTower)
    .expect(startTower.childElementCount)
    .eql(startCount - 1)
    .click(endTower)
    .expect(endTower.childElementCount)
    .eql(endCount + 1);
});

test("only the upper disk can be moved from one stack to another stack", async t => {
  const upperDisk = await startTower.child(-1);

  await t
    .click(startTower)
    .click(endTower)
    .expect(endTower.child(-1).id)
    .eql(await upperDisk.id);
});

test("a larger disk cannot be placed on top of a smaller disk", async t => {
  const largerDisk = await startTower.child(-2);
  await t
    .click(startTower)
    .click(endTower)
    .click(startTower)
    .click(endTower)
    .expect(endTower.child(-1).id)
    .notEql(await largerDisk.id);
});

fixture`Win Condition`.page`../index.html`;
test("all disks are on the winning rod", async t => {
  await t
    .click(startTower)
    .click(middleTower)
    .click(startTower)
    .click(endTower)
    .click(middleTower)
    .click(endTower)
    .click(startTower)
    .click(middleTower)
    .click(endTower)
    .click(startTower)
    .click(endTower)
    .click(middleTower)
    .click(startTower)
    .click(middleTower)
    .click(startTower)
    .click(endTower)
    .click(middleTower)
    .click(endTower)
    .click(middleTower)
    .click(startTower)
    .click(endTower)
    .click(startTower)
    .click(middleTower)
    .click(endTower)
    .click(startTower)
    .click(middleTower)
    .click(startTower)
    .click(endTower)
    .click(middleTower)
    .click(endTower)
    .expect(startTower.childElementCount)
    .eql(0)
    .expect(middleTower.childElementCount)
    .eql(0)
    .expect(endTower.childElementCount)
    .eql(4)
    .expect(gameStatus.innerText)
    .eql("You Win!");
});
