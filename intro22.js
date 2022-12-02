// program to get the dimensions of an image

const img = new Image();
img.src = "https://media.istockphoto.com/id/1305038827/photo/a-beautiful-valley-with-a-river-blue-sky-with-large-clouds-and-bright-sun-aerial.jpg?b=1&s=170667a&w=0&k=20&c=__Z34Fymsq0BwaGwTK5KLjHlO5urKqFpWgYSWdosxzI="
img.onload = function () {
    console.log('Width' + this.width);
    console.log('Height' + this.height);
}