 //? set item in local Storage
 //localStorage.setItem('name', 'harry');
 //localStorage.setItem('name2', 'Rahul');

 //? get item in local Storage
 //let name1 = localStorage.getItem('name');
 //console.log(name1);

 //? clear Local Storage
 // localStorage.clear();


 //?clear particular key-valued pair

 // localStorage.removeItem('name2')


 //Array in LocalStorage

 let imArry = ['adrak', 'pyaz', 'bhindi'];
 localStorage.setItem('sabji', JSON.stringify(imArry));
 let name2 = JSON.parse(localStorage.getItem('sabji'));
 name2.push('hello');

 //*  JSON.stringify get Array And Return String
 //*  JSON.parse() get String and Return Object
 //*  means  using 2 Method u change Array Into Object



 //? localStorage save data
 //? session Storage save data but close browser then Delete the session delete