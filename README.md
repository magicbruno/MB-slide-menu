# MB-Slide-Menu
**Simple side menu plugin.**

## Getting started
### Install
Download `mb-slide-menu.js` and  `slide-menu.css` from `dist` directory and
place file into your HTML:

```
<head>
...
<link rel="stylesheet" href="yourpath/slide-menu.css">
...
</head>
```
and
```
<script src="../dist/js/mb-slide-menu.js"></script>
```
No matter where script tag is palaced.
### Insert HTML tag
- Create a simple menu structure like:

```
    <!-- MENU -->
    <nav id="mymenu" data-mb-slidemenu class="d-none">
        <!-- CLOSE BUTTON -->
        <span class="menu-close"></span>
        <!-- MENU ITEMS-->
        <a href="https://www.google.com">Link 1</a>
        <a href="mypage.html">Link 2</a>
        <a href="#bootstrap-modal">Link 3</a>
        <!-- END MENU ITEMS-->
    </nav>
    <!-- END MENU -->
```
- Assign `data-mb-slidemenu` attribute to menu element. 
- Optionally add element `<span class="menu-close"></span>` to put e close button.
- Finally add to you page a button to open the menu:

```
    <!-- NOTE: EXAMPLE USING BOOTSTRAP 5 BUTTON. YOU CAN USE ANY ELEMENT -->
    <button class="btn btn-link" data-show="mb-slide-menu"  data-target="#mymenu">
            <span class="navbar-toggler-icon"></span>
    </button>
``` 
Key attributes:
- `data-show="mb-slide-menu"` connect button to plugin
- `data-target` contain selector that point to menu

See `index.html` in demo directory for a live example.

## Customisation
Three themes are provided:
- Left dark (default) `slide-menu.css`
- Left light `slide-menu-light.css`
- Right dark  `slide-menu-dark-right.css`
- Right light `slide-menu-light-right.css`

You can easly customize your preferite theme changing css varible values:

```
[data-mb-slidemenu] {
  --background-color: rgba(0,0,0,0.4);
  --menu-padding: 1.5rem 0;
  --menu-hidden-transform: translateX(-100%);
  --menu-show-transform: translateX(0);
  --menu-left-position: 0;
  --item-padding: .50rem 1rem;
  --item-margin: 0.10rem;
  --item-text-color: #fafafa;
  --item-background-color: transparent;
  --item-hover-text-color: #fff;
  --item-hover-background-color: rgba(0,0,0,0.2);
  --item-font-size: 1.5rem;
  --item-hover-after-left: 0;
  --item-hover-after-right: auto;
}
```









