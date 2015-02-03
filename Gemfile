source 'https://rubygems.org'

#ruby-gemset=railstutorial_rails_4_0
ruby '2.1.5'
gem 'rails', '4.1.4'
gem 'bootstrap-sass', '~> 3.3.3'
gem 'sprockets', '2.12.1'
gem 'slim', '2.0.0'
gem 'sprockets-rails', '~> 2.0.1'

group :development, :test do
  gem 'sqlite3', '1.3.8'
  gem 'rspec-rails', '~> 3.0.2'
  gem 'rspec-core', '~> 3.0.3'
  gem 'guard-rspec', '~> 4.3.1'
  gem 'spork-rails', '~> 4.0.0'
  gem 'guard-spork', '~> 1.5.1'
  gem 'childprocess', '~> 0.5.3'
end

group :test do
  gem 'selenium-webdriver', '2.35.1'
  gem 'capybara', '~> 2.2.0'
end

gem 'sass-rails', '4.0.1'
gem 'uglifier', '2.1.1'
gem 'coffee-rails', '4.0.1'
gem 'jquery-rails', '3.0.4'
gem 'turbolinks', '1.1.1'
gem 'jbuilder', '1.0.2'

group :doc do
  gem 'sdoc', '0.3.20', require: false
end

group :production do
  gem 'pg', '0.15.1'
  gem 'rails_12factor', '0.0.2'
end

# Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
gem 'spring',        group: :development

# Use debugger
gem 'byebug', group: [:development, :test]

gem 'annotate', group: :development