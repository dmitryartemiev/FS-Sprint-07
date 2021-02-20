/*
 * Sprint 07
 * Task 04(example - test.js)
 * Task name: Files
 */

const File = require('./File.js.js');
const FileList = require('./FileList.js.js');

let file = new File('example_file.txt');
file.write('Some text.');
const content = file.read();
console.log(content);

const fileList = new FileList();
console.log(fileList.getList());
console.log(fileList.hasFiles());
console.log(fileList.getHTMLList());

file.delete();
console.log(fileList.getList());
