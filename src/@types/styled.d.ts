import 'styled-components'
import theme from '../styles/theme'

declare module 'styled-components' {
  type MyTheme = typeof theme

  export interface DefaultTheme extends MyTheme {}
}
