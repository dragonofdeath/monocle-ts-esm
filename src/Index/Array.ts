/**
 * @since 1.2.0
 */
import { Index, Optional } from '..'
import { lookup, updateAt } from 'fp-ts-esm/Array'
import { isNone } from 'fp-ts-esm/Option'

/**
 * @category constructor
 * @since 1.2.0
 */
export function indexArray<A = never>(): Index<Array<A>, number, A> {
  return new Index(
    (i) =>
      new Optional(
        (as) => lookup(i, as),
        (a) => (as) => {
          const oas = updateAt(i, a)(as)
          if (isNone(oas)) {
            return as
          } else {
            return oas.value
          }
        }
      )
  )
}
