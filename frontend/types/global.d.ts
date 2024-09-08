import { type RemixService } from '@virgile/backend'

declare module '@remix-run/node' {
  interface AppLoadContext {
    remixService: RemixService
    toto: string
  }
}
// declare module '*.css?url' {
//   const value: string
//   export default value
// }

// declare module '*.svg?url' {
//   const value: string
//   export default value
// }
