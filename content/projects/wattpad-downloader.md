---
title: Wattpad Downloader
description: Lade Wattpad-Geschichten für E-Book-Reader, Smartphones, Desktop-PCs und weitere Plattformen kostenlos herunter.
startpage: true
web: https://wattpad.ml
github: https://github.com/Feuerhamster/wattpad-downloader
sort: 40
---

## Projektidee
Eines Abends waren Bluemedia und ich in einem Anruf und haben uns darüber unterhalten, dass wir beide gerne Geschichten von Wattpad lesen.
Spontan kam dann die Idee auf, dass es doch cool wäre, 
wenn man die Geschichten auf einem richtigen E-Book-Reader lesen könnte anstatt in der mit Werbung zugemüllten Online-Zwang App von Wattpad.
Zwar gab es wohl vereinzelt schon Tools, die dies so halbwegs ermöglichen,
die meisten davon haben aber meistens nicht funktioniert oder waren nicht sehr benutzerfreundlich.

Da wir beide Fachinformatiker sind, haben wir mal eben an zwei Abenden selber was aufgebaut.

## Features
Eines der coolsten Features ist die Domain.
Es ist nämlich möglich, eine Geschichte auf [Wattpad.com](https://Wattpad.com) aufzurufen, 
die Domainendung in der Browser-Adresszeile von `.com` in `.ml` zu ändern und so direkt auf (unserer) Download-Seite zu landen.

Das Hauptfeature ist jedoch der Download der Geschichten in zwei Formaten:
- **EPUB:** Mit diesem Dateiformat kann man Wattpad Geschichten auf allen gängigen E-Book-Readern (auch offline) lesen.
- **HTML:** Eine einzelne HTML Datei die sich auf Smartphones, Tables und PC's mit dem Browser öffnen lässt.
  Sie enthält die komplette Geschichte in einem eigenen Reader mit Darkmode, Schriftarteinstellungen und Lesefortschrittsspeicherung.
  
## TechStack
- Express.js
- EJS Template engine