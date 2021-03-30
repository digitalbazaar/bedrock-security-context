/*!
 * Copyright (c) 2019-2021 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const {contexts, constants: contextConstants} = require('security-context');
const {documentLoader} = require('bedrock-jsonld-document-loader');

describe('bedrock-security-context', () => {
  it('sets up contexts properly', async () => {
    for(const c in contextConstants) {
      // ensure that constant vars are defined
      should.exist(bedrockConstants[c]);
      bedrockConstants[c].should.be.a('string');
      bedrockConstants[c].should.equal(contextConstants[c]);
      // ensure that context documents are defined
      const result = await documentLoader(contextConstants[c]);
      should.exist(result);
      should.exist(result.document);
      result.document.should.be.an('object');
      result.document.should.eql(contexts.get(contextConstants[c]));
    }
  });
});
