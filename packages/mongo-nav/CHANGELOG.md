# @leafygreen-ui/mongo-nav

## 5.1.0

### Minor Changes

- 1d8f922f: Adds banner to advertise Account MFA. Renames Two-Factor Authentication -> Legacy 2FA and removes this menu item for users that do not already have it set up.

## 5.0.1

### Patch Changes

- 4911e893: Adds missing data-testid attributes to All Clusters and Admin links in OrgNav
- 1e2de22a: Resolves issue where "More" menu would appear behind the nav when a z-index was set on the nav.
- Updated dependencies [572ced14]
- Updated dependencies [6e26200a]
- Updated dependencies [78c60261]
- Updated dependencies [fc18e572]
  - @leafygreen-ui/button@10.0.1
  - @leafygreen-ui/typography@7.3.0

## 5.0.0

### Major Changes

- 9a92418e: Allows Realm and Charts icons to be disabled in MongoNav when an Atlas project is designated as a China regions-only project.

## 4.2.0

### Minor Changes

- e0e6076b: Admin and clusters links and version now appear in a dropdown menu for narrower screen sizes.

### Patch Changes

- 8b0ea602: Performs some internal code refactoring with no change in external functionality.
- Updated dependencies [8b0ea602]
- Updated dependencies [8b0ea602]
- Updated dependencies [8b0ea602]
- Updated dependencies [8b0ea602]
- Updated dependencies [f3523462]
  - @leafygreen-ui/interaction-ring@1.0.0
  - @leafygreen-ui/button@10.0.0
  - @leafygreen-ui/typography@7.2.0
  - @leafygreen-ui/menu@9.1.2

## 4.1.0

### Minor Changes

- c18f16e6: Improves compatibility with React v17

### Patch Changes

- 374430ea: Updates string color value to reference the same color from uiColors palette
- Updated dependencies [10bdc295]
- Updated dependencies [374430ea]
- Updated dependencies [c18f16e6]
- Updated dependencies [c18f16e6]
- Updated dependencies [fe861d52]
- Updated dependencies [7359e552]
- Updated dependencies [c9a0d89f]
- Updated dependencies [9ee1d5fc]
- Updated dependencies [aab4e65b]
  - @leafygreen-ui/button@9.0.0
  - @leafygreen-ui/typography@7.1.0
  - @leafygreen-ui/hooks@6.0.0
  - @leafygreen-ui/menu@9.1.0
  - @leafygreen-ui/tooltip@6.1.0
  - @leafygreen-ui/palette@3.1.0
  - @leafygreen-ui/lib@6.1.1
  - @leafygreen-ui/leafygreen-provider@2.0.2

## 4.0.3

### Patch Changes

- f7b3d668: Fixes issue where menu scrollbar is always visible
- Updated dependencies [f7b3d668]
  - @leafygreen-ui/menu@9.0.2

## 4.0.2

### Patch Changes

- Updated dependencies [ac0f3ff1]
  - @leafygreen-ui/typography@7.0.0

## 4.0.1

### Patch Changes

- dac3f38b: Fixes a publishing error that prevented UMD modules from being distributed
- Updated dependencies [dac3f38b]
  - @leafygreen-ui/badge@4.0.1
  - @leafygreen-ui/button@8.0.1
  - @leafygreen-ui/hooks@5.0.1
  - @leafygreen-ui/icon@7.0.1
  - @leafygreen-ui/icon-button@9.0.1
  - @leafygreen-ui/leafygreen-provider@2.0.1
  - @leafygreen-ui/lib@6.0.1
  - @leafygreen-ui/logo@4.0.1
  - @leafygreen-ui/menu@9.0.1
  - @leafygreen-ui/palette@3.0.1
  - @leafygreen-ui/tooltip@6.0.1
  - @leafygreen-ui/typography@6.0.1

## 4.0.0

### Major Changes

- 0267bfd2: The underlying structure of distributed module definition files have changed and now have official support for ES modules. Module definition files are now generated using Rollup instead of Webpack. This should not affect functionality, but some thorough testing and caution should be exercised when upgrading.

### Patch Changes

- Updated dependencies [0267bfd2]
  - @leafygreen-ui/badge@4.0.0
  - @leafygreen-ui/button@8.0.0
  - @leafygreen-ui/hooks@5.0.0
  - @leafygreen-ui/icon-button@9.0.0
  - @leafygreen-ui/icon@7.0.0
  - @leafygreen-ui/leafygreen-provider@2.0.0
  - @leafygreen-ui/lib@6.0.0
  - @leafygreen-ui/logo@4.0.0
  - @leafygreen-ui/menu@9.0.0
  - @leafygreen-ui/palette@3.0.0
  - @leafygreen-ui/tooltip@6.0.0
  - @leafygreen-ui/typography@6.0.0

## 3.3.0

### Minor Changes

- bddbde71: Exports `GovBanner` as standalone component

### Patch Changes

- Updated dependencies [65d5ed4d]
  - @leafygreen-ui/icon@6.7.0
  - @leafygreen-ui/icon-button@8.0.2

## 3.2.0

### Minor Changes

- a18b4e1b: MongoNav menus are now scrollable instead of cut-off when window height is too short.

### Patch Changes

- Updated dependencies [001a277f]
- Updated dependencies [d0dac1a0]
- Updated dependencies [a18b4e1b]
- Updated dependencies [001a277f]
  - @leafygreen-ui/typography@5.0.0
  - @leafygreen-ui/menu@8.0.0
  - @leafygreen-ui/icon@6.6.1
  - @leafygreen-ui/icon-button@8.0.1

## 3.1.9

### Patch Changes

- 6e210765: Fixes regression from adding darkMode prop, where tooltips were light in the nav by default.
  - @leafygreen-ui/menu@7.0.10
  - @leafygreen-ui/tooltip@5.0.1

## 3.1.8

### Patch Changes

- Updated dependencies [1a127dc8]
  - @leafygreen-ui/logo@3.0.0

## 3.1.7

### Patch Changes

- Updated dependencies [47846c77]
- Updated dependencies [483b8a2e]
- Updated dependencies [a84219f1]
  - @leafygreen-ui/button@7.0.1
  - @leafygreen-ui/menu@7.0.9
  - @leafygreen-ui/tooltip@5.0.0
  - @leafygreen-ui/icon-button@8.0.0

## 3.1.6

### Patch Changes

- d5d40791: Pin lodash version to latest to include fix for [prototype pollution attack vulnerability.](https://hackerone.com/reports/712065)
- Updated dependencies [6883ccd0]
- Updated dependencies [3fed752e]
- Updated dependencies [6ab659c8]
- Updated dependencies [6883ccd0]
- Updated dependencies [3fed752e]
- Updated dependencies [eda10121]
- Updated dependencies [6883ccd0]
- Updated dependencies [d5d40791]
  - @leafygreen-ui/icon@6.6.0
  - @leafygreen-ui/typography@4.3.0
  - @leafygreen-ui/tooltip@4.0.0
  - @leafygreen-ui/button@7.0.0
  - @leafygreen-ui/hooks@4.2.1
  - @leafygreen-ui/icon-button@7.0.6

## 3.1.5

### Patch Changes

- e599707: Require lodash dependencies instead of inlining them.
- Updated dependencies [e599707]
- Updated dependencies [e49d66b]
- Updated dependencies [e599707]
- Updated dependencies [8c867bb]
  - @leafygreen-ui/tooltip@3.3.7
  - @leafygreen-ui/icon@6.5.0
  - @leafygreen-ui/hooks@4.2.0
  - @leafygreen-ui/icon-button@7.0.5

## 3.1.4

### Patch Changes

- Updated dependencies [ab4c074]
  - @leafygreen-ui/icon-button@7.0.0
  - @leafygreen-ui/menu@7.0.7

## 3.1.3

### Patch Changes

- 691eb05: Better support for UMD
- Updated dependencies [691eb05]
  - @leafygreen-ui/tooltip@3.3.5
  - @leafygreen-ui/badge@3.0.2
  - @leafygreen-ui/button@6.0.2
  - @leafygreen-ui/hooks@4.0.1
  - @leafygreen-ui/icon@6.3.2
  - @leafygreen-ui/icon-button@6.1.4
  - @leafygreen-ui/leafygreen-provider@1.1.4
  - @leafygreen-ui/lib@5.1.1
  - @leafygreen-ui/logo@2.1.2
  - @leafygreen-ui/menu@7.0.6
  - @leafygreen-ui/palette@2.0.2
  - @leafygreen-ui/typography@4.2.1

## 3.1.2

### Patch Changes

- 84b1c21: Fix bug in UserMenu types, such that only component-specific types are required
- Updated dependencies [11ee447]
- Updated dependencies [6aadc0b]
- Updated dependencies [5ee2098]
  - @leafygreen-ui/tooltip@3.3.4
  - @leafygreen-ui/lib@5.1.0
  - @leafygreen-ui/icon@6.3.1
  - @leafygreen-ui/icon-button@6.1.3

## 3.1.1

### Patch Changes

- f9fa56e: Updates copy in GovBanner

## 3.1.0

### Minor Changes

- fa55b3d: Make some hooks and MongoNav support server-side rendering

### Patch Changes

- Updated dependencies [458f0c3]
- Updated dependencies [fa55b3d]
  - @leafygreen-ui/typography@4.2.0
  - @leafygreen-ui/hooks@4.0.0
  - @leafygreen-ui/leafygreen-provider@1.1.3
  - @leafygreen-ui/menu@7.0.5
  - @leafygreen-ui/tooltip@3.3.3

## 3.0.0

### Major Changes

- a65f35d: Exposes imperative API to refetch data in MongoNav: `mongoNavRef.current.reload()`. This is a major version bump, because React recommends that when a component is newly wrapped in `forwardRef` it be released as a breaking change.

### Patch Changes

- 135d112: Sets `usePortal` proprety to `false` on GovBanner tooltips
- Updated dependencies [f6e84ec]
  - @leafygreen-ui/button@6.0.1

## 2.1.0

### Minor Changes

- d2136a0: Adds support for FedRAMP users

### Patch Changes

- d2136a0: Fixes types for `OrgSelect` and `ProjectSelect` components
- 525496c: Ensures MFA MenuItem is not displayed in UserMenu when environment is set to "government"
- a8fdc67: Fix non-admin search for project and organization
- 89c2cc7: Removes `See Product Tour` link from OrgNav
- Updated dependencies [a571361]
- Updated dependencies [2eba736]
- Updated dependencies [1aa26ee]
- Updated dependencies [d2136a0]
- Updated dependencies [a571361]
- Updated dependencies [a571361]
- Updated dependencies [d739511]
  - @leafygreen-ui/button@6.0.0
  - @leafygreen-ui/lib@5.0.0
  - @leafygreen-ui/icon@6.3.0
  - @leafygreen-ui/tooltip@3.3.2
  - @leafygreen-ui/hooks@3.0.0
  - @leafygreen-ui/badge@3.0.1
  - @leafygreen-ui/icon-button@6.1.2
  - @leafygreen-ui/leafygreen-provider@1.1.2
  - @leafygreen-ui/logo@2.1.1
  - @leafygreen-ui/menu@7.0.4
  - @leafygreen-ui/typography@4.1.1

## 2.0.1

### Patch Changes

- 1d24966: Makes `@leafygreen-ui/leafygreen-provider` a peer dependency to ensure that components use hooks from the same version of the provider as what's installed.
- Updated dependencies [1d24966]
  - @leafygreen-ui/button@5.0.0
  - @leafygreen-ui/menu@7.0.0

## 2.0.0

### Major Changes

- c6e6643: Removes `href` from Access Manager in OrgNav, and now is used as as a button to control the Access Manager dropdown menu. In order to make this change, the OrgNavAccessManager and OrgNavDropdown NavElement types have been combined to OrgNavAccessManagerDropdown.

### Patch Changes

- eba8391: Enhances internal typings
- Updated dependencies [12bc8c3]
- Updated dependencies [eba8391]
- Updated dependencies [eba8391]
  - @leafygreen-ui/tooltip@3.3.0
  - @leafygreen-ui/button@4.2.5
  - @leafygreen-ui/menu@6.0.14
  - @leafygreen-ui/icon@6.1.1
  - @leafygreen-ui/icon-button@6.0.1

## 1.3.3

### Patch Changes

- 3f68a51: Adds `onLogout` prop to `OnPremUserMenu`.
- 1d86d56: Imports Glyphs directly, rather than importing the entire Icon package, when Glyph components are used
- Updated dependencies [1d86d56]
- Updated dependencies [1d86d56]
- Updated dependencies [1d86d56]
  - @leafygreen-ui/icon@6.1.0
  - @leafygreen-ui/menu@6.0.13
  - @leafygreen-ui/icon-button@6.0.0

## 1.3.2

### Patch Changes

- f699208: Removes logic used to determine whether to display Stitch or Realm

## 1.3.1

### Patch Changes

- Updated dependencies [6fc022e]
  - @leafygreen-ui/icon@6.0.0
  - @leafygreen-ui/button@4.2.4
  - @leafygreen-ui/icon-button@5.0.4
  - @leafygreen-ui/menu@6.0.12

## 1.3.0

### Minor Changes

- daeaca2: Uses a function to determine whether host url should be "stitch.mongodb.com" or "realm.mongodb.com"

## 1.2.2

### Patch Changes

- 5d044ec: Closes Access Manager dropdown in `OrgNav` when one of the MenuItems is clicked
- Updated dependencies [2fc4ef9]
- Updated dependencies [05779a1]
- Updated dependencies [e857861]
- Updated dependencies [cf6167e]
  - @leafygreen-ui/icon@5.2.0
  - @leafygreen-ui/menu@6.0.11
  - @leafygreen-ui/icon-button@5.0.3

## 1.2.1

### Patch Changes

- 57b41cf: Enables Cloud SubMenu when `account` is the `activePlatform`.
  Makes `admin` prop on the `AccountInterface` optional.
- Updated dependencies [a11b521]
  - @leafygreen-ui/menu@6.0.10

## 1.2.0

### Minor Changes

- 7453299: Move MongoNav data fetching into its own hook.

  Add support for using the `admin` value from the API endpoint. Should just work without any changes needed by component consumers.

- 6cc5d5e: Adds `alertPollingInterval` and `activePlatform` props to MongoNav

## 1.1.0

### Minor Changes

- 571a6a2: Add `NavElement.OrgNavOrgSelectSearch` and `NavElement.ProjectNavProjectSelectSearch` to track when a user first searches in an OrgSelect or ProjectSelect respectively.

### Patch Changes

- 3317104: Fixes bug where spacebar closes OrgSelect and ProjectSelect
- ba2ecca: Enables ProjectAccessManager in OrgNav Access Manager Dropdown when OnPrem and currentProjectName exists
- 2a03117: Upgrades @testing-library/react to v10 and revises test suites to conform with new standards
- 571a6a2: Update url to new project invite url
- Updated dependencies [2a03117]
- Updated dependencies [c812eb3]
  - @leafygreen-ui/button@4.2.3
  - @leafygreen-ui/icon-button@5.0.2
  - @leafygreen-ui/leafygreen-provider@1.1.1
  - @leafygreen-ui/menu@6.0.9
  - @leafygreen-ui/tooltip@3.2.2
  - @leafygreen-ui/icon@5.1.0

## 1.0.3

### Patch Changes

- f377bcf6: Replace Charts logo with redesigned mark"

## 1.0.2

### Patch Changes

- be52876: Changes Logout to Log out in UserMenu and OnPremUserMenu

## 1.0.1

### Patch Changes

- b1fa864: Changes "Atlas" to "Cloud" in UserMenu
- 9951eab: Ensures cursor:pointer when user hovers over See Product Tour
- 0391d01: Makes Cloud section of UserMenu clickable, even if Cloud is not the active product
- Updated dependencies [7d7e589]
- Updated dependencies [0391d01]
  - @leafygreen-ui/button@4.2.2
  - @leafygreen-ui/menu@6.0.8
  - @leafygreen-ui/tooltip@3.2.1

## 1.0.0

### Major Changes

- 39afcfe: Initial release of MongoNav component

### Minor Changes

- 7947b76: Project and Org selects now use extensive serverside filtering when used by a global administrator.
- b4e6a06: Adds See Product Tour link to OrgNav component

### Patch Changes

- e5ced4a: Style fixes for Org Select. Org Select no longer displays current org labels for org-agnostic use cases.

## 0.23.0

### Minor Changes

- 5245370: Changes leafygreen-provider to a peer dependency to help avoid version conflicts

### Patch Changes

- 81826ca: Fixes bug in styling of alerts badge
- 75c0693: Upgrades workspace dependencies
- bbd03b2: Changes Two-Factor Authorization to Authentication
- Updated dependencies [75c0693]
  - @leafygreen-ui/button@4.2.1
  - @leafygreen-ui/icon@5.0.3
  - @leafygreen-ui/menu@6.0.7
  - @leafygreen-ui/palette@2.0.1
  - @leafygreen-ui/icon-button@5.0.1

## 0.22.0

### Minor Changes

- 899b9cc: Makes activeProduct optional and export Product object.
- e503de2: Conditionally renders logos in OrgSelect, based on whether or not plan types differ across a users orgs

### Patch Changes

- 194c7ea: Fixes anchor tag overrides and enables the trigger on OrgSelect
- de42634: Changes color of active IconButtons in ProjectNav to match design spec
- 5aafd72: IconButton now accepts `aria-label` instead of `ariaLabel`
  When an Icon is a child of IconButton, the Icon's title will be unset unless explicitly set on Icon, and its size will be inherited from IconButton unless its explicitly set.
  Previously, IconButton required that `ariaLabel` exists as a prop to IconButton. Now IconButton is more flexible, and requires that one of `aria-label` or `aria-labelledby` are set.- cdb3eb5: Adds Cloud Manager Icon to ProjectNav and small Cloud Manager and Atlas Icons to the OrgSelect component
- 04704c4: Fixes onOrganizationChange and onProjectChange such that they can hook into the OrganizationSelect and ProjectSelect components respectively and determine what organizations and projects are rendered based on a search
- Updated dependencies [ebbac0e]
- Updated dependencies [5aafd72]
- Updated dependencies [5aafd72]
  - @leafygreen-ui/button@4.2.0
  - @leafygreen-ui/icon-button@5.0.0
  - @leafygreen-ui/icon@5.0.2
  - @leafygreen-ui/lib@4.4.1
  - @leafygreen-ui/menu@6.0.6

## 0.21.0

### Minor Changes

- da540d3: Adds dataFixtures prop to MongoNav, which allows consumer to set data in dev mode
- eb3895e: Adds active states, className overrides, and simplifies the required URLs interface required for OrgSelect and ProjectSelect. Adds the Public API Access link to the OnPremUserMenu.
- 7f30d61: Adds support for configuring logout url. Add default logout behavior.

### Patch Changes

- 0c9e69c: Resizes all icons to fill their viewboxes
- Updated dependencies [da540d3]
  - @leafygreen-ui/lib@4.4.0

## 0.20.0

### Minor Changes

- 1ee9966: Fixes incorrect links created in the ProjectSelect menu.

  Also reuse types across different components.- 219859a: Change the date when we show Realm

- 219859a: Updates Realm URL.
- 6e2b046: Updates UserMenu and OnPremUserMenu to fix bugs and include active states for UserMenu. This eliminates the previous temporary active nav element UserSettings, so the Org Nav will now be disabled if any UserMenu or OnPremUserMenu active nav element is provided.

### Patch Changes

- 02e108c: Fixes style-related issues in MongoNav
- 219859a: Disables Project Access when ProjectNav is not being displayed.
- 219859a: Resets filter value in OrgSelect and ProjectSelect when menu closes.
- 219859a: Closes OrgSelect when an org is selected.

## 0.19.0

### Minor Changes

- 64c03e7: Adds project status badge to ProjectNav
- 4e67588: Adds support for polling an alerts endpoint to keep the alerts state in sync.
- a35f23d: Sets Atlas tab link to the full URL to prevent full page refreshes.

### Patch Changes

- ee28366: Applies more specific styles to anchor tags in the MongoNav
- 6ed532c: Closes OnPremUserMenu when a MenuItem is clicked
- Updated dependencies [bc47b13]
- Updated dependencies [64c03e7]
- Updated dependencies [1b298cc]
  - @leafygreen-ui/tooltip@3.2.0
  - @leafygreen-ui/menu@6.0.5
  - @leafygreen-ui/hooks@2.1.0

## 0.18.0

### Minor Changes

- 838ff82: Updates the OnPremUserMenu active states and default urls, and exports both the ProjectSelect component and the OnPremUserMenu component for usage outside the MongoNav component.

### Patch Changes

- Updated dependencies [365412e]
  - @leafygreen-ui/icon@5.0.1
  - @leafygreen-ui/icon-button@4.1.6

## 0.17.0

### Minor Changes

- 4cb6ee0: Updates MongoNav to additionally track active states in dropdowns

### Patch Changes

- 5cf9e7d: Displays admin when the prop is set and user is onPrem
- b414edd: Removes async await syntax to avoid having to polyfill regenerator runtime
- 40db4b7: Updates logos in UserMenu and ProjectNav to latest logos
- Updated dependencies [4c268a5]
- Updated dependencies [94ed125]
  - @leafygreen-ui/icon@5.0.0
  - @leafygreen-ui/leafygreen-provider@1.1.0
  - @leafygreen-ui/button@4.1.1
  - @leafygreen-ui/icon-button@4.1.5
  - @leafygreen-ui/menu@6.0.4

## 0.16.0

### Minor Changes

- dd342f5: UserMenu displays Atlas content only in cloud products
- beccf70: Adds projectNav.charts key.

### Patch Changes

- Updated dependencies [e1568c6]
- Updated dependencies [dd342f5]
  - @leafygreen-ui/icon@4.3.0
  - @leafygreen-ui/menu@6.0.3
  - @leafygreen-ui/icon-button@4.1.4

## 0.15.0

### Minor Changes

- cda96b2: Extends `onElementClick` to support segment tracking across navs
- 589120c: Adds `alertsCount` prop to overwrite number of alerts received from cloud endpoint

### Patch Changes

- 4e721d7: Only displays projects in ProjectSelect where the project's `orgId` matches the current `orgId`
- Updated dependencies [cda96b2]
  - @leafygreen-ui/menu@6.0.2

## 0.14.0

### Minor Changes

- 4e1e9dc: Adds remaining activeNav values, and unifies `OnElementClick` into `NavElement` enum
- ebb5102: Updates the university preferences link in the mongo nav
- 0f7d8a3: Adds `onElementClick` prop

### Patch Changes

- 3f7719e: Adds logic to determine whether to display Realm or Stitch
- 97cadc1: Conditionally applies overflow rule to MongoSelect components

## 0.13.0

### Minor Changes

- 2cf1a43: Adds `activeOrgId` and `activeProjectId` props to MongoNav
- 0d5bb89: Adds `loadData` prop to `MongoNav`

### Patch Changes

- Updated dependencies [a2948f6]
  - @leafygreen-ui/icon@4.2.0
  - @leafygreen-ui/icon-button@4.1.3

## 0.12.0

### Minor Changes

- ab1a1c1: Fixes `z-index` stacking context issue
- ab1a1c1: Adds support for Cloud Manager

### Patch Changes

- Updated dependencies [ab1a1c1]
- Updated dependencies [71327dd]
  - @leafygreen-ui/tooltip@3.1.0
  - @leafygreen-ui/icon@4.1.0
  - @leafygreen-ui/icon-button@4.1.2

## 0.11.1

### Patch Changes

- eee1bac: Fixes a bug involving broken project links.

## 0.11.0

### Minor Changes

- 347bcf6: Adds Ops Manager state

### Patch Changes

- Updated dependencies [347bcf6]
- Updated dependencies [704e25c]
- Updated dependencies [347bcf6]
  - @leafygreen-ui/icon-button@4.1.1
  - @leafygreen-ui/lib@4.3.1
  - @leafygreen-ui/menu@6.0.1

## 0.10.0

### Minor Changes

- 0bfe2ad: Updates styles to fit latest spec

### Patch Changes

- Updated dependencies [0bfe2ad]
  - @leafygreen-ui/icon-button@4.1.0

## 0.9.0

### Minor Changes

- 6eb9d26:
  - Adds disabled state for the Org Nav, used for pages where there is no concept of a current project or organization.
  - Exports the different nav heights for the above reason
- 87e88e6: Make `hosts` and `urls` prop optional in UserMenu

### Patch Changes

- da35e55: Adds more robust logic to determine whether or not to show payment status
- Updated dependencies [6eb9d26]
  - @leafygreen-ui/lib@4.3.0

## 0.8.0

### Minor Changes

- ecbf286: Updates UserMenu types such that component can work independently of MongoNav

## 0.7.0

### Minor Changes

- 69a1673: Changes Stitch to Realm in ProjectNav and across TS definitions

## 0.6.0

### Minor Changes

- 786ccf1: Adds User Feedback link to UserMenu
- 4c16d51: Adds fetch to production mode, enabling consumers to get data from cloud endpoint
- c8d50f2: Renames internal MongoMenu component to UserMenu
- 4c16d51: Design updates to MongoNav based on the latest design spec

### Patch Changes

- Updated dependencies [786ccf1]
- Updated dependencies [ac5c473]
- Updated dependencies [b342448]
- Updated dependencies [690888a]
  - @leafygreen-ui/menu@6.0.0
  - @leafygreen-ui/button@4.1.0
  - @leafygreen-ui/hooks@2.0.1
  - @leafygreen-ui/tooltip@3.0.2

## 0.5.0

### Minor Changes

- fabc1c9: Alpha release of `MongoNav` component

### Patch Changes

- Updated dependencies [0a75bd6]
- Updated dependencies [fabc1c9]
- Updated dependencies [fabc1c9]
- Updated dependencies [0a75bd6]
- Updated dependencies [fabc1c9]
- Updated dependencies [fabc1c9]
  - @leafygreen-ui/icon-button@4.0.0
  - @leafygreen-ui/menu@5.1.0
  - @leafygreen-ui/icon@4.0.0
  - @leafygreen-ui/lib@4.2.0
  - @leafygreen-ui/tooltip@3.0.1
