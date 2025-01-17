import { Fee } from '@sushiswap/exchange'
import { FC, useEffect } from 'react'

import { useConstantProductPool } from '../../hooks'
import { PoolFinderType, TridentPoolFinderProps } from './types'

export const ConstantProductPool: FC<TridentPoolFinderProps> = ({
  chainId,
  dispatch,
  token0,
  token1,
  index,
  fee = Fee.DEFAULT,
  twap = false,
}) => {
  const state = useConstantProductPool(chainId, token0, token1, fee, twap)

  useEffect(() => {
    if (!dispatch || index === undefined) return

    dispatch({
      type: 'update',
      payload: {
        state,
        index,
        poolType: PoolFinderType.ConstantProduct,
      },
    })
  }, [dispatch, index, state])

  return <></>
}
