import axios from 'axios'
import { Manufacturer } from '../global_types'

class ManufacturersApiAdapter {
    private url: string;
    constructor() {
        this.url = 
            'https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json';
    }

    public get(): Promise<Manufacturer[]> {
        return axios.get(this.url).then(response => {
            let mfrs: Manufacturer[] = response.data.Results.map((r: any) => {
                return {
                    id: r.Mfr_ID,
                    name: r.Mfr_Name,
                    country: r.Country
                }
            });
    
            return mfrs;
        });
    }
}

export default new ManufacturersApiAdapter();