const slime = {
    name: "슬라임"
  };
  
  const cuteSlime = {
    name: "슬라임",
    attribute: "cute"
  };
  
  const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple',
    name: "slime"
  };

  console.log(purpleCuteSlime);

  // 배열 spread
  // 해당 spread 안에 값을 들고옴.
  const nums = [1, 2, 3, 4, 5];
  const nums2 = [...nums, 6, 7, 8, 9, 10];
  const nums3 = [...nums2.filter(n => n % 2 === 0), 11, 12, 13, 14, 15];
  
  const users = [
    {
        id: 1,
        name: "홍길김"
    },
    {
        id: 2,
        name: "홍길서"
    },
    {
        id: 3,
        name: "홍길변"
    },
    {
        id: 4,
        name: "홍길강"
    }
];

const evenUsers = [...users.filter(user => user.id % 2 === 0),{id: 5, name: "홍길손"}];
console.log(evenUsers);