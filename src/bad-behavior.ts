export default function BadBehavior<T>() {
  const buffer: T[] = []
  let counter = 0
  let subs: ISubscriber<T>[] = []

  return {
    next: function(n: T) {
      if (subs.length) {
        if (counter++) {
          buffer.push(n)
        } else {
          do {
            subs.forEach(s => {
              s(n)
            })
            n = buffer.shift() as T
          } while (--counter)
        }
      }
    },
    subscribe: function(fn: ISubscriber<T>) {
      subs = subs.concat(fn)
      return {
        unsubscribe() {
          subs = subs.filter(s => s !== fn)
        }
      }
    }
  }
}

export interface ISubscriber<T> {
  (value: T): void
}
