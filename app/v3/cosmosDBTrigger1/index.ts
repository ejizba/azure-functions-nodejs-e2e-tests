// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import { AzureFunction, Context } from '@azure/functions';

const cosmosDBTrigger: AzureFunction = async function (_context: Context, documents: any[]): Promise<any[]> {
    console.log(`cosmosDBTrigger1 processed ${documents.length} documents`);
    for (const document of documents) {
        console.log(`cosmosDBTrigger1 was triggered by "${document.message}"`);
    }
    return documents;
};

export default cosmosDBTrigger;
