profiles
========

Portfolio project: Profiles

## Purpose
This is a sample HTML5 / JS / CSS application that displays profiles of selected people.

Markup has been styled to be responsive, according to the device used to view the app.

It is intended as a demonstration of technical capabilities rather than design or helpful data. :-)

Note also that it is a work in progress; for each code branch you can see what features are in the pipeline.

## Functionality

This is a simple application that displays profile information for a list of people.

The sample data is contrived, but shows how the data is stored in JSON format, retrieved via AJAX,
and inserted into HTML templates.

## Implementations

The functionality has been implemented, as git branches from master, using the following methods:

* HandleBars + Require:
  * [source branch] (https://github.com/mcalthrop/profiles/tree/imp/handlebars)
  * [demo site] (http://www.mattcalthrop.com/portfolio/profiles/handlebars/)
* AngularJS _(in progress)_:
  * [source branch] (https://github.com/mcalthrop/profiles/tree/imp/angular)
  * [demo site] (http://www.mattcalthrop.com/portfolio/profiles/angular/)

View on different devices to see how the design changes (common codebase &ndash; no m-dot).

## Features
This demonstrates the use of the following:
* semantic HTML5
* Unobtrusive JS
* Responsive web development/design
* well-structured CSS using LESS
* Twitter Bootstrap
* Page data sourced via XHR JSON object

## Roadmap
* Currently working on an AngularJS implementation.
* unit testing

## Usage

Do one of the following:
* view on my website (links above)
* pull the relevant branch, as listed above

To customise the content, modify the contents of the `svc/pagedata.json` file to suit your requirements.

Observe the contents of the sample file to see what fields to fill in.
