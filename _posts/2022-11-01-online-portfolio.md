---
layout: post
---

**Note: This guide is specific to MacOS ([13.0](https://en.wikipedia.org/wiki/MacOS_Ventura)) users who have not previously installed Ruby on their computer.**
# Why make a website
Building your own website to host a portfolio is a prime way to have complete control of your content. The look and feel of the site is fully in your hands, for better or for worse. The technical challenge is surmountable with the right resources, and this guide aims to bring those resources together for the self-guided learner.

# Who can build it?
This guide assumes that you have a baseline understanding of the web, but have not taken your own steps yet to build and configure a website. This is a basic walkthrough that takes you from having none of the tools and no experience at the start, to the end goal: an online landing page that other people can visit, using only free tools.

---
# Software tools

Install tools **with a user interface** by registering for an account on their website, or by downloading their program from the MacOS App Store. To avoid future errors, drag them out of 'Downloads' and into to the 'Applications' folder.

Install tools **without a user interface** by using commands in the '[Terminal](https://support.apple.com/en-ca/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac)'. 
## Software with UI:
- [MacOS 13 Ventura](https://support.apple.com/en-ca/HT201541)
- [Github](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account)
- [VS Code](https://code.visualstudio.com/docs?dv=osx)

## Software without UI:
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby Environment Manager (rbenv)](https://www.ruby-lang.org/en/documentation/installation/#rbenv)
- [Gems](https://jekyllrb.com/docs/ruby-101/#gems)
- [Jekyll](https://jekyllrb.com/)
- [Jekyll theme](https://github.com/abhinavs/moonwalk)

## Install walkthroughs

### Ruby Environment Manager (rbenv)
In MacOS, there is a native Ruby that will interfere with the project unless Environment Manager is installed. This tool provides commands to control a second install of Ruby in the project folder where the website files are stored.

-  Install rbenv by using this Terminal command:

    ```
    brew install rbenv ruby-build 
    ```

-  Load rbenv into the terminal shell

    ``` 
    # run this and follow the printed instructions:
    rbenv init
    ```

- Close and re-open the Terminal to apply changes

For detailed information about ``` rbenv ``` and in-depth troubleshooting, refer to their [ReadMe](https://github.com/rbenv/rbenv#readme). 

### Ruby
- Install the [latest version](https://www.ruby-lang.org/en/downloads/) of Ruby using rbenv with this Terminal command:
```
rbenv install 3.1.2
```

- Set the new Ruby install as 'global'
```
rbenv global 3.1.2
```

This guide suggests using the ``` global ``` instead of ``` local ``` setting for simplicity and to avoid troubleshooting in the future.

#### Check the install
- Check your Ruby version using this Terminal command:
```
ruby -v
```
If the output shows an older version of Ruby (2.x.x), this indicates that the environment manager is trying to point the project towards the default OS Ruby. This will result in errors. 

If the output shows the current version of Ruby (3.1.2), this indicates that the environment manager is pointing the project towards the newly installed version of Ruby. You can proceed without errors.

### Gems
Gems are snippets of Ruby code that extend the language in the project file, allowing the files to read and render more functions. 

- Install gems into your project folder:
```
gem install bundler
```

These steps install basic gems required to put a Ruby website online. Find [more Ruby Gems here.](https://rubygems.org/)

#### Check the install 
The ```gem install bundler``` command should create a new file in your project folder called ```gemfile```.

### Jekyll

Jekyll is the most important Ruby gem in the website project. It is the engine that transforms plain text into a static website. It is fully compatible with the free site deployment tool chosen for this project, GitHub Pages.

- Install the Jekyll gem:
``` 
gem install bundler jekyll 
```

### Jekyll theme

This guide suggests using a prebuilt Jekyll theme as a template for your first project, for speed and simplicity.

- On GitHub, navigate to the repository for the [Moonwalk theme](https://github.com/abhinavs/moonwalk)
- [Fork the repository](https://github.com/abhinavs/moonwalk/fork) to your own GitHub account.
- Name the repository ```yourusername.github.io``` with your own username in front of .github.io. 
- From your new forked repository, download the code into the website project folder on your local hard drive
![github1](/assets/css/github1.png)

The theme selected for sixswordstudio.github.io is free, and serves as an example for this walkthrough. Find [more themes here](https://jamstackthemes.dev/ssg/jekyll/).

---
# Editing the theme
Congratulations on completing the install process.

To begin editing the theme to add your own content to the website:
- Open the project folder using VS Code
- Read and follow the theme author's instructions on the [GitHub Readme](https://github.com/abhinavs/moonwalk#customizing)
- Save your work after making changes to the local copy of project files and folders

## Push local changes to the GitHub repository
- In VS Code, saved changes will trigger a notification in the Source Control tab
![vscode1](/assets/css/vscode1.png)
- Write a short description in the Message box
![vscode2](/assets/css/vscode2.png)
- Click commit
- Click through to stage and commit changes
- Click sync

This will push the changes made (and saved) on your local file system to the GitHub repository hosting your code. 

# Deploy the website
At long last! The final step in the process is linking the GitHub repository containing your edited theme code to GitHub Pages.

## GitHub Pages
- In VS Code, edit the ```_config.yml``` file to reflect the url of your GitHub repo
![configurl](/assets/css/configurl.png)
- Save and push the changes via Source Control tab
- Navigate to ['GitHub Settings'](https://github.com/settings/profile)
- Navigate to ['Pages'](https://github.com/settings/pages)
- Under 'Source', select a source to deploy
- Choose your repository's main branch

### Check the update 
- Go to the URL specified in the ```_Config.yml``` and GitHub Pages deployment source
- Success! 

This concludes the basic walkthrough of getting a website up and running without spending money using Ruby, Jekyll, and GitHub Pages.

