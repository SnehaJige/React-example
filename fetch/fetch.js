async function fetchUsers(id){
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const data = await res.json();
    return data;
}
console.log(fetchUsers(1));

async function fetchPosts(id){
    try {
        const result = await fetchUsers(id);
       console.log("result", result);
    } catch (error) {
        console.error('Error fetching posts:', error.message);
    }
}

fetchPosts(2)