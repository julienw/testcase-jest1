it('returns the default bounding box', async () => {
  const element = document.createElement('div');
  document.body.appendChild(element);

  expect(element.getBoundingClientRect()).toEqual({
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  });
});
