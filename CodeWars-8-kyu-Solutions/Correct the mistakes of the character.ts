export function correct(s: string): string {
    return s.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I");
}
correct("51NGAP0RE");