# Magenta

This theme is for use by the Civil Service LGBT+ Network on its sites.

## Set up your theme

Before you get started, you'll need to do a bit of set up.

### 1. Set up _config.yml

If you don't already have one, create a `_config.yml` file in the site's root directory.

This theme requires the following information to be added to that file to function:

#### Basic information

- `title:` (string) - Add a title for the site. We use "Civil Service LGBT+ Network". This will show up in the navbar, in bookmarks and social shares, and in the footer of the site.
- `author:` (string) and `organisation:` (string) - The name of your organisation. e.g. "Civil Service LGBT+ Network".
- `description:` (string) - This is a brief description of the site (or organisation the site is for). It should be up to 160 characters for Search Engine Optimisation.
- `email:` (string)

### 2. Set up menus

There are 2 menus in this theme. Each is controlled with YAML set in the site's `_config.yml`, under the tags `footer-menu--links:` and `header-menu--links`.

---

## Installation (for GitHub pages)

add this line to your Jekyll site's `_config.yml`:

```yaml
remote_theme: cslgbt-theme
```

---

## Installation

Add add this line to your Jekyll site's `_config.yml`:

```yaml
plugins:
	- jekyll-remote-theme

remote_theme: civilservicelgbt/magenta
```

---

## Usage

This Jekyll theme has been created for use by the Civil Service LGBT+ network. It is available under the Open Government License. You should attribute the source in any derivatives.

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/civilservicelgbt/magenta.