# jsFunner

jsFun but make it MORE fun!   

This repo is specifically designed for repeaters to continue getting reps with prototypes, scope and context with some brand new exercises. 

## Getting Started

**Fork** this repo (do not clone), then clone your forked copy to your machine. `cd` into the directory for the project and run `npm install`.

Check out [this video](https://vimeo.com/turing/review/388545928/baac6f5a2d) if you need help!

## Running the Tests

To run all tests for all three concepts:

`npm test`

To run the tests for just a *single* concept:

`npm run testPrototypes`

## Pulling Down Repo Changes

You have now cloned your forked version of JSFunner to your machine. As instructors make changes to the repo (adding exercises, fixing tests, changing problems, etc.) you'll need to pull down those changes. In order to do so, we must link your copy of JSFunner on your machine to the Turing github version by adding a new remote repository.

In your terminal, from within the root of your JSFunner project directory, run:

`git remote add turing https://github.com/turingschool-examples/jsFun.git`

If this command was successful, you should be able to run `git remote -v` and see something like the following:

```
origin  https://github.com/yourGithubUsername/jsFunner.git (fetch)
origin  https://github.com/yourGithubUsername/jsFunner.git (push)
turing  https://github.com/turingschool-examples/jsFunner.git (fetch)
turing  https://github.com/turingschool-examples/jsFunner.git (push)
```

Now, whenever instructors tell you to pull down changes, there are two steps:

1. Make sure you commit and push any changes you have currently made
2. Run `git pull turing main`

Check out [this video](https://vimeo.com/turing/review/388550182/34823726eb) if you need help!
