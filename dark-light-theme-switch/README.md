Switch between "dark" and "light" themes, consistently.

Simply storing a value in JS to "remember" the last applied theme 
does not work across other pages, 
since the JS variables would then get reset. 
Modifying CSS with JS fails too, 
since the modifications in any HTML file would be lost after page change.

So, the value was saved in the `sessionStorage` property. 
This way, the value would be retained even after page change, 
and the theme will stay consistent (will not reset to default) on the next pages.
