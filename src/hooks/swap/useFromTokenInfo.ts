import { MaxUint256, isAddress } from 'ethers'
import useSWR from 'swr'
const useFromTokenInfo = ({ userAddress, tokenAddress, chainId }: { userAddress?: string; tokenAddress?: string; chainId?: number }) => {
  const { data: spender } = useSWR(`/${chainId}/swap/spender`, async (url: string) => {
    const { fetcher } = await import('@/services/api')
    const res = await fetcher({
      url,
      throwError: false,
    })
    return res?.data || null
  })

  const { data, isLoading } = useSWR(
    () => {
      if (isAddress(userAddress) && isAddress(tokenAddress) && chainId && spender) {
        return [`token-swap-info`, userAddress, tokenAddress, chainId, spender]
      }
      return null
    },
    async (queryKey) => {
      const userAddress = queryKey[1]
      const tokenAddress = queryKey[2]
      const chainId = queryKey[3]
      const spender = queryKey[4]
      const erc20ABI = await (await import('@/services/web3/erc20ABI')).default
      const Web3Service = (await import('@/services/web3')).default
      const { NativeTokens } = await import('@/common/constants/web3')
      if (NativeTokens.includes(tokenAddress)) {
        const res = await Web3Service.getBalance({
          chainId,
          tokenAddress,
          userAddress,
        })
        return {
          balance: res,
          allowance: MaxUint256.toString(),
          hasPermit: false,
        }
      } else {
        try {
          const res = await Web3Service.multicall({
            chainId,
            contracts: [
              {
                abi: [
                  {
                    inputs: [],
                    name: 'DOMAIN_SEPARATOR',
                    outputs: [
                      {
                        internalType: 'bytes32',
                        name: '',
                        type: 'bytes32',
                      },
                    ],
                    stateMutability: 'view',
                    type: 'function',
                  },
                ] as const,
                address: tokenAddress as any,
                functionName: 'DOMAIN_SEPARATOR',
              },
              {
                abi: erc20ABI,
                address: tokenAddress as any,
                functionName: 'balanceOf',
                args: [userAddress as any],
              },
              {
                abi: erc20ABI,
                address: tokenAddress as any,
                functionName: 'allowance',
                args: [userAddress as any, spender as any],
              },
            ],
          })

          return {
            hasPermit: !!res[0],
            balance: res?.[1]?.[0]?.toString() || '0',
            allowance: res?.[2]?.[0]?.toString() || '0',
          }
        } catch (error) {
          console.log(error)
          return {
            balance: '0',
            allowance: '0',
            hasPermit: false,
          }
        }
      }
    },
    {
      revalidateOnFocus: false,
    }
  )

  return {
    info: data || {
      balance: '0',
      allowance: '0',
      hasPermit: false,
    },
    loadingBalance: isLoading,
  }
}

export default useFromTokenInfo
