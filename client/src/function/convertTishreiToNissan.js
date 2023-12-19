function convertTishreiToNissan(tishreiMonth) {
    return (tishreiMonth + 6) % 12;
}
export default convertTishreiToNissan;