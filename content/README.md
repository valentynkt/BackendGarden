---
lastTendedAt: 2024-04-03
---
> [!INFO]
> This is the homepage for [Obsidian](https://obsidian.md/). [Download this repository](https://github.com/chadly/zettelkasten/archive/refs/heads/master.zip), install Obsidian, and open the downloaded folder as the vault.

[[How to use this vault in Obsidian|Learn how to navigate]] after you open this vault in Obsidian.

## 🧠 Top of Mind

These are entry points into my thoughts.  They are only **guidelines** for entry points that *I* think are interesting or relevant to me *at the moment*. They can, do, and will change.

Once you dive into a thought, the idea is to follow that trail wherever it may lead.

## 🔀 Other Entry Points

There are other ways to enter the thought matrix and explore ideas linked from each:

- ✍️ [[journal/README|my daily/weekly journal]]
- 👫 [[people/README|my personal CRM]]
- `Ctrl + Shift + F` to find a note by keyword
- `Ctrl + Shift + G` open the graph to visualize thoughts as an interconnected graph

## ✅ To Do

This is [[Digital Gardening|always a work-in-progress]]. These are my [[Fleeting Ideas Shouldn't Hang Around|fleeting thoughts and references]] to interesting ideas or feelings that I haven't processed yet.

### 🍃 Fleeting/Seed Ideas

These ideas just floated by and I captured them:

```dataview
table file.day as "Date"
from #seed and -"templates" and -"templater" sort file.day desc
```

### 🌱 Seedling Ideas

I have planted these ideas in my knowledge garden, but I still need to tend to them before they grow to become **evergreen** 🌲:

```dataview
table lastTendedAt as "Last Tended At"
from #seedling and -#book and -"templates" and -"templater" sort lastTendedAt desc
```
