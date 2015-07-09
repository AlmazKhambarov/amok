## NAME

amok.browser -- spawn a local browser process

## SYNOPSIS

```js
browser(command, [args], [output])
```

## PARAMETERS

`command` *String*
:   The command to run

`args` *Array*
:   List of string arguments

`output` *stream.Readable*
:   The output stream to use

## DESCRIPTION

Creates a middleware function that spawns a browser process specified with the given
`command` with command line arguments in `args`. If omitted, `args` defaults to an
empty *Array*.

Standard output and standard error streams will be piped to the specified `output` stream.
If omitted `output` defaults to `undefined`.

## RETURN VALUE

`function(client, runner, done)`

## EXAMPLES

Open and connect to chrome

```js
var amok = require('amok');

var runner = amok.createRunner();
runner.use(amok.browser('chrome'));
runner.connect(9222, 'localhost', function(error) {
  if (error) {
    return console.error(error);
  }

  console.log('Spawned and connected to chrome');
});
```

Open and connect to chrome using an absolute executable path

```js
var amok = require('amok');

var runner = amok.createRunner();
runner.use(amok.browser('/usr/bin/opt/chrome/google-chrome'));
runner.connect(9222, 'localhost', function(error) {
  if (error) {
    return console.error(error);
  }

  console.log('Spawned and connected to chrome');
});
```

## SEE ALSO

[amok.Runner.prototype.use](amok.Runner.prototype.use.3.md)