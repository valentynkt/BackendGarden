---
tags:
  - dashboard
plantedAt: 2024-04-04
lastTendedAt: 2024-04-11
---
This *Alignment Dashboard* is a place to view my life from the top down.

[[How to use this vault in Obsidian|Learn how to navigate]] after you open this vault in Obsidian.
## 💎 Core Values

 I explicitly define my core values: not completable items, but defining who I am and the themes I wish to build my life upon.

```dataview
TABLE
lastTendedAt as "Last Tended At"
FROM #value and -"templater"
sort lastTendedAt desc
```

## 🎯 Goals

I set DCAs (Definite Chief Aim) which are concrete personal goals that align with my core values that I don't necessarily have a concrete plan for achieving.

```dataview
TABLE
	values as "Values",
	lastTendedAt as "Last Tended At",
	complete as "Complete"
FROM #goal and -"templater"
sort lastTendedAt desc
```

## 📋 Projects

Projects are groups of tasks and relevant information. They should have quantifiable completion criteria and are generally smaller in scale and more actionable than goals.

```dataview
TABLE
	goal AS "Goal",
	completedAt as "Completed At",
	complete as "Complete"
FROM #project and -"templater"
SORT complete ASCENDING, completedAt DESCENDING
```

## 📝 Zettelkasten

This is [[Digital Gardening|always a work-in-progress]]. These are my [[Fleeting Ideas Shouldn't Hang Around|fleeting thoughts and references]] to interesting ideas or feelings that I haven't processed yet.

### 🍃 Fleeting/Seed Ideas

These ideas just floated by and I captured them:

```dataview
table file.day as "Date"
from #seed and -#video and -"templates" and -"templater" sort file.day desc
```

### 🌱 Seedling Ideas

I have planted these ideas in my knowledge garden, but I still need to tend to them before they grow to become **evergreen** 🌲:

```dataview
table lastTendedAt as "Last Tended At"
from #seedling and -#book and -"templates" and -"templater" sort lastTendedAt desc
```
