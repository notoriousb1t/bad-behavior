# Bad Behavior

Super-tiny observable.  That's literally all it is.

[![npm version](https://badge.fury.io/js/bad-behavior.svg)](https://badge.fury.io/js/bad-behavior) 
[![gzip size](http://img.badgesize.io/https://unpkg.com/bad-behavior@0.0.0/dist/cdn/bad-behavior.min.js?compression=gzip&label=gzip%20size&style=flat&cache=false)](https://unpkg.com/notoriousb1t/dist/bad-behavior.min.js) 
 
## Why should I use this?

Sometimes RxJs feels like overkill. It is a wonderful library, but sometimes you need a little bit of reactivity, not a whole system of reactivity.  This library is an approximation of the ```BehaviorSubject```, one of the most useful Observables out there.  In truth, bad-behavior is nothing more than a fancy multi-cast event emitter.

## How do I use it?

```js
// if using NPM, import it, otherwise it should already be on window
import BadBehavior from 'bad-behavior'

// create a bad behavior
let obs = BadBehavior()

// subscribe to listen for new values
let sub1 = obs.subscribe(s => { console.log(s)  })
let sub2 = obs.subscribe(s => { console.error(s) })

// call next to publish a new value
obs.next(10)

// unsubscribe to stop listening
sub.unsubscribe()
```

## Why did you build this?

I kept reusing this piece of code to build animation libraries, especially when building micro-libraries.  I figured, why not share this little piece of code with everyone?  Plus I got sick of copying and pasting it...

## Installation

```bash
npm i -S bad-behavior
```

OR 

```html
<script src="https://unpkg.com/bad-behavior/dist/cdn/bad-behavior.min.js"></script>
```


## License

```bad-behavior``` is licensed under the [MIT license](http://opensource.org/licenses/MIT).
