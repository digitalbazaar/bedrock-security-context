/*!
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const {contexts, constants: contextConstants} = require('security-context');

describe('bedrock-security-context', () => {
  it('sets up contexts properly', () => {
    for(const c in contextConstants) {
      // ensure that constant vars are defined
      should.exist(bedrockConstants[c]);
      bedrockConstants[c].should.be.a('string');
      bedrockConstants[c].should.equal(contextConstants[c]);
      // ensure that context documents are defined
      should.exist(bedrockConstants.CONTEXTS[contextConstants[c]]);
      bedrockConstants.CONTEXTS[contextConstants[c]].should.be.an('object');
      bedrockConstants.CONTEXTS[contextConstants[c]].should.eql(
        contexts.get(contextConstants[c]));
    }
  });
});
