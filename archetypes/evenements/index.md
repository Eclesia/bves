---
title: "{{ replace (substr .File.ContentBaseName 11) "-" " " | title }}"
date: {{ now.Format "2006-01-02" }}   # doit correspondre au préfixe du dossier : AAAA-MM-JJ-nom
heure: "18 h 00"
lieu: ""
categories: ["Culture"]   # Culture, Environnement, Alimentation, Politique, Musique
description: ""
---
