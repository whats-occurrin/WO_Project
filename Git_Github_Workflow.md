# Git/Github Workflow

You should never work on the `master` or `dev` branches. You must always work on a branch named after your feature (e.g. `feat-44`) and you must make pull requests to `dev`.

A pull request must be accepted by someone other than yourself and should only be accepted if:
  - someone else has looked over the code
  - the new code is tested
  - all new and previous tests are passing
  - code has been linted

Only when you are ready to deploy will you merge to master.

## Managing tasks

Use the Github Issues feature in combination with Github Projects to manage tasks in an agile manner. Open issues, reference other tasks, assign developers and add Issues as cards to a Github Project to manage the development cycle.

Alternatively use Trello and its card numbers to keep track of features/enhancements in your project.

Make sure to always keep your project board up to date so other members of your team can easily see what needs to be done and what is in progress.

## Working on a new feature

Clone the repo if it is the first time working on the codebase.

Make sure you are on the dev branch (if not, checkout a new branch called dev) and pull from the remote dev branch to ensure you are up to date:

`$ git pull origin dev`

Checkout a new branch from dev named after your feature

`$ git checkout -b feat-44`

Start working.

Commit regularly. All commit messages should be in the format:

`$ git commit -m '[feat-44] Test redux reducer'`

When the feature is finished, push your branch to the remote. You may need to rebase from dev first to avoid a merge conflict if work has been merged into dev since you originally checked out your branch.

To rebase:

Commit your work

`$ git checkout dev`

`$ git pull origin dev`

`$ git checkout feat-44`

`$ git rebase -i dev`

This will begin the process of interactively rebasing any new changes from dev into your branch. If any conflicts arise, follow the instructions to fix the conflict, add the files you've fixed, and continue the rebase.

When you are done you can push your branch.

`$ git push origin feat-44`

On Github, make a pull request. Select dev as the base and select your feature branch to compare. Assign your tutor as the reviewer and make sure you respond to any changes that are suggested.

Once your pull request has been reviewed and merged into dev, you will need up update your local copy of the dev branch since it is now out of date:

`$ git checkout dev`

`$ git pull origin dev`

From there you can checkout another branch and begin working on a new feature.