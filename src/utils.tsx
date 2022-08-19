import { FieldType } from "@grafana/data";

export function getFieldType(type: string) {
    if (type === 'timestamp') {
        return FieldType.time;
    } else if (type === 'integer') {
        return FieldType.number;
    }
    return FieldType.string;
}
