'use strict'

// 19. Write a javascript function to ecape a HTML String

function escape_HTML(html_str) {
    'use strict';

    return html_str.replace(/[&<>"]/g, function (tag) {
		var chars_to_replace = {
            '&': '&',
            '<': '<',
            '>': '>',
            '"': '"'
        };

		return chars_to_replace[tag] || tag;
	});
}

console.log(escape_HTML('&lt;a href=&quot;javascript-string-exercise-17.php&quot; target=&quot;_blank&quot;&gt;'));