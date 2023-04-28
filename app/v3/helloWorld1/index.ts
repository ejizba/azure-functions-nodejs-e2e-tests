// Copyright (c) .NET Foundation. All rights reserved.
// Licensed under the MIT License.

import { AzureFunction, Context, HttpRequest } from '@azure/functions';

// eslint-disable-next-line @typescript-eslint/require-await
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log(`Http function processed request for url "${req.url}"`);

    const name = req.query.name || req.body || 'world';

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: `Hello, ${name}!`,
    };
};

export default httpTrigger;
