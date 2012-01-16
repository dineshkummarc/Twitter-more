(function(){
    var d   = document,
        fs  = d.getElementsByTagName('script')[0],
        js  = d.createElement('script'),
        css = d.createElement('link'),
        url = 'https://example.com/'

    js.type = 'text/javascript';
    js.src  = url + 'twitter-more.js';

    css.type = 'text/css';
    css.rel  = 'stylesheet';
    css.href = url + 'twitter-more.css';

    fs.parentNode.insertBefore(js, fs);
    fs.parentNode.insertBefore(css, fs);

}())
