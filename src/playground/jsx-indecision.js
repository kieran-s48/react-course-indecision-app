console.log('App.js is running!');

const app = {
    title: 'My Indecision App',
    subtitle: 'does it work?',
    options: []
};

//This works on form submission

const onFormSubmit = (e)=> { //e means on event
    e.preventDefault(); //This prevents the default full page reload on submission

    const option = e.target.elements.option.value;

    if (option) { //If there is a value then add to the array and clear the text field
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderListApp();
}

const removeAll = ()=> { //Removes all of the options from the array
    app.options=[];
    renderListApp();
}

const onMakeDecision = () => { //Will select a random number from the array and display the text on screen
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
    console.log(randomNumber);
};

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
            <ol>
                <li>Content</li>
                <li>Content</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
    </div>
);

const appRoot = document.getElementById('app');

const renderListApp = () => {

    const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>

            <ol>
                {
                    app.options.map((options) => {
                        return <li key={options}>{options}</li>
                    })
                }
                
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add option</button>
            </form>
    </div>
);

ReactDOM.render(template, appRoot);
}

renderListApp();

