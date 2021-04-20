import { Lock } from '@snapshot-labs/lock/src';
import injected from '@snapshot-labs/lock/connectors/injected';

import defaultLogo from '@/assets/connector/default.svg';
import metamaskLogo from '@/assets/connector/metamask.svg';


import config from '@/config';

const lock = new Lock();

const connectors = { injected};

for (const connectorId in connectors) {
    const connector = {
        key: connectorId,
        connector: connectors[connectorId],
        options: config.connectors[connectorId],
    };
    lock.addConnector(connector);
}

export function hasInjectedProvider(): boolean {
    return !!window.ethereum;
}

export function getConnectorName(connectorId: string): string {
    if (connectorId === 'injected') {
        const provider = window.ethereum;
        if (provider.isMetaMask) {
            return 'MetaMask';
        }
        return 'Browser Wallet';
    }
    return 'Unknown';
}

export function getConnectorLogo(connectorId: string): string {
    if (connectorId === 'injected') {
        const provider = window.ethereum;
        if (provider.isMetaMask) {
            return metamaskLogo;
        }
        return defaultLogo;
    }
    return defaultLogo;
}

export default lock;
