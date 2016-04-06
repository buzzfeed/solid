`DRAFT`
# Contributing to Solid

Solid is a living framework for all basic BuzzFeed styling and we want everyone to pitch in. Read on to learn how to contribute.

## Dos and Don'ts

Coming soon!

## Getting Started

### 1. Set Up 

You must have an account with [Github](https://github.com/) and [git](https://help.github.com/articles/set-up-git/) must be installed on your computer.

You will also need to be invited to the [BuzzFeed organization](https://github.com/buzzfeed) on Github — If you don't already have access, email <helpdesk@buzzfeed.com> and CC: your manager.

Before you can access any BuzzFeed repos, you will need to [generate an SSH key](https://help.github.com/articles/generating-ssh-keys/) and add the public key to your GitHub account. (This should only be necessary to do once per computer.)


### 2. Fork the Repo Locally

Visit <https://github.com/buzzfeed/solid> and click the fork button. 

Next, clone this fork down to your local PC.

### 3. Check Out a New Branch 

Each time you address a new feature or bug fix, it is best to create a new branch with a descriptive name. That way, it's easy to pause one task and switch to another. 

This also simplifies our process of tracking contributions to the master code base. 

```
$ git branch my-feature-or-bug-branch
$ git checkout my-feature-or-bug-branch
```

You can also checkout existing branches, by doing a fetch:

````
$ git fetch
$ git checkout some-other-branch
````
### 4. Write Your Code!

Do your best to follow the patterns and examples laid out in the Solid docs.

### 5. Stage and Commit Your Changes

````
$ git add .
$ git commit -m "fixes #58 - bug description here"
````

This will commit your changes to your local copy of the repo, (distinct from your fork on Github).

### 6. (Optional) Merge Down From Master

If you know there of important changes in the master code base, or if a pull request was denied because your are out-of-sync with master, you'll need to merge down.

The first step is to create a [“remote”](https://help.github.com/articles/adding-a-remote/) to the buzzfeed/solid repo. (This should only be necessary to do once.)

````
$ git remote add origin git://github.com/buzzfeed/solid.git
````

Fetch and merge updates: 

`IS THIS CORRECT? ⤵`

````
$ git fetch origin
$ git merge origin/master
````

### 7. Push It

Up until now, you've been working locally. When you're ready to share your branch, you will need to push it up to `buzzfeed/solid` on Github. ()Your local branches aren't automatically synchronized to the remotes you write to – you have to explicitly push the branches you want to share.)

````
$ git push origin my-feature-or-bug-branch
````

### 8. Submit a Pull Request

Once you're ready to submit your feature or bug, go to your fork on the web (<https://github.com/YOUR_GITHUB_USERNAME/solid>), and click the **Pull Requests** nav item at the top right. 

Next, click the green **New pull request** button and select the following from the dropdowns:

* **base fork:** buzzfeed/solid
* **base:** master
* **head fork:** YOUR_GITHUB_USERNAME/solid
* **compare:** my-feature-or-bug-branch

If all looks good, click the green **Create pull request** button.

You should add a concise descriptive comment about what is in this merge, and then submit. Someone from the team will review your request, and work with you to ensure there will be no problems on merge.

### 9. A Note on Merging

Because of Github permissioning on buzzfeed repos, it *might* be possible for you to merge your own Pull Request. **Please don't do this!** Always reach out to someone in #solid-prs to merge your PR into develop.

# Deprecating Code

To deprecate SCSS, move the old classes to the very bottom of the SCSS file. Use this comment to indicate when the deprecated SCSS will be removed:

````
// @TODO remove in version X
// -------------------------
.deprecated-class {
    color: #000;
}
````