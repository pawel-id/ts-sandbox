import t from 'tap'
import hello from '../src/hello.js'

t.test('hello', t => {
  t.plan(1)
  t.equal(hello(), 'Hello world')
})
