#Owal-calendar

## What is it?
A simple jQuery calendar plugin. (The work on an options and a task-manager is in progress.)

## Implementation

###CSS and Image
Insert the CSS in the Head of your HTML document.

```html
<link rel="stylesheet" href="assets/css/Owal-calendar-style.css" />
```

###HTML
Just choose needed div and set id to it
```html
<div id="calendar">
	...
</div>
```

###JavaScript
Insert the JavaScript file right before the closing Body element of your HTML document. Add a Script element to initialize the slider. You also need jQuery to be set up


```html
<script src="assets/js/calendar.js"></script>
<script>
	$(document).ready(function(){
		$("#calendar").owalCalendar();
	})
</script>
```
## Live Demo
[View Demo](http://www.ovvshi.pp.ua/parallax/)
