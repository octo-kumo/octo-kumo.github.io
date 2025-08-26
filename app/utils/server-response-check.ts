export default async function (promise: Promise<Response>) {
    return promise.then(async res => {
        if (res.status === 429) throw new Error(`Rate-limit exceeded`);
        if (res.headers.get('content-type')?.startsWith('application/json')) {
            const data = await res.json();
            if (!res.ok || data.error) throw new Error(`${res.status} ${res.statusText} ${data.error}`);
            return data;
        } else if (res.headers.get('content-type')?.startsWith('text/plain')) {
            return res.text()
        } else if (res.headers.get('content-type')?.startsWith('image/png')) {
            return res.blob()
        } else return res
    }).catch(e => ElMessage(e.message));
}
