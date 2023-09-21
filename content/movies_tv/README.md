# Media Reviews

I review movies and TV shows that I watch sometimes and try to extract ideas from them.

## Movies

```dataview
table plantedAt as "Date Watched", lastTendedAt as "Last Reviewed", rating as "Rating"
from #movie and -"templater" sort rating desc, plantedAt desc
```

## TV Shows

