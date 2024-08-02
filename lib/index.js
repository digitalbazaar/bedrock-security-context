/*!
 * Copyright (c) 2019-2024 Digital Bazaar, Inc. All rights reserved.
 */
import {contexts as akwContexts} from 'aes-key-wrapping-2019-context';
import {contexts as ed255192018Contexts} from 'ed25519-signature-2018-context';
import {contexts as ed255192020Contexts} from 'ed25519-signature-2020-context';
import {contexts as hmacContexts} from 'sha256-hmac-key-2019-context';
import {contexts as securityContexts} from '@digitalbazaar/security-context';
import {contexts as webkmsContexts} from '@digitalbazaar/webkms-context';
import {contexts as x25519Contexts} from 'x25519-key-agreement-2020-context';
import {contexts as zcapContexts} from '@digitalbazaar/zcap-context';

import {jsonLdDocumentLoader} from '@bedrock/jsonld-document-loader';

jsonLdDocumentLoader.addDocuments({documents: [
  ...akwContexts,
  ...ed255192018Contexts,
  ...ed255192020Contexts,
  ...hmacContexts,
  ...securityContexts,
  ...webkmsContexts,
  ...x25519Contexts,
  ...zcapContexts
]});
