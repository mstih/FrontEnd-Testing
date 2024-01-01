const reactContentRoot = document.getElementById('root');

// const myFirstElement = React.createElement("ul", null,[
//     React.createElement("li", null, "item1"),
//     React.createElement("li", null, "item2"),
//     React.createElement("li", null, "item3")
// ]);



const App = () => {
    const myItem = "Mike";
    
    return (
    <ul>
        <li>item1</li>
        <li>{myItem.toUpperCase()}</li>
    </ul>
    )

};

ReactDOM.render(<App />, reactContentRoot); //<App /> or App()