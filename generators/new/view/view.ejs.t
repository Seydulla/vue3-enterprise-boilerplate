---
to: "src/views<%= path ? '/' + path : '' %>/<%= h.changeCase.kebab(name) %>.vue"
---
<%
%><script setup lang="ts"></script>
<%

%>
<template>
  <div></div>
</template>
<%

if (useStyles) {
%>
<style lang="scss"></style><%
}
%>