function getBoundingBox(width, height) {
  return {
    width,
    height,
    left: 0,
    top: 0,
    right: width,
    bottom: height,
    x: 0,
    y: 0,
  };
}

it('returns the configured bounding box', () => {
  jest.spyOn(HTMLElement.prototype, 'getBoundingClientRect')
    .mockImplementation(() => getBoundingBox(300, 300));

  const element = document.createElement('div');
  document.body.appendChild(element);

  expect(element.getBoundingClientRect()).toEqual(getBoundingBox(300, 300));
});
