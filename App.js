/*
<div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id="child2">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
</div>

ReactElement is an object that converts HTML (while rendering, which the browser understands.)

*/ 

const parent = React.createElement(
    "div", 
    {id:"parent"}, 
    [React.createElement(
        "div", 
        {id:"child1"}, [
            React.createElement("h1",{}, "I'm an h1 tag"), //create an array of children
            React.createElement("h2",{}, "I'm an h2 tag")
        ]),
    React.createElement(
        "div",
        {id:"child2"}, [
            React.createElement("h1", {}, "I'm an h1 tag."),
            React.createElement("h2", {}, "I'm an h2 tag")
        ])
    ]);

const heading = React.createElement(
    "h1", 
    {id: "heading", xyz: "abc"}, 
    "Hello World from React!"
);

console.log(parent); //this gives an object. A react element

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); //render is converting this object to an h1 tag. Also it replaces whatever there is in 
                     // the div with id = "root".
