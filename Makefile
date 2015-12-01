.PHONY: modules gems ruby_gems ruby_gems_deployment ruby_gems_deploy node_modules build run clean dist shrinkwrap

APP_NAME = solid

BUZZFEED_LOCAL = /buzzfeed/local

BUNDLE_PATH = $(BUZZFEED_LOCAL)/bundle/$(APP_NAME)
export BUNDLE_PATH
# e.g. can be set to BUNDLE_ARGS='--deployment' when deploying
BUNDLE_ARGS =

# DEV: dev target additionally installs modules and runs db migraitons
dev: modules build

# update all code depenendencies
modules: ruby_gems node_modules

# install ruby gems from Gemfile/Gemfile.lock
ruby_gems:
	bundle install --path=$(BUNDLE_PATH) --clean $(BUNDLE_ARGS)

# clean out generated files
clean:
	rm -fr dist/
	rm -fr _site/

# run the jekyll server
run: dist
	bundle exec jekyll serve

# build static site into _site
build: dist
	bundle exec jekyll build

# compile dist files
dist:
	grunt compile_lib
	grunt minify_lib
	grunt zip_lib

# install node modules from npm-shrinkwrap.json
node_modules:
	npm install
	npm prune

# shrinkwrap node modules
# * installs modules from package.json
# * prunes modules we don't need
# * generates npm-shrinkwrap.json
shrinkwrap:
	npm install --no-shrinkwrap
	npm prune
	npm shrinkwrap --dev
