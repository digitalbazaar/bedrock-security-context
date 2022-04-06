/*!
 * Copyright (c) 2019-2022 Digital Bazaar, Inc. All rights reserved.
 */
import akwContext from 'aes-key-wrapping-2019-context';
import {createRequire} from 'module';
import ed255192020Context from 'ed25519-signature-2020-context';
import hmacContext from 'sha256-hmac-key-2019-context';
import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';
import securityContext from '@digitalbazaar/security-context';
import webkmsContext from '@digitalbazaar/webkms-context';
import x25519Context from 'x25519-key-agreement-2020-context';
import zcapContext from '@digitalbazaar/zcap-context';
// load contexts that must be loaded as CommonJS
const require = createRequire(import.meta.url);
const ed255192018Context = require('ed25519-signature-2018-context');

const contextModules = [
  akwContext,
  ed255192018Context,
  ed255192020Context,
  hmacContext,
  securityContext,
  webkmsContext,
  x25519Context,
  zcapContext
];

for(const {contexts} of contextModules) {
  for(const [contextUrl, context] of contexts) {
    jsonLdDocumentLoader.addStatic(contextUrl, context);
  }
}
