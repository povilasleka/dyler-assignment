import axios from 'axios';
import { Manufacturer } from '../global_types';
import localIdProvider from '../scripts/guest_id_provider';

const url = '/v1/favorite/';

export default {
	get: function(): Promise<Manufacturer[]> {
		return axios.get(url + localIdProvider.getId()).then(response => 
			response.data.data.map((r: any) => {
				return {
					id: r.manufacturer_id,
					name: r.name,
					country: r.country,
				};
			}));
	},
	post: function(mfr: Manufacturer): void {
		axios.post(url, {
			guest_id: localIdProvider.getId(),
			manufacturer_id: mfr.id,
			name: mfr.name,
			country: mfr.country
		});
	},
	delete: function(mfr: Manufacturer): void {
		axios.get(url + localIdProvider.getId()).then(response => {
			const id = response.data.data.find((f:any) => f.manufacturer_id === mfr.id).id;
			axios.delete(url + id);
		});
	},
	update: function(mfr: Manufacturer): void {
		axios.get(url + localIdProvider.getId()).then(response => {
			const id = response.data.data.find((f:any) => f.manufacturer_id === mfr.id).id;
			axios.put(url + id, {
				name: mfr.name
			});
		});
	}
};
