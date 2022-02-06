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
    <button class="btn btn-link" data-show="mb-slide-menu"  data-target="#mymenu">
            <span class="navbar-toggler-icon"></span>
    </button>
``` 
Key attributes:
- `data-show="mb-slide-menu"` connect menu to plugin
- `data-target` contain selector that point to menu

See `index.html` in demo directory to view a live example.









