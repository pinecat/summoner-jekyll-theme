# frozen_string_literal: true

require "listen"
require "rubocop/rake_task"

load "summoner-jekyll-theme.gemspec"

RuboCop::RakeTask.new

Signal.trap("INT") { exit 0 }

desc "Run the Jekyll dev server"
task :dev do
  sh "bundle exec jekyll serve --livereload"
end

desc "Build the site with Jekyll and construct global BibTeX references"
task build: [:refer] do
  sh "bundle exec jekyll build", verbose: false
end

desc "Proof read the site to ensure there are no missing references"
task :proof do
  status = 0
  Dir["_site/**/*.html"].each do |path|
    contents = File.read(path)
    if contents.include? "(missing reference)"
      status += 1
      puts "Missing reference in #{path}"
    end
  end
  exit status
end

desc "Construct global BibTeX references"
task :refer do
  references = ""
  Dir.foreach("_bibliography") do |path|
    next if [".", ".."].include?(path)
    next if path == "references.bib"
    next if path == "custom.csl"

    references += File.read("_bibliography/#{path}")
  end
  references.gsub!("---\n", "")
  references = "---\n---\n#{references}"
  File.write("_bibliography/references.bib", references)
end

desc "Publish to rubygems.org"
task :release do
  spec = Gem::Specification.load("summoner-jekyll-theme.gemspec")
  sh "gem build"
  sh "gem push summoner-jekyll-theme-#{spec.version}.gem"
  FileUtils.rm_rf(Dir.glob("*.gem"))
end
