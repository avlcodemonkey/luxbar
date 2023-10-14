# Luxbar

Featherweight, Responsive, CSS Only Navigation bar

![Screencap](http://i.imgur.com/0eGzsNt.gif)

This fork is an attempt to modernize Luxbar by using
- esbuild for faster builds
- CSS custom properties instead of themes
- Semantic HTML in favor of CSS classes
- `rem` units instead of `px`

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

Then use the HTML code below as a base and keep reading for options.

```html
<div class="luxbar luxbar-static">
    <input type="checkbox" id="luxbar-checkbox" class="luxbar-checkbox">
    <div class="luxbar-menu luxbar-menu-right">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                <a class="luxbar-brand" href="#">Brand</a>
                <label class="luxbar-hamburger luxbar-hamburger-doublespin" for="luxbar-checkbox"> <span></span> </label>
            </li>
            <li class="active"><a href="#">Home</a></li>
            <li class="dropdown"><a href="#">Users</a>
                <ul>
                    <li><a href="#">Max</a></li>
                    <li><a href="#">Edgar</a></li>
                    <li><a href="#">John</a></li>
                </ul>
            </li>
        </ul>
    </div>
</div>
```

# Themes

This version uses CSS custom properties to handle theming.  Override these properties to change the theme.

```css
:root {
    --luxbar-color-bg: #3e63ad;
    --luxbar-color-hl: #2d477d;
    --luxbar-color-fg: #fff;
}
```

For example, the material red theme:

```css
:root {
    --luxbar-color-bg: #b71c1c;
    --luxbar-color-hl: #c62828;
    --luxbar-color-fg: #fff;
}
```

Or the material cyan theme:

```css
:root {
    --luxbar-color-bg: #006064;
    --luxbar-color-hl: #00838f;
    --luxbar-color-fg: #fff;
}
```

# Adding menu items
The base module includes three menu items. You can have more by adding `<li><a href="#">Menu item name</a></li>` to the luxbar-navigation list. Adding the classname `active` to the luxbar-item will make it visually selected. You can have multiple selected items.

# Dropdown menu
Adding dropdown menus to your navbar is similar to adding normal items but instead you should use a nested element like this:

```html
<li class="dropdown"><a href="#">Dropdown Menu</a>
    <ul>
        <li><a href="#">Dropdown Item 1</a></li>
        <li><a href="#">Dropdown Item 2</a></li>
        <li><a href="#">Dropdown Item 3</a></li>
    </ul>
</li>
```

# Style options
At the moment there are 3 available style options: `luxbar-default`, `luxbar-static`, and `luxbar-fixed`. To set this you have to include the class name in the `.luxbar` node to one of the listed options.

### luxbar-default
This style will adopt the padding and margin options you apply to it's parent container and will look something like this:

![luxbar-default](http://i.imgur.com/y7N0sHt.png)

### luxbar-static
This style will stay at to top of the page and will take up 100% of your page's width and will look something like this:

![luxbar-static](http://i.imgur.com/XrPVZZZ.png)

### luxbar-fixed
This style will be always at the top of your screen even when you scroll down and will look something like this:

![luxbar-fixed](http://i.imgur.com/h6DBQsI.png)

## Leave out the brand
If you want to leave out the brand from your navbar simply delete the `<a class="luxbar-brand" href="#">Brand</a>` part from your base module.

## Alignment options
At the moment there are 2 available alignement options: `luxbar-menu-left`, `luxbar-menu-right`. To set this you have to include the class name in the `.luxbar-menu` node to one of the listed options.

### luxbar-menu-left
This will align the menu items at the very left of the navbar and will look something like this:

![luxbar-menu-left](http://i.imgur.com/UXjXsL0.png)

### luxbar-menu-right
This will align the menu items at the very right of the navbar and will look something like this:

![luxbar-menu-left](http://i.imgur.com/XrPVZZZ.png)

## Hamburger animation
In mobile view (under 786px) there is an animated hamburger icon which transforms into an 'X' when you click it. There are 2 different animations for this: `luxbar-hamburger-spin`, `luxbar-hamburger-doublespin`. To set this you have to include the class name in the `.luxbar-hamburger` node to one of the listed options.

### luxbar-hamburger-spin
Please note that the blue highlight is only there because it was recorded in Chrome's mobile view, and won't be there on an actual phone.

![luxbar-hamburger-spin](http://i.imgur.com/jjjowwe.gif)

### luxbar-hamburger-doublespin
Please note that the blue highlight is only there because it was recorded in Chrome's mobile view, and won't be there on an actual phone.

![luxbar-hamburger-doublespin](http://i.imgur.com/4VjRVhf.gif)

# Other

See [the original repo](https://github.com/balzss/luxbar)
