## To Do

This [Zettelkasten](https://zettelkasten.de/posts/overview/) is [[Digital Gardening|always a work-in-progress]]. These are my [[Fleeting Ideas Shouldn't Hang Around|fleeting thoughts and references]] to interesting ideas or feelings that I haven't processed yet.

### 🍃 Fleeting Ideas

These ideas just floated by and I captured them:

```dataview
table file.day as "Date"
from #fleeting and -"templates" sort file.day
```

### 🌱 Seedling Ideas

I have planted these ideas in my knowledge garden, but I still need to tend to them before they grow to become **evergreen** 🌲:

```dataview
table lastTendedAt as "Last Tended At"
from #seedling and -#book and -"templates" and -"templater" sort lastTendedAt
```

### 📖 Books to Review
^books

These are books [synced from Goodreads](https://www.goodreads.com/user/show/8150945-william) that I am reading and/or reviewing:

```dataview
table lastTendedAt as "Last Tended At"
from #seedling and #book and -"templates" sort lastTendedAt
```
