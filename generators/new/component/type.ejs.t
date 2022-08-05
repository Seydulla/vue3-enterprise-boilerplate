---
to: "<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? `src/types/global-components/${h.changeCase.kebab(name)}.d.ts` : null %>"
unless_exists: true
---
<%
  let fileName = h.changeCase.kebab(name).toLowerCase()
  const importName = h.changeCase.pascal(fileName)
%>import <%= importName %> from "@/components/base/<%= fileName %>.vue";

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    <%= importName %>: typeof <%= importName %>;
  }
}