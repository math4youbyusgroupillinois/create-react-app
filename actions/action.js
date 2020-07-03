"use strict";
let datafire = require('datafire');

let giphy = require('@datafire/giphy').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => giphy.getGifById({
      gifId: 0,
    }, context)));
    return result;
  },
});
