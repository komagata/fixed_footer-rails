# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'fixed_footer-rails/version'

Gem::Specification.new do |spec|
  spec.name          = "fixed_footer-rails"
  spec.version       = FixedFooter::Rails::VERSION
  spec.authors       = ["Masaki Komagata"]
  spec.email         = ["komagata@gmail.com"]

  spec.summary       = %q{Injects fixed-footer.js into your app.}
  spec.description   = %q{Injects fixed-footer.js into your app.}
  spec.homepage      = "https://github.com/komagata/fixed_footer-rails"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").reject do |f|
    f.match(%r{^(test|spec|features)/})
  end
  spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler", "~> 1.14"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "minitest", "~> 5.0"
end
