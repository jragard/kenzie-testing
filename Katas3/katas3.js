const sampleArray = [
  469,
  755,
  244,
  245,
  758,
  450,
  302,
  20,
  712,
  71,
  456,
  21,
  398,
  339,
  882,
  848,
  179,
  535,
  940,
  472
];

// instructions need this to be in an html element,
// not console log, will have to brainstorm on that
module.exports = {
  kata11: () => {
    return sampleArray;
  },
  kata12: function() {
    return sampleArray.filter(number => number % 2 === 0);
  },
  kata13: () => {
    // let answer = [];
    // for (let i = 0; i < sampleArray.length; i++) {
    //   if (sampleArray[i] % 2 != 0) {
    //     answer.unshift(sampleArray[i]);
    //   }
    // }
    // return answer;
    return sampleArray.filter(number => number % 2 !== 0);
  }
};
