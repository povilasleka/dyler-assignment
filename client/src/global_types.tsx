export type Manufacturer = {
    id: number,
    name: string,
    country: string
}

export type Favorite = {
    id: number,
    rename: string,
    manufacturer: Manufacturer
}