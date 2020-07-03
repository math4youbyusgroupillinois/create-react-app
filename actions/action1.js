"use strict";
let datafire = require('datafire');

let pivotaltracker = require('@datafire/pivotaltracker').actions;
module.exports = new datafire.Action({
  handler: async (input, context) => {
    let result = await Promise.all([].map(item => pivotaltracker.tokens.active.get({}, context)));
    return result;
  },
});
