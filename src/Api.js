import axios from 'axios';

// Function that return an object
export const fetchData = () => {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise)
  }
}

// Wrapper that allows us to create the resource in the App component
const wrapPromise = (promise) => {
  // Set initial status
  let status = 'pending';
  // Store result
  let result;
  // Wait for promise
  let suspender = promise.then(
    res => {
      status = 'success';
      result = res;
    }, 
    err => {
      status = 'error';
      result = err;
    }
  )

  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  }
};

const fetchUser = () => {
  console.log('Fetching User...');
  return axios.get('https://jsonplaceholder.typicode.com/users/1')
    .then(res => res.data)
    .catch(err => console.log(err))
}

const fetchPosts = () => {
  console.log('Fetching Posts...');
  return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.data)
    .catch(err => console.log(err))
}
