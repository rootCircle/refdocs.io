# HTML TO REGEX (SOME TWEAKS)

| Function | Search Regex | Replace Regex | Comments |
| --- | --- | --- | --- |
| Change class to className and use module css | class="([\w-]+)" | className={galleryStyle.$1} | galleryStyle is the name of the module css object |
| Adds extra backslash to img tag | <img ([^>]+)> | <img $1 /> |  |
| br tag | <br> | <br/> |  |
| input tag  | <input ([^>]+)> | <input $1 /> |  |
| Changing class names like `ab-cd` to `abcd` | galleryStyle[.]([\w]+)[-]([\w]+) | galleryStyle.$1$2 |  |
| Change naming semantic | onclick | onClick |  |
| Changing function calls in onClick to JSX | onClick="([\w()'']+)" | onClick={$1} |  |
| Convert inline CSS to normal ones (single property only) | style="([\w]+)(?:[ ]*):(?:[ ]*)([\w#]+)(?:;)?" | style={{$1"$2"}} |  |
|  |  |  |  |




## Notes
Dealing with class="hi bro" | class="([\w-]+ )+[\w-]+"
