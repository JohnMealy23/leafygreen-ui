# @leafygreen-ui/typography

## 7.3.0

### Minor Changes

- fc18e572: `H1`, `H2`, `H3` and `Subtitle` components now accept an `as` prop, such that we can keep styles consistent via `Component`, but the actual heading level that should be rendered can change based on context. This was done to support making MongoDB an accessible platform, as headings should only decrease by one level (i.e. from `<h1>` to `<h2>`) but the styles don't always need to appear as such.

## 7.2.0

### Minor Changes

- 8b0ea602: - `Label` component now supports a `disabled` prop

## 7.1.1

### Patch Changes

- ee7923d3: Changes how we extend the types of HTMLElements, and standardizes how we document this across readmes
- Updated dependencies [ee7923d3]
- Updated dependencies [7b71da8f]
  - @leafygreen-ui/lib@6.1.2
  - @leafygreen-ui/icon@7.0.2

## 7.1.0

### Minor Changes

- fe861d52: Adds `Label` and `Description` components
- aab4e65b: Rest props are now forwarded for InlineDefinition components when not rendered as a link

### Patch Changes

- 374430ea: Updates string color value to reference the same color from uiColors palette
- Updated dependencies [c9a0d89f]
- Updated dependencies [9ee1d5fc]
  - @leafygreen-ui/palette@3.1.0
  - @leafygreen-ui/lib@6.1.1
  - @leafygreen-ui/leafygreen-provider@2.0.2

## 7.0.0

### Major Changes

- ac0f3ff1: Visual updates to focus and hover states of <InlineCode /> component. The HTML structure has been returned to that of `v4.*` (the previous change in `v5` was not reflected in the README). Styles provided through `className` prop may need to be updated to accordingly.

### Patch Changes

- Updated dependencies [90996818]
  - @leafygreen-ui/box@3.0.2

## 6.0.1

### Patch Changes

- dac3f38b: Fixes a publishing error that prevented UMD modules from being distributed
- Updated dependencies [dac3f38b]
- Updated dependencies [059ef833]
  - @leafygreen-ui/box@3.0.1
  - @leafygreen-ui/icon@7.0.1
  - @leafygreen-ui/leafygreen-provider@2.0.1
  - @leafygreen-ui/lib@6.0.1
  - @leafygreen-ui/palette@3.0.1
  - @leafygreen-ui/tokens@0.5.0

## 6.0.0

### Major Changes

- 0267bfd2: The underlying structure of distributed module definition files have changed and now have official support for ES modules. Module definition files are now generated using Rollup instead of Webpack. This should not affect functionality, but some thorough testing and caution should be exercised when upgrading.

### Patch Changes

- Updated dependencies [0267bfd2]
  - @leafygreen-ui/box@3.0.0
  - @leafygreen-ui/icon@7.0.0
  - @leafygreen-ui/leafygreen-provider@2.0.0
  - @leafygreen-ui/lib@6.0.0
  - @leafygreen-ui/palette@3.0.0
  - @leafygreen-ui/tokens@0.4.0

## 5.0.0

### Major Changes

- 001a277f: `Body` component now renders as a `div` instead of `p` element.

### Minor Changes

- d0dac1a0: Updates InlineCode component to match design spec. InlineCode components may now also be links.

### Patch Changes

- Updated dependencies [001a277f]
  - @leafygreen-ui/icon@6.6.1

## 4.3.0

### Minor Changes

- eda10121: Adds `H3` and `InlineKeyCode` components
  Updates color of typography elements from `uiColors.gray.dark2` to `uiColors.gray.dark3`

### Patch Changes

- 3fed752e: Fixes styles for Link component
- Updated dependencies [6883ccd0]
- Updated dependencies [d5d40791]
  - @leafygreen-ui/icon@6.6.0
  - @leafygreen-ui/box@2.1.5

## 4.2.2

### Patch Changes

- f792966: Uses Tokens package to define `font-family` for InlineCode component
- Updated dependencies [f792966]
  - @leafygreen-ui/tokens@0.3.0

## 4.2.1

### Patch Changes

- 691eb05: Better support for UMD
- Updated dependencies [691eb05]
  - @leafygreen-ui/box@2.1.3
  - @leafygreen-ui/icon@6.3.2
  - @leafygreen-ui/leafygreen-provider@1.1.4
  - @leafygreen-ui/lib@5.1.1
  - @leafygreen-ui/palette@2.0.2

## 4.2.0

### Minor Changes

- 458f0c3: Ensures that `rest` props are spread to every component in Typography package

### Patch Changes

- @leafygreen-ui/leafygreen-provider@1.1.3

## 4.1.1

### Patch Changes

- Updated dependencies [2eba736]
- Updated dependencies [1aa26ee]
- Updated dependencies [d2136a0]
- Updated dependencies [a571361]
  - @leafygreen-ui/lib@5.0.0
  - @leafygreen-ui/icon@6.3.0
  - @leafygreen-ui/box@2.1.2
  - @leafygreen-ui/leafygreen-provider@1.1.2

## 4.1.0

### Minor Changes

- 4873650: Adds `Link` component to typography package

### Patch Changes

- Updated dependencies [e8f5376]
- Updated dependencies [4873650]
  - @leafygreen-ui/box@2.1.1
  - @leafygreen-ui/icon@6.2.0

## 4.0.0

### Major Changes

- 1d24966: Makes `@leafygreen-ui/leafygreen-provider` a peer dependency to ensure that components use hooks from the same version of the provider as what's installed.

## 3.0.0

### Major Changes

- eba8391: Renames `component` prop to `as`

### Patch Changes

- Updated dependencies [eba8391]
  - @leafygreen-ui/box@2.0.0

## 2.0.0

### Major Changes

- 6d1de4a: Removes `display:inline-block` from Body and Small components.

## 1.0.1

### Patch Changes

- 365412e: Adds lib as a dependency rather than a devDep

## 1.0.0

### Major Changes

- 94ed125: Initial implementation of Typography component

### Patch Changes

- Updated dependencies [94ed125]
  - @leafygreen-ui/leafygreen-provider@1.1.0
