/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

Input = ["Ryan", "Kieran", "Jason", "Yous"]
Output = ["Ryan", "Yous"]

Input = ["Peter", "Stephen", "Joe"]
Output = []
Input strings will only contain letters.
Note: keep the original order of the names in the output.
*/

export function friend(friends: string[]): string[] {
  return friends.filter((friend) => friend.length === 4);
}

friend(['Ryan', 'Kieran', 'Mark']); // ['Ryan', 'Mark']);
friend(['Ryan', 'Jimmy', '123', '4', 'Cool Man']); // ['Ryan']
friend(['Jimm', 'Cari', 'aret', 'truehdnviegkwgvke', 'sixtyiscooooool']); // ['Jimm', 'Cari', 'aret'];
friend(['Love', 'Your', 'Face', '1']); // ['Love', 'Your', 'Face'];
