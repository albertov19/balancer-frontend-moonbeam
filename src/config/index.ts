
import moonbase from './moonbase.json';

interface Connector {
    id: string;
    name: string;
    options: any;
}

export interface AssetMetadata {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string | undefined;
}

interface Config {
    network: string;
    chainId: number;
    precision: number;
    providerURL: string;
    subgraphUrl: string;
    subgraphBackupUrl: string;
    addresses: {
        bFactory: string;
        bActions: string;
        dsProxyRegistry: string;
        exchangeProxy: string;
        weth: string;
        multicall: string;
    };
    assets: Record<string, AssetMetadata>;
    untrusted: string[];
    connectors: Record<string, Connector>;
}

const configs = {
    1287:{
        untrusted: [],
        ...moonbase,
    }
};
// eslint-disable-next-line no-undef
const network = process.env.APP_CHAIN_ID || 1287;

const config: Config = configs[network];

export default config;
