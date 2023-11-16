# Luxbar

Featherweight, Responsive, CSS Only Navigation bar

![Screencap](http://i.imgur.com/0eGzsNt.gif)

This fork is an attempt to modernize Luxbar by using
- Native CSS functionality instead of SCSS
- esbuild for faster builds for production
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
<div class="luxbar">
    <input type="checkbox" id="luxbar-checkbox">
    <div class="luxbar-menu">
        <ul class="luxbar-navigation">
            <li class="luxbar-header">
                <a class="luxbar-brand" href="#">Brand</a>
                <label class="luxbar-hamburger" for="luxbar-checkbox"> <span></span> </label>
            </li>
            <li class="luxbar-active"><a href="#">Home</a></li>
            <li class="luxbar-dropdown"><a href="#">Users</a>
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
The base module includes three menu items. You can have more by adding `<li><a href="#">Menu item name</a></li>` to the luxbar-navigation list. Adding the classname `luxbar-active` to the luxbar-item will make it visually selected. You can have multiple selected items.

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
This fork of luxbar supports only one style `luxbar-fixed`, instead of the three original.  This style will be always at the top of your screen even when you scroll down and will look something like this:

![luxbar-fixed](http://i.imgur.com/h6DBQsI.png)

## Leave out the brand
If you want to leave out the brand from your navbar simply delete the `<a class="luxbar-brand" href="#">Brand</a>` part from your base module.

## Hamburger animation
In mobile view (under 786px) there is an animated hamburger icon which transforms into an 'X' when you click it.  This fork of luxbar only supports the single spin, not double spin. Please note that the blue highlight is only there because it was recorded in Chrome's mobile view, and won't be there on an actual phone.

![luxbar-hamburger-spin](http://i.imgur.com/jjjowwe.gif)

# Other

See [the original repo](https://github.com/balzss/luxbar)
