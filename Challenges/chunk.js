function chunk(array, size) {
  let container = [];
  let num = 0;
  for (let i = 0; i < array.length; i++) {
    let chunk = [];
    while (num < size && i < array.length) {
      chunk.push(i);
      num++;
    }
    num = 0;
    container.push(chunk);
  }
  return container;
}

function chunk(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1]; 
    if (!last || last.length === size) {
      chunked.push([element]); //
    } else {
      last.push(element);
    }
  }
  return chunked;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) //[[1, 2, 3], [4, 5, 6], [7, 8]]

function chunked(array, size) {
  const chunked = [];
  let i = 0;
  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }
  return chunked
}