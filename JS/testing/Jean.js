const temperatures = [50, 10, 30]
const locations = ['spain', 'france', 'spain']

let totaltemp = 0
let nb_temp = 0

for (const index in locations){
    if (locations[index] == 'spain') {
    totaltemp += temperatures[index];
    nb_temp++;
}
}
averagetemp = totaltemp / nb_temp
console.log(`average temp ${averagetemp}`)