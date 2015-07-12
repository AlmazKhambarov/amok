PAGEDIR  := gh-pages
PAGE     := $(patsubst %.md, $(PAGEDIR)/%.md, $(patsubst %readme.md, %index.md, $(wildcard *.md) $(shell find example man -name '*.md')))

test: test-lib test-bin

test-bin:
	git reset HEAD -- test/fixture
	tape test/bin_*.js

test-lib:
	git reset HEAD -- test/fixture
	tape test/lib_*.js

$(PAGEDIR)/index.md: readme.md
	echo '---\n---\n' >> $@
	cat $< >> $@

$(PAGEDIR)/%index.md: %readme.md
	mkdir -p $(@D)
	echo '---\n---\n' >> $@
	cat $< >> $@

$(PAGEDIR)/%.md: %.md
	mkdir -p $(@D)
	echo '---\n---\n' >> $@
	cat $< >> $@

$(PAGE): | $(PAGEDIR)

$(PAGEDIR):
	mkdir $(PAGEDIR)
	git clone --branch gh-pages . $(PAGEDIR)
	rm -f $(PAGE)

page: $(PAGE)
	cd $(PAGEDIR) && git add . && git commit -m 'Update *.md' && git push

clean:
	rm -rf $(PAGEDIR)

.PHONY: test test-bin test-lib clean