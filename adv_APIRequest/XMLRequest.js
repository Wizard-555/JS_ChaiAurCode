// taking the URL
const requestUrl = 'https://api.github.com/users/hiteshchoudhary' 
// taking Object as xhr
const xhr = new XMLHttpRequest();
// giving GET request
xhr.open('GET', requestUrl)
xhr.onreadystatechange = function(){      
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText)   // converting string into object
        // console.log(typeof data);
        console.log(data.followers);
    }
}
xhr.send();