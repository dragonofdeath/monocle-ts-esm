/**
 * @since 1.5.0
 */
import { Index, Optional } from '..'
import { NonEmptyArray, updateAt } from 'fp-ts-esm/NonEmptyArray'
import { lookup } from 'fp-ts-esm/Array'
import { isNone } from 'fp-ts-esm/Option'

/**
 * @category constructor
 * @since 1.5.0
 */
export function indexNonEmptyArray<A = never>(): Index<NonEmptyArray<A>, number, A> {
  return new Index(
    (i) =>
      new Optional(
        (s) => lookup(i, s),
        (a) => (nea) => {
          const onea = updateAt(i, a)(nea)
          if (isNone(onea)) {
            return nea
          } else {
            return onea.value
          }
        }
      )
  )
}
