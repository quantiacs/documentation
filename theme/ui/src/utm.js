function filterValidUtms(utms) {
    const validKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    return Object.keys(utms).reduce((acc, key) => {
        if (validKeys.includes(key)) {
            acc[key] = utms[key];
        }
        return acc;
    }, {});
}

export function utm(link) {
    try {
        const urlObj = new URL(link, window.location.href);
        const params = {};
        urlObj.searchParams.forEach((value, key) => {
            if (key.startsWith('utm_')) {
                params[key] = value;
            }
        });
        return params;
    } catch (err) {
        console.error('Invalid URL', err);
        return {};
    }
}

export function strict(link) {
    const utms = utm(link);
    return filterValidUtms(utms);
}

export function build(link, utms, isStrict = false) {
    try {
        const urlObj = new URL(link, window.location.href);
        urlObj.search = '';
        const params = isStrict ? filterValidUtms(utms) : utms;
        Object.keys(params).forEach((key) => {
            urlObj.searchParams.append(key, params[key]);
        });
        return urlObj.toString();
    } catch (err) {
        console.error('Invalid URL', err);
        return link;
    }
}
