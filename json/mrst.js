fetch('https://microsoftedge.github.io/Demos/json-dummy-data/5MB.json')
    .then(response => response.json())
    .then(data => {
        searchSindis(data)
    })
    .catch(error => console.error('Error fetching JSON:', error));

function searchSindis(Sindhis) {
    const arr = Sindhis;
    // Filter Sindhi items
    const sindh = arr.filter(item => item.language === 'Sindhi');
    // Sort in ascending order by version
    const sortedSindh = sindh.sort((a, b) => a.version - b.version);
    console.log(sortedSindh);
}