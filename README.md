#Animated SVG Climacons

Adam Whitcroft's Climacons as SVGs animated with CSS.

Original icons: [Climacons](//adamwhitcroft.com/climacons/)


## Getting started

### Install

Install package with [Bower](//bower.io/):

```bash
bower install animated-climacons
```

### Structure

```bash
.
├── climacons           # icons
|   ├── src             # SVG source files (not minified)
|   |   ├── svg         # without inline CSS
|   |   └── svg-css     # with inline CSS
|   ├── svg             # minified SVG without inline CSS
|   └── svg-css         # minified SVG with inline CSS
├── css                 # CSS stylesheet
|   ├── animated-climacons.css
|   └── animated-climacons.min.css
├── index.html          # list of all animated climacons
└── example.html        # example of SVG includs
```


#### Include SVG in HTML5

Checkout the `example.html` file for live example.


##### Include SVG with the img tag

It's possible to include your SVG file with the `img` tag. However it will have two consequences:

* Your SVG file will generate an HTTP request.
* Your SVG will be static unless it contains inline CSS.

If you include your SVG file this way, you don't need to import the stylesheet.

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SVG Example</title>
    <style>
        .example-element {
            background-color: #CCC;
            float: left;
            margin: 10px;
            text-align: center;
            width: 350px;
        }

        .example-element img {
            height: auto;
            width: 50%;
        }
    </style>
</head>
<body>
    <h1>Include SVG with <i>img</i> tag.</h1>
    <div class="example-element">
        <figure>
            <img src="/climacons/svg/cloudDrizzle.svg" alt="" title="CloudDrizzle">
            <figcaption>SVG without inline CSS: won't be animated even with a external stylesheet.</figcaption>
        </figure>
    </div>
    <div class="example-element">
        <figure>
            <img src="/climacons/svg-css/cloudDrizzle.svg" alt="" title="CloudDrizzle">
            <figcaption>SVG with inline CSS: will be animated and doesn't need a stylesheet.</figcaption>
        </figure>
    </div>
</body>
</html>
```


#### Include SVG with the svg tag

Including the SVG file with the `svg` tag will have the following consequences:

* Your SVG file won't need an HTTP request so reduce the page load.
* Your SVG can be animated with inline CSS or an external stylesheet.

If there is inline CSS in one SVG file, this CSS declaration will affect the whole page so other SVG file included with the `svg` tag may be affected.

To include SVG files this way, it is highly recommanded to include a version without any inline CSS and import the external stylesheet `animated-climacons.min.css`.

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>SVG Example</title>
    <style>
        .example-element {
            background-color: #CCC;
            float: left;
            margin: 10px;
            text-align: center;
            width: 350px;
        }

        .example-element svg {
            height: auto;
            width: 50%;
        }
    </style>
</head>
<body>
    <h1>Include SVG with <i>svg</i> tag.</h1>
    <div class="example-element">
        <figure>
            <svg version="1.1" id="cloudDrizzle" class="climacon climacon_cloudDrizzle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="15 15 70 70" enable-background="new 15 15 70 70" xml:space="preserve"><g class="climacon_iconWrap climacon_iconWrap-cloudDrizzle"><g class="climacon_componentWrap climacon_componentWrap-drizzle"><path class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"/><path class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"/><path class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"/></g><g class="climacon_componentWrap climacon_componentWrap-cloud"><path class="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"/></g></g></svg>
            <figcaption>SVG without inline CSS: can be animated by a external stylesheet.</figcaption>
        </figure>
    </div>
    <div class="example-element">
        <figure>
            <svg version="1.1" id="cloudDrizzle" class="climacon climacon_cloudDrizzle" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="15 15 70 70" enable-background="new 15 15 70 70" xml:space="preserve"><style type="text/css"><![CDATA[ svg{shape-rendering: geometricPrecision}g, path, circle, rect{-webkit-transform-origin: 50% 50%;-moz-transform-origin: 50% 50%;-o-transform-origin: 50% 50%;transform-origin: 50% 50%;-webkit-animation-iteration-count: infinite;-moz-animation-iteration-count: infinite;-o-animation-iteration-count: infinite;animation-iteration-count: infinite;-moz-animation-timing-function: linear;-webkit-animation-timing-function: linear;-o-animation-timing-function: linear;animation-timing-function: linear;-webkit-animation-duration: 12s;-moz-animation-duration: 12s;-o-animation-duration: 12s;animation-duration: 12s;-webkit-animation-direction: normal;-moz-animation-direction: normal;-o-animation-direction: normal;animation-direction: normal;}.climacon_component-stroke_drizzle{fill-opacity: 0;-webkit-animation-name: drizzleFall, fillOpacity2;-moz-animation-name: drizzleFall, fillOpacity2;-o-animation-name: drizzleFall, fillOpacity2;animation-name: drizzleFall, fillOpacity2;-webkit-animation-timing-function: ease-in;-moz-animation-timing-function: ease-in;-o-animation-timing-function: ease-in;animation-timing-function: ease-in;-webkit-animation-duration: 1s;-moz-animation-duration: 1s;-o-animation-duration: 1s;animation-duration: 1s;}.climacon_component-stroke_drizzle:nth-child(1){-webkit-animation-delay: 0s;-moz-animation-delay: 0s;-o-animation-delay: 0s;animation-delay: 0s;}.climacon_component-stroke_drizzle:nth-child(2){-webkit-animation-delay: 0.6s;-moz-animation-delay: 0.6s;-o-animation-delay: 0.6s;animation-delay: 0.6s;}.climacon_component-stroke_drizzle:nth-child(3){-webkit-animation-delay: 1.2s;-moz-animation-delay: 1.2s;-o-animation-delay: 1.2s;animation-delay: 1.2s;}@-webkit-keyframes drizzleFall{0%{-webkit-transform: translateY(0);}100%{-webkit-transform: translateY(21px);}}@-moz-keyframes drizzleFall{0%{-moz-transform: translateY(0);}100%{-moz-transform: translateY(21px);}}@-o-keyframes drizzleFall{0%{-o-transform: translateY(0);}100%{-o-transform: translateY(21px);}}@keyframes drizzleFall{0%{transform: translateY(0);}100%{transform: translateY(21px);}}@-webkit-keyframes fillOpacity2{0%{fill-opacity: 0;stroke-opacity: 0;}50%{fill-opacity: 1;stroke-opacity: 1;}100%{fill-opacity: 0;stroke-opacity: 0;}}@-moz-keyframes fillOpacity2{0%{fill-opacity: 0;stroke-opacity: 0;}50%{fill-opacity: 1;stroke-opacity: 1;}100%{fill-opacity: 0;stroke-opacity: 0;}}@-o-keyframes fillOpacity2{0%{fill-opacity: 0;stroke-opacity: 0;}50%{fill-opacity: 1;stroke-opacity: 1;}100%{fill-opacity: 0;stroke-opacity: 0;}}@keyframes fillOpacity2{0%{fill-opacity: 0;stroke-opacity: 0;}50%{fill-opacity: 1;stroke-opacity: 1;}100%{fill-opacity: 0;stroke-opacity: 0;}}]]></style><g class="climacon_iconWrap climacon_iconWrap-cloudDrizzle"><g class="climacon_componentWrap climacon_componentWrap-drizzle"><path class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-left" d="M42.001,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2.001-0.895-2.001-2v-3.998C40,54.538,40.896,53.644,42.001,53.644z"/><path class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-middle" d="M49.999,53.644c1.104,0,2,0.896,2,2v4c0,1.104-0.896,2-2,2s-1.998-0.896-1.998-2v-4C48.001,54.54,48.896,53.644,49.999,53.644z"/><path class="climacon_component climacon_component-stroke climacon_component-stroke_drizzle climacon_component-stroke_drizzle-right" d="M57.999,53.644c1.104,0,2,0.896,2,2v3.998c0,1.105-0.896,2-2,2c-1.105,0-2-0.895-2-2v-3.998C55.999,54.538,56.894,53.644,57.999,53.644z"/></g><g class="climacon_componentWrap climacon_componentWrap-cloud"><path class="climacon_component climacon_component-stroke climacon_component-stroke_cloud" d="M63.999,64.944v-4.381c2.387-1.386,3.998-3.961,3.998-6.92c0-4.418-3.58-8-7.998-8c-1.603,0-3.084,0.481-4.334,1.291c-1.232-5.316-5.973-9.29-11.664-9.29c-6.628,0-11.999,5.372-11.999,12c0,3.549,1.55,6.729,3.998,8.926v4.914c-4.776-2.769-7.998-7.922-7.998-13.84c0-8.836,7.162-15.999,15.999-15.999c6.004,0,11.229,3.312,13.965,8.203c0.664-0.113,1.336-0.205,2.033-0.205c6.627,0,11.998,5.373,11.998,12C71.997,58.864,68.655,63.296,63.999,64.944z"/></g></g></svg>
            <figcaption>SVG with inline CSS: will be animated and doesn't need a stylesheet.</figcaption>
        </figure>
    </div>
</body>
</html>
```


### View all animated icons available

All animated icons can be found at `index.html`.

Minified SVG without any inline CSS can be found at `climacons/svg`.


## Contribute

Todo list:

* Finish the rest of the icons
* Convert Icons to Data URIs.
* Explore different ways of embedding and styling.
* Explore different styling at separate media queries.
* Explore animation w/ GSAP, Raphael, and/or SMIL.

### Development dependencies

* [node.js](//nodejs.org/)
* [Grunt](//gruntjs.com/)
* [UglifyJS](//github.com/mishoo/UglifyJS2)
* [clean-css](//github.com/GoalSmashers/clean-css)


### Install dependencies

Download and install node.js: [link](//nodejs.org/).

Install Grunt:

```bash
npm install -g grunt-cli
```

Install UglifyJS, clean-css:

```bash
npm install -g uglify-js clean-css
```

Install Grunt plugins:

```bash
cd .../animated-climacons
npm install
```


### Add or modify icons

To clean the project of all outputed files:

```bash
grunt clean
```

If you wish to add a SVG icon with inline CSS, add it to `climacons/src/svg-css`.

If you wish to add a SVG icon without inline CSS, you can add it to `climacons/src/svg`. If they contain CSS, you can remove of their CSS with:

```bash
grunt remove-css
```

To minify the SVG sources, use:

```bash
grunt
# or
grunt minify
```

After this, please do check the result by opening `index.html` and ensure that all incons are displayed. Some may need special treatment !


### Modify the CSS

An external stylesheet `animated-climacons.css` is at disposal if you wish to include the SVG files with the `svg` tag without inline CSS.

If you add an SVG icon with inline CSS, create a version without inline CSS and add this CSS to the external stylesheet `animated-climacons.css`. Once done, minify the stylesheet with:

```bash
grunt cssmin
```

To test the result check the `index-test.html`.


## Contributions

* [Adam Whitcroft](//github.com/AdamWhitcroft):
    Designed the climacons.
* [Noah Blon](//github.com/noahblon):
    Imported the climacons and created the animations by injecting inline CSS in the SVG files and also made a version with an external stylesheet.
* [Théo FIDRY](//github.com/theofidry):
    Automated few tasks, created a version of SVG files without inline CSS. Provided a minified version of the SVG files and of the stylesheet. Gave few examples and created the Bower package.

## License

You are free to use any of the Climacons Animated Icons (the "icons") in any personal or commercial work without obligation of payment (monetary or otherwise) or attribution, however a credit for the work would be appreciated. <strong>Do not</strong> redistribute or sell and <strong>do not</strong> claim creative credit. Intellectual property rights are not transferred with the download of the icons.