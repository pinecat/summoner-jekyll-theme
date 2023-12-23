# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name          = "summoner-jekyll-theme"
  spec.version       = "1.3.6"
  spec.authors       = ["Rory Dudley"]
  spec.email         = ["rory.dudley@gmail.com"]

  spec.summary       = "My custom jekyll theme for https://summoning.net/."
  spec.homepage      = "https://summoning.net"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r!^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)!i) }
end
