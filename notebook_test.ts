import { h } from "preact";
import { render } from "preact-render-to-string";
import * as nb from "./notebook";
import { test } from "./test";
import { assert } from "./util";

test(function notebook_renderCell() {
  const code = "var i = 0";
  const a = render(h(nb.Cell, { code }));
  // Check that we're outputing something like html.
  assert(a.indexOf("div class=\"notebook-cell\"") >= 0);
  // Check that cells trim whitespace from input code.
  const b = render(h(nb.Cell, { code: "   " + code }));
  assert(a === b);
  // Check that the id prop works.
  const c = render(h(nb.Cell, { code, id: 5 }));
  assert(c.indexOf("id=\"cell5\"") >= 0);
});

test(function notebook_renderNotebook() {
  const a = render(h(nb.Notebook, { }));
  assert(a.match(/loading/i) != null);
});
