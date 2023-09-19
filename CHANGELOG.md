# bedrock-security-context ChangeLog

## 8.0.0 - 2023-09-xx

### Changed
- **BREAKING**: Drop support for Node.js < 18.
- Use peer `@bedrock/jsonld-document-loader@4`. This version requires
  Node.js 18+.

## 7.0.0 - 2022-04-28

### Changed
- **BREAKING**: Update peer deps:
  - `@bedrock/core@6`
  - `@bedrock/jsonld-document-loader@3`.

## 6.0.3 - 2022-04-05

### Fixed
- Load `ed25519-signature-2018-context` as CommonJS to fix its
  import errors.

## 6.0.2 - 2022-04-03

### Fixed
- Do not export constants due to conflicts. Constants should be
  imported directly from the underlying context package instead
  to avoid confusion.

## 6.0.1 - 2022-04-03

### Fixed
- Ensure constants are exported.

## 6.0.0 - 2022-04-03

### Changed
- **BREAKING**: Rename package to `@bedrock/bedrock-security-context`.
- **BREAKING**: Convert to module (ESM).
- **BREAKING**: Remove default export.
- **BREAKING**: Require node 14.x.

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
