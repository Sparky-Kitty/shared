import { compressToEncodedURIComponent, decompressFromEncodedURIComponent } from 'lz-string';
import { TradeSearchPayload } from '../types/index.js';

type KEY =
    | keyof TradeSearchPayload
    | keyof TradeSearchPayload['query']
    | keyof TradeSearchPayload['query']['item']
    | keyof TradeSearchPayload['query']['seasonal']
    | keyof TradeSearchPayload['query']['affix']
    | keyof TradeSearchPayload['query']['affix']['options'][0]
    | keyof TradeSearchPayload['sort'];

const TABLE: Record<KEY, string> = {
    query: 'a',
    sort: 'b',
    item: 'c',
    seasonal: 'd',
    affix: 'e',
    options: 'f',
    id: 'g',
    minValue: 'h',
    count: 'i',
    type: 'j',
    minPower: 'k',
    maxRequiredLevel: 'l',
    classRestriction: 'm',
    socketType: 'n',
    field: 'o',
    direction: 'p',
};

const REVERSE_TABLE: Record<string, KEY> = Object.keys(TABLE).reduce((acc, k) => {
    const v = TABLE[k as keyof typeof TABLE];
    acc[v] = k as KEY;
    return acc;
}, {} as Record<string, KEY>);

export function serializeTradeSearchPayload(
    payload: TradeSearchPayload,
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

export function deserializeTradeSearchPayload(
    serializedPayload: string,
): TradeSearchPayload {
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
        }) as TradeSearchPayload;
        return payload;
    } catch (error) {
        console.warn('Failed to parse search payload', error);
        return {};
    }
}
