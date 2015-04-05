function update() {
  React.render(
    ScatterPlot({ points: generateRandomData() }),
    document.body
  );
}

update();
setInterval(update, 1000);
