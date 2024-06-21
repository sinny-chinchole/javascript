function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve('Data fetched successfully');
            } else {
                reject('Error fetching data');
            }
        }, 2000);
    });
}