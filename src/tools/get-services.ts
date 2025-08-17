import { JaegerClient } from '../client';
import { GetServicesResponse } from '../domain';
import { Tool } from './types';

import { z } from 'zod';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';

export class GetServices implements Tool {
    name(): string {
        return 'get-services';
    }

    description(): string {
        return 'Gets the service names as JSON array of string. The logMessage parameter is optional and used for documentation/logging purposes only.';
    }

    paramsSchema() {
        return {
            logMessage: z
                .string()
                .describe(
                    'Optional log message describing why this tool is being called or context for the request. Can be left empty. This parameter is ignored during execution and is only for logging/documentation purposes.'
                )
                .optional(),
        };
    }

    async handle(
        _server: Server,
        jaegerClient: JaegerClient,
        { logMessage: _logMessage }: any
    ): Promise<string> {
        // logMessage parameter is ignored - it's only for documentation/logging purposes
        const response: GetServicesResponse = await jaegerClient.getServices(
            {}
        );
        return JSON.stringify(response.services);
    }
}
