---
layout: post
---

**Note: This guide is specific to MacOS ([13.0](https://en.wikipedia.org/wiki/MacOS_Ventura)) users who have not previously installed Ruby on their computer.**
# Why make a website
Building your own website to host a portfolio is a prime way to have complete control of your content. The look and feel of the site is fully in your hands, for better or for worse. The technical challenge is surmountable with the right resources, and this guide aims to bring those resources together for the self-guided learner.

# Who can build it?
This guide assumes that you have a baseline understanding of the web, but have not taken your own steps yet to build and configure a website. This is a basic walkthrough that takes you from having none of the tools and no experience at the start, to the end goal: an online landing page that other people can visit. Any extra features and dynamic functions are beyond the scope of this guide, but we will link out to next steps you can pursue once you've got a website up and running.  

---
# Software tools

Install tools **with a user interface** by registering for an account on their website, or by downloading their program from the MacOS App Store. To avoid future errors, drag them out of 'Downloads' and into to the 'Applications' folder.

Install tools **without a user interface** by using commands in the '[Terminal](https://support.apple.com/en-ca/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac)'. 
## Software with UI:
- [MacOS 13 Ventura](https://support.apple.com/en-ca/HT201541)
- [Github](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account)
- [VS Code](https://code.visualstudio.com/docs?dv=osx)

---
## Software without UI:
- [Ruby](https://www.ruby-lang.org/en/)
- [Ruby Environment Manager (rbenv)](https://www.ruby-lang.org/en/documentation/installation/#rbenv)
- [Gems](https://jekyllrb.com/docs/ruby-101/#gems)
- [Jekyll](https://jekyllrb.com/)
- [Jekyll theme](https://github.com/abhinavs/moonwalk)

## Install walkthroughs

### Ruby Environment Manager (rbenv)
In MacOS, there is a native Ruby installed on every device. We can't use this version of Ruby or it will break things in the computer. 

Installing an Environment Manager resolves this problem. It provides commands to control a second install of Ruby in the project folder where the website files are stored.

    1. Install rbenv by using this Terminal command:

```
brew install rbenv ruby-build 
```

    2. Load rbenv into the terminal shell

``` 
# run this and follow the printed instructions:
rbenv init
```
    3. Close and re-open the Terminal to apply changes

For detailed information about ``` rbenv ``` and in-depth troubleshooting, refer to their [ReadMe](https://github.com/rbenv/rbenv#readme). 

### Ruby
Install Ruby using rbenv with this Terminal command:

```
rbenv install 3.1.2
```
Note: for future, check for [Ruby](https://www.ruby-lang.org/en/downloads/) updates and replace 3.1.2 with the latest version number. 

Set the new Ruby install as 'global'
```
rbenv global 3.1.2
```
This guide suggests using the ``` global ``` instead of ``` local ``` setting for simplicity and to avoid troubleshooting in the future.

#### Check the install
Check your Ruby version using this Terminal command:

```
ruby -v
```
If the output shows an older version of Ruby (2.x.x), this indicates that the environment manager is trying to point the project towards the default OS Ruby. This will result in errors. 

If the output shows the current version of Ruby (3.1.2), this indicates that the environment manager is pointing the project towards the newly installed version of Ruby. You can proceed without errors.

### Gems
Gems are snippets of Ruby code that extend the language in the project file, allowing the files to read and render more functions. 

For this guide, we are installing only the basic gems required to put a Ruby website online. 

Install gems into your project folder:

```
gem install bundler
```

#### Check the install 
The ```gem install bundler``` command will create a new file in your project folder called ```gemfile```

### Jekyll

Jekyll is the most important Ruby gem in our website project. It is the engine that transforms plain text into a static website. It is fully compatible with the free site deployment tool chosen for this project, GitHub Pages.

Install the Jekyll gem:

``` gem install bundler jekyll ```

