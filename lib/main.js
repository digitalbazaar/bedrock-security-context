/*
 * Copyright (c) 2019-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {jsonLdDocumentLoader} from 'bedrock-jsonld-document-loader';

const contextModules = [
  '@digitalbazaar/security-context',
  '@digitalbazaar/webkms-context',
  '@digitalbazaar/zcap-context',
  'aes-key-wrapping-2019-context',
  'ed25519-signature-2018-context',
  'ed25519-signature-2020-context',
  'sha256-hmac-key-2019-context',
  'x25519-key-agreement-2020-context'
];

for(const module of contextModules) {
  const {contexts, constants: contextConstants} = require(module);
  for(const c in contextConstants) {
    // exclude constants such as CBORLD_VALUE
    if(!c.includes('URL')) {
      continue;
    }
    const contextUrl = contextConstants[c];
    jsonLdDocumentLoader.addStatic(contextUrl, contexts.get(contextUrl));
  }
}
