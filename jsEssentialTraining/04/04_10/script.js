/*   var course = new Object();

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}

console.log(course);
*/
//below is making an object constructor
function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function() {
        return ++this.views;
    };
}

var course01 = new Course("JavaScript Essential Training", "Morten Rand-Hendriksen", 1, true, 0)
var course02 = new Course("Up and Running with ECMAScript 6", "Eve Porcello", 1, true, 123456)
console.log(course01.updateViews());
console.log(course02);
console.log(course01.published);
console.log(course01["published"]);