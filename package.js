Package.describe({
  summary: 'Telescope EspressoLocator customisation package',
  version: '0.0.1',
  name: 'espressolocator'
});

Package.onUse(function (api) {

  // ---------------------------------- 1. Core dependency -----------------------------------

  api.use("telescope:core");

  // ---------------------------------- 2. Files to include ----------------------------------

  // i18n config (must come first)

  api.addFiles([
    'package-tap.i18n'
  ], ['client', 'server']);

  // client & server

  api.addFiles([
    'lib/custom_fields.js',
    'lib/callbacks.js',
    'lib/modules.js',
  ], ['client', 'server']);

  // client

  api.addFiles([
    'lib/client/templates/custom_post_title.html',
    'lib/client/stylesheets/custom.scss',
    'lib/client/custom_templates.js'
  ], ['client']);

  // server

  api.addFiles([
    'lib/server/templates/custom_emailPostItem.handlebars'
  ], ['server']);

  // i18n languages (must come last)

  api.addFiles([
    'i18n/en.i18n.json'
  ], ['client', 'server']);

});
