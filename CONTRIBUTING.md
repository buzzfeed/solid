# Contributing to Solid

Solid is a living framework for all basic BuzzFeed styling and we want every BuzzFeed developer to feel comfortable pitching in!

## Getting Started

### 1. Set Up

You must have an account with [Github](https://github.com/) and [git](https://help.github.com/articles/set-up-git/) must be installed on your computer.


### 2. Fork the Repo Locally
**note: BuzzFeed contributors can ignore this step and clone the repo directly**

Visit <https://github.com/buzzfeed/solid> and click the fork button.

Next, clone this fork down to your local PC. Now that you have a local fork of the repo you'll want to [keep it in sync](https://help.github.com/articles/syncing-a-fork/). For a deeper dive into repo forks check out github's [forking documentation](https://guides.github.com/activities/forking/).

### 3. Check Out a New Branch

Create a fresh branch off master with a short, descriptive name.  
```
$ git checkout -b my-feature-or-bug-branch
```

BuzzFeed employees employees are encouraged to create branch that match the prefix of their corresponding Jira card. For example:
```
$ git checkout -b SOLID-300-change-fill-red-variable
```

### 4. Write Your Code!

Do your best to follow the SCSS patterns and examples laid out in the Solid docs.


### 6. Write Release Notes

Release notes can be found in release-notes/. Release notes must
be named `year`-`month`-`day`-`release number`.html and are written in Yaml front matter. Name your release concisely and consider the changes it includes. Jokes, on occasion, are OK. Please see existing release notes for examples.


### 7. Stage and Commit Your Changes

```
$ git add .
$ git commit -m "fixes bug xxx"
```

This will commit your changes to your local copy of the repo, (distinct from your fork on Github).

### 6. Push It

Up until now, you've been working locally. When you're ready to share your branch, you will need to push it up to `buzzfeed/solid` on Github. (Your local branches aren't automatically synchronized to the remotes you write to – you have to explicitly push the branches you want to share.)

```
$ git push origin my-feature-or-bug-branch
```

### 8. Submit a Pull Request

Once you're ready to submit your feature or bug, go to your fork on the web (<https://github.com/YOUR_GITHUB_USERNAME/solid>), and click the **Pull Requests** nav item at the top right.

Next, click the green **New pull request** button and select the following from the dropdowns:

* **base fork:** buzzfeed/solid
* **base:** master
* **head fork:** YOUR_GITHUB_USERNAME/solid
* **compare:** my-feature-or-bug-branch

If all looks good, click the green **Create pull request** button.

You should add a concise descriptive comment about what is in this merge, and then submit. From github's [open source contribution documentation](https://guides.github.com/activities/contributing-to-open-source/):
>Make sure to be clear about what problem is occurring and how someone can recreate that problem or why your feature will help. Then be equally as clear about the steps you took to make your changes.

Someone from the team will review your request, and work with you to ensure there will be no problems on merge. Once everything is good someone from the team will merge your change in!



## Drafting a Solid Release
Any Solid team member can draft a new release.

### 1. Pick a Release Number and Name
Release numbers follow a semantic versioning scheme of `major`.`minor`.`patch`. This allows users to safely update Solid versions without breaking their app.

**Major Version:** Includes serious breaking/architectural changes.

**Minor Version:** Adds new functionality.

**Patch:** Reserved for bug fixes and small changes. Users should feel safe staying up to the most recent patch version.

Example: if the current Solid version is `2.1.0` and I am drafting a new release which adds a new button color, the new version would be `2.2.0`.

### 2. Update Node Package Version
Use the command `npm version [version number]`. This will create a new commit with the correct git version tag and Solid's package version in `package.json` updated.

### 3. Write Release Notes
Release notes can be found in release-notes/. Release notes must
be named `year`-`month`-`day`-`release number`.html and are written in Yaml front matter. Name your release concisely and consider the changes it includes. Jokes, on occasion, are OK. Please see existing release notes for examples.

### 4. Commit, Open a PR, Get a Review, Et Cetera
Push to github and open a PR. In your PR you should see the updated `package.json`, your solid updates and your new release notes. Ask your reviewer to merge if all is well.

### 5. Publish the Node Package
After merging into master, within the Solid directory, type `npm publish`. This will create the distribution files automatically for you.

### 6. Draft a Github Release
On [https://github.com/buzzfeed/solid/releases] click the `Draft a New Release` button. Enter the release name as the title and the release notes in the description.

### 7. Update and deploy the docs
All done! If you want to deploy this release to [https://solid.buzzfeed.com](https://solid.buzzfeed.com) see [solid_docs](https://github.com/buzzfeed/mono/tree/master/solid_docs#solid-docs) on mono.
