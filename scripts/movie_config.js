// Init TD JS SDK
var td = new Treasure({
  database: 'database',
  writeKey: 'xxxxxxxxxxxxxxxxx',
  host: 'in.treasuredata.com',
  useServerSideCookie: false,
  startInSignedMode: false
});

// td.set('$global', 'td_global_id', 'td_global_id');

// Track everything by TD JS SDK Extension
(function () {
  // Cut the mustard
  if ('addEventListener' in window &&
    'td' in window &&
    'tdext' in window
  ) {
    // Init TD Extension
    tdext.init({
      table: 'weblog',
      eventName: 'TDExtRecurringEvent',
      eventFrequency: 250,
      targetWindow: 'self',
      tdNs: 'td',
      options: {
        media: {
          enable: true,
          heartbeat: 1
        }
      }
    });
  }
}());
