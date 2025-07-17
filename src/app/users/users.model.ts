export interface User {
    id?: number;
    name: string;
    lastname?: string;
    password?: string;
    email: string;
    dateBirth: Date;
    profileImage?: string;
}