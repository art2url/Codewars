/*
Description:
Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.

Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.

Example
"128.32.10.1" => 2149583361
*/

export function ipToInt32(ip: string): number {
  const octets = ip.split('.').map((octet) => parseInt(octet, 10));

  let int32 = 0;

  for (let i = 0; i < octets.length; i++) {
    const positionWeight = Math.pow(256, 3 - i);
    int32 += octets[i] * positionWeight;
  }

  return int32;
}

ipToInt32('128.32.10.1'); //2149583361
ipToInt32('128.114.17.104'); //2154959208
ipToInt32('0.0.0.0'); // 0
ipToInt32('255.255.255.255'); //2 ** 32 - 1,
