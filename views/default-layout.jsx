var React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Grocery Store</title>
                    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
                    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                </head>
                <body>
                    {this.props.children}

                    <script src="/bundle.js"></script>
                </body>
            </html>
        );
    }
}

module.exports = DefaultLayout;