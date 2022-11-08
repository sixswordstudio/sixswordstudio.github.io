---
layout: post
---

**Note: This guide is specific to MacOS ([13.0](https://en.wikipedia.org/wiki/MacOS_Ventura)) users.**
# Why make a website
Building your own website to host a portfolio is a prime way to have complete control of your content. The look and feel of the site is fully in your hands, for better or for worse. The technical challenge is surmountable with the right resources, and this guide aims to bring those resources together for the self-guided learner.

# Who can build it?
This guide assumes that you have a baseline understanding of the web, but have not taken your own steps yet to build and configure a website. This is a basic walkthrough that takes you from having none of the tools and no experience at the start, to the end goal: an online landing page that other people can visit. Any extra features and dynamic functions are beyond the scope of this guide, but we will link out to next steps you can pursue once you've got a website up and running.  

# Tools to install
**Software with UI:**
- [MacOS 13 Ventura](https://support.apple.com/en-ca/HT201541)
- [Github](https://docs.github.com/en/get-started/signing-up-for-github/signing-up-for-a-new-github-account)
- [VS Code](https://code.visualstudio.com/docs?dv=osx)

Install tools **with a user interface** by registering for an account on their website, or by downloading their program from the MacOS App Store. To avoid future errors, drag them out of 'Downloads' and into to the 'Applications' folder.

**Software without UI:**
- Ruby
- Ruby Environment Manager
- Jekyll

Install tools **without a user interface** by opening the Terminal and using a 'Homebrew' command.

```
brew install ruby
```


On Mac, there is a native Ruby installed on every device. By default, our website will try to call on this Ruby when reading the code with the site's details. This will return an error, because the default Ruby is protected to prevent unintended destruction of key operating system processes. 

Installing an Environment Manager resolves this problem. It will manage a second version of Ruby, and keep the two versions from clashing when we create our website.


## Using the command line
**Mac** users have '[Terminal](https://support.apple.com/en-ca/guide/terminal/apd5265185d-f365-44cb-8b09-71a064a42125/mac)'.


## 