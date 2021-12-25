import React from 'react';
// import { useEffect } from 'react';
import AddTasks from './components/AddTasks';

  function App() {
    document.getElementById('postData').addEventListener('submit', postData)
        function postData(e){
        e.preventDefault()
        let name = document.getElementById('postName').value
        let genre = document.getElementById('postGenre').value
        let game = document.getElementById('postGame').value
        fetch('http://localhost:5000/postData', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                'name' : name,
                'genre' : genre,
                'game' : game
            })
        })
        .then((response) => response.json())
        .then((data) => console.log(data))
    }
    return (
      <div>
      <form className="form" id="postData">
        <label for="name">Enter Name </label>
        <input type="text" name="name" id="postName"></input>
        <label for="genre">Enter Music Genre </label>
        <input type="text" name="genre" id="postGenre"></input>
        <label for="game">Enter Game </label>
        <input type="text" name="game" id="postGame"></input>
        <button class="btn btn-dark" type="submit">Submit</button>
        </form>
        <AddTasks/></div>)
        
}
  export default App;
