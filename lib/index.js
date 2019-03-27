/*
 * Copyright (c) 2019 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const {config: {constants}} = require('bedrock');
const {v1: securityContextV1, v2: securityContextV2} =
  require('security-context');

constants.SECURITY_CONTEXT_V1_URL = 'https://w3id.org/security/v1';
constants.CONTEXTS[constants.SECURITY_CONTEXT_V1_URL] = securityContextV1;

constants.SECURITY_CONTEXT_V2_URL = 'https://w3id.org/security/v2';
constants.CONTEXTS[constants.SECURITY_CONTEXT_V2_URL] = securityContextV2;
