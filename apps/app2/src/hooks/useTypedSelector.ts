import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { TRootState } from 'state';

export const useTypedSelector: TypedUseSelectorHook<TRootState> = useSelector;
