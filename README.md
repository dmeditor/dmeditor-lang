# dmeditor-lang
DM Editor intergration with language, PHP as first sample


This is the experiment to integrate DM Editor with PHP, typically PHP CMSes. 

Main goal is to make it as a PHP project's "engine for visual editing", with use cases like making compaign page visually. To achieve that, below should be supported:

- Allow PHP (or template) to include DM Editor.
- Support widget making in php template(eg. twig), which is loaded both in front site and admin editing.
- Support defining style in config/js config
- [not here but in solution] a place to launch dmeditor & save
- [not here but in solution] asset integration, including images, files, links, data source (future).

Approach 1: remote
------
Run a nextjs server behind (mostly on localhost and proxy nextjs to client).

Pros: 
Mature platforms

Cons: 
1) Need extra server to run
2) request to nextjs (embed) and request back (for widget rendering)? - maybe it's not a big deal as long as it's stable and easy to set up.



Approach 2: native
------
Use php_v8js to run react for both server and client. Other languages Python: pyv8, Java: j2v8, Go: v8go. 

*(PS. seems in Python community they prefere Approach 1. eg. https://github.com/markfinger/python-react)*

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

For server choosing suggestion:

- Most of php layout / page template: use php server
- Most of widget templates (doesn't matter php template for react): use nodejs server (eg. nextjs)

