export default async function fetchData(url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP Error Status: ${response.status}`);
        }

        return await response.json();

    } catch (e) {
        throw new Error('fetch Error: ' + e);
    }
}