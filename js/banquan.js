<% if(theme.post.copyright.enable && theme.post.copyright.content && page.copyright !== false) { %><p class="note note-warning">
<strong>本文作者: </strong><a href="<%- url_for() %>"><%- theme.about.name || config.author || config.title %></a> <br>
<strong>本文链接: </strong><a href="<%- full_url_for(page.path) %>"><%- 		  full_url_for(page.path) %></a> <br>
<strong>版权声明: </strong><%- theme.post.copyright.content %>
   </p>
   <% } %>