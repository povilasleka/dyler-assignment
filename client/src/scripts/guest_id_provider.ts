import { v4 as uuid_v4 } from 'uuid';

export default {
    ensureId: function(): void {
        if (localStorage.getItem('guest_id') === null) {
            localStorage.setItem('guest_id', uuid_v4());
        }
    },
    getId: function(): string {
        return localStorage.getItem('guest_id') || 'none';
    }
}