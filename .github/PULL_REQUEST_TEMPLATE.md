#### Purpose

<!-- The problem this PR solves. Link the issue it fixes (e.g. "Fixes #123") and any related PRs in other mochify-js repos. -->
<!-- How the change works, so reviewers can spot mistakes in the implementation. -->

<!-- #### Breaking changes (only for breaking changes) -->
<!-- What breaks for users, and how they should migrate. -->

#### How to verify

<!-- How a reviewer can see this change working, e.g. steps to reproduce the problem and confirm it is fixed. If existing or new tests cover it, name them. -->

#### Checklist

- [ ] PR title follows Conventional Commits, with `!` for breaking changes
- [ ] Tests cover the change
- [ ] README updated for new or changed CLI options
- [ ] `npm run lint`, `npm run prettier:check`, `npx tsc` and `npm run coverage:check` pass locally
- [ ] No unrelated changes

<!-- The WebDriver tests need a Selenium server. CI runs the selenium/standalone-firefox Docker image; see the "Start Selenium Server" step in .github/workflows/build.yml. -->
