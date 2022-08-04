---
to: "src/components/<%= path %>/<%= h.changeCase.kebab(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.changeCase.kebab(name) %>.vue"
---
<%
if (blocks.indexOf('script') !== -1) {
%><script setup lang='ts'></script>
<%}
if (blocks.indexOf('template') !== -1) {
%>
<template></template>
<%
}
if (blocks.indexOf('style') !== -1) {
%>
<style lang="scss"></style><%
}
%>