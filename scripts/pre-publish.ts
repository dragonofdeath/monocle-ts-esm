import { left } from 'fp-ts-esm/TaskEither'
import { run } from './run'

const main = left(new Error('"npm publish" can not be run from root, run "npm run release" instead'))

run(main)
