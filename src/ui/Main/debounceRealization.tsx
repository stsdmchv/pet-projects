const fetchUrl = function (url) {
  console.log(`fetcing ${url}...`, this.data);
};

const response = {
  data: 'any',
};

function debounce(callback, delay) {
  let timer = null;

  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

const fetching = debounce(fetchUrl.bind(response), 300);

fetching(1);
fetching(2);
fetching(3);
fetching(4);
fetching(5);
