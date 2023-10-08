import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { type TypeRootState } from '@/shared/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
