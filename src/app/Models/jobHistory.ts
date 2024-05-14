export class JobHistoryRequest {
    jobTitle!: string;
    company!: string;
    from!: string;
    to!: string;
}

export class JobHistoryResponse {
    jobTitle!: string;
    company!: string;
    from!: string;
    to!: string;
    id!: string;
}