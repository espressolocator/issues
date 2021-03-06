// Remove modules that are not needed.
Telescope.modules.remove("postHeading", 'post_domain');
Telescope.modules.remove("postMeta", 'post_author');
Telescope.modules.remove("postMeta", 'post_info');
Telescope.modules.remove("postThumbnail", 'post_thumbnail');
Telescope.modules.remove("postComponents", 'post_rank');
Telescope.modules.remove("postComponents", 'post_actions');

// Add modules.
Telescope.modules.add("postMeta", [
  {
    template: 'post_distance',
    order: 10
  },
]);

Telescope.modules.add("postHeading", [
  {
    template: 'post_address',
    order: 40
  },
]);


Telescope.modules.add("postMeta", [
  {
    template: 'post_time',
    order: 11
  },
]);

Telescope.modules.add("mobileNav", {
  template: 'version',
  order: 100
});
