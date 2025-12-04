import { bootstrap, isInitialized, KoliBriDevHelper } from '@public-ui/components'
import { defineCustomElements } from '@public-ui/components/dist/loader'
import { setTagNameTransformer } from '@public-ui/react-v19'
import { DEFAULT } from '@public-ui/theme-default';
import project from '../package.json' with { type: 'json' }

let tagNameSuffix = project.dependencies['@public-ui/components'].replaceAll('.', '_')
let initialized = false

export function getTagNameSuffix() {
  return tagNameSuffix
}

function setTagNameSuffix(suffix: string) {
  if (!initialized) {
    tagNameSuffix = suffix
  }
}

export const patchTheme: typeof KoliBriDevHelper.patchTheme = KoliBriDevHelper.patchTheme

function transformTagName(customSuffix?: string) {
  setTagNameSuffix(`${tagNameSuffix}${customSuffix ? `-${customSuffix}` : ''}`)
  return (tagName: string) => `${tagName}-${tagNameSuffix}`
}

/**
 * Diese Funktion muss aufgerufen werden bevor irgendeine Komponente der Frontend-Lib genutzt wird.
 * Außerdem sollte sie vor React aufgerufen werden.
 */
export async function initialize(config?: { customSuffix?: string }) {
  if (isInitialized()) {
    return
  }

  initialized = true
  setTagNameTransformer(transformTagName(config?.customSuffix))
  await bootstrap(DEFAULT, [], { transformTagName: transformTagName(config?.customSuffix) })

  // https://github.com/ionic-team/stencil/issues/2847
  defineCustomElements(window, { transformTagName: transformTagName(config?.customSuffix) } as never)
}
