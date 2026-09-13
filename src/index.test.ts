import assert from 'node:assert/strict'
import {describe, it} from 'node:test'

import classnames from './index'

describe('classnames', () => {
  it('keeps object keys with truthy values', () => {
    assert.equal(
      classnames({
        a: true,
        b: false,
        c: 0,
        d: null,
        e: undefined,
        f: 1,
      }),
      'a f'
    )
  })

  it('joins arrays of class names and ignore falsy values', () => {
    assert.equal(classnames('a', null, undefined, 'b'), 'a b')
  })

  it('supports heterogenous arguments', () => {
    assert.equal(classnames({a: true}, 'b'), 'a b')
  })

  it('should be trimmed', () => {
    assert.equal(classnames('', 'b', {}, ''), 'b')
  })

  it('returns an empty string for an empty configuration', () => {
    assert.equal(classnames({}), '')
  })
})
