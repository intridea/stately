#Stately
Stately is a symbol font that makes is easy to create a map of the United States using only HTML and CSS. Each state can be styled independently with CSS for making simple visualizations. And since it's a font, it scales bigger and smaller while staying sharp as a tack.

##Files
    map.svg      - SVG map used to create the font
    assets\font  - Folder containing the web-font files
    assets\sass  - Folder containing basic Sass files, including both Stately setup and stately.html demo customizations
    assets\css   - Folder containing compiled CSS files
    stately.html - Basic Demo
    stately.svg  - SVG font file
    stately.ttf  - TrueType font file
    

##What is Stately?
Each state is a glyph within the font. Each state is positioned and sized relative to the the rest of the states, so that when each character is stacked on top of one another, it creates a full map.
The pertinent characters are uppercase A-Z and lowercase a-z with lowercase y generating the District of Columbia and lowercase z generating a full US map.
For modern browsers ligatures are available and a state's abbreviation is its ligature. For example, "va" generates the glyph of the state of Virginia and 'dc' the District of Columbia. Additionally, the ligature "usa" produces a character of the full US map.

##Basic Use Case
You can use stately however you like, but some base Sass/CSS and HTML is included.
Download and add the Stately folder to your project which includes the base CSS and the web font files. Grab the stately folder and add it to your project. Then add the stately.css to the head of your document.

```html
<link rel="stylesheet" href="assets/css/stately.css">
```

Then add this markup to the page:

```html
<ul class="stately"> 
    <li data-state="al" class="al">A</li>
    <li data-state="ak" class="ak">B</li>
    <li data-state="ar" class="ar">C</li>						
    <li data-state="az" class="az">D</li>
    <li data-state="ca" class="ca">E</li>
    <li data-state="co" class="co">F</li>
    <li data-state="ct" class="ct">G</li>
    <li data-state="de" class="de">H</li>
    <li data-state="dc" class="dc">I</li>
    <li data-state="fl" class="fl">J</li>
    <li data-state="ga" class="ga">K</li>
    <li data-state="hi" class="hi">L</li>
    <li data-state="id" class="id">M</li>
    <li data-state="il" class="il">N</li>
    <li data-state="in" class="in">O</li>
    <li data-state="ia" class="ia">P</li>
    <li data-state="ks" class="ks">Q</li>
    <li data-state="ky" class="ky">R</li>
    <li data-state="la" class="la">S</li>
    <li data-state="me" class="me">T</li>
    <li data-state="md" class="md">U</li>
    <li data-state="ma" class="ma">V</li>
    <li data-state="mi" class="mi">W</li>
    <li data-state="mn" class="mn">X</li>
    <li data-state="ms" class="ms">Y</li>
    <li data-state="mo" class="mo">Z</li>
    <li data-state="mt" class="mt">a</li>
    <li data-state="ne" class="ne">b</li>
    <li data-state="nv" class="nv">c</li>
    <li data-state="nh" class="nh">d</li>
    <li data-state="nj" class="nj">e</li>
    <li data-state="nm" class="nm">f</li>
    <li data-state="ny" class="ny">g</li>
    <li data-state="nc" class="nc">h</li>
    <li data-state="nd" class="nd">i</li>
    <li data-state="oh" class="oh">j</li>			
    <li data-state="ok" class="ok">k</li>
    <li data-state="or" class="or">l</li>
    <li data-state="pa" class="pa">m</li>
    <li data-state="ri" class="ri">n</li>
    <li data-state="sc" class="sc">o</li>
    <li data-state="sd" class="sd">p</li>
    <li data-state="tn" class="tn">q</li>
    <li data-state="tx" class="tx">r</li>
    <li data-state="ut" class="ut">s</li>
    <li data-state="va" class="va">t</li>
    <li data-state="vt" class="vt">u</li>			
    <li data-state="wa" class="wa">v</li>
    <li data-state="wv" class="wv">w</li>
    <li data-state="wi" class="wi">x</li>
    <li data-state="wy" class="wy">y</li>
</ul>
```
    
Set the size and base map color in your CSS:

```css
.stately {
    width: 300px;     /* width and font size must match */
    font-size: 300px; /*width and font size must match */
    color: #f0f0f0;
}
```
    
Style Individual State:

```css
.stately .va,
.stately .md,
.stately .dc { 
   color: #FF0000;
}
```
    
If you are not using Sass for your project, you can use and edit the compiled CSS files. The included files have been compiled using the `expanded` output style for readability.
    
##Live Example

[Stately Microsite](http://intridea.github.com/stately/)

##Resources

[Free Online Font Converter](http://www.freefontconverter.com) - For converting SVG to TTF  
[Font Squirrel](http://www.fontsquirrel.com/fontface/generator) - For converting TTF to web fonts (make sure you check 'no subsetting')  
[Intridea Blog: How to Make Your Own Symbol Font](http://www.intridea.com/blog/2012/4/24/symbol-font) - A good starting place
##Credits

Created by Ben Markowitz at Intridea. 

Ben Markowitz  
[twitter](http://www.twitter.com/bpmarkowitz)  
[website](http://www.benmarkowitz.com)  

Intridea  
[website](http://www.intridea.com)  

##License

MIT License. See LICENSE for details.

##Copyright

Copyright (c) 2013 Intridea, Inc.
