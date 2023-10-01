# Luxbar

Featherweight, Responsive, CSS Only Navigation bar

![Screencap](http://i.imgur.com/0eGzsNt.gif)

This fork is an attempt to modernize Luxbar by using
- esbuild for faster builds
- CSS custom properties instead of themes
- Semantic HTML in favor of CSS classes

# Getting started

Create build files using

```
npm run build
```

Or:

```
npm run watch
```

Reference the built file

```html
<link rel="stylesheet" href="luxbar.css">
```

Then use the HTML code below as a base and see the docs for options.

```html
<div class="luxbar luxbar-static">
    <input type="checkbox" id="luxbar-checkbox" class="luxbar-checkbox">
    <div class="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                <a class="luxbar-brand" href="#">Brand</a>
                <label class="luxbar-hamburger luxbar-hamburger-doublespin"
                        for="luxbar-checkbox"> <span></span> </label>
            </li>
            <li class="luxbar-item active"><a href="#">Home</a></li>
            <li class="luxbar-item dropdown"><a href="#">Users</a>
                <ul>
                    <li class="luxbar-item" ><a href="#">Max</a></li>
                    <li class="luxbar-item" ><a href="#">Edgar</a></li>
                    <li class="luxbar-item" ><a href="#">John</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
```

# Other

See [the original repo](https://github.com/balzss/luxbar)
