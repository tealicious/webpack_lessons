import one from './assets/1.png';
import two from './assets/2.jpg';
import three from './assets/3.jpg';
import four from './assets/4.jpg';
import five from './assets/5.jpg';
import six from './assets/6.jpeg';
import seven from './assets/7.jpeg';
import eight from './assets/8.jpeg';

//image factory
const createImage = function (src) {
    const img = document.createElement("img");
    img.src = src;
    return img;
};

const images = [];

// push images to the array
images.push(createImage("https://source.unsplash.com/random/1600x900"));
images.push(createImage(one));
images.push(createImage(two));
images.push(createImage(three));
images.push(createImage(four));
images.push(createImage(five));
images.push(createImage(six));
images.push(createImage(seven));
images.push(createImage(eight));
// output

// for (let i = 0; i < 10; i++) {
//     images.push(createImage("https://source.unsplash.com/random/1600x900"));
// }
// for (let i = 0; i < images.length; i++) {
//     document.body.appendChild(images[i]);
// }
for (let image of images) { // new for loop for iterables
    document.body.appendChild(image);
}

console.log(images);