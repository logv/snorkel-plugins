# Snorkel View Plugin Demo

This repo contains an example view plugin for snorkel. It lets one create their
own view (visualization + controls) for any snorkel query type. To use this
plugin , clone it into app/plugins/ of your snorkel data directory.

## Using Plugins

To enable view plugins, they have to be mapped to the datasets that will use
them.  Check out the
[snorkel-dataset-config](https://github.com/logv/snorkel-dataset-config)
repository to see how to enable views for all datasets or on a per dataset
basis.

## Included Views

### Area view

Area view is a stream graph view from nvd3. This is a simple example of how to
override the options in an already used view in snorkel.


## Important gotchas:

This plugin needs to be cloned as "snorkel-plugins-demo" into app/plugins,
since there are references (loading stylesheets and loading the view on demand)
that require this convention.
