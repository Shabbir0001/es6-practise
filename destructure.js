// const person = {name: "Nishad", age: 23, job: "Facebooker", gfName: "Abir", address: "Hatkhola", phone: "01010011", friends: ["Utso", "Munta", "Delip", "Jahid"]};

// // here I have wrote the [phn number directly without quotation mark and only binary(01010011)number. in the terminal there shows the number 262249]
// const gfName = person.gfName;
// // const {phone, job, friends} = person;
// console.log(person.address);
// console.log(gfName);
// // console.log(phone);
// // console.log(job, friends);

// const friends = ['Sakib Khan', 'Salman Khan', 'Amir Khan', 'Sobai Biri Khan'];
// const [firstFriend, nextFried, ...restFriends] = friends;
// console.log(restFriends);

const complexObject = {
    name: 'abc',
    info: {
        address: 'Hatkhola',
        phone: '00000000'
    }
}

const {phone} = complexObject.info;
console.log(phone);