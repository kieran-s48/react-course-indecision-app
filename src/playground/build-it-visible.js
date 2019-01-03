class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render() {
        return (
            <div>
            <h1>Visability Toggle</h1>
            <button onClick={this.handleToggleVisibility}>
            {this.state.visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {this.state.visibility && (
                <div>
                <p>This text should now be visible</p>
                </div>
            )}
            </div>
                );
            }

        }

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// let visability = false;

// const toggleVisibility = () => {
//     visability = !visability;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//         <h1>Visability Toggle</h1>
//         <button onClick={toggleVisibility}>
//         {visability ? 'Hide Details' : 'Show Details'}
//         </button>
//         {visability && (
//             <div>
//             <p>This text should now be visible</p>
//             </div>
//         )}
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();