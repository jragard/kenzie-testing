export const randomInteger = function(max) {
  // Return a random integer from 1 to max
  return Math.floor(Math.random() * max) + 1;
};
export const times = (fn, numOfTimes) => {
  // Return an array whose length is numOfTimes, and each item is a fn() result
  const arr = [];

  for (let i = 0; i < numOfTimes; i++) {
    arr.push(fn());
  }

  return arr;
};
export const createKeyCount = array => {
  // Return an object whose keys represent every unique value in the input array
  // and whose values represent the number of times that key was seen in the input array
  const obj = {};
  array.forEach(val => {
    if (obj[val] === undefined) {
      obj[val] = 1;
    } else {
      obj[val]++;
    }
  });
  return obj;
};

export const createBarGraph = object => {
  // Return a DOM subtree containing all the elements needed to render a bar graph from the input object data
  const barGraph = document.createElement("div");
  for (let key in object) {
    const bar = document.createElement("div");
    bar.innerText = key;
    bar.style.color = "white";
    bar.style.backgroundColor = "grey";
    bar.style.width = object[key] + "px";
    bar.style.marginTop = "10px";
    bar.style.marginBottom = "10px";
    barGraph.appendChild(bar);
  }
  return barGraph;
};
export const execute = (nSidedDie, sumOfNRolls, nNumberOfTimes) => {
  const result = createKeyCount(
    times(
      () =>
        times(() => randomInteger(nSidedDie), sumOfNRolls).reduce(
          (sum, num) => sum + num,
          0
        ),
      nNumberOfTimes
    )
  );
  document.body.appendChild(createBarGraph(result));
};
