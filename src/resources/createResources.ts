// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import { ResourceManagementClient } from '@azure/arm-resources';
import { getResourceInfo } from './ResourceInfo';
import { createCosmosDB } from './cosmosDB';
import { createEventHub } from './eventHub';
import { createServiceBus } from './serviceBus';
import { createStorageAccount } from './storage';

async function createResources(): Promise<void> {
    try {
        const info = getResourceInfo();

        const resourceClient = new ResourceManagementClient(info.creds, info.subscriptionId);
        await resourceClient.resourceGroups.createOrUpdate(info.resourceGroupName, { location: info.location });

        await Promise.all([
            createStorageAccount(info),
            createEventHub(info),
            createCosmosDB(info),
            createServiceBus(info),
        ]);
    } catch (err) {
        console.error(err);
        console.error('Create resources failed');
        process.exit(1);
    }
}

void createResources();
