export type TContactCreation = {
    name:string
    email:string
    phone:string
}

export type TContactUpdate = Partial<TContactCreation>