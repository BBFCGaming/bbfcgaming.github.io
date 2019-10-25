  var _bftn_options = {
    /*
     * Choose from 'take-action', 'capitol', 'onemorevote', 'countdown', 'glitch', 'money', 'stop', 'slow', 'without'.
     * Default is 'take-action'.
     */
    theme: 'onemorevote', // @type {string}
    
    /*
     * Or, if you want your own custom theme, specify its properties here.
     * Unspecified options will fall back to the default values.
     */
    theme: {
      className: 'money', // @type {string} will be applied to iframe body tag
      logos: ['images/money.png', 'images/stop.png'], // @type {Array} img src values
      headline: 'Your headline here.', // @type {string} modal headline text
      body: 'Your body here.' // @type {string} modal body text
    },
    
    /*
     * Choose from 'fp' for Free Press, 'dp' for Demand Progress or
     * 'fftf' for Fight for the Future. Omit this property to randomly split
     * form submissions between all organizations in the Battle for the Net 
     * coalition.
     */
    org: 'fftf', // @type {string}
    
    /*
     * Specify a delay (in milliseconds) before showing the widget. Defaults to one 
     * second.
     */
    delay: 1000, // @type {number}
    
    /*
     * Specify a date for the countdown theme. Defaults to November 23rd, 2017
     * (when the FCC is expected to announce a vote) if omitted. ISO-8601 dates are
     * UTC time, three-argument dates (with a zero-based month) are local time.
     */
    date: new Date(2017, 10, 23), // @type {Date}

    /*
     * Specify view cookie expiration. After initial view, modal will not be
     * displayed to a user again until after this cookie expires. Defaults to one
     * day.
     */
    viewCookieExpires: 14, // @type {number}

    /*
     * Specify action cookie expiration. After initiating a call or clicking a
     * donate link, modal will not be displayed to a user again until after this
     * cookie expires. Defaults to one week.
     */
    actionCookieExpires: 30, // @type {number}
    
    /*
     * If you show the modal on your homepage, you should let users close it to
     * access your site. However, if you launch a new tab to open the modal, closing
     * the modal just leaves the user staring at a blank page. Set this to true to
     * prevent closing the modal - the user can close the tab to dismiss it. Defaults
     * to false.
     */
    uncloseable: false, // @type {boolean}

    /*
     * Prevents the widget iframe from loading Google Analytics. Defaults to false.
     */
    disableGoogleAnalytics: false, // @type {boolean}
    
    /*
     * Always show the widget. Useful for testing.
     */
    always_show_widget: true // @type {boolean}
  };
  $.getScript('https://widget.battleforthenet.com/widget.js');
