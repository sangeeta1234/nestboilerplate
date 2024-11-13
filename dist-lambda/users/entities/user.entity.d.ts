export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    verification_for: 'company' | 'individual';
    company_name: string;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
}
