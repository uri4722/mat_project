function tishreiToNissan(tishreiMonth) {
    return (tishreiMonth + 6) % 12;
}


module.exports = { tishreiToNissan };