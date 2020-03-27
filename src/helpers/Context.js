export default context => {
  return {
    //onLogin
    onLogin: user => {
        context.setState({ login: user });
      },

    onAddText: text => {
      context.setState({ addText: text });
    },
    onUpdateText: text => {
      context.setState({ updateText: text });
    }
  };
};
