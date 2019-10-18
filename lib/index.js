/*
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants: bedrockConstants}} = require('bedrock');
const {contexts, constants: contextConstants} = require('security-context');
const {jsonLdDocumentLoader} = require('bedrock-jsonld-document-loader');

for(const c in contextConstants) {
  const contextUrl = contextConstants[c];
  bedrockConstants[c] = contextUrl;
  jsonLdDocumentLoader.addStatic(contextUrl, contexts.get(contextUrl));
}
