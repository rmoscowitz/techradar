Build Your Own Technology Radar
Inspired by the ThoughtWorks Tech Radar: http:www.thoughtworks.com/radar/

Forked from https:github.com/bdargan/techradar

---------------------

This Technology Radar has pretty simple functionality, uses json data source and renders SVG within html.

The data currently is provided in a radial format and is defined with the following properties:

movement:<br>
  t = moved<br>
  c = stayed put<br>

blipSize:<br>
	intValue; This is optional, if you omit this property, then your blip will be size 70. This gives you the ability to indicate information by blip size too<br>

url:<br>
	StringValue : This is optional, If you add it then your blips will be clickable to some URL<br>

pc: polar coordinates<br>
    r = distance away from origin ("radial coordinate")<br>
    	- Each level is 100 points away from origin<br>
    t = angle of the point from origin ("angular coordinate")<br>
    	- 0 degrees is due east<br>

Rings:
<br>- Adopt: blips you should be using now; proven and mature for use
<br>- Trial: blips ready for use, but not as completely proven as those in the adopt ring; use on a trial basis, to decide whether they should be part of your toolkit
<br>- Assess: things that you should look at closely, but not necessarily trial yet - unless you think they would be a particularly good fit for you
<br>- Hold: things that are getting attention in the industry, but not ready for use; sometimes they are not mature enough yet, sometimes they are irredeemably flawed

