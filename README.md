#Stately
Stately is a symbol font that makes is easy to create a map of the United States using only HTML and CSS. Each state can be styled independently with CSS for making simple visualizations. And since it's a font, it scales bigger and smaller while staying sharp as a tack.

##Files
    map.svg      - SVG map used to create the font
    screen.css   - Base CSS for the stately.html demo page
    stately\     - Folder containing the web-fonts and basic CSS
    stately.html - Basic Demo
    stately.svg  - SVG font file
    stately.ttf  - TrueType font file
    

##What is Stately?
Each state is a glyph within the font. Each state is positioned and sized relative to the the rest of the states, so that when each character is stacked on top of one another, it creates a full map.
The pertinent characters are uppercase A-Z and lowercase a-z with lowercase y generating the District of Columbia and lowercase z generating a full US map.
For modern browsers ligatures are available and a state's abbreviation is its ligature. For example, "va" generates the glyph of the state of Virginia and 'dc' the District of Columbia. Additionally, the ligature "usa" produces a character of the full US map.

##Basic Use Case
You can use stately however you like, but some base CSS and HTML is included. 
Download and add the Stately folder to your project which includes the base CSS and the web font files. Grab the stately folder and add it to your project. Then add the stately.css to the head of your document.

`<link rel="stylesheet" href="stately/stately.css">`

Then add this markup to the page:

    <ul class="stately"> 
        <li data-state="al" id="al">A</li>
        <li data-state="ak" id="ak">B</li>
        <li data-state="ar" id="ar">C</li>						
        <li data-state="az" id="az">D</li>
        <li data-state="ca" id="ca">E</li>
        <li data-state="co" id="co">F</li>
        <li data-state="ct" id="ct">G</li>
        <li data-state="de" id="de">H</li>
        <li data-state="dc" id="dc">I</li>
        <li data-state="fl" id="fl">J</li>
        <li data-state="ga" id="ga">K</li>
        <li data-state="hi" id="hi">L</li>
        <li data-state="id" id="id">M</li>
        <li data-state="il" id="il">N</li>
        <li data-state="in" id="in">O</li>
        <li data-state="ia" id="ia">P</li>
        <li data-state="ks" id="ks">Q</li>
        <li data-state="ky" id="ky">R</li>
        <li data-state="la" id="la">S</li>
        <li data-state="me" id="me">T</li>
        <li data-state="md" id="md">U</li>
        <li data-state="ma" id="ma">V</li>
        <li data-state="mi" id="mi">W</li>
        <li data-state="mn" id="mn">X</li>
        <li data-state="ms" id="ms">Y</li>
        <li data-state="mo" id="mo">Z</li>
        <li data-state="mt" id="mt">a</li>
        <li data-state="ne" id="ne">b</li>
        <li data-state="nv" id="nv">c</li>
        <li data-state="nh" id="nh">d</li>
        <li data-state="nj" id="nj">e</li>
        <li data-state="nm" id="nm">f</li>
        <li data-state="ny" id="ny">g</li>
        <li data-state="nc" id="nc">h</li>
        <li data-state="nd" id="nd">i</li>
        <li data-state="oh" id="oh">j</li>			
        <li data-state="ok" id="ok">k</li>
        <li data-state="or" id="or">l</li>
        <li data-state="pa" id="pa">m</li>
        <li data-state="ri" id="ri">n</li>
        <li data-state="sc" id="sc">o</li>
        <li data-state="sd" id="sd">p</li>
        <li data-state="tn" id="tn">q</li>
        <li data-state="tx" id="tx">r</li>
        <li data-state="ut" id="ut">s</li>
        <li data-state="va" id="va">t</li>
        <li data-state="vt" id="vt">u</li>			
        <li data-state="wa" id="wa">v</li>
        <li data-state="wv" id="wv">w</li>
        <li data-state="wi" id="wi">x</li>
        <li data-state="wy" id="wy">y</li>
    </ul>
    
Set the size and base map color in your CSS:

    ul.stately {
      width:300px;     //width and font size must match 
  	  font-size:300px; //width and font size must match 
  	  color:#f0f0f0;
    }
    
Style Individual State:

    .stately li#va,
    .stately li#md,
    .stately li#dc { 
       color: #FF0000;
    }
    
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
