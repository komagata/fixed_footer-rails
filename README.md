# fixed_footer-rails

Injects fixed_footer.js into your app.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'fixed_footer-rails'
```

And then execute:

    $ bundle

Or install it yourself as:

    $ gem install fixed_footer-rails

And in your application.js manifest:

    //= require fixed-footer

## Usage

Call constructor.

```coffeescript
# app/assets/javascripts/footer.coffee
$(document).on "turbolinks:load", ->
  new FixedFooter("your-footer-id")
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/Masaki Komagata/fixed_footer-rails. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The gem is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
