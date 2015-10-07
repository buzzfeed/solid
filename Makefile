.PHONY: modules gems ruby_gems ruby_gems_deployment ruby_gems_deploy

APP_NAME = solid

BUZZFEED_LOCAL = /buzzfeed/local

BUNDLE_PATH = $(BUZZFEED_LOCAL)/bundle/$(APP_NAME)
export BUNDLE_PATH
# e.g. can be set to BUNDLE_ARGS='--deployment' when deploying
BUNDLE_ARGS =

# DEV: dev target additionally installs modules and runs db migraitons
dev: modules

# update all code depenendencies
modules: gems

# update all ruby gems
gems: ruby_gems

# install ruby gems from Gemfile/Gemfile.lock
ruby_gems:
	bundle install --path=$(BUNDLE_PATH) --clean $(BUNDLE_ARGS)

# run the jekyll server
run:
	jekyll serve

# build static site into _site
build:
	jekyll build
