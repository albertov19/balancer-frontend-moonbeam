import { StaticJsonRpcProvider  } from '@ethersproject/providers';

import config from '@/config';

// Define Provider
const provider = new StaticJsonRpcProvider(config.providerURL, {
    chainId: config.chainId,
    name: config.network
});
const debugProvider = provider;

export default provider;

export { debugProvider };