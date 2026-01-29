export function generateOrderCode() {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphanumeric = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    function randomString(chars, length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    }

    const prefix = randomString(letters, 3);
    const number = Math.floor(Math.random() * 10);
    const suffix = randomString(alphanumeric, 5);

    return `${prefix}-${number}${suffix}`;
}