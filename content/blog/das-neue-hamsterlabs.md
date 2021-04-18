---
title: Das neue Hamsterlabs
description: Vor kurzem habe ich meine komplette IT-Infrastruktur umgestellt und in dem Zuge auch eine neue Webseite veröffenttlicht.
author: Feuerhamster
author_image: https://avatars.githubusercontent.com/u/38376566
tags: [hamsterlabs, news]
---

Seit mittlerweile Jahren habe ich meine alte Webseite auf PHP Basis gehabt.
Die Seite sowie alle anderen Projekte von mir liefen auf einem Server, der aber mit der Zeit ein wenig zu klein für mein ganzes Zeug wurde.
Aus diesem Grund habe ich mich dazu entschieden, den V-Server auf dem meine Projekte laufen zu erneuern.

## Die neue IT-Infrastruktur

### Der Server
Früher war ich bei dem Prepaid Hoster [Signaltransmitter](https://signaltransmitter.de/).
Trotz der leicht höheren Kosten habe ich mich für [Hetzner](https://www.hetzner.com/) entschieden.

Gründe dafür:
- KVM statt LXC
- Deutlich besseres Webinterface und Server-Management
- Empfehlung eines guten Freundes

### Deployment
Das Deployment meiner Node.js Anwendungen und Webseiten lief bis jetzt immer komplett manuell.
Bedeutet: Projektordner per SFTP hochladen, `npm install` usw.
Seine Anwendungen und Dependencies so zu handeln ist nervig und aufwendig.

Deshalb läuft jetzt alles in Docker-Containern.
Anfangs fand ich Docker noch etwas kompliziert, aber im Nachhinein kann ich sagen, dass es deutlich besser und einfacher ist als vorher.

## Gründe für den Umzug
Einer der Hauptpunkte war der RAM. Ich habe unterschätzt, wie viel eine MongoDB und die ganzen Node.js Anwendungen am Ende dann doch ziehen.
So ist es mehrmals vorgekommen, dass der Server meine produktive MongoDB gekillt hat, weil der RAM voll war.

Ein anderer Grund war PM2.
Denn scheinbar hat dieser Prozessmanager memory leaks verursacht.

## Die neue Webseite
Meine bisherige Seite lief auf Basis von PHP.
Nun habe ich der Programmiersprache schon seit einiger Zeit den Rücken zugewandt und hatte dementsprechend keine Lust diese auf dem neuen Server zu installieren.
Das ganze hab ich dann als Gelegenheit genutzt, meine Hauptwebseite auf der ich mich und meine Projekte präsentiere, neu zu bauen.
Jetzt läuft sie nicht mehr mit PHP, sondern Nuxt.js als static site.