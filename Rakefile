# frozen_string_literal: true

require 'listen'

Signal.trap('INT') { exit 0 }

desc 'Run the Jekyll dev server'
task :dev do
  # listener = Listen.to("_bibliography") do
  #   Rake::Task["refer"].invoke
  # end
  # listener.start
  sh 'bundle exec jekyll serve --livereload'
  # sleep
end

desc 'Build the site with Jekyll and construct global BibTeX references'
task build: [:refer] do
  sh 'bundle exec jekyll build', verbose: false
end

desc 'Proof read the site to ensure we have no missing references'
task :proof do
  status = 0
  Dir['_site/**/*.html'].each do |path|
    contents = File.read(path)
    if contents.include? '(missing reference)'
      status += 1
      puts "Missing reference in #{path}"
    end
  end
  exit status
end

desc 'Construct global BibTeX references'
task :refer do
  references = ''
  Dir.foreach('_bibliography') do |path|
    next if ['.', '..'].include?(path)
    next if path == 'references.bib'
    next if path == 'custom.csl'

    references += File.read("_bibliography/#{path}")
  end
  references.gsub!("---\n", '')
  references = "---\n---\n#{references}"
  File.write('_bibliography/references.bib', references)
end
