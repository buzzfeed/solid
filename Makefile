build:
	npm install
	npm prune
	bundle

run:
	./node_modules/.bin/harp server
