
default: node_modules

test: node_modules
	@./node_modules/.bin/mocha --reporter list

node_modules: package.json
	@npm install

clean:
	@rm -rf node_modules

.PHONY: test