const course = {
    coursename: "javascript in hindi",
    price: 999, // as a number
    courseInstructor: "Hitesh"
}
console.log(course);

console.log(course.courseInstructor); //Hitesh
// or
const { courseInstructor} = course
console.log(courseInstructor); //Hitesh
// or de-structued
const { courseInstructor:instructor} = course
console.log(instructor); //Hitesh

// const navbar = ({company}) => {

// }

// navbar(company = "PW-Skills")

// JSON

// {
//     "name": "Deepak",
//     "age": "22",
//     "course": "B-tech"
// }

// link: https://randomuser.me/      
// {"results":[{"gender":"male","name":{"title":"Mr","first":"Matthew","last":"Bouchard"},"location":{"street":{"number":1912,"name":"Regent Ave"},"city":"Victoria","state":"Newfoundland and Labrador","country":"Canada","postcode":"S7C 7Q9","coordinates":{"latitude":"-71.9167","longitude":"-50.5490"},"timezone":{"offset":"-7:00","description":"Mountain Time (US & Canada)"}},"email":"matthew.bouchard@example.com","login":{"uuid":"a133ce5a-b23a-41e9-a8bc-e2a36368f345","username":"sadrabbit920","password":"leigh","salt":"RjlOf5Jl","md5":"fbb81b06d72cc5c783e03462cde2b026","sha1":"cb06182bcf9bc7f7cbd7e52a2311140752313e8f","sha256":"938312a7386e4779d71b69a4cc1900f70d84b283fbaa599d7b593176d705446b"},"dob":{"date":"1954-06-13T18:16:08.827Z","age":70},"registered":{"date":"2014-12-31T00:27:16.008Z","age":9},"phone":"K13 O92-2360","cell":"D17 U32-1826","id":{"name":"SIN","value":"736810185"},"picture":{"large":"https://randomuser.me/api/portraits/men/24.jpg","medium":"https://randomuser.me/api/portraits/med/men/24.jpg","thumbnail":"https://randomuser.me/api/portraits/thumb/men/24.jpg"},"nat":"CA"}],"info":{"seed":"a1b3e716e3a8b7f9","results":1,"page":1,"version":"1.4"}}
//   links: https://jsonformatter.org/