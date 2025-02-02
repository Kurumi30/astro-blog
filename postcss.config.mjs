import postcssImport from 'postcss-import'
import postcssNesting from 'postcss-nesting'
import tailwindcss from 'tailwindcss'

export default {
  plugins: {
    'postcss-import': postcssImport,
    'tailwindcss/nesting': postcssNesting,
    tailwindcss: tailwindcss,
  },
}
