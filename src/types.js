'use strict'

/* @flow */

export type Exec$Options = {
  stream?: 'stdout' | 'stderr' | 'both',
  timeout?: number,
  env?: Object,
  stdin?: ?string,
  local?: {
    directory: string,
    prepend?: boolean
  },
  throwOnStdErr?: boolean,
  allowEmptyStderr?: boolean,
  ignoreExitCode?: boolean
}

export type Exec$Result = string | {stdout: string, stderr: string}
