export function sortData(data, selectedOption, orderAsc) {
    const sortOrder = {negative: -1, positive: 1}

        const sortedArray = data.sort((a, b) => {
            let valueA = a[selectedOption]
            let valueB = b[selectedOption]
            if(!valueA || !valueB) {valueA=1}
            if(orderAsc) return (valueA > valueB) ? sortOrder.positive : (valueA < valueB) ? sortOrder.negative : 0;
            if(!orderAsc) return (valueA > valueB) ? sortOrder.negative : (valueA < valueB) ? sortOrder.positive : 0;
        })
        return sortedArray || data
}


// const filterBySearchTerm = arr => {
//     const query = searchTerm.toLowerCase()
//     const result = arr.filter(({country, location}) => {
//         return location && location.toLowerCase().indexOf(query) > -1 || country && country.toLowerCase().indexOf(query) > -1
//     });
//     return result || state
// }
