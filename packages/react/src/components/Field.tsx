import React from 'react'
import { useField, useForm } from '../hooks'
import { useAutoRecycle } from '../hooks/useAutoRecycle'
import { MutableField } from './MutableField'
import { FieldContext } from '../shared'
import { JSXComponent, IFieldProps } from '../types'

export const Field = <D extends JSXComponent, C extends JSXComponent>(
  props: IFieldProps<D, C>
) => {
  const form = useForm()
  const parent = useField()
  const field = useAutoRecycle(
    form.createField({ basePath: parent?.path, ...props })
  )
  return (
    <FieldContext.Provider value={field}>
      <MutableField field={field}>{props.children}</MutableField>
    </FieldContext.Provider>
  )
}

Field.displayName = 'Field'
