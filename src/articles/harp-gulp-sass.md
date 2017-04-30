### Why Harp?
When I began researching static-site generators, I was looking for something that was easy to set up, easy to modify and, most importantly, easy to update and deploy. There is a wide variety of options, but I boiled the list down to two: [Assemble](http://assemble.io/) and [Harp](http://harpjs.com/).

While I'll definitely check out Assemble for future projects, I ended up going with Harp as it seemed like a good fit for what I was trying to accomplish: a simple static site for my résumé, projects and articles that could be hosted on GitHub.

What sold me on Harp were its documentation and how easy it was to get a project up and running. Another nice feature is its built-in preprocessing of Markdown, EJS and Sass. With one command all your preprocessed files are compiled to HTML, CSS and JavaScript, ready to be hosted anywhere. Nice, very nice!

If you're interested in finding out more about Harp, check out their [docs](http://harpjs.com/docs/) or have a look at [this how-to article](http://mattlambert.ca/blog/how-to-use-the-harp-js-static-site-generator/).

### Automated Workflow
In order to make development as painless as possible, I set up some [Gulp](http://gulpjs.com/) tasks and integrated [Browsersync](http://www.browsersync.io/). After sorting out some intial compiling issues, I was able to have Gulp automating the build process and Browsersync automatically reloading the browser when my files were changed. This made for a very smooth workflow during the development phase.

As I also wanted to host the site on GitHub pages, I figured it would be a good idea to automate the build and deploy tasks as well. By default, Harp compiles files into a 'www' folder in the root of your project. However, GitHub pages expect the index.html file to be in the root directory, not in a sub-directory like 'www'. This can easily be fixed, though, since Harp allows you to pass in source and destination options with the compile command.

```javascript
harp compile src dist
```
This code snippet tells harp to preprocess and build all files found in my 'src' directory and save the static-site assets in the 'dist' directory.

With the development and build tasks set up, it was time to look at automating deployment to GitHub pages. With the Gulp plugin [gulp-gh-pages](https://www.npmjs.com/package/gulp-gh-pages) this couldn't be any easier. All I needed to do was pipe the source directory (the 'dist' folder in this case) into the plugin. When the deploy task is called, the plugin copies the files from this directory and pushes them to the gh-pages branch of the repository.

Once I had all the gulp tasks working, I added two scripts to the package.json file to simplify things:

```javascript
"scripts": {
    "start": "gulp",
    "publish": "gulp build && gulp deploy"
  }
```
The first script _(npm start)_ calls the default gulp task which spins up a server on port 3000, watches all the files in my 'src' directory and automatically reloads the browser when any changes are made.

The second script _(npm run publish)_ calls the gulp build task which compiles the entire site, then the gulp deploy task which copies all the files in the 'dist' directory and pushes them to the gh-page branch of my repository. Pretty sweet, I have to say.

If you're interested in checking out how I set up the tasks, here's a [gist](https://gist.github.com/N8-B/6281849968bd49d85cd1) of the gulpfile used for this site.

### Styling and Typography
I wanted the styling and layout of the site to be clean and mobile friendly. To help me accomplish this, I used [Bourbon](http://bourbon.io/) and [Neat](http://neat.bourbon.io/), two excellent Sass libraries maintained by the good folks at [thoughbot](https://thoughtbot.com/). I do like [Stylus](https://learnboost.github.io/stylus/), but I'm still a big fan of Sass. I've used the Bourbon and Neat libraries on several projects and it's a joy to work with on static sites like this.

As regards typography, I wanted to use a _sans-serif_ and _serif_ combination. After testing a few fonts, I decided to use Calluna designed by [exljbris Font Foundry](http://www.exljbris.com/). Not only is it a beautiful font, but it also has _sans-serif_ and _serif_ versions. [Calluna](http://www.exljbris.com/calluna.html) is used for all body copy and [Calluna Sans](http://www.exljbris.com/callunasans.html) for headings and tag lines. I find that it's hard to go wrong if you pair fonts from the same family made by the same designer.

### Source Code
All of the source code for this site can be found [here](https://github.com/N8-B/nathanburkiewicz.com) on GitHub. Feel free to take a look at how I organized the directories and set up the Gulp tasks.

The compiled files that are running this site can be found [here](https://github.com/N8-B/nathanburkiewicz.com/tree/gh-pages) in the gh-pages branch of the repository.

I've found that Harp, together with the power of Gulp, makes for a really nice developer experience. If you're looking for a no-fuss static-site generator for a personal site or a quick prototype, definitely take a look at Harp.

If you have any questions on my Harp-Gulp setup, please get in touch. I'd be happy to help you out.
