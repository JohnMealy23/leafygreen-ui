# @leafygreen-ui/tabs

## 4.0.5

### Patch Changes

- ee7923d3: Changes how we extend the types of HTMLElements, and standardizes how we document this across readmes
- dc88bac1: Ensures Tabs have an active state
- d12fe9f7: Fixes bug where on new page load, browser would automatically scroll to Tabs due to prematurely manually focusing of the component
- Updated dependencies [ee7923d3]
  - @leafygreen-ui/lib@6.1.2

## 4.0.4

### Patch Changes

- 1e9d336c: Tabs now accepts an empty React element as children, which makes it easier to conditionally render individual Tab components
- Updated dependencies [c9a0d89f]
- Updated dependencies [9ee1d5fc]
  - @leafygreen-ui/palette@3.1.0
  - @leafygreen-ui/lib@6.1.1
  - @leafygreen-ui/leafygreen-provider@2.0.2

## 4.0.3

### Patch Changes

- 6858240b: Previously, if multiple `<Tabs />` were rendered, only the first on the page would be navigable via keyboard. Now, the currently focused `<Tabs />` will be navigable via keyboard, regardless of location on page.
- Updated dependencies [5cf0c95c]
  - @leafygreen-ui/lib@6.1.0

## 4.0.2

### Patch Changes

- dac3f38b: Fixes a publishing error that prevented UMD modules from being distributed
- Updated dependencies [dac3f38b]
- Updated dependencies [059ef833]
  - @leafygreen-ui/box@3.0.1
  - @leafygreen-ui/hooks@5.0.1
  - @leafygreen-ui/leafygreen-provider@2.0.1
  - @leafygreen-ui/lib@6.0.1
  - @leafygreen-ui/palette@3.0.1
  - @leafygreen-ui/tokens@0.5.0

## 4.0.1

### Patch Changes

- 4c0587a0: Fixes issue where TypeScript types were not packaged.

## 4.0.0

### Major Changes

- 0267bfd2: The underlying structure of distributed module definition files have changed and now have official support for ES modules. Module definition files are now generated using Rollup instead of Webpack. This should not affect functionality, but some thorough testing and caution should be exercised when upgrading.

### Patch Changes

- Updated dependencies [0267bfd2]
  - @leafygreen-ui/box@3.0.0
  - @leafygreen-ui/hooks@5.0.0
  - @leafygreen-ui/leafygreen-provider@2.0.0
  - @leafygreen-ui/lib@6.0.0
  - @leafygreen-ui/palette@3.0.0
  - @leafygreen-ui/tokens@0.4.0

## 3.0.1

### Patch Changes

- a550d645: Properly sets `font-family` of TabTitle and adds fallbacks in case the font is not available

## 3.0.0

### Major Changes

- cac8348a: Updates Tabs component to match new design spec and adds `darkMode` prop

## 2.1.6

### Patch Changes

- 3e32a2ee: Fixes bug where conditionally rendered Tab elements caused the component to try and read the width of a reference to a non-exisistant element.

## 2.1.5

### Patch Changes

- d5d40791: Pin lodash version to latest to include fix for [prototype pollution attack vulnerability.](https://hackerone.com/reports/712065)
- Updated dependencies [d5d40791]
  - @leafygreen-ui/hooks@4.2.1

## 2.1.4

### Patch Changes

- e599707: Require lodash dependencies instead of inlining them.
- Updated dependencies [e599707]
- Updated dependencies [8c867bb]
  - @leafygreen-ui/hooks@4.2.0

## 2.1.3

### Patch Changes

- 691eb05: Better support for UMD
- Updated dependencies [691eb05]
  - @leafygreen-ui/hooks@4.0.1
  - @leafygreen-ui/lib@5.1.1
  - @leafygreen-ui/palette@2.0.2

## 2.1.2

### Patch Changes

- Updated dependencies [fa55b3d]
  - @leafygreen-ui/hooks@4.0.0

## 2.1.1

### Patch Changes

- Updated dependencies [2eba736]
- Updated dependencies [1aa26ee]
- Updated dependencies [a571361]
- Updated dependencies [d739511]
  - @leafygreen-ui/lib@5.0.0
  - @leafygreen-ui/hooks@3.0.0

## 2.1.0

### Minor Changes

- c17a5e1: Changes how keyboard navigation is handled in Tabs componentt. Ensures that navigating browser history is not prevened by component internals

## 2.0.1

### Patch Changes

- 2a03117: Upgrades @testing-library/react to v10 and revises test suites to conform with new standards

## 2.0.0

### Major Changes

- 464c09d: Introduces SSR compatibility though a change to our build process and files

### Patch Changes

- Updated dependencies [464c09d]
  - @leafygreen-ui/lib@4.0.0
  - @leafygreen-ui/palette@2.0.0

## 1.0.5

### Patch Changes

- 2f9a300: Uses exported `keyMap` from lib
- Updated dependencies [2f9a300]
  - @leafygreen-ui/lib@3.2.0

## 1.0.4

### Patch Changes

- d85bd2c: Keyboard navigation responds to keyCode rather than key for more browser compatibility
- Updated dependencies [9c45cb4]
  - @leafygreen-ui/lib@3.1.0

## 1.0.3

### Patch Changes

- 4de039a: Further accessibility updates to make component compliant with a11y standards

## 1.0.2

### Patch Changes

- e1e42f0: Fixes Aria tags in Tab component to be accessible against a11y standards

## 1.0.1

### Patch Changes

- 37d690f: Fixes component dependency on theme to palette

## 1.0.0

### Major Changes

- 410c0d6: Initial release of Tabs
