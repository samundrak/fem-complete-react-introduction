const div = React.DOM.div;
const h1 = React.DOM.h1;

const MyTitle = React.createClass({
    render: function() {
        return (
            div(null,
                h1(null, 'Testing component')
            )
        );
    },
});

ReactDOM.render(React.createElement(MyTitle), document.getElementById('app'));