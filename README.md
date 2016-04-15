[TOC]

## Introduction

I wrote this after found a problem getting magnet links from some sites, and after [report a bug to deluge](http://dev.deluge-torrent.org/ticket/2790) and, get noticed about the magnet uri was wrong.

Problem seens to be that, some people migrates from md5 to BTIH (looks similar, apparently same, but not).

Exact problem, is BTIH is Base 32 magnet uris must be upper case.

deluged team will fix it, but in the meantime...

I decided to write this extension, my first extension. :)

Disclaimer: I don't code in jQuery FOR YEARS, so, please, feel free to improve/correct it :)