import { toString } from 'mdast-util-to-string'

export function remarkExcerpt() {
  return (tree, { data }) => {
    let excerpt = ''

    for (let node of tree.children) {
      if (node.type !== 'paragraph') continue

      excerpt = toString(node)

      break
    }

    data.astro.frontmatter.excerpt = excerpt
  }
}
