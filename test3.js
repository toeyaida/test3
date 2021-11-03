data = {
    BINCOMESSF: '10.0548',
    BM70SSF: '9.9774',
    BEQSSF: '11.247',
    BFUTURESSF: '11.443'
}
process.argv.forEach((val, index) => {
    if (val != '') {
        val = val.replace('-', '');
        if (val == 'FUNDCODE')
            console.log(data);
        else {
            if (typeof data[val] !== 'undefined')
                console.log(data[val]);
        }
    }
})