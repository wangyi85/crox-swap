import React from 'react'
import { Text } from 'crox-uikit2.0'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useTokenBalance from 'hooks/useTokenBalance'
import useI18n from 'hooks/useI18n'
import { getCakeAddress } from 'utils/addressHelpers'
import { getBalanceNumber } from 'utils/formatBalance'
import CardValue from './CardValue'

const CakeWalletBalance = ({ cakeBalance, isInvestor }) => {
  const TranslateString = useI18n()
  const { account } = useWallet()

  if (!account) {
    return (
      <Text color="textDisabled" style={{ textAlign: 'center' }}>
        {TranslateString(298, 'Locked')}
      </Text>
    )
  }

  return isInvestor ? <CardValue value={cakeBalance} fontSize="14px" /> : <CardValue value={cakeBalance} fontSize="24px" />
}

export default CakeWalletBalance
