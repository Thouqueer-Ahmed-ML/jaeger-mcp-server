import { JaegerClient } from '../client';
import { GetTraceResponse } from '../domain';
import { Tool } from './types';

import { z } from 'zod';
import { Server } from '@modelcontextprotocol/sdk/server/index.js';

export class GetTrace implements Tool {
    name(): string {
        return 'get-trace';
    }

    description(): string {
        return 'Gets the complete trace for a specific trace ID. Returns trace in OpenTelemetry resource spans format.';
    }

    paramsSchema() {
        return {
            traceId: z
                .string()
                .describe(
                    'Valid trace ID in 32-character hexadecimal format. Trace IDs can be obtained from logs, monitoring systems, or Jaeger trace searches. This will be used to retrieve all spans for the specified trace.'
                )
                .regex(
                    new RegExp(/^[0-9a-fA-F]{32}$/),
                    'Trace id must be in 32-character hexadecimal string format'
                ),
            startTime: z
                .string()
                .datetime()
                .describe(
                    'Start time in RFC 3339 format (e.g., "2017-07-21T17:32:28Z"). This will be used to filter spans that started on or after this time.'
                )
                .optional(),
            endTime: z
                .string()
                .datetime()
                .describe(
                    'End time in RFC 3339 format (e.g., "2017-07-21T17:32:28Z"). This will be used to filter spans that started before this time.'
                )
                .optional(),
        };
    }

    async handle(
        server: Server,
        jaegerClient: JaegerClient,
        { traceId, startTime, endTime }: any
    ): Promise<string> {
        const response: GetTraceResponse = await jaegerClient.getTrace({
            traceId,
            startTime: startTime ? Date.parse(startTime) : undefined,
            endTime: endTime ? Date.parse(endTime) : undefined,
        });
        return JSON.stringify(response.resourceSpans || {});
    }
}
