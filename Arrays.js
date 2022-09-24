 const arry = [1, 2, 3, 4, 5];
 // console.log(arry);
 // console.log(arry.length);
 const num = new Array(12, 1, 5, 4, 7, 9, 9);
 // num.push(5);
 // num.unshift(120);
 // num[8] = 40;
 // console.log(num);
 // const names = ['aman', 'aksh', 'dhavan', 'mmett ', 'jeet '];
 // console.log(names.indexOf('aman'));
 // console.log(names.includes('amcan'));
 // console.log(names.lastIndexOf('aksh'));
 // console.log(arry.concat(num));
 // let name3 = [...arry, ...names];
 // console.log(name3);
 for (const name of num) {
     console.log(name);

 }
 let student = ['s', 'h', 'i', 'v', 'a'];
 student = student.join('_');
 console.log(student);
 let cities = [
     { name: 'mumbai', population: 3784955 },
     { name: 'dehli', population: 2084955 },
     { name: 'kutch', population: 30084955 },
     { name: 'navsari', population: 784955 }
 ];
 // console.log(cities.filter(city => city.population > 3000000));
 console.log(cities.map(city => city.population * 2));