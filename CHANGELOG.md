# bedrock-security-context ChangeLog

## 5.1.0 - 2022-03-29

### Changed
- Update peer deps:
  - `bedrock@4.5`
  - `bedrock-jsonld-document-loader@1.3`.

### Fixed
- Ensure internals use ESM.

## 5.0.0 - 2022-01-11

### Changed
- **BREAKING**: Use `@digitalbazaar/security-context@1`.
- **BREAKING**: Use `@digitalbazaar/webkms-context@2`.
- **BREAKING**: Use `@digitalbazaar/zcap-context@2`.

## 4.1.0 - 2021-04-26

### Added
- Support for `aes-key-wrapping-2019-context`.
- Support for `sha256-hmac-key-2019-context`.
- Support for `webkms-context`.
- Support for `zcap-context`.

## 4.0.0 - 2021-03-31

### Changed
- **BREAKING**: Context URLs are no longer added to `bedrock.config.constants`.

### Added
- Support for `ed25519-signature-2018-context`.
- Support for `ed25519-signature-2020-context`.
- Support for `x25519-key-agreement-2020-context`.

## 3.0.0 - 2019-11-13

### Changed
- **BREAKING**: Use security-context@4.
- Update dependencies.

## 2.0.0 - 2019-10-21

### Changed
- **BREAKING**: Refactor module for use with bedrock@2.
- **BREAKING**: Use security-context@3.

## 1.0.0 - 2019-03-29

- See git history for changes.
