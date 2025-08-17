import { JaegerClient } from '../client';
import { GetOperationsResponse, toSpanKind } from '../domain';
import { Tool } from './types';

import { z } from 'zod';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';

export class GetOperations implements Tool {
    name(): string {
        return 'get-operations';
    }

    description(): string {
        return 'Gets the operations as JSON array of object with "name" and "spanKind" properties';
    }

    paramsSchema() {
        return {
            service: z
                .string()
                .describe('Service name captured in Jaeger. Discover available services first to get valid service names. This will be used to filter operations by the specified service.'),
            spanKind: z
                .enum([
                    '',
                    'server',
                    'client',
                    'producer',
                    'consumer',
                    'internal',
                ])
                .describe(
                    'OpenTelemetry span kind ("server", "client", "producer", "consumer", "internal"). This will be used to filter operations by the specified span kind.'
                )
                .optional(),
        };
    }

    async handle(
        server: Server,
        jaegerClient: JaegerClient,
        { service, spanKind }: any
    ): Promise<string> {
        const response: GetOperationsResponse =
            await jaegerClient.getOperations({
                service,
                spanKind: toSpanKind(spanKind),
            });
        return JSON.stringify(response.operations);
    }
}
