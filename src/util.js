export const sortData = function(data){
    const sortedData = [...data];

    return sortedData.sort((a, b) => (b.cases - a.cases));
}

export const formatNumbers = (number) => (number >= 0)? `${number}`.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : "Loading.." ;