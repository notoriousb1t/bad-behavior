export default function BadBehavior<T>() {
  const buffer: T[] = []
  let subs: ISubscriber<T>[] = []

  return {
    next: function(n: T) {
      if (subs.length) {
        if (!buffer.length) {
          do {
            subs.forEach(s => {
              s(n)
            })
            n = buffer.shift() as T
          } while (n != null)
        } else {
          buffer.push(n)
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
