export type Argument = string | null | undefined | Record<string, unknown>

export function classnames(...args: Array<Argument>): string {
  let output = ''

  for (const arg of args) {
    // skip '', null, undefined
    if (!arg) {
      continue
    }

    if (typeof arg === 'string') {
      output += ` ${arg}`
      continue
    }

    for (const key of Object.keys(arg)) {
      if (!arg[key]) {
        continue
      }

      output += ` ${key}`
    }
  }

  return output.trim()
}

export default classnames
