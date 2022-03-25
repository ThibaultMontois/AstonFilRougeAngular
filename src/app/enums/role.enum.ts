export enum Role {
    Guest = 0,
    Member = 1 << 0,
    Coach = 1 << 1,
    Manager = 1 << 2,
    SuperAdmin = 1 << 3,
    All = ~(~0 << 4) // == ~(1 << 4) ? Utile ??
}
