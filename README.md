# summoner-jekyll-theme

My [Jekyll](https://jekyllrb.com/) theme for my personal blog,
https://summoning.net, designed to be simple and minimal.

## Installation

Add this line to your Jekyll site's `Gemfile`:
```ruby
gem "summoner-jekyll-theme"
```

And add this line to your Jekyll site's `_config.yml`:
```yaml
theme: summoner-jekyll-theme
```

If you're using the `github-pages` gem, use `remote_theme` in
`_config.yml` intead:
```yaml
remote_theme: pinecat/summoner-jekyll-theme
```

And then execute:

    $ bundle

Or install it yourself with:

    $ gem install summoner-jekyll-theme

## Usage

#### Layouts

- 404.html: Default 404 page, set permalink if using pretty links
- archive.html: List tag types based on jekyll-archives tags
- blog.html: Post listings, pagination supported via jekyll-paginate-v2
- default.html: Minimum layout necessary for including CSS and JS
- index.html: Homepage and navigation
- page.html: Use for miscellaneous pages (about, contact, etc.)
- post.html: Use for blog posts

#### Misc.

- The theme supports jekyll-feed, default link is to `/blog/feed.xml`
- It is expected for the homepage to mostly be a set of links to other
areas on the site. Use of the `nav` element is recommended to wrap your
links in:
```html
<nav>
  <a href="/blog">blog</a>
  <a href="/blog/feed.xml">rss</a>
</nav>
<nav>
  <a href="#">about</a>
  <a href="#">archive</a>
</nav>
```

## Contributing

Bug reports and pull requests are welcome on GitHub at
https://github.com/pinecat/summoner-jekyll-theme.

## Development

```sh
git clone https://github.com/pinecat/summoner-jekyll-theme
cd summoner-jekyll-theme
bundle
```

## License

The theme is available as open source under the terms of the [MIT
License](https://opensource.org/licenses/MIT). The fonts shipped with
the theme are all under the OFL, and a copy of each font's license can
be found in the `_data` directory.
