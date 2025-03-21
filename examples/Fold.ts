import { Fold, fromFoldable } from '../src'
import { array } from 'fp-ts-esm/Array'
import { monoidProduct, monoidSum } from 'fp-ts-esm/Monoid'
import { identity } from 'fp-ts-esm/function'

const xs = ['a', 'bb']
const fold = fromFoldable(array)<string>()
const len = (s: string) => s.length

console.log(fold.foldMap(monoidSum)(len)(xs))
console.log(fold.foldMap(monoidProduct)(len)(xs))

import * as either from 'fp-ts-esm/Either'

const fold2 = fromFoldable(either)<boolean, string>()
