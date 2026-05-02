function userForm(req, resp) {
  resp.write(`
        <form action="/submit" method="POST">
    <input type="text" placeholder="Enter username" name="name" />
    <input type="text" placeholder="Enter email" name="email" />
    <button>Submit</button>
  </form>  
    `);
}

module.exports = userForm;
