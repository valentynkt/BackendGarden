---
tags: [seedling]
plantedAt: <% tp.file.creation_date("YYYY-MM-DD") %>
lastTendedAt: <% tp.file.creation_date("YYYY-MM-DD") %>
---
<%*
let title = tp.file.title;
if (title.startsWith("Untitled")) {
	title = await tp.system.prompt("Title");
}
await tp.file.rename(title);
-%>

> [!WARNING]
> Don't link to sources directly from this zettel. Instead, link to this idea *from* the reference note.
