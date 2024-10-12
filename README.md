# dmeditor-php
DM Editor intergration with PHP


This is the experiment to integrate DM Editor with PHP, typically PHP CMSes. 

Main goal is to make it as a PHP project's "engine for visual editing", eg. Make compaign page visually. To archive that, these should be achieved.

- Allow PHP (or template) to include DM Editor.
- Support widget making in php template(eg. twig), which is loaded both in front site and admin editing.
- Support making style in config/js config


Approach 1: Remote
------
Run a nextjs server behind.

Pros: 
Matual platforms

Cons: 
1) extra server to run
2) request to nextjs (embed) and request back (for widget rendering)? - maybe it's not a big deal as long as it's stable and wrapped as configure.



Approach 2: Native
------
Use php_v8js to run react for both server and client.

Props:
Native invoking - php invoking js and js invoking php (and template)

Cons: 
1) Complex set up
2) library for rendering js in PHP (both server and client) is not proved reliable(and up to php 8 version)
 

Ideas of different templating language & servers
-----
PHP Developer in the end can have 2 ways to develop widget:

- Most templating only, not much script: template (eg. twig)
- Templating + script: use react for script & rendering (not suggest to use template + script, they can just use graphql for data + client react )

For server choosing:

- Most of php layout / page template: use php server
- Most of widget templates (doesn't matter php template for react): use nodejs server (eg. nextjs)

