
;(function($){	
	var a = new Date();
	var aa;
	var newDate = function(y,m){
		if (y == undefined) y = 0;
		if (m == undefined) m = 0;
		a.setFullYear(a.getFullYear()+y);
		a.setMonth(a.getMonth()+m);
		var year = a.getFullYear(),
			month = a.getMonth()+1,
			day = a.getDate();
			aa = year+","+month+","+day;	
			a = new Date(aa);
	}	
	var newSettedDate = function(y,m){
		if (y == undefined) y = 0;
		if (m == undefined) m = 0;
		a.setFullYear(y);
		a.setMonth(m);	
		var year = a.getFullYear(),
			month = a.getMonth()+1,
			day = a.getDate();
		aa = year+","+month+","+day;	
		a = new Date(aa);
	}
	newDate();
	
	var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	var defaults = {
		firstDay: "Sunday",
		pickDate: false,
	};
	
	$.fn.owalCalendar = function(options){
		if(this.length == 0) return this;
		if(this.length > 1){
			this.each(function(){$(this).calendar(options)});
			return this;
		}
		var calendar = {};
		var el = this,
	    w = $(window);	 

	    // Initialization  
	    var init = function(){
	    	
	    	// Merge defaults and options
	    	calendar.settings = $.extend({}, defaults, options);

	    	
	    	initThisYear();
	    	initThisMonth();
	    	initDays();
	    	initDates();

	    }

	    // Setup the plugin
	    var setup = function(){
	    	el.html("<div class='calendar-head'><div class='year-picker'><a href='#' class='prev'></a><span></span><i class='year-change'></i><ul class='years dropdown'><input maxlength='4' name='year' class='year-input'><li>2016</li><li>2016</li><li>2016</li><li>2016</li><li>2016</li></ul><a href='#' class='next'></a></div><div class='month-picker'><a href='#' class='prev'></a><span>August</span><i class='month-change'></i><ul class='months dropdown'><li>January</li><li>February</li><li>March</li><li>April</li><li>May</li><li>June</li><li>July</li><li>August</li><li class='active'>September</li><li>October</li><li>November</li><li>December</li></ul><a href='#' class='next'></a></div><div class='days'><div class='day'></div><div class='day'></div><div class='day'></div><div class='day'></div><div class='day'></div><div class='day'></div><div class='day'></div></div></div><div class='calendar-body'><div class='dates'><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div><div class='date'>x</div></div></div><div class='calendar-footer'><p>Go to the today</p></div>");
	    }
	    setup();
	    // Setting year in the headbar
	    var initThisYear = function(){
	    	var y = a.getFullYear();
	    	el.find(".year-picker span").text(y);
	    }

	    // Setting month in the headbar
	    var initThisMonth = function() {
	    	var m = months[a.getMonth()];
	    	el.find(".month-picker span").text(m);
	    }

	    // Setting days names in the headbar
	    var initDays = function(){
	    	for(var i=0;i<=6;i++){
	    		var d = days[i];
	    		el.find(".day").eq(i).text(d);
	    	}	    	
	    }
	    
	    // Setting dates in the body
	    var initDates = function(){
	    	el.find(".date").removeClass("today");
	    	el.find(".date").removeClass("not-this-month");

	    	// Find when were 1st day of this month
	    	var f = new Date(aa);
		    f.setDate(1);
		    var i = f.getDay();
		    // Getting back a bit to set up all calendar cells
		    f.setDate(f.getDate()-i);

	    	// Setting Cells
	    	for (var j = 0;j<42;++j){
    		el.find(".date").eq(j).text(f.getDate());	
    		var b = new Date();
    		//Setting today
    		var z = " "+b.getDate()+b.getMonth()+b.getFullYear();
    		var x = " "+f.getDate()+f.getMonth()+f.getFullYear();
	    	if(z == x){
	    		el.find(".date").eq(j).addClass("today");		    		
		    		
	    	}
	    	// Not This Month Days
	    	if (f.getMonth() != a.getMonth()){
	    		el.find(".date").eq(j).addClass("not-this-month");
	    		
	    	}
	    	f.setDate(f.getDate()+1);
	    	}
	    
    	}	 

	    var goToday = function(){
	    	a, f = new Date();
	    	init();
	    }

	    var makeYearList = function(){
	    	var li = $(".years.dropdown li"),
	    	afy = a.getFullYear()+1;
	    	for(var i=0;i<li.length;i++){
	    		li.eq(i).text(afy);
	    		afy = afy + 1;
	    	}
	    	li.on("click",function(){
	    		var y = $(this).text(), m = a.getMonth();
	    		newSettedDate(y,m);
	    		init();
	    		$(this).parent().hide();	    		
	    	});
	    }

	    init();

	// Trigger functions
	    $(document).on("click",function(){
	    	$(".dropdown").hide();
	    })
	    // Go next years
	    $(".year-picker .next").on("click",function(e){
	    	e.preventDefault();
	    	newDate(+1,0);
	    	init();
	    });

	    // Go previous year
	    $(".year-picker .prev").on("click",function(e){	    	
	    	e.preventDefault();
	    	newDate(-1,0);
	    	init();
	    });

	    // Go next month
	    $(".month-picker .next").on("click",function(e){	    
	    	e.preventDefault();
	    	newDate(0,+1);
	    	init();
	    });

	    // Go previous Month
	    $(".month-picker .prev").on("click",function(e){	    	
	    	e.preventDefault();
	    	newDate(0,-1);
	    	init();
	    });

	    $(".calendar-footer p").on("click",function(e){
	    	e.preventDefault();
	    	var y = new Date().getFullYear(),
	    		m = new Date().getMonth();
	    	newSettedDate(y,m);
	    	init();
	    });

	    $(".month-change").on("click",function(e){
	    	e.stopPropagation();
	    	$(".months li").removeClass("active");
	    	$(".months li").eq(a.getMonth()).addClass("active");
	    	$(this).parents(".month-picker").find(".dropdown").toggle();
	    });

	     $(".year-change").on("click",function(e){
	    	e.stopPropagation();
	    	makeYearList();
	    	$(this).parents(".year-picker").find(".dropdown").toggle();
	    });
	    $(".dropdown").on("click",function(e){
	    	 e.stopPropagation();
	    });

	    $(".months li").on("click",function(){
	    	$(this).siblings().removeClass("active");
	    	$(this).addClass("active");
	    	$(this).parent().hide();
	    	var i = $(this).index();
	    	var y =  a.getFullYear();
	    	newSettedDate(y,i);
	    	init();
	    });

	    $( ".year-input" ).keyup(function() {
	    	var l = this.value.length;
	    	var val = parseInt(this.value);

			if(isNaN(val)){
				$(this).css({"background":"#fcc"})
			} else {
				$(this).css({"background":"#fff"})
			}
			if(l == 0){
				$(this).css({"background":"#fff"});
				el.find("year-picker span").text(a.getFullYear());
			} else if(l > 2 && !isNaN(val)) {

				newSettedDate(val,a.getMonth());
				init();
				makeYearList();
			}	
		});
	}

})(jQuery);