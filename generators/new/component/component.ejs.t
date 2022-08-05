---
to: "src/components<%= path ? '/' + path : '' %>/<%= h.changeCase.kebab(name) %>.vue"
---
<%
if (blocks.indexOf('script') !== -1) {
%><script setup lang="ts"></script>
<%}
if (blocks.indexOf('template') !== -1) {
%>
<template>
  <div></div>
</template>
<%
}
if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss"></style><%
}
%>