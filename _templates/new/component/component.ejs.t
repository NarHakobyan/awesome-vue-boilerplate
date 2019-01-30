---
to: "src/components/<%= h.inflection.dasherize(name).toLowerCase().slice(0, 5) === 'base-' ? '_' : '' %><%= h.inflection.dasherize(name) %>.vue"
---
<%
if (blocks.indexOf('<template>') !== -1) {
%><template>
  <div/>
</template>
<%
}
if (blocks.indexOf('<script>') !== -1) {
%>
<script>
export default {
    name: '<%= h.inflection.dasherize(name) %>',
  <% if (blocks.indexOf('<template>') === -1) {
  %>render(h) {
    return <div/>
  }<% } %>
}
</script>
<%
}
if (blocks.indexOf('<style>') !== -1) {
%>
<style lang="scss" module>
</style><%
}
%>
