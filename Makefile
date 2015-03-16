SHELL := /bin/bash
PATH := node_modules/.bin:$(PATH)
ENV := development
GRUNT := node --harmony ./node_modules/.bin/grunt

.PHONY: all server build install clean clobber dist

all: server

server: install
	$(GRUNT) serve

_setenv-production:
	$(eval ENV :="production")

dist: clean install
	$(GRUNT) dist

clean:
	$(GRUNT) clean

install: node_modules

node_modules: package.json
	npm install
	touch $@


