APP_NAME=rouge-minuit
DIST_DIR=dist/$(APP_NAME)/browser
BASE_HREF=/rouge_minuit/

.PHONY: build publish clean

build:
	@echo "🔧 Build Angular (prod)"
	npx ng build --configuration production --base-href $(BASE_HREF)

publish: clean build
	@echo "🚀 Publication sur GitHub Pages"
	npx angular-cli-ghpages --dir=$(DIST_DIR)

clean:
	@echo "🧹 Nettoyage"
	rm -rf dist
