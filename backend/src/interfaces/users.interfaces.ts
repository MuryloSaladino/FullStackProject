export type TUserResponse = {
    password: undefined | string;
    id: number;
    name: string | undefined;
    email: string | undefined;
    admin: boolean | undefined;
    phone: string | undefined;
    createdAt: string | undefined | null;
    updatedAt: string | undefined | null;
}

export type TUserCreation = {
    name: string;
    email: string;
    admin: boolean;
    phone: string;
    password: string;
}

export type TUserUpdate = Partial<TUserCreation>