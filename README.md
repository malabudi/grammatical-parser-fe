# Grammatical Parser Frontend Built with ReactJS
You will find commands to run when using gitbash, and how to run the website locally.

## Useful Git Commands if Using Git Bash
You can also use git directly in VSCode if you prefer instead.
Just make sure to put your changes into a seperate branch and then merge to master when your done.

### `git pull`

Run this command in master branch to update your local to the latest from github

### `git checkout -b YOUR-BRANCH-NAME`

Run this command to create your own branch to work on your code changes with the task your working on.
Just replace YOUR-BRANCH-NAME with the name of the task.

### `git add -A`

This command and everything below it is important for letting everyone receive your code and to update the webstie on master.
Adds all changes for the code u edited to be tracked with git before committing.

### `git commit -m "COMMIT-MESSAGE"`

Run this After running git add -A, this puts your changes into a commit with the message you wrote.
Next thing to do is to push the code changes to your branch that you created.
You do need to put the message in "" marks as if your writing a string in the terminal.

### `git push`
Running this command for the first time in your branch will throw a error.
Your gonna see in that error a command: git push --set-upstream origin YOUR-BRANCH-NAME
Thats okay, just copy and paste the command and run it again, then you should be good to go.

### `git checkout master`
Run this command so you can switch from the branch you made to the master branch.
This command works for switching to whatever branch you want, just replace "master" with the branch name u want to go to.

### `git merge YOUR-BRANCH-NAME`
This command will merge your code changes from the branch u worked on to master.

## Available Scripts

In the project directory, you can run:

### `npm start`

This command runs the app locally in your computer
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
