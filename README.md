Build Your Own Technology Radar
Inspired by the ThoughtWorks Tech Radar: http:www.thoughtworks.com/radar/

Forked from https:github.com/bdargan/techradar

---------------------

This Technology Radar has pretty simple functionality, uses json data source and renders SVG within html.

The data currently is provided in a radial format and is defined with the following properties:

movement:
  t = moved
  c = stayed put

blipSize:
	intValue; This is optional, if you omit this property, then your blip will be size 70.
           This give you the ability to be able to indicate information by blip size too

url:
	StringValue : This is optional, If you add it then your blips will be clickable to some URL

pc: polar coordinates
    r = distance away from origin ("radial coordinate")
    	- Each level is 100 points away from origin
    t = angle of the point from origin ("angular coordinate")
    	- 0 degrees is due east

Rings:
	- Adopt: blips you should be using now; proven and mature for use
	- Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
	- Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
	- Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed

