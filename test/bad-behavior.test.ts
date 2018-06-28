import BadBehavior from '../src/bad-behavior'

/**
 * Dummy test
 */
describe('BadBehavior', () => {
  it('accepts next() value with no subscribers', () => {
    const obs = BadBehavior()
    obs.next(2)
    expect(true).toBeTruthy()
  })

  it('emits when subscribed', () => {
    const obs = BadBehavior()

    let out: any
    obs.subscribe(s => (out = s))
    obs.next(2)
    expect(out).toEqual(2)
  })

  it('emits each value', () => {
    const obs = BadBehavior()

    let out: any
    obs.subscribe(s => (out = s))
    obs.next(2)
    expect(out).toEqual(2)

    obs.next(3)
    expect(out).toEqual(3)
  })

  it('emits for each subscriber', () => {
    const obs = BadBehavior<number>()

    let out = 0
    obs.subscribe(s => (out += s))
    obs.subscribe(s => (out += s))
    obs.next(2)
    expect(out).toEqual(4)

    obs.next(3)
    expect(out).toEqual(10)
  })

  it('unsubscribes properly', () => {
    const obs = BadBehavior<number>()

    let out = 0
    const sub = obs.subscribe(s => (out += s))
    obs.subscribe(s => {
      out += s
    })
    sub.unsubscribe()

    obs.next(3)
    expect(out).toEqual(3)
  })
})
