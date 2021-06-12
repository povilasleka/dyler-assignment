import { v4 as uuid_v4 } from 'uuid';

export function ensureGuestId(): void {
    if (localStorage.getItem('guest_id') === null) {
        localStorage.setItem('guest_id', uuid_v4());
    }
}

export function getGuestId(): string {
    return localStorage.getItem('guest_id') || 'none';
}