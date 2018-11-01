function render(component) {
  return (oldState, newState) => {
    document.body.innerHTML = component(newState);
  };
}

export { render };
