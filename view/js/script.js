$(document).ready(function()
{	
    /*Gallery*//*
        $(function(){
        $("#elastic_grid_demo").elastic_grid({
            'showAllText' : 'All',
            'filterEffect': 'popup', // moveup, scaleup, fallperspective, fly, flip, helix , popup
            'hoverDirection': true,
            'hoverDelay': 0,
            'hoverInverse': false,
            'expandingSpeed': 500,
            'expandingHeight': 500,
            'items' :
            [
                {
                    'title'         : 'Azuki bean',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/1.jpg', 'images/small/2.jpg', 'images/small/3.jpg', 'images/small/10.jpg', 'images/small/11.jpg'],
                    'large'         : ['images/large/1.jpg', 'images/large/2.jpg', 'images/large/3.jpg', 'images/large/10.jpg', 'images/large/11.jpg'],
                    'img_title'     : ['jquery elastic grid 1 ', 'jquery elastic grid 2', 'jquery elastic grid 3', 'jquery elastic grid 4', 'jquery elastic grid 5'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : false}
                    ],
                    'tags'          : ['Self Portrait']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/4.jpg', 'images/small/5.jpg', 'images/small/6.jpg', 'images/small/7.jpg'],
                    'large'         : ['images/large/4.jpg', 'images/large/5.jpg', 'images/large/6.jpg', 'images/large/7.jpg'],
                    'img_title'     : ['jquery elastic grid 6 ', 'jquery elastic grid 7 ', 'jquery elastic grid 8', 'jquery elastic grid 9', 'jquery elastic grid 9'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Landscape']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/15.jpg','images/small/8.jpg', 'images/small/9.jpg', 'images/small/10.jpg'],
                    'large'         : ['images/large/15.jpg','images/large/8.jpg', 'images/large/9.jpg', 'images/large/10.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Self Portrait', 'Landscape']
                },
                {
                    'title'         : 'Aubergine napa cabbage',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/12.jpg', 'images/small/13.jpg', 'images/small/14.jpg', 'images/small/15.jpg', 'images/small/16.jpg'],
                    'large'         : ['images/large/12.jpg', 'images/large/13.jpg', 'images/large/14.jpg', 'images/large/15.jpg', 'images/large/16.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Portrait']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/17.jpg', 'images/small/18.jpg', 'images/small/19.jpg', 'images/small/20.jpg'],
                    'large'         : ['images/large/17.jpg', 'images/large/18.jpg', 'images/large/19.jpg', 'images/large/20.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Landscape']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/13.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
                    'large'         : ['images/large/13.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Vintage']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/7.jpg','images/small/8.jpg', 'images/small/9.jpg', 'images/small/10.jpg'],
                    'large'         : ['images/large/7.jpg','images/large/8.jpg', 'images/large/9.jpg', 'images/large/10.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Portrait']
                },
                {
                    'title'         : 'Azuki bean',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/16.jpg', 'images/small/13.jpg', 'images/small/14.jpg', 'images/small/15.jpg', 'images/small/16.jpg'],
                    'large'         : ['images/large/16.jpg', 'images/large/13.jpg', 'images/large/14.jpg', 'images/large/15.jpg', 'images/large/16.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Vintage']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/18.jpg', 'images/small/18.jpg', 'images/small/19.jpg', 'images/small/20.jpg'],
                    'large'         : ['images/large/18.jpg', 'images/large/18.jpg', 'images/large/19.jpg', 'images/large/20.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Landscape']
                },
                {
                    'title'         : 'Winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/11.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
                    'large'         : ['images/large/11.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Portrait']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/3.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
                    'large'         : ['images/large/3.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Vintage']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/5.jpg','images/small/8.jpg', 'images/small/9.jpg', 'images/small/10.jpg'],
                    'large'         : ['images/large/5.jpg','images/large/8.jpg', 'images/large/9.jpg', 'images/large/10.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Portrait', 'Landscape']
                },
                {
                    'title'         : 'Azuki bean',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/6.jpg', 'images/small/13.jpg', 'images/small/14.jpg', 'images/small/15.jpg', 'images/small/16.jpg'],
                    'large'         : ['images/large/6.jpg', 'images/large/13.jpg', 'images/large/14.jpg', 'images/large/15.jpg', 'images/large/16.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Vintage']
                },
                {
                    'title'         : 'Swiss chard pumpkin',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/8.jpg', 'images/small/18.jpg', 'images/small/19.jpg', 'images/small/20.jpg'],
                    'large'         : ['images/large/8.jpg', 'images/large/18.jpg', 'images/large/19.jpg', 'images/large/20.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Landscape']
                },
                {
                    'title'         : 'Spinach winter purslane',
                    'description'   : 'Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage.',
                    'thumbnail'     : ['images/small/9.jpg','images/small/15.jpg', 'images/small/11.jpg', 'images/small/10.jpg'],
                    'large'         : ['images/large/9.jpg','images/large/15.jpg', 'images/large/11.jpg', 'images/large/10.jpg'],
                    'img_title'     : ['jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid', 'jquery elastic grid'],
                    'button_list'   :
                    [
                        { 'title':'Demo', 'url' : 'http://porfolio.bonchen.net/', 'new_window' : true },
                        { 'title':'Download', 'url':'http://porfolio.bonchen.net/', 'new_window' : true}
                    ],
                    'tags'          : ['Vintage', 'Landscape']
                }

            ]
        });
    });

*/

$('.gridtab-demo').gridtab({
  grid: 6,
  layout: 'grid'
});

    /*Responsibe sticky menu*/
    $(window).bind('beforeunload', function(){
    scrollTo(0,0);
    });
    $('.jumbotron').css({ height: ($(window).height()-50) +'px'  })
	responsiveResize();
    console.log("ready");
    $('.subMenu').smint({
    	'scrollSpeed' : 1000
    });
        if (detectIE()) {
    $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault(); 
            console.log("Using explorer!");

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta, 1000);
        });
}
});
var toggle=0;
function responsiveResize () {
    $(window).on('resize', function() 
	{  
		$('.jumbotron').css({ height: ($(window).height()-50) +'px' });
	}); 
}

function toggleNavigation() {
    if (toggle) {
        toggle=0;
    } else {
        toggle=1;
        $('html, body').animate({
        scrollTop: $("#elem").offset().top
        }, 1000);
        console.log("toggle");
    }
   
}

var IEversion = detectIE();

if (IEversion !== false) {

} else {
 
}

// add details to debug result


/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
  var ua = window.navigator.userAgent;

  // Test values; Uncomment to check result …

  // IE 10
  // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';
  
  // IE 11
  // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';
  
  // IE 12 / Spartan
  // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';
  
  // Edge (IE 12+)
  // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}


