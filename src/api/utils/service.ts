import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { ServiceSearchPayload } from '../types/index.js';

type KEY =
    | keyof ServiceSearchPayload
    | keyof ServiceSearchPayload['query']
    | keyof ServiceSearchPayload['query']['title']
    | keyof ServiceSearchPayload['query']['tagsAndRegion']
    // | keyof ServiceSearchPayload['query']['affix']
    // | keyof ServiceSearchPayload['query']['affix']['options'][0]
    | keyof ServiceSearchPayload['sort'];

const TABLE: Record<KEY, string> = {
    query: 'a',
    sort: 'b',
    title: 'c',
    author: '3',
    keywords: 'e',
    tags: 'f',
    region: 'g',
    field: 'h',
    direction: 'i',
};

const REVERSE_TABLE: Record<string, KEY> = Object.keys(TABLE).reduce((acc, k) => {
    const v = TABLE[k as keyof typeof TABLE];
    acc[v] = k as KEY;
    return acc;
}, {} as Record<string, KEY>);

export function serializeServiceSearchPayload(
    payload: ServiceSearchPayload
): string {
    const minified = JSON.stringify(payload, (_, value: unknown) => {
        if (value && typeof value === 'object' && !Array.isArray(value)) {
            const replacement: Record<string, unknown> = {};
            for (const key of Object.keys(value)) {
                const mapped = TABLE[key as keyof typeof TABLE];
                if (!mapped) {
                    console.warn(`Unknown key ${key} in payload`);
                    continue;
                }
                replacement[mapped] = value[key];
            }
            return replacement;
        }
        return value;
    });
    return compressToEncodedURIComponent(minified);
}

export function deserializeServiceSearchPayload(
    serializedPayload: string
): ServiceSearchPayload {
    if (!serializedPayload?.length) {
        return {};
    }
    try {
        const minified = decompressFromEncodedURIComponent(serializedPayload);
        const payload = JSON.parse(minified, (_, value: unknown) => {
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                const replacement: Record<string, unknown> = {};
                for (const key of Object.keys(value)) {
                    const mapped = REVERSE_TABLE[key];
                    if (!mapped) {
                        console.warn(`Unknown key ${key} in minifed payload`);
                        continue;
                    }
                    replacement[mapped] = value[key];
                }
                return replacement;
            }
            return value;
        }) as ServiceSearchPayload;
        return payload;
    } catch (error) {
        console.warn('Failed to parse search payload', error);
        return {};
    }
}