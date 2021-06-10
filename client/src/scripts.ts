import axios from 'axios';
import { Manufacturer } from './global_types';
import { v4 as uuid_v4 } from 'uuid';

export async function getMfrsAsync(): Promise<Manufacturer[]> {
    const response = await axios.get('https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json');
    let mfrs: Manufacturer[] = response.data.Results.map((r: any) => {
      return {
          id: r.Mfr_ID,
          name: r.Mfr_Name,
          country: r.Country
      }
    });

    return mfrs;
}

export async function getFavMfrsAsync(uuid: string): Promise<Manufacturer[]> {
    const response = await axios.get(`/v1/favorite/${uuid}`);
    let mfrs: Manufacturer[] = response.data.data;
    console.log(uuid);

    return mfrs;
}

export function ensureGuestId(): void {
    if (localStorage.getItem('guest_id') === null) {
        localStorage.setItem('guest_id', uuid_v4());
    }
}

export function getGuestId(): string {
    return localStorage.getItem('guest_id') || 'none';
}