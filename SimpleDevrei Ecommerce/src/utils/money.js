export function FormatCurrency(priceCents){
    const isNegative = priceCents < 0;
    const amount = (Math.abs(Math.round(priceCents)) / 100).toFixed(2);

    return `${isNegative ? '-' : ''}$${amount}`;
}