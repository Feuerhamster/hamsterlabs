---
title: QueerNews
description: QueerNews ist eine Google-News ähnliche Seite, die Inhalte zu LGBT-Themen aus verschiedenen Quellen bezieht.
startpage: true
web: https://queernews.ml
sort: 40
---

## Einführung
Es gibt in Deutschland viele verschiedene Seiten, die Artikel und News zum Thema LGBTQ veröffentlichen.
Doch leider sind diese sehr verteilt und man hat keine einheitliche Quelle, die einem im besten Fall auch noch über wichtige News benachrichtigt.

Google hat mit "Google News" schon eine Lösung generell für Nachrichten geschaffen.
Das Ziel von QueerNews ist es quasi das "Google News" für LGBTQ Themen zu sein.

## Funktionsweise
Das Projekt basiert auf RSS Feeds, weshalb wir keine eigenen Artikel veröffentlichen müssen oder generell irgendeine Art von Datenbank brauchen.
Eine vernünftige Node.js Library für das Parsen dieser Feeds zu finden ist allerdings gar nicht so einfach.
Problem dabei sind die verschiedenen Formate. Es gibt RSS 0.9, 1.0, 2.0 und sogenannte Atom Feeds.
Die meisten RSS Libraries haben immer nur die Feeds geparsed und zurückgegeben.
Für dieses Projekt brauchte es aber schon etwas mehr:
- Abrufen und parsen der Feeds
- Die Daten in ein einheitliches Format bringen
- Automatisches Aktualisieren und Events bei neuen Elementen im Feed.
- Laden von Open Graph Bildern von den entsprechenden Artikeln, wenn keine Thumbnails in den Feeds existieren.

Da es keine Library gab die das erfüllte, habe ich selber eine geschrieben:
https://www.npmjs.com/package/better-rss

Das ist nun der Kern von QueerNews, der erstaunlich gut und stabil funktioniert.

## TechStack
- Node.js
- RSS
- Express.js
- Vue
- Twitter API
- Telegram API
- Discord Webhooks

## Zusammenarbeit
QueerNews ist ein Projekt welches in Zusammenarbeit mit Bluemedia entstanden ist.
Er kümmert sich um das Deployment und Hosting der Anwendung.

## Open Source Hinweis
Trotz der Existenz eines GitHub Repos ist der Quellcode leider nicht Open Source.
Grund dafür ist die Verwendung von bestimmten API's wo es zu Problemen kommen könnte, wenn diese öffentlich einsehbar wären.