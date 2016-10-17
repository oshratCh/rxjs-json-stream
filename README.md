RxJS JSONStream
===============

Simple integration between [RxJS](https://github.com/Reactive-Extensions/RxJS) and [JSONStream](https://github.com/dominictarr/JSONStream)

install
=======

```
npm install rxjs-json-stream --save
```

example
============

```javascript
const js = require("fs");
const stream = require("rxjs-json-stream");

const data = fs.createReadStream("data.json");

stream("*..id", data)
  .map(entry => entry + 1)
  .subscribe(entry => console.log(entry));
```

LICENSE
=======
Code and documentation released under [The MIT License (MIT)](LICENSE).
