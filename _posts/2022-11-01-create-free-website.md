---
layout: post
---

For full control of content, hosting, and the look of a website, building from scratch is the best option. The fastest way to get a website up and running is to use a prebuilt theme, tailored to fit the user's needs. This guide aims to provide a foundation for new users to learn how to deploy and make changes to a static website before investing in paid subscriptions, custom domains and premium software tools. **Note: This guide is for MacOS ([13.0](https://en.wikipedia.org/wiki/MacOS_Ventura)) users who have not previously installed Ruby on their computer.**
# Recommended software

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

## Installation walkthrough

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
- Check Ruby version using this Terminal command:
```
ruby -v
```
If the output shows an older version of Ruby (2.x.x), this indicates that the environment manager is trying to point the project towards the default OS Ruby. This will result in errors. 

If the output shows the current version of Ruby (3.1.2), this indicates that the environment manager is pointing the project towards the newly installed version of Ruby. User can proceed without errors.

### Gems
Gems are snippets of Ruby code that extend the language in the project file, allowing the files to read and render more functions. 

- Install gems into the project folder:
```
gem install bundler
```

These steps install basic gems required to put a Ruby website online. Find [more Ruby Gems here.](https://rubygems.org/)

#### Check the install 
The ```gem install bundler``` command should create a new file in the project folder called ```gemfile```.

### Jekyll

Jekyll is the most important Ruby gem in the website project. It is the engine that transforms plain text into a static website. It is fully compatible with the free site deployment tool chosen for this project, GitHub Pages.

- Install the Jekyll gem:
``` 
gem install bundler jekyll 
```

### Jekyll theme

This guide suggests using a prebuilt Jekyll theme as a template for the project, for speed and simplicity.

- On GitHub, navigate to the repository for the [Moonwalk theme](https://github.com/abhinavs/moonwalk)
- [Fork the repository](https://github.com/abhinavs/moonwalk/fork) to user's own GitHub account.
- Name the repository ```githubusername.github.io``` with GitHub username in front of .github.io. 
- Download the code from new repository onto local hard drive, into the project folder
![github1](/assets/css/github1.png)

The theme selected for sixswordstudio.github.io is free, and serves as an example for this walkthrough. Find [more themes here](https://jamstackthemes.dev/ssg/jekyll/).

---
# Editing the theme
Congratulations on completing the install process.

Add custom content to the website:
- Open the project folder using VS Code
- Read and follow the theme author's instructions on the [GitHub Readme](https://github.com/abhinavs/moonwalk#customizing)
- Save after making changes to the local copy of project files and folders

## Push local changes to the GitHub repository
- In VS Code, saved changes will trigger a notification in the Source Control tab
![vscode1](/assets/css/vscode1.png)
- Write a short description in the Message box
![vscode2](/assets/css/vscode2.png)
- Click commit
- Click through to stage and commit changes
- Click sync

This will push saved changes from the local file system to the GitHub repository.

# Deploy the website
Link the GitHub repository to GitHub Pages.

## GitHub Pages
- In VS Code, edit the ```_config.yml``` file to reflect the url of the GitHub repo
![configurl](/assets/css/configurl.png)
- Save and push the changes via Source Control tab
- Navigate to ['GitHub Settings'](https://github.com/settings/profile)
- Navigate to ['Pages'](https://github.com/settings/pages)
- Under 'Source', select a source to deploy
- Choose the repository's main branch

### Check the update 
- Go to the URL specified in the ```_Config.yml``` and GitHub Pages deployment source
- Success! 

Note: Changes can take up to 10 minutes to update. 

This concludes the basic walkthrough to get a website up and running without spending money using Ruby, Jekyll, and GitHub Pages. A basic foundation in creating a website that can grow as the user's skillset grows.

# Beyond this guide
Next steps to level up the website: 
- Purchase and connect a [Custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) name for the site
- Explore [Jekyll plugins](https://jekyllrb.com/docs/plugins/) to extend site functionality
- [Override theme](https://jekyllrb.com/docs/themes/#overriding-theme-defaults) settings for full site customization
- Add [vector graphics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web) for site logos, headers, flavicon, etc.

