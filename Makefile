.PHONY: node_modules modules gems ruby_gems ruby_gems_deployment ruby_gems_deploy

APP_NAME = solid

BUZZFEED_LOCAL = /buzzfeed/local

BUNDLE_PATH = $(BUZZFEED_LOCAL)/bundle/$(APP_NAME)
export BUNDLE_PATH
# e.g. can be set to BUNDLE_ARGS='--deployment' when deploying
BUNDLE_ARGS =

# DEV: dev target additionally installs modules and runs db migraitons
dev: modules

# update all code depenendencies
modules: node_modules ruby_gems

# install node modules from npm-shrinkwrap.json
node_modules:
	npm install
	npm prune

gems: ruby_gems

# install ruby gems from Gemfile/Gemfile.lock
ruby_gems:
	bundle install --path=$(BUNDLE_PATH) --clean $(BUNDLE_ARGS)

# NOTE: we don't need the ruby gem deploy targets since we don't deploy loom gems

# ruby_gems_deploy: ruby_gems_deployment
#
# # install ruby gems in deploy mode from Gemfile.lock
# ruby_gems_deployment:
# 	bundle install --without development --path=$(BUNDLE_PATH) --clean --deployment $(BUNDLE_ARGS)

# run the harp server
run:
	./node_modules/.bin/harp server
