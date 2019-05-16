/*
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const {contexts, constants: contextConstants} = require('security-context');

for(const c in contextConstants) {
  const contextUrl = contextConstants[c];
  bedrockConstants[c] = contextUrl;
  bedrockConstants.CONTEXTS[contextUrl] = contexts.get(contextUrl);
}
