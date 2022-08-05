---
to: "src/components<%= path ? '/' + path : '' %>/<%= h.changeCase.kebab(name) %>.spec.ts"
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)
%>import { describe, it, expect } from "vitest";
import { shallowMount } from "@vue/test-utils";
import <%= importName %> from "./<%= fileName %>.vue";

describe("@components/<%= fileName %>", () => {
  it("Mount a component", () => {
    const wrapper = shallowMount(<%= importName %>);
    expect(wrapper.html().includes("div")).toBe(true);
  });
});