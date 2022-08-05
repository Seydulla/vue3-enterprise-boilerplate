---
to: "src/utils/<%= h.changeCase.kebab(name) %>.spec.ts"
---
<%
  const fileName = h.changeCase.kebab(name)
  const importName = h.changeCase.camel(fileName)
%>import { describe, it, expect } from "vitest";
import <%= importName %> from "./<%= fileName %>";

describe("@utils/<%= fileName %>", () => {
  it("says hello", () => {
    const result = <%= importName %>();
    expect(result).toEqual("hello");
  });
});