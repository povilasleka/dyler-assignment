import axios from 'axios'
import { Manufacturer } from '../global_types'
import localIdProvider from '../scripts/guest_id_provider'

class FavoriteApiAdapter {
    private url: string;
    constructor() {
        this.url = `/v1/favorite/`
    }

    public get(): Promise<Manufacturer[]> {
        return axios.get(this.url + localIdProvider.getId()).then(response => 
            response.data.data.map((r: any) => {
                return {
                    id: r.manufacturer_id,
                    name: r.name,
                    country: r.country
                }
            }
        ));
    }

    public post(mfr: Manufacturer): void {
        axios.post(this.url, {
            guest_id: localIdProvider.getId(),
            manufacturer_id: mfr.id,
            name: mfr.name,
            country: mfr.country
        });
    }

    public delete(mfr: Manufacturer): void {
        axios.get(this.url + localIdProvider.getId()).then(response => {
            let id = response.data.data.find((f:any) => f.manufacturer_id === mfr.id).id;
            axios.delete(this.url + id);
        });
    }

    public update(mfr: Manufacturer): void {
        axios.get(this.url + localIdProvider.getId()).then(response => {
            let id = response.data.data.find((f:any) => f.manufacturer_id === mfr.id).id;
            axios.put(this.url + id, {
                name: mfr.name
            });
        })
    }
}

export default new FavoriteApiAdapter();