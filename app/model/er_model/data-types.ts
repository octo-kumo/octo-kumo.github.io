export type ObjectType = 'entity' | 'relationship' | 'attribute' | 'specialization';

export type attributeEntity = {
    'did': string;
    'id': string;
    'isDerived': boolean;
    'isKey': boolean;
    'pid': string | null;
}

export type objectEntity = {
    'did': string;
    'id': string;
    'name': string;
    'outlined': boolean;
    'type': ObjectType;
    'x': number;
    'y': number;
}

// export type relatesEntity = {
//     'cardinality': string;
//     'did': string;
//     'oid': string;
//     'rid': string;
//     'role': string;
//     'total': boolean;
// }

export type specializationEntity = {
    'did': string;
    'disjoint': boolean;
    'id': string;
}
