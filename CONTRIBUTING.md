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

Please create a branch with a short, descriptive name.

```
$ git checkout -b my-feature-or-bug-branch
```

### 4. Write Your Code!

Do your best to follow the patterns and examples laid out in the Solid docs.

### 5. Stage and Commit Your Changes

````
$ git add .
$ git commit -m "fixes bug xxx"
````

This will commit your changes to your local copy of the repo, (distinct from your fork on Github).

### 6. Push It

Up until now, you've been working locally. When you're ready to share your branch, you will need to push it up to `buzzfeed/solid` on Github. (Your local branches aren't automatically synchronized to the remotes you write to – you have to explicitly push the branches you want to share.)

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

You should add a concise descriptive comment about what is in this merge, and then submit. Someone from the team will review your request, and work with you to ensure there will be no problems on merge. Once everything is good someone from the team will merge your change in!
