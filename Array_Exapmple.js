const character = [{
        name: 'raghav',
        hight: '172',
        mass: '77',
        eye_colour: 'brown',
        gender: 'male'
    },
    {
        name: 'rav',
        hight: '12',
        mass: '7',
        eye_colour: 'ron',
        gender: 'female'
    },
    {
        name: 'ram1',
        hight: '150',
        mass: '65',
        eye_colour: 'green',
        gender: 'male'
    },
    {
        name: 'raghav3',
        hight: '8872',
        mass: '7',
        eye_colour: 'red',
        gender: 'female'
    },
];
const name = character.map(name1 => name1.name)
console.log(name);
const parameter = character.map(name2 => {
    return { name: name2.name, hight: name2.hight }
})
console.log(parameter);