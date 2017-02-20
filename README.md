# Redux Atom
> This is a small library for building [Redux](redux.js.org) `Atoms`.


[![Build Status](https://img.shields.io/travis/bulicmatko/redux-atom.svg?style=flat-square)](https://travis-ci.org/bulicmatko/redux-atom)
[![NPM Status](https://img.shields.io/npm/v/redux-atom.svg?style=flat-square)](https://www.npmjs.com/package/redux-atom)
[![NPM Status](https://img.shields.io/npm/dm/redux-atom.svg?style=flat-square)](http://npm-stat.com/charts.html?package=redux-atom&from=2017-01-01)
[![NPM Status](https://img.shields.io/npm/dt/redux-atom.svg?style=flat-square)](https://www.npmjs.org/package/redux-atom)
[![NPM Status](https://img.shields.io/npm/l/redux-atom.svg?style=flat-square)](https://github.com/bulicmatko/redux-atom/blob/master/LICENSE)


## What is Redux Atom?

##

## How to create Atom Factory?

```js
// counterAtom.js
import { createReduxAtomFactory } from 'redux-atom'

export default createReduxAtomFactory({
  actionTypes: [
    'INCREMENT',
  ],
  actionCreators: (actionTypes, selectors) => ({
    increment: incrementBy => ({
      type: actionTypes.INCREMENT,
      payload: { incrementBy },
    }),
    delayedDoubleIncrement: delay => (
      (dispatch, getState) => (
        setTimeout(
          () => dispatch({
            type: actionTypes.INCREMENT,
            payload: {
              incrementBy: selectors.getCounterState(getState()) * 2,
            },
          }),
          delay,
        )
      )
    ),
  }),
  initState: {
    counter: 0,
  },
  reducer: actionTypes => ({
    [actionTypes.INCREMENT]:
      (state, { incrementBy }) => ({ counter: state.counter + incrementBy }),
  }),
  selectors: rootSelector => ({
    getCounterState: state => rootSelector(state).counter,
  }),
})
```

## How to use Atom?

```js
import createCounter from './counterAtom'

export default createCounter({
  namespace: 'COUNTER-1',   
  rootSelector: state => state.counter1,   
})
```


## License

Copyright (c) 2017 [Matko Bulic](mailto:bulicmatko@gmail.com)  
Licensed under the [MIT License](https://github.com/bulicmatko/redux-atom/blob/master/LICENSE)
