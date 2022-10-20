//     lecture: 10,
//     section: 3,
//     titel: 'javascript',
//     notes: {
//         introduction: "welcome to js cource"
//     },
//     enroll() {
//         console.log('you are succefullly enrolled');
//     }
// }

// function enroll() {
//     console.log('you are succefullly enrolled');
// }
// course.price = 999;
// function createcourse(title) {
//     return {

//         titel: title,
//         enroll() {
//             console.log('you are succefullly enrolled');
//         }
//     };
// }
// const course = createcourse(`javascript`);


//construction function
<script >
    class Course {
        constructor(titel) {
            this.title = titel,
                this.enroll = function() {
                    console.log(`you are succefully enrolled `);

                };
        }
    }
const cource = new Course(`java `);
</script>