SHELL := /bin/bash
PATH := node_modules/.bin:$(PATH)
ENV := development
NODE := node --harmony
GRUNT := $(NODE) ./node_modules/.bin/grunt --gruntfile make.js
APP := openvis-react
TEMP_DIR_NAME := $(APP)

.PHONY: all server build install clean clobber dist

all: server

server: install
	$(GRUNT) serve

dist: install
	$(GRUNT) build

_setenv-production:
	$(eval ENV :="production")

clean:
	$(GRUNT) clean

install: node_modules

node_modules: package.json
	npm install
	touch $@



deploy: dist
	@echo "> Cleaning deployment"
	@rm -rf /tmp/$(TEMP_DIR_NAME)

	@echo "> Preparing for deployment"
	@mkdir -p /tmp/$(TEMP_DIR_NAME)
	@echo "> Copying the files to deploy"
	@cp -r dist/ /tmp/$(TEMP_DIR_NAME)

	@echo ""
	@echo "> Deploying the $(ENV) app"
	@echo ""

	@cd /tmp/$(TEMP_DIR_NAME); \
	git init .; \
	git remote add origin git@github.com:ilyabo/$(APP).git; \
	git checkout --orphan gh-pages; \
	git add .; \
	git commit -am 'deploying the app'; \
	git push origin gh-pages -f

	@echo "> Cleaning deployment"
	@rm -rf /tmp/$(TEMP_DIR_NAME)


