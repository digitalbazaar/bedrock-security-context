/*!
 * Copyright (c) 2019-2022 Digital Bazaar, Inc. All rights reserved.
 */
import {documentLoader} from '@bedrock/jsonld-document-loader';

describe('bedrock-security-context', () => {
  it('sets up contexts properly', async () => {
    const testContexts = [
      '@digitalbazaar/security-context',
      '@digitalbazaar/webkms-context',
      '@digitalbazaar/zcap-context',
      'aes-key-wrapping-2019-context',
      'ed25519-signature-2018-context',
      'ed25519-signature-2020-context',
      'sha256-hmac-key-2019-context',
      'x25519-key-agreement-2020-context'
    ];
    for(const testContext of testContexts) {
      const {contexts} = await import(testContext);
      for(const [contextUrl, context] of contexts) {
        // ensure that context documents are defined
        const result = await documentLoader(contextUrl);
        should.exist(result);
        should.exist(result.document);
        result.document.should.be.an('object');
        result.document.should.eql(context);
        should.exist(result.tag);
        result.tag.should.eql('static');
      }
    }
  });
});
