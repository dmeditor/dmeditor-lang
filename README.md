# dmeditor-lang

Prototype of integrating DM Editor with languages, PHP as main.

Main goal is to make DM Editor servered as "service / library for visual editing and rendering" in PHP, with use cases like making compaign page visually. Technical benefit would be, being able to combine flexibility of PHP template and DM Editor's visual widget (eg. interactive widget like tabs, collapsable text, pop up and more) and there will be only one render implementation for both editing and viewing and they look identical.

To achieve that, below should be supported:

- Allow PHP (or template) to render DM Editor.
- Allow PHP (or template) to make widget, which is loaded both in front site and admin editing. The widget may embed non-php widget also.
- Support defining styles in config / js config or db (loaded externally) and implementing style in PHP template.
- [not here but in solution] a place to launch dmeditor & save.
- [not here but in solution] asset integration, including images, files, links, data source (future).

## Approach 1: remote

Run a nextjs server behind (mostly on localhost and proxy nextjs to client).

Pros: mature platforms

Cons:

1. Need extra server to run.
2. request to nextjs (embed) and request back (for widget rendering)? - maybe it's not a big deal as long as it's stable and easy to set up.

_(working on this approach for now.)_

## Approach 2: native

Use php_v8js to run react for both server and client. Other languages - Python: pyv8, Java: j2v8, .NET: ClearScript, Go: v8go.

_(PS. seems in Python community they prefer approach 1. eg. https://github.com/markfinger/python-react)_

Props: native invoking - php invoking js and js invoking php (and template)

Cons:

1. Complex to set up.
2. Libraries for rendering js in PHP (both server and client) is not proved reliable and maintained (eg. https://github.com/Limenius/ReactRenderer).

## Implementation

Sub folders:

- [dmeditor-lang](./dmeditor-lang) (js library): a dmeditor widget wrapper which loads PHP templates as widget (with styles parameter), and defines styles by config.
- [php](./php) (php library, symfony vendor): php wrapper for invoking DM Editor View, provding template and invoking widget rendering (for edit view).
- [sample](./sample): sample project of using php lib & dmeditor-lang.

## Further ideas about usage in project

PHP developer in the end can have 2 ways to develop widget:

- For case where it's mostly static template, not much script: template (eg. twig).
- For case where it's some templating and more script: recommand to use react for both scripting and rendering (JSX), as using template + another react inside template is unnecessary (still using JQuery? then use first way :)).
