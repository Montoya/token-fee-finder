/**
 * As an example, get transaction insights by looking at the transaction data
 * and attempting to decode it.
 *
 * @param transaction - The transaction to get insights for.
 * @returns The transaction insights.
 */
export async function getInsights(transaction: Record<string, unknown>) {

  const hexChainId = await wallet.request({ method: 'eth_chainId' });
  const chainId = parseInt(''+hexChainId, 16);

  let returnObject: Record<string, any> = {
    "Response": `Chain ID is: ${chainId}`,
  };

  try {
    // Check if the transaction has data.
    if (
      !isObject(transaction) ||
      !hasProperty(transaction, 'data') ||
      typeof transaction.data !== 'string'
    ) {
      throw "Transaction data received is not an object."; 
    }

    return returnObject;
  } catch (error) {
    console.error(error);
    return returnObject; 
  }
}