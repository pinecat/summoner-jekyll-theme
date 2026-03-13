# frozen_string_literal: true

Gem::Specification.new do |spec|
  spec.name = "summoner-jekyll-theme"
  spec.version = "2.2.0"
  spec.authors = ["Rory Dudley"]
  spec.email = ["rory@summoning.net"]

  spec.metadata["allowed_push_host"] = "https://rubygems.org"

  spec.summary = "My custom jekyll theme for https://summoning.net/."
  spec.homepage = "https://summoning.net"
  spec.license = "MIT"

  spec.files = `git ls-files -z`.split("\x0").select do |f|
    f.match(/^(assets|_data|_layouts|_includes|_sass|LICENSE|README|_config\.yml)/i)
  end
  spec.required_ruby_version = ">= 3.0"
  spec.metadata["rubygems_mfa_required"] = "true"
end
