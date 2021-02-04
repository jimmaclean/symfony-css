# MyBuilder LESS info

The `.less` files in this directory make up the "core" CSS that is included on every marketplace page via `header-footer.html.twig`.

## Main entry points
The following files are the main entry points, which then `@import` everything else as needed:

* `site.less`
* `header-footer.less`
* Additionally, on mobile devices these LESS files are also included:
    * `phone.less`
    * `sidebar.less`
    
## Imports from elsewhere
Files in this directory and in the `components/` sub directory can be directly `@import`ed or `<link>`ed to from elsewhere (including other bundles).

However, the contents of the following directories should be considered private and are **off-limits to other bundles**:
* `bootstrap_mb/` (our customised copy of Bootstrap)
* `site/` (partials used by `site.less` and `mb-utils.less`)


## Bootstrap
The `bootstrap_mb` folder contains a partial and customised copy of [Bootstrap CSS's v2.3.2 release](https://getbootstrap.com/2.3.2/index.html) (copies of the corresponding JS files live under `../js/bootstrap/`). This is a very _old_ Bootstrap release from 2013 and there are now neater ways to achieve much of what it provides. In practice, we don't seem to use all that much of Bootstrap's out-of-the-box styling, so it might be nice to further reduce (and eventually eliminate?) our dependency on these files.

⚠️ You will also find a `bootstrap` directory, which is a symlink to a (non-modified) copy of that same Bootstrap release provided by the [`MopaBootstrapBundle`](https://github.com/mybuilder/MopaBootstrapBundle) (which itself is a forked copy we maintain). The LESS files within are not used anywhere though, so please **ignore this directory**.
